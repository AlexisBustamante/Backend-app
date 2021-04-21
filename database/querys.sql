CREATE DATABASE mecanica;

CREATE TABLE Usuario(
    id_u SERIAL PRIMARY KEY,
    u_name TEXT NOT NULL,
    u_email  TEXT NOT NULL,
    u_password TEXT NOT NULL
);

INSERT INTO Usuarios(id_u,u_name,u_identname,u_password) VALUES (0,'Alexis Bustamante','_alexis','210122');
