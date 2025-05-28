document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value.trim();
    const entradas = parseInt(document.getElementById("entradas").value);

    const mensaje = document.getElementById("mensaje");
    mensaje.style.color = "red";

    // Validar campos vacíos
    if (!nombre || !apellidos || !edad || !dni || !entradas || !fechaEvento || !numeroTarjeta || !fechaCaducidad) {
        mensaje.textContent = "Por favor, completa todos los campos.";
        return;
    }
    // Validar fecha nacimiento
    if (edad < 18) {
        mensaje.textContent = "Debes ser mayor de 18 años para comprar entradas.";
        return;
    }
    // Validar número de tarjeta (solo números, 16 dígitos)
    if (!/^\d{16}$/.test(numeroTarjeta)) {
        mensaje.textContent = "Número de tarjeta inválido (debe contener 16 dígitos).";
        return;
        }
    // Validar fecha de caducidad
    const hoy = new Date();
    const [añoCad, mesCad] = fechaCaducidad.split("-");
    const fechaTarjeta = new Date(añoCad, mesCad);
    
    if (fechaTarjeta <= hoy) {
        mensaje.textContent = "La tarjeta está caducada.";
        return;
        }
    
    mensaje.style.color = "lightgreen";
    mensaje.textContent = "Compra realizada con éxito. ¡Gracias!";
    this.reset();
    });