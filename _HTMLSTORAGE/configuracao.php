<?php

    require_once 'EntidadeInterface.php';
    require_once 'Registro.php';
    require_once 'ServiceDb.php';

    $requisicao = filter_input(INPUT_POST, 'requisicao', FILTER_DEFAULT, FILTER_SANITIZE_STRING);
    $pagina = filter_input(INPUT_POST, 'pagina', FILTER_DEFAULT, FILTER_SANITIZE_STRING);
           
    if($requisicao == 'inserir'){

        try{
            $conexao = new \PDO("mysql:host=127.0.0.1;dbname=htmlstorage","html_user","123456");	
            
            for($posicao = 1; $posicao < 100; $posicao++){            

                $registro = new Registro();

                $registro->setDescricao01("descricao01 " . $posicao);
                $registro->setDescricao02("descricao02 " . $posicao +  1);

                $serviceDb = new ServiceDb($conexao, $registro);

                $serviceDb->inserir();
            }            
            
            echo "It works";
            
        } catch (\PDOException $e){
            die("Não foi possível estabelecer uma conexão com o banco: Erro: ".$e->getMessage());
        }
        finally {
            exit;
        }
    }
    else{
        if($requisicao == 'obter')
        {
            try{
                $conexao = new \PDO("mysql:host=127.0.0.1;dbname=htmlstorage","html_user","123456");	

                $registro = new Registro();
                
                $serviceDb = new ServiceDb($conexao, $registro);
                
                //$arrayRegistros["0"] = '0';
                $arrayRegistros = array();
                
                foreach ($serviceDb->listar("codigo desc") as $c)
                {
                    $arrayRegistros[$c['codigo']] = $c['descricao01'];
                    
                    //echo $c['nome'],"<br>";
                }
                
                //$jsonarray = array_values($arrayRegistros);
                
                //print_r($arrayRegistros);
                
                //json_encode($jsonarray);
                
                //print_r($jsonarray);
                
                //$ar = array('apple', 'orange', 'banana', 'strawberry');
                //echo json_encode($ar); // ["apple","orange","banana","strawberry"]
                
                echo json_encode($arrayRegistros);

            } catch (\PDOException $e){
                die("Não foi possível estabelecer uma conexão com o banco: Erro: ".$e->getMessage());
            }
            finally {
                exit;
            }
        }
        else
            if($requisicao == 'obtercontagem')
            {
                try{
                    $conexao = new \PDO("mysql:host=127.0.0.1;dbname=htmlstorage","html_user","123456");	

                    $registro = new Registro();

                    $serviceDb = new ServiceDb($conexao, $registro);

                    $resposta['contagem'] = $serviceDb->contar();

                    echo json_encode($resposta);

                } catch (\PDOException $e){
                    die("Não foi possível estabelecer uma conexão com o banco: Erro: ".$e->getMessage());
                }
                finally {
                    exit;
                }
            }
            else{
                if($requisicao == 'obterinicial')
                {
                    try{
                        $conexao = new \PDO("mysql:host=127.0.0.1;dbname=htmlstorage","html_user","123456");	

                        $registro = new Registro();

                        $serviceDb = new ServiceDb($conexao, $registro);

                        //$arrayRegistros["0"] = '0';
                        $arrayRegistros = array();

                        foreach ($serviceDb->listarinicial(null) as $c)
                        {
                            $arrayRegistros[$c['codigo']] = $c['descricao01'];

                            //echo $c['nome'],"<br>";
                        }

                        //$jsonarray = array_values($arrayRegistros);

                        //print_r($arrayRegistros);

                        //json_encode($jsonarray);

                        //print_r($jsonarray);

                        //$ar = array('apple', 'orange', 'banana', 'strawberry');
                        //echo json_encode($ar); // ["apple","orange","banana","strawberry"]

                        echo json_encode($arrayRegistros);

                    } catch (\PDOException $e){
                        die("Não foi possível estabelecer uma conexão com o banco: Erro: ".$e->getMessage());
                    }
                    finally {
                        exit;
                    }
                }
                else
                    if($requisicao == 'paginar')
                    {
                        if($pagina != null)
                        {
                            try
                            {
                                $conexao = new \PDO("mysql:host=127.0.0.1;dbname=htmlstorage","html_user","123456");	

                                $registro = new Registro();

                                $serviceDb = new ServiceDb($conexao, $registro);

                                //$arrayRegistros["0"] = '0';
                                $arrayRegistros = array();

                                foreach ($serviceDb->paginar($pagina) as $c)
                                {
                                    $arrayRegistros[$c['codigo']] = $c['descricao01'];

                                    //echo $c['nome'],"<br>";
                                }

                                //$jsonarray = array_values($arrayRegistros);

                                //print_r($arrayRegistros);

                                //json_encode($jsonarray);

                                //print_r($jsonarray);

                                //$ar = array('apple', 'orange', 'banana', 'strawberry');
                                //echo json_encode($ar); // ["apple","orange","banana","strawberry"]

                                echo json_encode($arrayRegistros);

                            } catch (\PDOException $e){
                                die("Não foi possível estabelecer uma conexão com o banco: Erro: ".$e->getMessage());
                            }
                            finally {
                                exit;
                            }                    
                        }
                    }
                    else
                    {
                        echo "A requisição falhou.";
                        exit;
                    }
        }
    }
    

    
?>