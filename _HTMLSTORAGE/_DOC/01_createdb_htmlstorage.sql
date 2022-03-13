CREATE SCHEMA IF NOT EXISTS `htmlstorage`;
USE `htmlstorage`;
 
-- Cadastro --
 
CREATE TABLE IF NOT EXISTS HTMLSTORAGE_Cadastro (
	codigo	            integer not null AUTO_INCREMENT,        
	descricao01         varchar(20) not null,
	descricao02         varchar(20) not null,
        PRIMARY KEY(codigo)
);
 

commit;