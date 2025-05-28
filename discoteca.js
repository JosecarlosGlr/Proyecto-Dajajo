document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value.trim();
    const entradas = parseInt(document.getElementById("entradas").value);
if (edad < 18) {
    mensaje.textContent = "Debes ser mayor de 18 años para comprar entradas.";
    return;
}
});