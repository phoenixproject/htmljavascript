<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of EntidadeInterface
 *
 * @author Wesley Willians
 */
interface EntidadeInterface {
    public function getCodigo();
    public function setCodigo($codigo);

    public function getTable();
    public function setTable($table);
    
    public function getDescricao01();
    public function setDescricao01($descricao01);
    
    public function getDescricao02();
    public function setDescricao02($descricao02);
}
