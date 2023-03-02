//nivell 1 exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const num = 5;
const endres = () => {
  return new Promise((resolve, reject) => {
    if (num >= 0) {
      const pos = () => `n1e1 --->    ${num} es un nombre positiu`;
      resolve(pos);
    } else reject(new Error(`n1e1 --->    ${num} es un nombre negatiu`));
  });
};

endres()
  .then((res) => {
    console.log(res());
  })
  .catch((err) => {
    console.log(err.message);
  });

//nivell 1 exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola)
//en funció del paràmetre rebut.

const value = (num12, callback) => {
  if (num12 >= 0) callback(`n1e2 --->    ${num12} nombre positiu`);
  else callback(`n1e2 --->    ${num12} nombre negatiu`);
};

function isposneg(res) {
  console.log(res);
}

value(4, isposneg);

//nivell 2 exercici 1
//Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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
    reject(new Eerror("id not found"));
  });
};

getEmployee(2)
  .then((res) => {
    console.log(`n2e1 --->    empleat amb id ${res.id} es diu ${res.name}`);
  })
  .catch((err) => {
    console.log(err.message);
  });

//nivell 2 exercici 2
//Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (id) => {
  return new Promise(function (resolve, reject) {
    let salary = salaries.find((s) => s.id === id);
    resolve(salary);
  });
};

getSalary(1)
  .then((res) => {
    console.log(
      `n2e2 --->    empleat amb id ${res.id} te un salari de ${
        getSalary(res.id).salary
      }`
    );
  })
  .catch((err) => {
    console.log(err.message);
  });

//nivell 2 exercici 3
//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises
//de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

getEmployee(3)
  .then((res) => {
    console.log(
      `n2e3 --->    empleat amb id ${res.id} es diu ${
        res.name
      } i te un salari de ${getSalary(res.id).salary}`
    );
  })
  .catch((err) => {
    console.log(err.message);
  });

//nivell 3 exercici 1
//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

getEmployee(5)
  .then((res) => {
    console.log(
      `n2e3 --->    empleat amb id ${res.id} es diu ${
        res.name
      } i te un salari de ${getSalary(res.id).salary}`
    );
  })
  .catch((err) => {
    console.log(err.message);
  });
