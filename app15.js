// let title = "hello";

// let array = [
//     {name: "Islam", age: 15},
//     {name: "Tolobek", age: 18},
// ];

// let box = document.getElementById("box")

// box.innerHTML = array
//     .map((item) => {
//         return `
//         <p>${item.name}</p>
//         <p>${item.age}</p>
//         `
//     })
//     .join("")

// -------------------------------------------
let products = [
  {
    title: "BESTSELLER",
    image: "./assets/image/png/kategorie-bestseller.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    id: 11,
    price: 149,
  },
  {
    title: "SOLITAIRE",
    image: "./assets/image/png/kategorie-guenstig-1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    id: 12,
    price: 160,
  },
  {
    title: "PLATINUM",
    image: "./assets/image/png/kategorie-platin-1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    id: 13,
    price: 178,
  },
  {
    title: "cheap",
    image: "./assets/image/png/kategorie-solitaer-1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    id: 14,
    price: 200,
  },
];

let cartArray = [];

let product_body = document.querySelector(".container-rings");
let count = document.querySelector(".count");
let modalProduct = document.querySelector(".modal-product");
let modalBtn = document.querySelector(".modal-btn");

function updateCartCount() {
  count.innerHTML = cartArray.length;
}

function displayCart() {
  modalProduct.innerHTML = cartArray.map((item) => {
      return `
      <div class="modal-main">
        <div>
          <h1>${item.title}</h1>
            <p>${item.price}<b>$</b></p>
        </div>
          <img src="${item.image}" alt="" />
          </div>
      `;
    }).join("");
}
// updateCartCount ();
product_body.innerHTML = products.map((item) => {
  return `
  <div class="container-ring">
   <a href="decstop-6.html">

    <div>
        <img src="${item.image}" alt="">
        <h1>${item.title}</h1>
    </div>
        <p>${item.desc}</p>
        <button onclick ="addCart('${item.id}')">Discover now</button>
   </a>
  </div>  
  `;
}).join("");


function addCart(id) {
  let findProduct = products.find((x) => x.id == id);
  if (findProduct) {
    cartArray.push(findProduct);
    updateCartCount();
    displayCart();
  }
}


// ........................................

let productes = [
  {
    title: "123 GOLD",
    image: "./assets/image/1.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 1,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/2.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 2,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/3.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 3,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/4.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 4,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/5.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 5,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/6.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 6,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/7.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 7,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/8.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 8,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/9.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 9,
    price: 149,
  },
  {
    title: "123 GOLD",
    image: "./assets/image/10.svg",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
    id: 10,
    price: 149,
  },
];

let productes_body = document.querySelector(".container-rings-first");

function addCarts(id) {

  let findProduct = productes.find((x) => x.id == id);

  if (findProduct) {
    cartArray.push(findProduct);
    updateCartCount();
    displayCart();
  }
}

productes_body.innerHTML = productes.map((item) => {
    return `
    <div class="container-ring">
    <a href="customize.html"></a>
      <div>
          <img src="${item.image}" alt="">
          <h1>${item.title}</h1>
      </div>
      <div>
        <p>${item.desc}</p>
        <button onclick ="addCarts('${item.id}')">Discover now</button>
      </div>
          
    </div>
    `;
}).join("");
// ----------------------------
let cardBtn = document.getElementById("card");
let modal = document.querySelector(".modal");
let closeBtn = document.getElementById("close");

cardBtn.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgb(210, 181, 116, 0.1)" 
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("click", function (event) {
  const isModal = modal.contains(event.target);
  const isCartBtn = cardBtn.contains(event.target);
  if (!isModal && !isCartBtn) {
    modal.style.display = "none";
  }
});

modalBtn.onclick = function () {
  cartArray = [];
  updateCartCount();
  displayCart();
};