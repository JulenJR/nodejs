const { error } = require("console");

const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "../inbox");
const outbox = join(__dirname, "../outbox");

const reverseText = (str) => str.split("").reverse().join("");

function llegirFitxer(fitxer) {
  return readFileSync(join(inbox, fitxer), "utf-8");
}

function escriureFitxer(fitxer, chain) {
  return writeFileSync(join(outbox, fitxer), reverseText(chain));
}

function llegirDir(inbox) {
  return readdirSync(inbox);
}

function noHell() {
  try {
    
    const fitxers = llegirDir(inbox);
    if ( !fitxers.length ) throw new Error('the folder is empty')

    fitxers.forEach((fitxer) => {

      const chain = llegirFitxer(fitxer);
      
      chain && escriureFitxer(fitxer, chain);
    })

  } catch ({ message }) {

    throw new Error('MESSAGE ERROR -> ' + message)

  }

}

noHell();
