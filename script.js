let iconCart;
let body;
let listProductContainer;
let listProducts = [];

let carts =[];
let iconCartSpan;

function initApp() {
    iconCart = document.querySelector('.icon-cart');
    body = document.querySelector('body');
    listProductContainer = document.querySelector('.box-container');
    ListCart = document.querySelector('.ListCart');


    
    iconCart.addEventListener('click', () => {
        body.classList.toggle('show');
    });

    // Close the cart when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target !== iconCart && !iconCart.contains(event.target)) {
            body.classList.remove('show');
        }
    });

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            // Handle the products data
            console.log(products);
            listProducts = products;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    if (listProductContainer) {
        listProductContainer.addEventListener('click', (event) => {
            // Find the closest ancestor with the class 'box'
            let clickedBox = event.target.closest('.box');

            if (clickedBox) {
                // Access the product data using listProducts array
                let productId = clickedBox.id;
                alert('Do you really want to add the product ? ');
            }
        });
    }

    //add to card 
    const addToCart = (productId) => {

    }
}

// Call the initApp function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', initApp);





    
  