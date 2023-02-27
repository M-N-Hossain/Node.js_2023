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
  const outButton = document.createElement("button");
  outButton.innerText = "OUT";


  tr.appendChild(nameDate);
  tr.appendChild(loggedInDate);
  tr.appendChild(loggedOutDate);
  tr.appendChild(totalWorkedHourData);
  tr.appendChild(inButton);
  tr.appendChild(outButton);

  employeeTable.appendChild(tr);
}

