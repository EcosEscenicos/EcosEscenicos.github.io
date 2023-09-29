// Función para cargar las obras desde el archivo de texto en el servidor
function cargarObras() {
    // Aquí deberías tener código para cargar los datos desde el archivo de texto en el servidor
    // Puedes utilizar Python para manejar esta parte del servidor
    // Por simplicidad, en este ejemplo, utilizaremos datos simulados
    const obras = [
        ["Obra 1", "Autor 1", 5, "Drama", "Tipo 1", "2 horas", "Sinopsis 1", "autor1@example.com"],
        ["Obra 2", "Autor 2", 4, "Comedia", "Tipo 2", "1.5 horas", "Sinopsis 2", "autor2@example.com"],
        // Agrega más obras aquí...
    ];
    return obras;
}

// Función para mostrar las obras en la tabla
function mostrarObras(obras) {
    const listaObras = document.getElementById("listaObras");
    listaObras.innerHTML = ""; // Limpiar la tabla

    obras.forEach(obra => {
        const row = document.createElement("tr");
        obra.forEach(dato => {
            const cell = document.createElement("td");
            cell.textContent = dato;
            row.appendChild(cell);
        });
        listaObras.appendChild(row);
    });
}

// Función para realizar la búsqueda
function buscarObras() {
    const campo = document.getElementById("campo").value;
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const obras = cargarObras();
    const resultados = obras.filter(obra => obra[getIndiceCampo(campo)].toLowerCase().includes(busqueda));
    mostrarObras(resultados);
}

// Función para obtener el índice del campo seleccionado en el formulario
function getIndiceCampo(campo) {
    const campos = ["titulo", "autor", "personajes", "genero", "tipo", "duracion", "sinopsis", "contacto"];
    return campos.indexOf(campo);
}

// Cargar todas las obras al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const obras = cargarObras();
    mostrarObras(obras);
});
