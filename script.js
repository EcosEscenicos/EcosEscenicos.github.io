// Datos de obras de teatro (simulados)
const obras = [
    ["Obra 1", "Autor 1", "5", "Drama", "2 horas", "Sinopsis 1", "autor1@example.com"],
    ["Obra 2", "Autor 2", "4", "Comedia", "1.5 horas", "Sinopsis 2", "autor2@example.com"],
    // Agrega más obras aquí...
];

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
