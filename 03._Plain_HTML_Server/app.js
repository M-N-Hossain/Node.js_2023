const express = require("express");
const app = express();

import guardsRouter from "./routers/guardsRouter.js"
import tanksRouter from "./routers/tanksRouter.js"
import visitorsRouter from "./routers/visitorsRouter.js"

// givig access to static files to express on secuirity purpose
app.use(express.static("public"));

const tanksUtil = require("./util/tanks.js");

let visitorCount = 0;

//  Pages

app.get("/", (req, res) => {
  res.sendFile(
    // "C:/Users/nhnah/Code/Node.js_2023/03._Plain_HTML_Server/frontpage.html"
    __dirname + "/public/frontpage/frontpage.html"
  );
});

router.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

router.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});

router.get("/museumGuards", (req, res) => {
  res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
});



app.get("/proxy", (req, res) => {
  const text = "";
  fetch("https://www.google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
});

// Fetching

app.use(tanksRouter);
app.use(guardsRouter);
app.use(visitorsRouter);



// time
app.get("/time", (req, res) => {
  res.send({
    time: new Date(),
  });
});

// week days start with sunday
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

app.get("/time/day", (req, res) => {
  const date = new Date();
  res.send({
    // date.getDay() gives a index number and  the index start with 0
    day: days[date.getDay()],
  });
});

app.get("/time/month", (req, res) => {
  const date = new Date();
  res.send({
    // date.getMonth() gives a index number and  the index start with 0
    month: months[date.getMonth()],
  });
});



const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port", PORT);
});
