fetch("http://localhost:8080/api/visitors")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });

function updateVisitorCount(visitorCount){
    const visitorCount = document.querySelector(".visitorCount")
    

}