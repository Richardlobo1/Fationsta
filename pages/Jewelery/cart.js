const product=[
  {
    id:0,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (370).png"',
    title:'Neckless',
    price:120,
   },
   {
    id:1,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (372).png"',
    title:'Earring',
    price:620,

  },
  {
    id:2,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/chain.jpg"',
    title:'Chain',
    // title:'250',
    price:420,

  },
  {
    id:3,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (373).png"',
    title:'Bracelets',
    price:100,

  },
  {
    id:4,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (374).png"',
    title:'Nose Pin',
    price:120,
   },
   {
    id:5,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (375).png"',
    title:'Bangle',
    
    price:620,

  },
  {
    id:6,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (376).png"',
    title:'Pendant',
    // title:'250',
    price:420,

  },
  {
    id:7,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (377).png"',
    title:'Solitaires',
    price:100,

  },
  {
    id:8,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (378).png"',
    title:'Ring',
    price:100,

  },

];
const categories=[...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>{
   
  var{image,title,price}=item;
  return(
    `<div class='box'>
        <div class='img-box'> 
          <img class='images' src=${image}></img>
          </div>

          <div class='bottom'>
          <p> ${title}</p>
          <h2>&#8377 ${price}.00</h2>`+
          "<button onclick='addtocart("+(i++)+")'>Addtocart</button>"+
          `</div>
          </div>`
  )
}).join('')
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
   cart.splice(a,1);
   displaycart();
}
function displaycart(a){
    let j=0,Total=0;

    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
      document.getElementById('cartItem').innerHTML="Your cart is Empty";
      document.getElementById("Total").innerHTML="₹"+0+"0.00";
    }
    else{
      document.getElementById("cartItem").innerHTML=cart.map((item)=>{
          var{image,title,price}=item;
          Total=Total+price;
          document.getElementById("Total").innerHTML="₹"+Total+".00";
          return(
            `<div class='cart-item'>
            <div class='row-img'>
                  <img class='rowing' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>&#8377 ${price}.00</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
          );
      }).join('');
    }
}