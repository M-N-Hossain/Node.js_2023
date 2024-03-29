const express = require("express");
const app = express();
app.use(express.json());

// givig access to static files folder to express on secuirity purpose
app.use(express.static("public"));

let employees = [
  { id: 1, name: "Jon", loggedIn: 0.0, loggedOut: 0.0, totalWorkedHour: 0.0 },
  { id: 2, name: "Ron", loggedIn: 0.0, loggedOut: 0.0, totalWorkedHour: 0.0 },
];

// Pages

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

// Api

app.get("/api/employee", (req, res) => {
  res.send(employees);
});

app.patch("/api/employee/loggedIn/:id", (req, res) => {
  let foundEmployeeIndex = employees.findIndex(
    (employee) => employee.id === Number(req.params.id)
  );

  if (foundEmployeeIndex === -1) {
    res
      .status(404)
      .send({ message: `No employee found with this id: ${req.params.id}` });
  } else {
    const foundEmployee = employees[foundEmployeeIndex];
    console.log(foundEmployee);

    const updateFoundEmployee = {
      ...foundEmployee,
      ...req.body,
      id: foundEmployee.id,
    };
    employees[foundEmployeeIndex] = updateFoundEmployee;
    res.send(updateFoundEmployee);
  }
});

app.patch("/api/employee/loggedOut/:id", (req, res) => {
  let foundEmployeeIndex = employees.findIndex(
    (employee) => employee.id === Number(req.params.id)
  );

  if (foundEmployeeIndex === -1) {
    res
      .status(404)
      .send({ message: `No employee found with this id: ${req.params.id}` });
  } else {
    const foundEmployee = employees[foundEmployeeIndex];
    console.log(foundEmployee);

    const updateFoundEmployee = {
      ...foundEmployee,
      ...req.body,
      id: foundEmployee.id,
    };
    employees[foundEmployeeIndex] = updateFoundEmployee;
    res.send(updateFoundEmployee);
  }
});



const time = new Date().toLocaleTimeString();
console.log(Number.parseInt(time.substring(6,8)))


const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("Server is running on port " + port);
  }
});
