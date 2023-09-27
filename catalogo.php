<?php
// Función para leer el catálogo desde el archivo de texto
function leerCatalogo() {
    $archivo = 'catalogo.txt';
    $catalogo = [];

    if (file_exists($archivo)) {
        $lineas = file($archivo, FILE_IGNORE_NEW_LINES);
        foreach ($lineas as $linea) {
            $datos = explode('|', $linea);
            $obra = [
                'titulo' => $datos[0],
                'autor' => $datos[1],
                'personajes' => $datos[2],
                'tipo' => $datos[3],
                'duracion' => $datos[4],
                'sinopsis' => $datos[5],
                'contacto' => $datos[6]
            ];
            $catalogo[] = $obra;
        }
    }

    return $catalogo;
}

// Función para mostrar el catálogo
function mostrarCatalogo() {
    $catalogo = leerCatalogo();
    foreach ($catalogo as $obra) {
        echo '<div class="teatro-item">';
        echo '<h2>' . $obra['titulo'] . '</h2>';
        echo '<p><strong>Autor:</strong> ' . $obra['autor'] . '</p>';
        echo '<p><strong>Cantidad de Personajes:</strong> ' . $obra['personajes'] . '</p>';
        echo '<p><strong>Tipo de Obra:</strong> ' . $obra['tipo'] . '</p>';
        echo '<p><strong>Duración:</strong> ' . $obra['duracion'] . '</p>';
        echo '<p><strong>Sinopsis:</strong> ' . $obra['sinopsis'] . '</p>';
        echo '<p><strong>Contacto del Autor:</strong> ' . $obra['contacto'] . '</p>';
        echo '</div>';
    }
}
?>
