const apiAddress = `data.json`;

const rowPosition = document.getElementById(`rowPosition`);
const arrayOfGames = JSON.parse(localStorage.getItem(`arrayOfGames`));
console.log(arrayOfGames);
const getData = function () {
  for (i = 0; i < arrayOfGames.length; i++) {
    if (arrayOfGames[i].price === 0) {
      arrayOfGames[i].price = `Gratis`;
    }
    const col = document.createElement(`div`);
    col.classList.add(`col-sm-6`, `col-md-4`, `col-xl-3`, `col-xxl-2`);
    col.innerHTML = `<div onmouseenter="over(event)" onmouseleave="leave(event)" class="hover  card  box m-0 p-0">
        <div class="">
        <img id="cardimage" src="${arrayOfGames[i].imageUrl}" class="card-img-top imgBox  " alt="...">
        </div>
        <h6 id="brand class"bg-warning" class="text-center mt-2 mb-1 ${arrayOfGames[i].brand}"> ${arrayOfGames[i].brand}</h6>
        <div class="card-body position-relative card-title d-flex flex-column justify-content-between align-items-start ">
      <h3  id="title" class="mb-4 fw-bold truncate-1 ">${arrayOfGames[i].name}</h3>
      <p id="description" class="card-text truncate-3">${arrayOfGames[i].description}</p>
      <div class="d-flex">
      <a href="./details.html?id=${arrayOfGames[i].id}" class="btn btn-primary">Details</a>
      <button type="button" class="ms-2 btn btn-success" onclick="addToChart(event)">Cart</button>
      </div>
        <div class="position-absolute bottom-0 end-0 mb-2 me-2">
       
        <p id="price" class="card-text">${arrayOfGames[i].price}$</p>
        </div>
        </div>
        </div>`;

    rowPosition.appendChild(col);
  }
};

getData();

const over = function (event) {
  // event.target.children[2].children[3].children[0].style.color = `red`;
  // event.target.children[2].children[3].children[0].style.fontSize = `2em`;
  event.target.children[2].children[3].children[0].classList.add(`red`);
  // price2.style.color=`red`
};
const leave = function (event) {
  // event.target.children[2].children[3].children[0].style.color = `black`;
  // event.target.children[2].children[3].children[0].style.fontSize = `1em`;
  event.target.children[2].children[3].children[0].classList.remove(`red`);
  event.target.children[2].children[3].children[0].classList.add(`white`);
  // price2.style.color=`red`
};

// carrello
const counter = document.getElementById(`counter`);
const cartPosition = document.getElementById(`cartPosition`);
const tot = document.getElementById(`tot`);

let count = 0;
let total = 0;

const addToChart = function (e) {
  count++;
  console.log(
    e.target.parentElement.parentElement.children[3].children[0].innerText
  );
  const cartBox = document.createElement(`div`);
  cartBox.classList.add(
    `d-flex`,
    `justify-content-between`,
    `back`,
    `text-white`
  );
  const titleToAdd = document.createElement(`p`);
  const priceToAdd = document.createElement(`p`);
  titleToAdd.classList.add(`fw-semibold`, `mb-0`, `px-3`);
  priceToAdd.classList.add(`fw-semibold`, `me-3`, `mb-0`);
  total =
    total +
    parseFloat(
      e.target.parentElement.parentElement.children[3].children[0].innerText
    );
  roundTot = total.toFixed(2);
  tot.innerText = `${roundTot} $`;
  // finire i collegamenti
  titleToAdd.innerText = `${e.target.parentElement.parentElement.children[0].innerText}`;
  priceToAdd.innerHTML = `${e.target.parentElement.parentElement.children[3].children[0].innerText}<i class="fas fa-trash-alt ms-2"></i>`;
  // cartBox.innerHTML = `${e.target.parentElement.parentElement.children[0].innerText}
  //    \u00a0 \u00a0 \u00a0
  //   ${e.target.parentElement.parentElement.children[3].children[0].innerText} <i class="fas fa-trash-alt ms-2"></i>`;
  // const trashCan = document.createElement(`div`);
  // trashCan.innerHTML = `<i class="fas fa-trash-alt ms-2"></i>`;
  cartBox.appendChild(titleToAdd);
  cartBox.appendChild(priceToAdd);
  // cartBox.appendChild(trashCan);
  cartPosition.appendChild(cartBox);
  counter.innerText = count;
  priceToAdd.addEventListener(`click`, function (e) {
    console.log(parseFloat(e.target.parentElement.innerText));
    // console.log((e.target.parentElement.firstChild.innerText));
    // let a = e.target.parentElement.lastChild.innerText
    // console.log(a);
    e.target.parentElement.parentElement.remove();
    total = total - parseFloat(e.target.parentElement.innerText);
    roundTot = total.toFixed(2);

    tot.innerText = `${roundTot} $`;
    count--;
    counter.innerText = count;
  });
};
