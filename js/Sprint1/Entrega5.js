//nivell 1 exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

let fitxer = "fitxer.txt";
let frase = "Proba per entrega 5";

function crearFitxer(fitxer, frase) {
  let fs = require("fs");
  fs.writeFile(fitxer, frase, function (err) {
    if (err) return console.log(err);
    else console.log(`s'ha creat ${fitxer}`);
  });
}

crearFitxer(fitxer, frase);

//nivell 1 exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function readtxt(file) {
  let fs = require(`fs`);
  let txt = fs.readFile(
    file,
    { encoding: "utf8", flag: "r" },
    function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    }
  );

  return txt;
}

console.log(readtxt("./fitxer.txt"));

//nivell 1 exercici 2
//Crea una funció que comprimeixi el fitxer del nivell 1.

const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const { createReadStream, createWriteStream } = require("node:fs");

const gzip = createGzip();
const source = createReadStream("./fitxer.txt");
const destination = createWriteStream("./fitxer.txt.gz");

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error("Error:", err);
    process.exitCode = 1;
  }
});

//nivell 2 exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

function everySecInterval() {
  setInterval(
    () => console.log("aquest missatge es repetira cada segon"),
    1000
  );
}

//everySecInterval();

//nivell 2 exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

function dirFileInfo() {
  const fs = require("fs");
  const os = require("os");
  const userHomeDir = os.homedir();

  let files = fs.readdirSync(userHomeDir);
  for (let i = 0; i < files.length; i++) console.log(files[i]);
}

//dirFileInfo();

//nivell 3 exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

function encryptedFileHexB64() {

  let fs = require("fs");
  let txt = frase;
  let txtHex = Buffer.from(txt, "utf8").toString("hex");

  let txtb64 = Buffer.from(txt, "utf8").toString("base64");
  
  fs.writeFile("fitxerHex", txtHex, function (err) {
    if (err) return console.log(err);
  });

  fs.writeFile("fitxerb64", txtb64, function (err) {
    if (err) return console.log(err);
  })
}

encryptedFileHexB64();

//Crea una funció que guardi els fitxers del punt anterior,
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

/*const crypto = require("crypto");
  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  const securityKey = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);

  let encryptedHexData = cipher.update(frase, "utf-8", "hex");

  encryptedHexData += cipher.final("hex");

  let codedb64 = btoa(frase);

  let fs = require("fs");
  fs.writeFile("fitxerHex", encryptedHexData, function (err) {
    if (err) return console.log(err);
  });

  fs.writeFile("fitxerb64", codedb64, function (err) {
    if (err) return console.log(err);
  });*/

//Crea una altra funció que desencripti i descodifiqui 
//els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
