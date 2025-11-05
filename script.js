const products = [
  { id: 1, name: "Smart Watch", price: 49.99, image: "https://via.placeholder.com/250" },
  { id: 2, name: "Headphones", price: 29.99, image: "https://via.placeholder.com/250" },
  { id: 3, name: "Wireless Mouse", price: 19.99, image: "https://via.placeholder.com/250" },
  { id: 4, name: "Backpack", price: 39.99, image: "https://via.placeholder.com/250" }
];

const productList = document.getElementById('product-list');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartCount = document.getElementById('cart-count');

let cart = [];

function displayProducts() {
  products.forEach(prod => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>$${prod.price.toFixed(2)}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

cartBtn.onclick = () => cartModal.style.display = "flex";
closeCart.onclick = () => cartModal.style.display = "none";

displayProducts();

