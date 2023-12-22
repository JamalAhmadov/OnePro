const bskcontainer = document.getElementById("bskcontainer");

function renderProducts() {
  bskcontainer.innerHTML = ``;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    const card = document.createElement("div");
    card.className = "myCard";
    card.innerHTML = ` 
    <img src="${item.image}" alt="">
    <div class="about"><h3>${item.name}</h3>
    <p>${item.describtoin}</p></div>
    <button onclick="removeItem(${index})">Remove</button>
    `;

    bskcontainer.appendChild(card);
  });
}
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  
  renderProducts();
}
renderProducts();
