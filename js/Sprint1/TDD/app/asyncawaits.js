//Nivell 1
//Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da 
//i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.


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

const getSalary = (employee) =>
    new Promise((resolve, reject) => {
        let salari = salaries.find((empleat) => empleat.id == employee.id);
        salari ? resolve(salari) : reject(new Error(`No s'ha trobat l'objecte id: ${employee.id}`));
    });



async function getAsyncEmployee(employeeId) {
    try {
        let objEmployee = await getEmployee(employeeId);
        let objSalary = await getSalary(objEmployee);
        console.log(`${objEmployee.name} té un salari de: ${objSalary.salary}`);
    } catch (error) {
        console.log(`No s'ha trobat l'empleat amb el ID: ${employeeId}`);
    }
}

//getAsyncEmployee(3);


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
    } catch (error) {
        console.log("Error");
    }
}

//funcion_asincrona();



//------------------------------------------------------------------------------------------------
////Nivell 2
//Exercici 1
//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

const retornaDoble = async (numero) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(numero * 2)
            }, 2000);
        } catch (error) {
            console.log("Error, algún nombre no es numèric.");
        }
    });

}

/*
retornaDoble(5).then(resultat => {
    console.log(resultat);
});
*/

//--------------------------------------------------------------------------------------------------------------
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function sumadelsDobles(numero1, numero2, numero3) {
    try {
        let num1 = await retornaDoble(numero1);
        let num2 = await retornaDoble(numero2);
        let num3 = await retornaDoble(numero3);
        let suma = num1 + num2 + num3;
        console.log(`La suma del doble dels números ${numero1}, ${numero2} i ${numero3} és: ${suma}`);

    } catch (error) {
        console.log("Error, algún nombre no es numèric.");
    }
}

//sumadelsDobles(1, 2, 3);




//------------------------------------------------------------------------------------------------
////Nivell 4
//- Exercici 1
//Força i captura tants errors com puguis dels nivells 1 i 2.
/*
//Error 1, pasar-li un ID que no existeix
getAsyncEmployee(7);
//Error 2, pasar-li lletres enlloc de un numero
getAsyncEmployee("prova");
//Error 3, pasar-li buit el paràmetre
getAsyncEmployee("");

// Error en el Exercici N2E2
//sumadelsDobles(1, "er", 3);
retornaDoble("fdf");
*/



  // Exportació de totes les funcions per el Testing  

  module.exports = {
    retornaDoble
  }
  