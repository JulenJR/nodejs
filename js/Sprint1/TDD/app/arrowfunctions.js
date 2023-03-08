
//Exercici 2.2
//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}





//Exercici 3.1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
//En JavaScript no tenim una forma explícita per indicar que una classe és abstracta. 
//Però si podem impedir que sigui instanciada i només heredada d'ella.

class HotelAbstracte {

    constructor(nom, plantes, superficie) {
        if (new.target === HotelAbstracte) {  //Impedim que la classe sigui instanciada i només es pugui heredar d'ella
            throw new Error('Això es una clase Abstracta, no es permet instanciarla directament.');
        }       

        this.nom = nom;
        this.plantes = plantes;
        this.superficie = superficie;
    }

}


function CrearHotel(nom, plantes, superficie) {
   
    return Object.create(HotelAbstracte.prototype, {
		"nom" : {value: nom},
		"plantes":{value: plantes},
		"superficie":{value: superficie}
	});
}


let ObjHotel1 = CrearHotel("Hotel Hilton", 10, "72.458 m²");
let ObjHotel2 = CrearHotel("Hotel Paris", 6, "33.834 m²");
//let ObjHotel3 = new HotelAbstracte("Hotel Ritz", 4, "12.476 m²");   // Dona error si intento instanciar la classe directament

//console.log(ObjHotel1);
//console.log(ObjHotel2);


module.exports = {
    Persona
  }
  