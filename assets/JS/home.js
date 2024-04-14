const URL = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0";

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
        // const remove = document.createElement("button");
        // remove.classList.add("btn");
        // remove.classList.add("btn-danger");

        // remove.innerHTML = "Remove";

        card.innerHTML = `
           <img src=${product.imageUrl} class="card-img-top" alt="...">
                  <div id='card-body' class="card-body">
                      <p class="card-text name"> ${product.name}</p>
                      <p class= 'card-text '> ${product.description}
                      <p class= 'card-text brand'> ${product.brand}
                     
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  ${
                        product.price !== 0 ? "bg-primary" : "bg-success"
                      }">
                       ${product.price !== 0 ? product.price + "€" : "Free"}
                     
                      <span class="visually-hidden">unread messages</span>
                    </span> 
                    <div>
                    <a class = 'btn btn-dark mt-5' href='/details.html?appId=${
                      product._id
                    }'>Show More</a>   
                     <a  id='custom' class = 'btn btn-warning mt-2' href='/backoffice.html?appId=${
                       product._id
                     }'>custom</a> 
                     </div> 
                  </div> `;

        // card.appendChild(remove);

        // const custom = document.createElement("a");
        // custom.classList.add("btn", "btn-warning");
        // custom.innerText = "custom";
        // custom.setAttribute("href", "/backoffice.html?appId=${produ}");

        col.appendChild(card);

        row.appendChild(col);
        // details.addEventListener("click", (event) => {
        //   event.preventDefault();
        //   fetch(URL + id, {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0",
        //     },
        //   })
        //     .then((resp) => {
        //       if (resp.ok) {
        //         return resp.json();
        //       }
        //     })
        //     .then((detailsProduct) => {});
        // });
        // remove.addEventListener("click", (event) => {
        //event.preventDefault();
        //   col.remove();
        //   fetch(URL + product._id, {
        //     method: "DELETE",

        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTI5MTIzNjIsImV4cCI6MTcxNDEyMTk2Mn0.S8zuUGGbVKMxTQcSs42sRnSt1wtSJ0plS6c2D25_pT0",
        //     },
        //   });
        // });
      });
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchProducts();
};
