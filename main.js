// OPEN & CLOSE CART
const cartIcon = document.querrySelector(#cart-icon);
const cart = document.querrySelector(".cart"));
const closeCart = document. querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});