const express = require("express");
const app = express();

// givig access to static files to express on secuirity purpose
app.use(express.static("public"));

const tanks = [
  { name: "Tiger", nationality: "Germany" },
  { name: "Leopard", nationality: "Germany" },
  { name: "Royal Bengal", nationality: "Bangladesh" },
];

let visitorCount = 0;



//  Pages


app.get("/", (req, res) => {
  res.sendFile(
    // "C:/Users/nhnah/Code/Node.js_2023/03._Plain_HTML_Server/frontpage.html"
    __dirname + "/public/frontpage/frontpage.html"
  );
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});


// Fetching

app.get("/api/tanks", (req, res) => {
  res.send({ data: tanks });
});

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorCount });
});

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
