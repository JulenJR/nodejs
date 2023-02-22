//nivell 1 exercici 1

((a, b) => {console.log("n1e1 --->", a + b);})(1, 2);


//nivell 2 exercici 1

const cPersona = (atribute) => ({
    name: "username", atribute,
});
console.log("n2e1 ---v   ");
console.log(cPersona(" atribute"));


//nivell 2 exercici 2

class Persona {constructor(nom){this.nom = nom;}

    dirNom() {
        console.log("n2e2 --->   parameter name = " + this.nom );
    }
}
const p1 = new Persona("username");
    p1.dirNom();


//nivell 3 execici 1

class PersonaAbstract{
    constructor(nom, edad, altura) {
        if (new.target === PersonaAbstract) {
            throw new Error("Abstract classes can't be instantiated");
        }       

        this.nom = nom;
        this.edad = edad;
        this.altura = altura;
    }
}

function crearpersona(nom, edad, altura) {
   
    return Object.create(PersonaAbstract.prototype, {
		"nom" : {value: nom},
		"edad": {value: edad},
		"altura": {value: altura}
	    }
    );
}

const per1 = crearpersona("n3e1 --->   username1", 21, "155");

console.log(per1);


//https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript