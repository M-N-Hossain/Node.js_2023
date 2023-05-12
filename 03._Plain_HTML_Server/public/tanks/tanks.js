let nationality = document.querySelector(".nationality");
let name = document.querySelector(".name");

// Fetching tanks api to get all the tanks

fetch("http://localhost:8080/api/tanks")
  .then((response) => response.json())
  .then((result) => {
    const tankWrapperDiv = document.querySelector(".tanks-wrapper");

    result.data.forEach((tank) => {
      const tankDiv = document.createElement("div");

      const tankNameP = document.createElement("p");
      tankNameP.innerText = tank.name || "";
      const tankNationalityP = document.createElement("p");
      tankNationalityP.innerText = tank.nationality || "";

      tankDiv.appendChild(tankNameP);
      tankDiv.appendChild(tankNationalityP);

      const breakBr = document.createElement("br");
      tankDiv.appendChild(breakBr);

      tankWrapperDiv.appendChild(tankDiv);
    });
  });


