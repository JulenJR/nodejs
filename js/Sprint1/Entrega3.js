//nivell 1 exercici 1

const num = 5;
const endres = new Promise((resolve, reject) =>{
    console.log("n1e1 ---> ");
        if(num >= 0){
            const pos =()=> `${num} es un nombre positiu`; 
            resolve(pos);
        }
        else reject(new Error(`${num} es un nombre negatiu`));   
});

endres.then((res)  => {console.log(res());})
      .catch((err) => {console.log(err.message); });


//nivell 1 exercici 2

const value = isposneg(() => num >= 0);

function isposneg (callback){
    if (callback) console.log("el nombre es positiu");
    else ("el nombre es negatiu");
}


/*
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// Expected output: Error: fail
*/

