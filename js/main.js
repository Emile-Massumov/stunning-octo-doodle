let carts = document.querySelectorAll('.add-cart');



let products = [
    {
        name: 'Versace Dylan Blue',
        tag: 'versacedylanblue',
        price: 90,
        inCart: 0
    },
    {
        name: 'ARMAF Le Club de Nuit',
        tag: 'armafleclubdenuit',
        price: 54,
        inCart: 0
    },
    {
        name: 'Armani Acqua Di Gio Profumo',
        tag: 'armaniacquadigioprofumo',
        price: 110,
        inCart: 0
    },
    {
        name: 'Guerlain LHomme Ideal EDP',
        tag: 'guerlainlhommeideal',
        price: 115,
        inCart: 0
    }
];
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]); //calculate a cost total in basket//

    })
}

function onLoadCarts() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log('product here', product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculate a cost total in basket//
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

onLoadCarts();
