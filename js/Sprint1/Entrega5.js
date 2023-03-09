//nivell 1 exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

let fitxer = "fitxer.txt";
let frase = "Proba per entrega 5";
const password = "123456780123456";

function crearFitxer(fitxer, frase) {
  let fs = require("fs");
  fs.writeFile(fitxer, frase, function (err) {
    if (err) return console.log(err);
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
    console.error(err);
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

  fs.writeFile("fitxerHex.txt", txtHex, function (err) {
    if (err) return console.log(err);
  });

  fs.writeFile("fitxerb64.txt", txtb64, function (err) {
    if (err) return console.log(err);
  });
}

//encryptedFileHexB64();

//Crea una funció que guardi els fitxers del punt anterior,
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

function encryptFile(fileName) {
  let fs = require("fs");
  let textoUTF8 = fs.readFileSync(fileName, "utf8");

  let crypto = require("crypto");
  const key = crypto.scryptSync(password, "GfG", 24);
  const iv = Buffer.alloc(16, 0);

  let mykey = crypto.createCipheriv("aes-192-cbc", Buffer.from(key), iv);
  let strEncriptat = mykey.update(textoUTF8, "utf8", "hex");

  strEncriptat += mykey.final("hex");

  let finalFileName = "Encrypted" + fileName;

  fs.writeFileSync(finalFileName, strEncriptat, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

//encryptFile("fitxerHex.txt");
//encryptFile("fitxerb64.txt");

//Delete files
/*
let fs = require("fs").promises;
const files = [`./fitxer.txt`, `./fitxerHex.txt`, `./fitxerb64.txt`];

Promise.all(files.map((file) => fs.unlink(file))).catch((err) => {
  console.error(err);
});
*/

//Crea una altra funció que desencripti i descodifiqui
//els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

function decrypt(fileName) {
  const crypto = require("crypto");
  const fs = require("fs");

  const algorithm = "aes-192-cbc";
  const key = crypto.scryptSync(password, "GfG", 24);
  const iv = Buffer.alloc(16, 0);

  let encryptedString = readtxt(fileName);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  try {
    let decryptedString = decipher.update(encryptedString, "hex", "utf8"); //undefined (?)
    decryptedString += decipher.final("utf8");

    let finalFileName = "decrypted" + fileName;

    fs.writeFileSync(finalFileName, decryptedString);
    console.log(`file ${finalFileName} decrypted from ${fileName}`);
  } catch (error) {
    console.error(error);
  }
}

//decrypt("./EncryptedfitxerHex.txt");//Error
