import postres from "./data.js";

// console.log(postres);
// let cardImgDesktop = document.querySelector("#desktopImg");
// let cardName = document.querySelector("#name");

// cardName.textContent = postres[0].name;
// cardImgDesktop.setAttribute("src", postres[0].image.desktop);

let cardsContainer = document.querySelector("#cardsContainer");

for (let element of postres) {
  cardsContainer.innerHTML += `
        <div
          class="relative w-[340px] bg-amber-300 h-[335px] flex flex-col justify-between justify-self-center lg:max-h-[290px] lg:max-w-[330px] lg:h-auto lg:w-[200px]">
          <img id="desktopImg" class="rounded-2xl hidden lg:block" src=${element.image.desktop}
            alt="">
          <img class="rounded-2xl block lg:hidden" src=${element.image.mobile} alt="">
          <button id="addToCartButton"
            class="absolute left-[90px] top-[200px] flex gap-3 bg-white p-[10px_25px_10px_25px] rounded-4xl self-center lg:mx-auto lg:w-fit lg:left-0 lg:right-0 lg:top-[55%]">
            <img src="./assets/images/icon-add-to-cart.svg" alt="">Add to cart
          </button>
          <div>
            <p id="category">${element.category}</p>
            <p id="name">${element.name}</p>
            <p id="price">$${element.price}</p>
          </div>
        </div>`;
}

let addToCartButton = document.querySelector("#addToCartButton");

addToCartButton.addEventListener("click", function () {
  addToCartButton.classList.replace("bg-white", "bg-[#D23404]");
  addToCartButton.textContent = `<img src="./assets/images/icon-increment-quantity.svg" alt=""/>`;
});
