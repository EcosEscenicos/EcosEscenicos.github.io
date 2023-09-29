// Función para cargar las obras desde un archivo de texto en el servidor
function cargarObrasDesdeArchivo() {
    fetch('obras.txt') // Reemplaza 'obras.txt' con la URL del archivo en tu servidor
        .then(response => response.text())
        .then(data => {
            // Divide el archivo de texto en líneas y luego en campos
            const lineas = data.split('\n');
            const obras = lineas.map(linea => linea.split('|'));
            mostrarObras(obras);
        })
        .catch(error => {
            console.error('Error al cargar el archivo de texto:', error);
        });
}

// Función para mostrar las obras en la tabla
function mostrarObras(obras) {
    const tabla = document.querySelector(".tabla");

    obras.forEach(obra => {
        const fila = document.createElement("div");
        fila.classList.add("fila");

        obra.forEach(dato => {
            const columna = document.createElement("div");
            columna.classList.add("columna");
            columna.textContent = dato;
            fila.appendChild(columna);
        });

        tabla.appendChild(fila);
    });
}

// Función para realizar la búsqueda
function buscarObras() {
    const campo = document.getElementById("campo").value;
    const busqueda = document.getElementById("busqueda").value.toLowerCase();

    const resultados = obras.filter(obra => {
        return String(obra[obtenerIndiceCampo(campo)]).toLowerCase().includes(busqueda);
    });

    // Eliminar las filas actuales de la tabla
    const tabla = document.querySelector(".tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    // Mostrar los resultados de la búsqueda
    mostrarObras(resultados);
}

// Función para obtener el índice del campo seleccionado en el formulario
function obtenerIndiceCampo(campo) {
    const campos = ["titulo", "autor", "personajes", "tipo", "duracion", "sinopsis", "contacto"];
    return campos.indexOf(campo);
}

// Mostrar todas las obras al cargar la página
mostrarObras(obras);
