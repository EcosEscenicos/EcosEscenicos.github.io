<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'];
    $autor = $_POST['autor'];
    $personajes = $_POST['personajes'];
    $tipo = $_POST['tipo'];
    $duracion = $_POST['duracion'];
    $sinopsis = $_POST['sinopsis'];
    $contacto = $_POST['contacto'];

    $nuevaObra = "$titulo|$autor|$personajes|$tipo|$duracion|$sinopsis|$contacto";
    $archivo = 'catalogo.txt';

    // Agregar la nueva obra al archivo de texto
    file_put_contents($archivo, $nuevaObra . PHP_EOL, FILE_APPEND);

    // Redireccionar a la página principal
    header('Location: index.html');
}
?>
