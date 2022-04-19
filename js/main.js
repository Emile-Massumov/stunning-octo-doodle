let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length; i++) {
    carts[0].addEventListener ('click', () => {
        console.log("added carts");
    })
}

function cartNumbers() {
    localStorage.setItem('cartNumbers', 1);
}
