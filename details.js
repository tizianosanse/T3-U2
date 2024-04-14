const URL = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const id = params.get("appId");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0";
window.addEventListener("DOMContentLoaded", () => {
  fetch(URL + id, {
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
    .then((productDetails) => {
      const col = document.getElementById("col");
      const figure = document.createElement("figure");
      figure.classList.add("figure");
      const img = document.createElement("img");
      img.setAttribute("src", productDetails.imageUrl);
      img.classList.add("figure-img','img-fluid','rounded", "w-75", "h-50");
      const content = document.createElement("div");
      content.classList.add("d-flex", "flex-column");
      const name = document.createElement("h3");
      name.innerText = productDetails.name;
      const description = document.createElement("p");
      description.innerText = productDetails.description;
      const brand = document.createElement("h4");
      brand.innerText = productDetails.brand;
      const price = document.createElement("h2");
      price.innerText = productDetails.price + "€";
      const buy = document.createElement("button");
      buy.classList.add("btn", "btn-dark");
      buy.innerText = "buy now";
      const returnHomePage = document.createElement("a");
      returnHomePage.innerText = "Return";
      returnHomePage.classList.add("btn", "btn-primary", "mt-2");
      returnHomePage.setAttribute("href", "/home.html");

      figure.appendChild(img);
      col.appendChild(figure);
      col.appendChild(content);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(brand);
      content.appendChild(price);
      content.appendChild(buy);
      content.appendChild(returnHomePage);
    });
});
