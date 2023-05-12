const dateAndTimeWrapperDiv = document.querySelector(".dateAndTimeWrapper");
const timeDiv = document.querySelector(".time");
const dateDiv = document.querySelector(".date");

// the method will execute again and again after 1 sec (1000 milisec = 1 sec)
setInterval(() => {
  const date = new Date();
  timeDiv.innerText = date.toLocaleTimeString();
}, 1000);

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

const setDate = () => {
  const date = new Date();

  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  console.log(day);
  return (dateDiv.innerText = `${days[day]},  ${day + 1} ${
    months[month]
  } ${year}`);
};
setDate();

// ***********Fetching**************

// ***Get Mapping***

const allEmployeeWrapperDiv = document.querySelector(".allEmployeeWrapperDiv");
const nameSpan = document.querySelector(".name");
const employeeDiv = document.querySelector(".employee");
const employeeTable = document.querySelector(".employeeTable");

fetch("http://localhost:8080/api/employee")
  .then((response) => response.json())
  .then((result) => {
    result.forEach((employee) => {
      addEmployeeInfoInTable(employee);
    });
  });

function addEmployeeInfoInTable(employee) {
  const tr = document.createElement("tr");

  let nameDate = document.createElement("td");
  nameDate.innerText = employee.name;
  tr.appendChild(nameDate);

  let loggedInDate = document.createElement("td");
  loggedInDate.innerText = employee.loggedIn;
  tr.appendChild(nameDate);

  let loggedOutDate = document.createElement("td");
  loggedOutDate.innerText = employee.loggedOut;
  tr.appendChild(nameDate);

  let totalWorkedHourData = document.createElement("td");
  totalWorkedHourData.innerText = employee.totalWorkedHour;

  const inButton = document.createElement("button");
  inButton.innerText = "IN";
  inButton.addEventListener("click", () => {
    loggedIn(
      employee.id,
      employee.name,
      employee.loggedOut,
      employee.totalWorkedHour
    );
  });

  const outButton = document.createElement("button");
  outButton.innerText = "OUT";
  outButton.addEventListener("click", () => {
    loggedOut(
      employee.id,
      employee.name,
      employee.loggedIn,
      employee.loggedOut
    );
  });

  tr.appendChild(nameDate);
  tr.appendChild(loggedInDate);
  tr.appendChild(loggedOutDate);
  tr.appendChild(totalWorkedHourData);
  tr.appendChild(inButton);
  tr.appendChild(outButton);

  employeeTable.appendChild(tr);
}

// ***Pathc Mapping***

const loggedIn = (id, name, loggedOut, totalWorkedHour) => {
  console.log("loggedIn Clicked");
  fetch("http://localhost:8080/api/employee/loggedIn/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      loggedIn: new Date().toLocaleTimeString(),
      loggedOut: loggedOut,
      totalWorkedHour: totalWorkedHour,
    }),
  })
    .then((response) => response.json())
    .then();
};

function diffrenece(time1, time2) {
  const HH =
    Number.parseInt(time2.substring(0, 2)) -
    Number.parseInt(time1.substring(0, 2));
  const MM =
    Number.parseInt(time2.substring(3, 5)) -
    Number.parseInt(time1.substring(3, 5));
  const SS =
    Number.parseInt(time2.substring(6, 8)) -
    Number.parseInt(time1.substring(6, 8));
  let workedHours = HH + ":" + MM + ":" + SS + " Minutes";

  // const t2HH = Number.parseInt(time2.substring(0,2));
  // const t2MM = Number.parseInt(time2.substring(3,5));
  // const t2SS = Number.parseInt(time2.substring(6,8));
  return workedHours;
}

const loggedOut = (id, name, loggedIn, loggedOut) => {
  console.log("loggedIn Clicked");
  fetch("http://localhost:8080/api/employee/loggedIn/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      loggedIn: loggedIn,
      loggedOut: new Date().toLocaleTimeString(),
      totalWorkedHour: diffrenece(loggedIn, new Date().toLocaleTimeString()),
    }),
  })
    .then((response) => response.json())
    .then();
};
