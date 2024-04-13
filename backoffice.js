const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0";
const params = new URLSearchParams(window.location.search);
const id = params.get("appId");
const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";
window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", createProducts);
  if (id) {
    const save = document.getElementById("create");
    save.innerText = "Save";
    save.classList.add("btn-success");
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + token,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((product) => {
        const name = document.getElementById("name");
        name.value = product.name;
        const description = document.getElementById("description");
        description.value = product.description;
        const brand = document.getElementById("brand");
        brand.value = product.brand;
        const img = document.getElementById("image");
        img.value = product.imageUrl;
        const price = document.getElementById("price");
        price.value = product.price;
      });
  }
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
    method: method,
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
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
