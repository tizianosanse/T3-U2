const URL = "https://striveschool-api.herokuapp.com/api/product/";
window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", createProducts);
};

const createProducts = (event) => {
  event.preventDefault();
  const product = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image").value,
    price: document.getElementById("price").value,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((productsObj) => {
      alert("prodotto con id :" + productsObj._id + "creato");
    });
  event.target.reset();
};
