//nivell 1 exercici 1

const num = 5;
const endres = new Promise((resolve, reject) =>{
    
        if(num >= 0){
            const pos =()=> `n1e1 --->    ${num} es un nombre positiu`; 
            resolve(pos);
        }
        else reject(new Error(`n1e1 --->    ${num} es un nombre negatiu`));   
});

endres.then((res)  => {console.log(res());})
      .catch((err) => {console.log(err.message); });


//nivell 1 exercici 2

const value = (num12, Callback) => {

  if (num12 >= 0) Callback (`n1e2 --->    ${num12} nombre positiu`);
  else Callback (`n1e2 --->    ${num12} nombre negatiu`);
}

function isposneg (res){
  console.log(res);
}

value(4, isposneg);


//nivell 2 exercici 1


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
      if (!found) reject(new Error(`${id} no existeix   (n2e1)`));
  })
};

getEmployee(2).then((res)  => {console.log(`n2e1 --->    empleat amb id ${res.id} es diu ${res.name}`);})
              .catch((err) => {console.log(err.message);});


//nivell 2 exercici 2


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
        if (!found) reject(new Error(`${id} no existeix  (n2e2)`));
      }
    )      
  };

getSalary(1).then((res)   => {console.log(`n2e2 --->    empleat amb id ${res.id} te un salari de ${res.salary}`);})
            .catch((err)  => {console.log(err.message);});


//nivell 2 exercici 3


getEmployee(5).then((empl) => {getSalary(empl).then(salary => {console.log(`empleat amb id ${empl.id} es diu ${empl.name} i te un salari de ${salary.salary}`);})})
              .catch((err) => {console.log(err.message);});

/*
getEmployee(3).then(res => { 
      getSalary(res).then(salary => {
                console.log(`${res.name} te un salari de ${salary.salary}`);
              });})
              .catch(err => {console.log(err.message);});
*/
