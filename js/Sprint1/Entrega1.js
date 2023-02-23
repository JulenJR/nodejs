//Nivell 1 exercici 1
//Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

    let nom = "name";

    console.log("Nom d'usuari: " + nom);


//Nivell 2 exercici 1
//Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

    let tempcognom = "lastname lastname2";

    nomcognom(nom, tempcognom);

    function nomcognom (nom, tempcognom){ 

        console.log(`El nom es ${nom} i el teu cognom ${tempcognom}`);
    }

    

//Nivell 2 exercici 2
//Invoca una funció que retorni un valor des de dins d'una template literal.


let numero = `La suma del valor X i el valor Y es: ${suma()}`;
console.log(numero);

function suma() {

    let x = 1;
    let y = 2;

    return (`${x+y}`);
}



//Nivell 3 exercici 1
//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

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
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

let nom3 = function(name){console.log(name);}("name");