const URL = "https://striveschool-api.herokuapp.com/api/product/";
const fetchProducts = () => {
  fetch(URL, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0",
    },
  })
    .then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 400) {
          throw new Error("Bad Request");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        if (response.status === 403) {
          throw new Error("Forbidden");
        }
        if (response.status === 404) {
          throw new Error("Not Found");
        }
        if (response.status === 500) {
          throw new Error("Server Error");
        }

        throw new Error("Generic Fetch Error");
      }
    })
    .then((products) => {
      console.log(products);

      const row = document.getElementById("productsRow");

      products.forEach((product) => {
        const col = document.createElement("div");

        col.classList.add("col-6");
        col.classList.add("col-md-4");
        col.classList.add("col-lg-2");
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mb-5");

        const remove = document.createElement("button");
        remove.classList.add("btn");
        remove.classList.add("btn-danger");

        remove.innerHTML = "Remove";

        card.innerHTML = `
           <img src=${product.imageURL} class="card-img-top" alt="...">
                  <div class="card-body">
                      <p class="card-text">${product.name}</p>
                      <p class= 'card-text'>${product.description}
                      <p class= 'card-text'>${product.brand}
                      <h5 class="card-title">Price: ${product.price}€</h5>   
                  </div> `;
        card.appendChild(remove);

        col.appendChild(card);

        row.appendChild(col);
        remove.addEventListener("click", (event) => {
          event.preventDefault();
          col.remove();
        });
      });
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchProducts();
};
