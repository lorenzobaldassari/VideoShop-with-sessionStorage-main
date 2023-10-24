const addresBarContent = new URLSearchParams(location.search);
//url searchparams cerca i parametry e location.search e la barra di ricerca
const eventId = parseInt(addresBarContent.get(`id`));
console.log(eventId);
const arrayOfGames = JSON.parse(localStorage.getItem(`arrayOfGames`));
console.log(arrayOfGames);

const generateEventDetails = function () {
  arrayOfGames.forEach((element) => {
    if (element.id === eventId) {
      const col = document.createElement(`div`);
      col.classList.add(`col-12`, `col-lg-6`);
      col.classList.add(`col`);
      col.classList.add(`bg-secondary`);
      col.classList.add(`px-0`);
      col.classList.add(`rounded-1`);
      col.classList.add(`hover`);
      col.innerHTML = `<div class="card box m-0 p-0 bg-white " onclick="settings()">
        <img id="cardimage" src="${element.imageUrl}" class="card-img-top w-100" alt="...">
        <h6 id="brand class"bg-warning" class="text-center mt-2 mb-4 ${element.brand}"> ${element.brand}</h6>
        <div class="card-body position-relative ">
      <h3 class="mb-4" id="title" class="card-title">${element.name}</h3>
      <p id="description" class="card-text">${element.description}</p>
      <a href="./Back-Office.html?id=${element.id}" onclick="sure()" class="btn btn-warning">MODIFICA</a>
      <button type="button" onclick="deleteEvent()" class="my-3 btn btn-danger">ELIMINA</button>
        <div class="position-absolute bottom-0 end-0 mb-2 me-2">
      
        <p id="description" class="card-text">${element.price}$</p> 
        </div>
        </div>
        </div>`;

      rowPosition.appendChild(col);
    }
  });
};
generateEventDetails();

const deleteEvent = () => {
  if (confirm("Your Are deleting this Item! Are you sure?")) {
    const array = [];
    arrayOfGames.forEach((element) => {
      if (element.id !== eventId) {
        array.push(element);
      }
      localStorage.setItem(`arrayOfGames`, JSON.stringify(array));
    });

    location.assign(`./home-page.html`);
  }
};

const sure = () => {
  if (!confirm("Are you sure?")) {
    location.assign(`./Back-Office.html?id=${events._id}`);
  }
};
