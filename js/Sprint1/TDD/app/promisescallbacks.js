//NIVELL 2   
//Exercici 1
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
  }, {
    id: 2,
    name: 'Bill Gates'
  }, {
    id: 3,
    name: 'Jeff Bezos'
  }];
  
  let salaries = [{
    id: 1,
    salary: 4000
  }, {
    id: 2,
    salary: 1000
  }, {
    id: 3,
    salary: 2000
  }];
  
  
  const getEmployee = (Id) => {
    if (Id == "" || isNaN(Id) || Id <= 0){
      return false;
    } 
    return new Promise(function (resolve, reject) {
        let encontrado = false;
        let i = 0;
        while ((i < employees.length) && (!encontrado)) {
            if (Id == employees[i].id) {
                encontrado = true;
                resolve(employees[i]);
            }
            i++;
        }
  
        if (!encontrado) {
            reject(new Error(`No s'ha trobat l'empleat Id ${Id} en l'objecte Employees`));
        }
    });
  }
  
  const getSalary = (Employee) => {
    if (Employee == "" || isNaN(Employee)){
      return false;
    }
    return new Promise(function (resolve, reject) {
        let encontrado = false;
        let i = 0;
        while ((i < employees.length) && (!encontrado)) {
            if (Employee.id === employees[i].id && Employee.name === employees[i].name) {
                //encontrado
                encontrado = true;
                resolve(salaries[i]).salary;
            }
            i++;
        }
  
        if (!encontrado) {
            reject(new Error(`No s'ha trobat l'objecte {id: ${Employee.id}, name: id: '${Employee.name}'} en l'objecte Employees`));
        }
    });
  }
  


  //------------------------------------------------------------------------------
//Exercici 2
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const comprovarSiesParell = (num) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          if (num % 2 == 0) {
              resolve(`El numero ${num} es Parell (amb retràs de 2 segons)`);
          } else {
              resolve(`El numero ${num} es Imparell (amb retràs de 2 segons)`);
          }
      }, 2000);
  });
}

async function funcion_asincrona() {
  try {
      let num = Math.floor(Math.random() * 10) + 1;
      const result = await comprovarSiesParell(num);
      console.log(result);
      return(true);
  } catch (error) {
      console.log("Error");
      return(false);
  }
}

  
  // Exportació de totes les funcions per el Testing  

  module.exports = {
    getEmployee,
    getSalary,
    funcion_asincrona

  }
  
