let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.getElementById("cart-panel");
const cartItemsList = document.getElementById("cart-items");
const totalPrice = document.getElementById("total");

function toggleCart() {
    cartPanel.style.display = cartPanel.style.display === "block" ? "none" : "block";
}

function updateCart() {
    if (!cartItemsList || !cartIcon || !totalPrice) return;

    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.titulo} - $${item.precio.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.precio;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    cartIcon.textContent = `🛒 Carrito (${cart.length})`;

    localStorage.setItem('cart', JSON.stringify(cart));
}

function checkout() {
    alert("Gracias por tu compra!");
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
}

function showToast() {
    const toast = document.getElementById('toast');
    const sound = document.getElementById('pokeball-sound');

    // Reproducir sonido
    sound.play();

    // Mostrar el toast y aplicar animación
    toast.style.display = 'flex';
    toast.classList.add('animate');

    // Después de 3 segundos, ocultar el toast
    setTimeout(() => {
        toast.style.display = 'none';
        toast.classList.remove('animate');
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    updateCart();

    const botonesCarrito = document.querySelectorAll('.agregar-carrito');

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const contenedor = boton.closest(".imagen");
            const titulo = contenedor.querySelector(".titulo").textContent;
            const precio = parseFloat(contenedor.querySelector(".precio").textContent.replace('$', ''));

            cart.push({ titulo, precio });
            updateCart();
            alert('Producto agregado al carrito');

            // Mostrar la notificación de que el producto fue agregado
            showToast();
        });
    });
});

function removeFromCart(index) {
    // Elimina el producto del carrito
    cart.splice(index, 1);
    updateCart(); // Actualiza el carrito
    alert('Producto eliminado del carrito');
}

// Agrega un botón de eliminar en el carrito
function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.titulo} - $${item.precio.toFixed(2)} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItemsList.appendChild(li);
        total += item.precio;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    cartIcon.textContent = `🛒 Carrito (${cart.length})`;

    localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCheckoutForm() {
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.style.display = checkoutForm.style.display === "block" ? "none" : "block";
  }
  
