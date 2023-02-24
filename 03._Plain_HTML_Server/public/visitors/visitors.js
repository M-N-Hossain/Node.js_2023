fetch("http://localhost:8080/api/visitors")
  .then((response) => response.json())
  .then((result) => {
    updateVisitorCount(result.data);
  });

function updateVisitorCount(visitorCount) {
  const visitorCountDiv = document.querySelector(".visitorCountDiv");
  visitorCountDiv.innerText = visitorCount;
}

function writeInVisitorLog() {
  fetch("http://localhost:8080/api/visitors", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => updateVisitorCount(result.data));
}
