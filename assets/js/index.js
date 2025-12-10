// Guarda los usuarios generados
let historial = [];

document.getElementById("btnGenerar").addEventListener("click", () => {

    // Datos del formulario (limpios y en minúsculas)
    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    const apellido = document.getElementById("apellido").value.trim().toLowerCase().replace(/\s+/g, "");

    // Verificación de campos vacíos
    if (!nombre || !apellido) {
        mostrarResultado("Por favor, completa ambos campos.", "danger");
        return;
    }

    // Partes que formarán el usuario
    const inicialNombre = nombre.slice(0, 1);
    const primerasApellido = apellido.slice(0, 3);

    // Número aleatorio de dos dígitos
    const numeroAleatorio = Math.floor(Math.random() * 90) + 10;

    // Usuario final
    const usuario = inicialNombre + primerasApellido + numeroAleatorio;

    // Mostrar el resultado en pantalla
    mostrarResultado(`Tu nuevo nombre de usuario es: <b>${usuario}</b>`, "info");

    // Guardar en historial
    historial.push(usuario);

    // Mostrar en consola
    console.log("Usuario generado:", usuario);
});

// Muestra alertas en el contenedor del resultado
function mostrarResultado(mensaje, tipo) {
    const div = document.getElementById("resultado");
    div.className = `alert alert-${tipo} mt-4`;
    div.innerHTML = mensaje;
    div.classList.remove("d-none");
}
