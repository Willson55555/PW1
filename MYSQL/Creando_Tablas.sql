/*CREAMOS LA BASE DE DATOS*/
CREATE DATABASE BLOG_WEB_1;

USE BLOG_WEB_1;

/*Creamos tablas base:*/
CREATE TABLE tb_status
(
	IDStatus	INT 			PRIMARY KEY NOT NULL
);

CREATE TABLE tb_categoria
(
	IDCategoria	INT 			PRIMARY KEY NOT NULL,
    NombreCate	VARCHAR (50),
    StatusCate	INT,
    
	FOREIGN KEY (StatusCate) REFERENCES tb_status (IDStatus)
);


/*Creamos tablas principales:*/
CREATE TABLE tb_usuario
(
	IDUsuario		INT 			PRIMARY KEY NOT NULL,
    IDStatusUser	INT,
    Nombre			VARCHAR (30),
    ApellidoPa		VARCHAR (30),
    ApellidoMa		VARCHAR (30),
    FechaNac		DATE,
    Correo			VARCHAR (30),
    FotoPerf		BLOB,
    Usuario			VARCHAR (30),
    Contra			VARCHAR (30),
    FechaCreac		DATE,
	FOREIGN KEY (IDStatusUser) REFERENCES tb_status (IDStatus)
    
);

CREATE TABLE tb_publicacion
(
	IDPublicacion	INT 			PRIMARY KEY NOT NULL,
    IDStatusPubli	INT,
    IDUsuario		INT,
    Titulo			VARCHAR (30),
    Descripcion		VARCHAR (1000),
    Fecha			DATE,
    Media			BLOB,
    Spoiler			BOOLEAN,
    
    FOREIGN KEY (IDStatusPubli) REFERENCES tb_status (IDStatus)
);


CREATE TABLE tb_publicacioncategoria
(
	IDPublicacionCategoria	INT		PRIMARY KEY NOT NULL,
    IDPublicacion			INT,
    IDCategoria				INT,
    
    FOREIGN KEY (IDPublicacion) REFERENCES tb_publicacion (IDPublicacion),
    FOREIGN KEY (IDCategoria) REFERENCES tb_categoria (IDCategoria)
);
