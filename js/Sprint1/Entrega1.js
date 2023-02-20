//Nivell 1 exercici 1

    let nom = "name";

    console.log("Nom d'usuari: " + nom);


//Nivell 2 exercici 1

    let tempcognom = "lastname lastname2";

    nomcognom(nom, tempcognom);

    function nomcognom (nom, tempcognom){ 

        console.log(`El nom es ${nom} i el teu cognom ${tempcognom}`);
    }

    

//Nivell 2 exercici 2


let numero = `La suma del valor X i el valor Y es: ${suma()}`;
console.log(numero);

function suma() {

    let x = 1;
    let y = 2;

    return (`${x+y}`);
}



//Nivell 3 exercici 1

let array =[];

for (let i = 0; i <= 9; i++) {

    array.push(function () {
        for (j = 0; j <= 9; j++) {
            console.log(j);

        }
    })
}

for (let j = 0; j < array.length; j++) {

    console.log("Funcio " + j);
    array[j]();
    
}



//nivell 3 exercici 2

nom = function(name){console.log(name);}("name");