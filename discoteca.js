document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const entradas = parseInt(document.getElementById("entradas").value);
if (edad < 18) {
    mensaje.textContent = "Debes ser mayor de 18 años para comprar entradas.";
    return;
}
});