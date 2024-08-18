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

let product=[
  {
    id:0,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (391).png"',
    title:'Saree',
    price:3120,
   },
   {
    id:1,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (392).png"',
    title:'Top\'s',
    price:620,

  },
  {
    id:2,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (211).png"',
    title:'Plazo',
    // title:'250',
    price:1020,

  },
  {
    id:3,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (394).png"',
    title:'kurti',
    price:680,

  },
  {
    id:4,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (396).png"',
    title:'Lenga choli',
    price:12000,
   },
   {
    id:5,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (395).png"',
    title:'Dress',
    
    price:799,

  },
  {
    id:6,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (397).png"',
    title:'Allen Solly Blazer',
    // title:'250',
    price:420,

  },
  {
    id:7,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (398).png"',
    title:'Jeans',
    price:578,

  },

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
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
                <div><img src="image/${value.image}"/></div>
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
