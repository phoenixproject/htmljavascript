<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Registro
 *
 * @author pchan
 */
class Registro implements EntidadeInterface{

    private $table;
    private $codigo;
    private $descricao01;
    private $descricao02;	

    public function __construct(){
            $this->table = "HTMLSTORAGE_Cadastro";
    }

    /**	 
     * @return string
     */
    public function getTable(){
            return $this->table;
    }

    /**
     * @return string $table
     */
    public function setTable($table){
            $this->table = $table;
            return $this;
    }	

    public function getCodigo() {
        return $this->codigo;
    }

    public function getDescricao01() {
        return $this->descricao01;
    }

    public function getDescricao02() {
        return $this->descricao02;
    }

    public function setCodigo($codigo) {
        $this->codigo = $codigo;
        return $this;
    }

    public function setDescricao01($descricao01) {
        $this->descricao01 = $descricao01;
        return $this;
    }

    public function setDescricao02($descricao02) {
        $this->descricao02 = $descricao02;
        return $this;
    }
}
