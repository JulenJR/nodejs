//NIVELL 3

const { js } = require("../basededades.json");

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

/*
const getEmployee = (id) => {
  return new Promise(function (resolve, reject) {
    fetch("basededades.json")
      .then((response) => response.json())
      .then((employeelist = document.getElementById(id)));
    employeelist.employees.array.forEach((element) => {
      if (element.id === id) resolve(element);
      else reject("id not found");
    });
  });
};
*/

const getEmployee = (id) => {
  return new Promise(function (resolve, reject) {
    let employee = employees.find((s) => s.id === id);
    resolve(employee);
    reject("id not found");
  });
};

const getSalary = (id) => {
  return new Promise(function (resolve, reject) {
    let salary = salaries.find((s) => s.id === id);
    resolve(salary);
    reject("id not found");
  });
};

async function asyncEmployee(id) {
  let empl = await getEmployee(id);
  let sal = await getSalary(id);

  return `${empl.name} te un salari de ${sal.salary}`;
}

module.exports = {
  getEmployee,
  getSalary,
  asyncEmployee,
};
