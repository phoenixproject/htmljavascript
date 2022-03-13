<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ServiceDb
 *
 * @author pchan
 */
class ServiceDb {
    
    private $db;
    private $entity;
    private $limiteinicial;

    public function __construct(\PDO $db, EntidadeInterface $entity){
            $this->db = $db;
            $this->entity = $entity;
            $this->limiteinicial = 20;
    }

    public function find($id){
            $query = "Select * from {$this->entity->getTable()} where id=:id";

            $stmt = $this->db->prepare($query);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            return $stmt->fetch((PDO::FETCH_ASSOC));

    }
    
    public function contar()
    {        
        $query = "SELECT COUNT(*) FROM {$this->entity->getTable()}";

        $stmt = $this->db->query($query);

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function listar($ordem = null)
    {
        if($ordem){
                $query ="Select * from {$this->entity->getTable()} order by {$ordem}";
        }
        else{
                $query ="Select * from {$this->entity->getTable()}";
        }

        $stmt = $this->db->query($query);

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    
    public function listarinicial($ordem = null) {
 
        try{        
            $query = "";
        
            $pagina = 1;
             
            # Limita o número de registros a serem mostrados por página
            //$this->limiteinicial

            # Atribui a variável inicio o inicio de onde os registros vão ser
            # mostrados por página, exemplo 0 à 10, 11 à 20 e assim por diante
            //$inicio = ($pagina * $this->limiteinicial) - $this->limiteinicial;
            $inicio = 0;

            $query = "";
            
            if($ordem)
            {                    
                # seleciona os registros do banco de dados pelo inicio e limitando pelo limite da variável limite
                $query = "SELECT * FROM {$this->entity->getTable()} ORDER BY {$ordem} LIMIT {$inicio}, {$this->limiteinicial}";
            }
            else{
                # seleciona os registros do banco de dados pelo inicio e limitando pelo limite da variável limite
                $query = "SELECT * FROM {$this->entity->getTable()} ORDER BY codigo LIMIT {$inicio}, {$this->limiteinicial}";
            }            
            
            $stmt = $this->db->query($query);

            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            
        } catch (Exception $ex) {
            $teste = $this->get_error($e);                
        } catch (PDOException $ex) {
            # call the get_error function
            $teste = $this->get_error($e);                
        } 
    }
    
    public function paginar($pagina) {
 
        try{        
             $query = "";
        
            # Limita o número de registros a serem mostrados por página
            $limite = 10;        

            # Atribui a variável inicio o inicio de onde os registros vão ser
            # mostrados por página, exemplo 0 à 10, 11 à 20 e assim por diante
            $inicio = ($pagina * $limite) - $limite;

            $query = "";
            
            if($inicio < 0)
            {
                # seleciona os registros do banco de dados pelo inicio e limitando pelo limite da variável limite
                $query = "SELECT * FROM {$this->entity->getTable()} ORDER BY codigo LIMIT 0, {$limite}";
            }
            else{
                # seleciona os registros do banco de dados pelo inicio e limitando pelo limite da variável limite
                $query = "SELECT * FROM {$this->entity->getTable()} ORDER BY codigo LIMIT {$inicio}, {$limite}";
            }
            
            $stmt = $this->db->query($query);

            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            
        } catch (Exception $ex) {
            $teste = $this->get_error($e);                
        } catch (PDOException $ex) {
            # call the get_error function
            $teste = $this->get_error($e);                
        } 
    }

    public function inserir(){
        
            $query = "Insert into {$this->entity->getTable()}(descricao01, descricao02) Values(:descricao01, :descricao02)";

            $stmt = $this->db->prepare($query);

            $stmt->bindValue(':descricao01', $this->entity->getDescricao01());
            $stmt->bindValue(':descricao02', $this->entity->getDescricao02());
            
            if($stmt->execute()){
                    return true;
            }
            else{
                    return false;
            }
    }

    public function alterar(){
            $query = "Update {$this->entity->getTable()} set nome=:nome, email=:email Where id=:id";


            $stmt = $this->db->prepare($query);

            $stmt->bindValue(':id', $this->entity->getId());
            $stmt->bindValue(':nome', $this->entity->getNome());
            $stmt->bindValue(':email', $this->entity->getEmail());
            if($stmt->execute()){
                    return true;
            }
            else{
                    return false;
            }
    }

    public function deletar($id){
            $query = "delete from {$this->entity->getTable()} where id=:id";

            $stmt = $this->db->prepare($query);
            $stmt->bindValue(':id', $id);

            if($stmt->execute()){
                    return true;
            }
            else{
                    return false;
            }
    }	    
}
