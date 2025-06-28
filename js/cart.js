let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;

    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});
