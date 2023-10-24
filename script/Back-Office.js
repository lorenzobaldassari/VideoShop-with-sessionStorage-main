const form = document.getElementById(`form`);

const apiAddress = `data.json`;
const apiKey = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWUxZTEzOWM0MzAwMTg4MTQ1NjEiLCJpYXQiOjE2OTcxODEyMTQsImV4cCI6MTY5ODM5MDgxNH0.wbkCpZIlzCh6r9Ncz_8mFwOOywnSEBiR4it3uPbRXUA`;
const formReference = document.getElementById(`form3`);
const button = document.getElementById(`submitButton`);
const brand1 = document.getElementById(`brand`);
const name1 = document.getElementById(`name`);
const description1 = document.getElementById(`description`);
const imgURL1 = document.getElementById(`imgURL`);
const price1 = document.getElementById(`price`);
const addresBarContent = new URLSearchParams(location.search);
const eventId = parseInt(addresBarContent.get(`id`));
console.log(eventId);
const arrayOfGames = JSON.parse(localStorage.getItem(`arrayOfGames`));
console.log(arrayOfGames);
arrayOfGames.forEach((element) => {
  console.log(element.id);
  if (element.id === eventId) {
    description1.value = element.description;
    console.log(element.description);
    name1.value = element.name;
    brand1.value = element.brand;
    imgURL1.value = element.imageUrl;
    price1.value = element.price;
  }
});

button.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (eventId !== 0) {
    const array = [];
    arrayOfGames.forEach((element) => {
      if (element.id !== eventId) {
        array.push(element);
      }
    });
    const obj = {
      name: name1.value,
      description: description1.value,
      brand: brand1.value,
      imageUrl: imgURL1.value,
      price: price1.value,
      id: Math.floor(Math.random() * 1000000000),
    };
    array.push(obj);

    localStorage.setItem(`arrayOfGames`, JSON.stringify(array));
    alert(`modifica eseguita correttamente`);
    brand1.value = ``;
    imgURL1.value = ``;
    price1.value = ``;
    description1.value = ``;
    name1.value = ``;
    location.assign(`./home-page.html`);
  } else {
    if (localStorage.getItem(`arrayOfGames`)) {
      const arrayOfGames = JSON.parse(localStorage.getItem(`arrayOfGames`));

      const array = {
        name: name1.value,
        description: description1.value,
        brand: brand1.value,
        imageUrl: imgURL1.value,
        price: price1.value,
        id: Math.floor(Math.random() * 1000000000),
      };
      arrayOfGames.push(array);
      localStorage.setItem(`arrayOfGames`, JSON.stringify(arrayOfGames));
      console.log(`ok`);
      console.log(arrayOfGames);
      alert(`Oggetto inviato correttamente!`);
      brand1.value = ``;
      imgURL1.value = ``;
      price1.value = ``;
      description1.value = ``;
      name1.value = ``;
    } else {
      const arrayOfGames = [];

      const array = {
        name: name1.value,
        description: description1.value,
        brand: brand1.value,
        imageUrl: imgURL1.value,
        price: price1.value,
        id: Math.floor(Math.random() * 10000),
      };
      arrayOfGames.push(array);
      localStorage.setItem(`arrayOfGames`, JSON.stringify(arrayOfGames));
      console.log(arrayOfGames);
      alert(`Oggetto inviato correttamente!`);
      brand1.value = ``;
      imgURL1.value = ``;
      price1.value = ``;
      description1.value = ``;
      name1.value = ``;
    }
  }
});

const resetButton = document.getElementById(`reset`);
resetButton.addEventListener(`click`, () => {
  description1.value = ``;
  name1.value = ``;
  brand1.value = ``;
  imgURL1.value = ``;
  price1.value = ``;
});
