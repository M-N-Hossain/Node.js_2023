import express from "express";
const app = express();

// Middleware is on the serverside, it happens before sending the response form server
function houseBUtler(req, res, next) {
    console.log("This way....");
    next();
  }
app.use("/room", houseBUtler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);


function guard(req, res, next) {
    if (req.query.name === "Anders") {
        next();
    }
    else{
        res.send({message: "You are not allowed HERE!"})
    }
}


app.get("/frontdoor", guard, (req, res) => {
  res.send({ message: "Please enter" });
});





app.get("*", (req, res) => {
  res.send("<h1>404 - NOT FOUND</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT);
});
