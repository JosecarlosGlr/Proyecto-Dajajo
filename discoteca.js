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

    if (edad < 18) {
        mensaje.textContent = "Debes ser mayor de 18 años para comprar entradas.";
        return;
    }
    // Validar número de tarjeta (solo números, 16 dígitos)
    if (!/^\d{16}$/.test(numeroTarjeta)) {
        mensaje.textContent = "Número de tarjeta inválido (debe contener 16 dígitos).";
        return;
        }
    });