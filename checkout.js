function processCheckout(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;

    if (!name || !address || !city || !zipcode) {
        alert("Por favor ingresa todos los datos.");
        return;
    }

    alert(`Gracias por tu compra, ${name}!\nTu pedido será enviado a ${address}, ${city}, ${zipcode}.`);

    // Limpiar el carrito (esto asume que tienes un carrito)
    localStorage.removeItem('cart');

    // Redirigir al usuario a una página de confirmación (opcional)
    window.location.href = "thank-you.html"; // Puedes crear una página de gracias si lo deseas
}
