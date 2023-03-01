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

  console.log(txt);
}

readtxt("./fitxer.txt");

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
    console.error("An error occurred:", err);
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
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
}

dirFileInfo();

//nivell 3 exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

function encryptedFile(fitxer) {
  const crypto = require("crypto");
  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  const securityKey = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);

  let encryptedHexData = cipher.update(fitxer, "utf-8", "hex");

  encryptedHexData += cipher.final("hex");

  let fs = require("fs");
  fs.writeFile(fitxer, encryptedHexData, function (err) {
    if (err) return console.log(err);
  });


}

encryptedFile("fitxerEncriptat");
