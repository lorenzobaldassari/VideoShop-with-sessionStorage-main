const data = "data.json";

const getElement = function (api) {
  // inizio fetch
  fetch(api, {})
    //   fine fetch
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert(`problema`);
        throw new Error(`errore nella DELETE`);
      }
    })
    .then((events) => {
      console.log(events);
    })
    .catch((err) => {
      console.log(`si e verificato un errore`, err);
    });
};
getElement(data)