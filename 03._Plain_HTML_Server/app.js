const express = require("express");
const app = express();

// givig access to static files to express on secuirity purpose
app.use(express.static("public"));

const tanks = [
  {name: "Tiger", nationality: "Germany"},
  {name: "Leopard", nationality: "Germany"},
  {name: "Royal Bengal", nationality: "Bangladesh"}
]

let visitorCount = 0;

// console.log(__dirname);
app.get("/", (req, res) => {
  res.sendFile(
    // "C:/Users/nhnah/Code/Node.js_2023/03._Plain_HTML_Server/frontpage.html"
    __dirname + "/public/frontpage/frontpage.html"
  );
});

//  Pages

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});


// Fetching

app.get("/api/tanks", (req, res) => {
  res.send({data : tanks});
});

app.get("/api/visitors", (req, res) => {
  res.send({data : visitorCount});
});

app.put("/api/visitors", (req, res) => {
  res.send({data : ++visitorCount});
});



const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port", PORT);
});
