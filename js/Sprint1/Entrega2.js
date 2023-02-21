//nivell 1 exercici 1

((a, b) => {console.log("n1e1 --->", a + b);})(1, 2);


//nivell 2 exercici 1

const cPersona = (atribute) => ({
    name: "username", atribute,
});
console.log("n2e1 --->")
console.log(cPersona("atribute"));


//nivell 2 exercici 2

class Persona {constructor(nom){this.nom = nom;}

    dirNom() {
        console.log("n2e2 --->   parameter name = " + this.nom );
    }
}
const p1 = new Persona("username");
    p1.dirNom();


//nivell 3 execici 1

class n3e1 {constructor(){}}

function newobjects(){
// ToDo
}


