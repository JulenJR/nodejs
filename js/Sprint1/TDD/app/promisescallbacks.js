//NIVELL 2 punt 1 & 2
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

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

const getEmployee = (id) => {
  return new Promise(function (resolve, reject) {
    let employee = employees.find((e) => e.id === id);
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

  return `n1e1 --->    ${empl.name} te un salari de ${sal.salary}`;
}


//punt 2
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

function twoSecs() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("n1e2 --->    Han pasat 2 segons");
    }, 2000);
  });
}

async function resolvePromise() {
  const output = await twoSecs();
  console.log(output);
}

module.exports = {
  getEmployee,
  getSalary,
  asyncEmployee
};
