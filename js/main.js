let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener ('click', () => {
    cartNumbers(products[i]);
    })
}

let products = [
    {
        name: 'Versace Dylan Blue',
        tag:'versacedylanblue',
        price:'90',
        inCart:0
    },
    {
        name: 'ARMAF Le Club de Nuit',
        tag:'armafleclubdenuit',
        price:'54',
        inCart:0
    },
    {
        name: 'Armani Acqua Di Gio Profumo',
        tag:'armaniacquadigioprofumo',
        price:'110',
        inCart:0
    },
    {
        name: 'Guerlain LHomme Ideal EDP',
        tag:'guerlainlhommeideal',
        price:'110',
        inCart:0
    }
];

function onLoadCarts() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) { 
    document.querySelector('.cart span').textContent = productNumbers;
}
}

function cartNumbers(product) { 
    console.log('product here' , product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;

} else { 
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent = 1;
}
setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems);
  console.log("My items is" , cartItems);
    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }
    localStorage.setItem("productInCart" , JSON.stringify(cartItems));
}
onLoadCarts();
