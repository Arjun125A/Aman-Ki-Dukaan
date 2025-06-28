const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

function updateCart() {
  cartContainer.innerHTML = "";
  total = 0;

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartContainer.appendChild(div);
    total += item.price;
  });

  totalAmount.textContent = total;
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCart();
}

updateCart();
