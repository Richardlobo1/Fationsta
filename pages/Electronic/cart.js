const product=[
  {
    id:0,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (340).png"',
    title:'iphone 14',
    price:150000,
   },
   {
    id:1,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (343).png"',
    title:'iWatch',
    price:25000,

  },
  {
    id:2,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (365).png"',
    title:'Samsung s23',
    // title:'250',
    price:120000,

  },
  {
    id:3,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (344).png"',
    title:'Sony TV',
    price:100050,

  },
  {
    id:0,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (346).png"',
    title:'Home Theather',
    price:1400000,
   },
   {
    id:1,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (367).png"',
    title:'JBL Headphone',
    
    price:3020,

  },
  {
    id:2,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (368).png"',
    title:'MIVI Earphones',
    // title:'250',
    price:2000,

  },
  {
    id:3,
    image:'"C:/Users/Richard Lobo/Desktop/E-commerce Website/img/Screenshot (369).png"',
    title:'HP Pavilion x360 14-ek1020TU',
    price:99990,

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
      document.getElementById("Total").innerHTML="&#8377"+0+"0.00";
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