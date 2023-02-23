//nivell 1 exercici 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
  }, {
    id: 2,
    name: 'Bill Gates'
  },{
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

  const getEmployee = (id) => {
    return new Promise (function (resolve, reject){
        let found = false;
        let x = 0;
  
        while (x < employees.length && !found){
          if (id == employees[x].id){
            found = true;
            resolve(employees[x]);
          } 
          x++;
        }
        if (!found) reject(new Error(`${id} no existeix`));
    })
  };

  const getSalary = (id) => {
    return new Promise(function(resolve, reject){

      let found = false;
      let x = 0;

      while (x < salaries.length && !found){

        if(id == salaries[x].id){
          found = true;
          resolve(salaries[x]);
          }
        x++;  
        }
        if (!found) reject(new Error(`${id} no existeix`));
    })      
  };

 async function asyncEmployee (id){
    let empl = await getEmployee(id);
    let sal  = await getSalary(id);

    console.log(`n1e1 --->    ${empl.name} te un salari de ${sal.salary}`);
 } 

 asyncEmployee(1);


 //nivell 1 exercici 2


 function twoSecs () {
    return new Promise(resolve => {
        setTimeout(() => {resolve('n1e2 --->    Han pasat 2 segons');}, 2000);
      });
 }

 async function resolvePromise (){
    
    const output = await twoSecs();
    console.log(output);
 }

 resolvePromise();


 //nivell 2 exercici 1


 function returnDouble (num){
    return new Promise(resolve => {
        setTimeout(() => {resolve(num*2)}, 2000);
    });
 }

 async function doubleOf (num1, num2, num3){
    let asyncnum1 = await returnDouble(num1);
    let asyncnum2 = await returnDouble(num2);
    let asyncnum3 = await returnDouble(num3);
    let amount = asyncnum1 + asyncnum2 + asyncnum3;

    console.log(`n2e1 --->    retorn dels nombres doblats: ${asyncnum1} , ${asyncnum2} , ${asyncnum3} i sumen ${amount}`);
 }

 doubleOf(1,2,3);