let Data = new URLSearchParams(window.location.search);

window.addEventListener("load", () => {
  let dataObj = {
    image: Data.get("image"),
    title: Data.get("title"),
    price: Data.get("price"),
    id: Data.get("id"),
    rating: Data.get("rating"),
    reviews: Data.get("reviews"),
  };

  document.getElementById("image").src = dataObj.image;
  document.getElementById("section-title").innerHTML = dataObj.title;
  document.getElementById("rating").innerHTML = dataObj.rating;
  document.getElementById("reviews").innerHTML = dataObj.reviews;
  document.getElementById("price").innerHTML = dataObj.price;
  myFunction(dataObj.id);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCartBtn = document.getElementById('addToCartBtn');

function addToCart() {
    const productTitle = document.getElementById('section-title').textContent;
    const productPrice = document.getElementById('price').textContent;
    const productImage = document.getElementById('image').src;
    
    const product = {
        title: productTitle,
        price: productPrice,
        image: productImage
    };
    
      cart.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartIcon();
    
}

addToCartBtn.addEventListener('click', addToCart);

