const productDetails = [
    {
      name: "Alovera",
      price: 200,
      imageUrl:
       // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      "data:image/jpeg;base64,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",
       qty: 10,
      heading: "Nice plant ",
      des:
        "Nice plant"
    },
    {
      name: "Money plant",
      price: 490,
      imageUrl: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/money-plant-golden-31774507368580.jpg?v=1675601645&width=750",
      qty: 15,
      heading: "You’ve never seen a plant like this",
      des:
        "Gives Money"
    },
    {
      name: "Abelia",
      price: 199,
      imageUrl: "https://whatflower.net/wp-content/uploads/2017/10/1-800x500.jpg",
      qty: 20,
      heading: "The best for the brightest",
      des:"plant"
    },
    {
      name: "Abelmoschus",
      price: 106,
      imageUrl:"https://whatflower.net/wp-content/uploads/2017/10/Abelmoschus_esculentus.jpg",
      qty: 35,
      heading: "Nice plant",
      des:"immune"
    },
    {
      name: "Adenia",
      price: 719,
      imageUrl:
        "https://whatflower.net/wp-content/uploads/2017/10/12-800x500.jpg",
      qty: 25,
      heading: "Your next level plant",
      des:"good"
    },
    {
        name: "Rose",
        price: 200,
        imageUrl:"https://imgcdn.floweraura.com/red-rose-plant-9979010pl-A.jpg",
        heading: "feeling lucky",
        des:""
      },
      {
        name: "Hibiscus",
        price: 200,
        imageUrl:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-hibiscus-gudhal-flower-red-plant.jpg?v=1634202612",
         qty: 10,
        heading: "Nice Plant",
        des:""
      },
      {
        name: "Areca palm",
        price: 200,
        imageUrl:"https://cdn.shopify.com/s/files/1/0579/7924/0580/products/areca-palm-plant-xl-31798831349892.jpg?v=1675575726",
         qty: 10,
        heading: "used in home",
        des:""
      },
      {
        name: "Jasmine",
        price: 200,
        imageUrl:"https://rukminim1.flixcart.com/image/416/416/kbb49zk0/plant-sapling/h/w/a/kunda-downy-jasmine-plant-1-nurserylive-original-imafsz2erywt7spa.jpeg?q=70",
         qty: 10,
        heading: "preferred in cool air",
        des:""
      },
      {
        name: "Bougainvillea",
        price: 200,
        imageUrl:"https://nationbloom.com/img/nurseryserve-Bougainvillea%28Pink%29.jpg",
         qty: 10,
        heading: "best product from us",
        des:""
      },
  ];
  const cartDetails = [];
  
  //click events {
  function addItem(event) {
    let btnClicked =
      event.parentElement.parentElement.parentElement.parentElement.parentElement;
    let noStocks = btnClicked.getElementsByClassName("out-of-stock-cover")[0];
    if (noStocks.style.display == "flex") return;
    let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
    let price = parseFloat(
      btnClicked
        .getElementsByClassName("product-price")[0]
        .innerText.replace("₹ ", "")
    );
    let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
    SwitchBtns(btnClicked);
    let cartItem = {
      name,
      price,
      imgSrc,
      qty: 1
    };
    CartItems(cartItem);
    cartDetails.push(cartItem);
    RenderCart();
    CartItemsTotal();
  }
  
  function removeItem(event) {
    let btnClicked = event.parentElement;
    let itemName = btnClicked.getElementsByClassName("name")[0].innerText;
    let productNames = document.getElementsByClassName("product-name");
    cartDetails.forEach((item, i) => {
      if (itemName == item.name) {
        cartDetails.splice(i, 1);
        for (let name of productNames) {
          if (itemName == name.innerText) {
            let found = name.parentElement.parentElement;
            SwitchBtns(found);
          }
        }
      }
    });
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
  }
  
  function clearCart() {
    ToggleBackBtns();
    cartDetails.length = 0;
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
  }
  
  function qtyChange(event, handler) {
    let btnClicked = event.parentElement.parentElement;
    let isPresent = btnClicked.classList.contains("btn-add");
    let itemName = isPresent
      ? btnClicked.parentElement.parentElement.getElementsByClassName(
          "product-name"
        )[0].innerText
      : btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
    let productNames = document.getElementsByClassName("product-name");
    for (let name of productNames) {
      if (itemName == name.innerText) {
        let productBtn = name.parentElement.parentElement.getElementsByClassName(
          "qty-change"
        )[0];
        cartDetails.forEach((item, i) => {
          if (itemName == item.name) {
            if (handler == "add" && item.qty < 10) {
              item.qty += 1;
              btnClicked.innerHTML = QtyBtn(item.qty);
              productBtn.innerHTML = QtyBtn(item.qty);
            } else if (handler == "sub") {
              item.qty -= 1;
              btnClicked.innerHTML = QtyBtn(item.qty);
              productBtn.innerHTML = QtyBtn(item.qty);
              if (item.qty < 1) {
                cartDetails.splice(i, 1);
                productBtn.innerHTML = AddBtn();
                productBtn.classList.toggle("qty-change");
              }
            } else {
              document.getElementsByClassName("purchase-cover")[0].style.display =
                "block";
              document.getElementsByClassName("stock-limit")[0].style.display =
                "flex";
              sideNav(0);
            }
          }
        });
      }
    }
    RenderCart();
    CartIsEmpty();
    CartItemsTotal();
  }
  
  function limitPurchase(event) {
    document.getElementsByClassName("purchase-cover")[0].style.display = "none";
    event.parentElement.style.display = "none";
    sideNav(1);
  }
  
  function sideNav(handler) {
    let sideNav = document.getElementsByClassName("side-nav")[0];
    let cover = document.getElementsByClassName("cover")[0];
    sideNav.style.right = handler ? "0" : "-100%";
    cover.style.display = handler ? "block" : "none";
    CartIsEmpty();
  }
  
  function buy(handler) {
    if (cartDetails.length == 0) return;
    sideNav(!handler);
    document.getElementsByClassName("purchase-cover")[0].style.display = handler
      ? "block"
      : "none";
    document.getElementsByClassName("order-now")[0].innerHTML = handler
      ? Purchase()
      : "";
  }
  
  function order() {
    let invoice = document.getElementsByClassName("invoice")[0];
    invoice.style.height = "500px";
    invoice.style.width = "400px";
    invoice.innerHTML = OrderConfirm();
    ToggleBackBtns();
    Stocks();
    clearCart();
  }
  
  function okay(event) {
    let container = document.getElementsByClassName("invoice")[0];
    if (event.target.innerText == "continue") {
      container.style.display = "none";
      document.getElementsByClassName("purchase-cover")[0].style.display = "none";
    } else {
      event.target.innerText = "continue";
      event.target.parentElement.getElementsByClassName(
        "order-details"
      )[0].innerHTML = `<em class='thanks'>Thanks for shopping with us</em>`;
      container.style.height = "180px";
    }
  }
  //}
  
  // button components for better Ux {
  function AddBtn() {
    return `
  <div>
    <button onclick='addItem(this)' class='add-btn'>Add <i class='fas fa-chevron-right'></i></button>
  </div>`;
  }
  
  function QtyBtn(qty = 1) {
    if (qty == 0) return AddBtn();
    return `
  <div>
    <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
    <p class='qty'>${qty}</p>
    <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
  </div>`;
  }
  //}
  
  //Ui components {
  function Product(product = {}) {
    let { name, price, imageUrl, heading, des } = product;
    return `
  <div class='card'>
    <div class='top-bar'>
      <em class="stocks">In Stock</em>
    </div>
    <div class='img-container'>
      <img class='product-img' src='${imageUrl}' alt='' />
      <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
    </div>
    <div class='details'>
      <div class='name-fav'>
        <strong class='product-name'>${name}</strong>
        <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
      </div>
      <div class='wrapper'>
        <h5>${heading}</h5>
      </div>
      <div class='purchase'>
        <p class='product-price'>₹ ${price}</p>
        <span class='btn-add'>${AddBtn()}</span>
      </div>
    </div>
  </div>`;
  }
  
  function CartItems(cartItem = {}) {
    let { name, price, imgSrc, qty } = cartItem;
    return `
  <div class='cart-item'>
    <div class='cart-img'>
      <img src='${imgSrc}' alt='' />
    </div>
    <strong class='name'>${name}</strong>
    <span class='qty-change'>${QtyBtn(qty)}</span>
    <p class='price'>₹ ${price * qty}</p>
    <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
  </div>`;
  }
  
  function Banner() {
    return `
  <div class='banner'>
    <ul class="box-area">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    <div class='main-cart'>${DisplayProducts()}</div>
  
    <div class='nav'>
      <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>
      <span class= 'total-qty'>0</span>
    </div>
    <div onclick='sideNav(0)' class='cover'></div>
    <div class='cover purchase-cover'></div>
    <div class='cart'>${CartSideNav()}</div>
    <div class='stock-limit'>
      <em>You Can Only Buy 10 Items For Each Product</em>
      <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
    </div>
  <div  class='order-now'></div>
  </div>`;
  }
  
  function CartSideNav() {
    return `
  <div class='side-nav'>
    <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
    <h2>Cart</h2>
    <div class='cart-items'></div>
    <div class='final'>
      <strong>Total: ₹ <span class='total'>0</span>.00/-</strong>
      <div class='action'>
        <button onclick='buy(1)' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
        <button onclick='clearCart()' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
      </div>
    </div>
  </div>`;
  }
  
  function Purchase() {
    let toPay = document.getElementsByClassName("total")[0].innerText;
    let itemNames = cartDetails.map((item) => {
      return `<span>${item.qty} x ${item.name}</span>`;
    });
    let itemPrices = cartDetails.map((item) => {
      return `<span>₹ ${item.price * item.qty}</span>`;
    });
    return `
  <div class='invoice'>
    <div class='shipping-items'>
      <div class='item-names'>${itemNames.join("")}</div>
      <div class='items-price'>${itemPrices.join("+")}</div>
    </div>
  <hr>
    <div class='payment'>
      <em>payment</em>
      <div>
        <p>total amount to be paid:</p><span class='pay'>₹ ${toPay}</span>
      </div>
    </div>
    <div class='order'>
      <button onclick='order()' class='btn-order btn'>Order Now</button>
      <button onclick='buy(0)' class='btn-cancel btn'>Cancel</button>
    </div>
  </div>`;
  }
  
  function OrderConfirm() {
    let orderId = Math.round(Math.random() * 1000);
    let totalCost = document.getElementsByClassName("total")[0].innerText;
    return `
  <div>
    <div class='order-details'>
      <em>your order has been placed</em>
      <p>Your order-id is : <span>${orderId}</span></p>
      <p>your order will be delivered to you in 3-5 working days</p>
      <p>you can pay <span>₹ ${totalCost}</span> by card or any online transaction method after the products have been dilivered to you</p>
    </div>
    <button onclick='okay(event)' class='btn-ok'>okay</button>
  </div>`;
  }
  //}
  
  //updates Ui components {
  function DisplayProducts() {
    let products = productDetails.map((product) => {
      return Product(product);
    });
    return products.join("");
  }
  
  function DisplayCartItems() {
    let cartItems = cartDetails.map((cartItem) => {
      return CartItems(cartItem);
    });
    return cartItems.join("");
  }
  
  function RenderCart() {
    document.getElementsByClassName(
      "cart-items"
    )[0].innerHTML = DisplayCartItems();
  }
  
  function SwitchBtns(found) {
    let element = found.getElementsByClassName("btn-add")[0];
    element.classList.toggle("qty-change");
    let hasClass = element.classList.contains("qty-change");
    found.getElementsByClassName("btn-add")[0].innerHTML = hasClass
      ? QtyBtn()
      : AddBtn();
  }
  
  function ToggleBackBtns() {
    let btns = document.getElementsByClassName("btn-add");
    for (let btn of btns) {
      if (btn.classList.contains("qty-change")) {
        btn.classList.toggle("qty-change");
      }
      btn.innerHTML = AddBtn();
    }
  }
  
  function CartIsEmpty() {
    let emptyCart = `<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>`;
    if (cartDetails.length == 0) {
      document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
    }
  }
  
  function CartItemsTotal() {
    let totalPrice = cartDetails.reduce((totalCost, item) => {
      return totalCost + item.price * item.qty;
    }, 0);
    let totalQty = cartDetails.reduce((total, item) => {
      return total + item.qty;
    }, 0);
    document.getElementsByClassName("total")[0].innerText = totalPrice;
    document.getElementsByClassName("total-qty")[0].innerText = totalQty;
  }
  
  function Stocks() {
    cartDetails.forEach((item) => {
      productDetails.forEach((product) => {
        if (item.name == product.name && product.qty >= 0) {
          product.qty -= item.qty;
          if (product.qty < 0) {
            product.qty += item.qty;
            document.getElementsByClassName("invoice")[0].style.height = "180px";
            document.getElementsByClassName(
              "order-details"
            )[0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
          } else if (product.qty == 0) {
            OutOfStock(product, 1);
          } else if (product.qty <= 5) {
            OutOfStock(product, 0);
          }
        }
      });
    });
  }
  
  function OutOfStock(product, handler) {
    let products = document.getElementsByClassName("card");
    for (let items of products) {
      let stocks = items.getElementsByClassName("stocks")[0];
      let name = items.getElementsByClassName("product-name")[0].innerText;
      if (product.name == name) {
        if (handler) {
          items.getElementsByClassName("out-of-stock-cover")[0].style.display =
            "flex";
          stocks.style.display = "none";
        } else {
          stocks.innerText = "Only Few Left";
          stocks.style.color = "orange";
        }
      }
    }
  }
  
  function App() {
    return `
  <div>
    ${Banner()}
  </div>`;
  }
  //}
  
  // injects the rendered component's html
  document.getElementById("app").innerHTML = App();
  