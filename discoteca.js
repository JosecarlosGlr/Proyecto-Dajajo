document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value.trim();
    const entradas = parseInt(document.getElementById("entradas").value);
    const numeroTarjeta = document.getElementById("numeroTarjeta").value.replace(/\s+/g, '');
    const fechaCaducidad = document.getElementById("fechaCaducidad").value;
    const fechaEvento = document.getElementById("fechaEvento").value; // si tienes ese input

    const mensaje = document.getElementById("mensaje");
    mensaje.style.color = "red";

    if (!nombre || !apellidos || !edad || !dni || !entradas || !fechaEvento || !numeroTarjeta || !fechaCaducidad) {
        mensaje.textContent = "Por favor, completa todos los campos.";
        return;
    }

    if (edad < 18) {
        mensaje.textContent = "Debes ser mayor de 18 años para comprar entradas.";
        return;
    }

    if (!/^\d{16}$/.test(numeroTarjeta)) {
        mensaje.textContent = "Número de tarjeta inválido (debe contener 16 dígitos).";
        return;
    }

    const hoy = new Date();
    const [añoCad, mesCad] = fechaCaducidad.split("-");
    const fechaTarjeta = new Date(parseInt(añoCad), parseInt(mesCad) - 1); // restar 1 al mes

    if (fechaTarjeta <= hoy) {
        mensaje.textContent = "La tarjeta está caducada.";
        return;
    }

    mensaje.style.color = "lightgreen";
    mensaje.textContent = "Compra realizada con éxito. ¡Gracias!";
    this.reset();
});
