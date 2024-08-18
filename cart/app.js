let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Relaxed Short full Sleeve T-Shirt',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (204).PNG',
        price: 680,
    },
    {
        id: 2,
        name: 'Party Dress',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (409).png',
        
        price: 1200,
    },
    {
        id: 3,
        name: 'Black Floral Wrap Midi Skirt',
        image: '3.PNG',
        price: 2200,
    },
    {
        id: 4,
        name: 'Titan perfume',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (399).png',
        price: 3000,
    },
    {
        id: 5,
        name: 'Sweet Shirt',
        image: '5.PNG',
        price: 1000,
    },
    {
        id: 6,
        name: 'Watch',
        image:  'C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (222).PNG',
        price: 1200,
    },
    {
        id: 7,
        name: 'Relaxed Short full Sleeve T-Shirt',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (204).PNG',
        price: 900,
    },
    {
        id: 8,
        name: 'Tv',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (346).PNG',
        price: 12000,
    },
    {
        id: 9,
        name: 'Laptop',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (369).PNG',
        price: 99000,
    },
    {
        id: 10,
        name: 'shoes',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (207).PNG',
        price: 12000,
    },
    {
        id: 11,
        name: 'shirt',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (387).PNG',
        price: 3200,
    },
    {
        id: 12,
        name: 'Women jeans',
        image: 'C:/Users/Richard Lobo/Desktop/E-commerce Website/cart/Screenshot (398).PNG',
        price: 1200,
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}