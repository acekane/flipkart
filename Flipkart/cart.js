    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartTotal = document.getElementById("cart-total");
      let total = 0;

      // Clear existing cart items
      cartItemsContainer.innerHTML = "";

      cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "container";

        itemElement.innerHTML = `
        <div  width: 100%;" class="container-fluid p-5 mt-4">
          <div style="width: 100%;" class="row ">
            <div class="col-2">
              <img style="width: 100px; height: 100px;" src="${item.image}" alt="">
            </div>
            <div class="col-6 details ps-5">
              <p class="p-0 m-0" style="font-size: 15px; font-weight: 600;">${item.title}</p>
              <p class="p-0 m-0" style="font-size: 15px; font-weight: 600;">Thunder grey, Black</p>
              <p class="p-0 m-0" style="font-size: 15px; font-weight: 600;">Seller: Flipkart</p>
              <p class="p-0 m-0" style="font-size: 15px; font-weight: 600;">${item.price}</p>
            </div>
            <div class="col-4">
              <p style="font-size: 15px; font-weight: 600;" a="p-0 m-0">Delivery by 23 May</p>
              <p style="font-size: 15px; font-weight: 600;" class="p-0 m-0">If ordered before 12 AM, delivery by 23 May</p>
              <p style="font-size: 15px; font-weight: 600;" class="p-0 m-0">In stock</p>
            </div>
          </div>
          <div class="buttons mt-3">
            <a style="display: inline; font-size: 18px; font-weight: 600; color: black;" class="minus nav-link">-</a>
            <span style="display: inline; font-size: 18px; font-weight: 600; color: black;" class="count">1</span>
            <a style="display: inline; font-size: 18px; font-weight: 600; color: black;" class="plus nav-link">+</a>
            <a style="text-decoration: none; font-size: 18px; font-weight: 600; color: black; margin-left: 20px;" href="">Save for later</a>
            <a class="remove" style="text-decoration: none; font-size: 18px; font-weight: 600; color: black; margin-left: 20px;" href="" data-index="${index}">Remove</a>
          </div>
        </div>
        `;

        cartItemsContainer.appendChild(itemElement);
        const plusButton = itemElement.querySelector(".plus");
        const minusButton = itemElement.querySelector(".minus");
        const count = itemElement.querySelector(".count");
        const price = itemElement.querySelector(".details p:nth-child(4)");
        let quantity = 1;

        plusButton.addEventListener("click", () => {
          quantity++;
          count.textContent = quantity;
          const updatedPrice =
            parseFloat(item.price.replace("₹", "").replace(",", "")) * quantity;
          price.textContent = `₹${updatedPrice.toFixed(2)}`;
          updateCartTotal();
        });

        minusButton.addEventListener("click", () => {
          if (quantity > 1) {
            quantity--;
            count.textContent = quantity;
            const updatedPrice =
              parseFloat(item.price.replace("₹", "").replace(",", "")) * quantity;
            price.textContent = `₹${updatedPrice.toFixed(2)}`;
            updateCartTotal();
          }
        });

        total += parseFloat(item.price.replace("₹", "").replace(",", ""));
      });

      cartTotal.textContent = total.toFixed(2);
    }

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    }

    function updateCartTotal() {
      const cartTotal = document.getElementById("cart-total");
      const cartItemsContainer = document.getElementById("cart-items");
      let total = 0;
      cartItemsContainer
        .querySelectorAll(".details p:nth-child(4)")
        .forEach((price) => {
          total += parseFloat(price.textContent.replace("₹", "").replace(",", ""));
        });
      cartTotal.textContent = total.toFixed(2);
    }

    displayCart();

    document.querySelectorAll(".buttons a:last-child").forEach((removeButton) => {
      removeButton.addEventListener("click", (e) => {
        e.preventDefault();
        const index = removeButton.dataset.index;
        removeItem(index);
      });
    });
