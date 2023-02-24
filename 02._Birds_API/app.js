// import express framework
const express = require("express");
// instantiate
const app = express();

const birds = [
  { id: 1, name: "Violet-backed starling", maleRating: 10, femaleRating: 2 },
];

let currentId = 1;

app.get("/birds", (req, res) => {
  res.send({ data: birds });
});

app.get("/birds/:id", (req, res) => {
  const foundBird = birds.find((bird) => bird.id === Number(req.params.id));
  res.send({ data: foundBird });
});

app.put("/birds", (req, res) => {
  const birdToCreate = req.body;
  currentId++;
  birdToCreate.id = currentId;
  birds.push(birdToCreate);
  res.send(birdToCreate);
});

app.delete("/birds/:id", (req, res) => {
  const foundIndex = birds.foundIndex(bird => bird.id === req.params.id);

  if(foundIndex === -1){
    res.status(404).send({message: `No bird found bird with id ${req.params.id}`})
  }
})

app.listen(8080, () => {
  console.log("Server is running port ", 8080);
});
