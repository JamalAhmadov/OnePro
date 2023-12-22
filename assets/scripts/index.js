let container = document.getElementById('container');
let loadBtn = document.getElementById('loadMore');
let search = document.getElementById('searchInput');


let page = 1;
let limit = 3;

const renderData = async () => {
    let skip = (page - 1) * limit;
    const res = await fetch(`https://65745c66f941bda3f2afa6af.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await res.json()
    db = data;
    db.forEach(item => {
        let cart = document.createElement('div')
        cart.className = "cart"
        cart.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.name}</h3>
        <p>${item.describtoin}</p>
        <button onclick="addToBasket(${item.id})">$ ${item.price}</button>
        `;
        container.append(cart)
    });
    page++
}

loadBtn.addEventListener('click', renderData)
renderData()

search.addEventListener('input', (e) => {
    searchByName(e.target.value)
})
const searchByName = async (name) => {

    const res = await fetch(`https://65745c66f941bda3f2afa6af.mockapi.io/products`)
    const data = await res.json()
    let flteddata = data.filter(item => item.name.toLowerCase().includes(name))
    container.innerHTML = " "
    flteddata.forEach(item => {
        let cart = document.createElement('div')
        cart.className = "cart"
        cart.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.name}</h3>
        <p>${item.describtoin}</p>
        <button>$ ${item.price}</button>
        `;
        container.append(cart)
    });

}

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == id));
    localStorage.setItem("cart", JSON.stringify(cart));
}


