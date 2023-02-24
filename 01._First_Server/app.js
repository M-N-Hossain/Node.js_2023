// const app = require("express")();
const express = require("express");
const app = express();
app.use(express.json());

// HTTP method

app.get("/", (req, res) => {
  res.send({ message: "Our first route" });
});

let bicycleSpins = 0;

app.get("/spinthebicycle", (req, res) => {
  bicycleSpins += 1;
  res.send({
    message: `People have spun the bicycle wheel ${bicycleSpins} times`,
  });
});

let dinosaur;

app.get("/dinosaur", (req, res) => {
  dinosaur = "ow ow ow";
  res.send({
    message: `dinosaur screm like ${dinosaur}`,
  });
});

app.get("/about", (req, res) => {
  res.send(
    `
        <h1>About<h1>
        <h3>This is my about page<h3>
        `
  );
});

//  /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
  console.log(req.params);
  res.send({
    bottleSize: req.params.bottleSize,
  });
});

app.post("/package", (req, res) => {
  console.log(req.body);
  res.send({ message: req.body });
});

app.listen(8080);
