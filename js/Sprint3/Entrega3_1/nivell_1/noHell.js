const { error } = require("console");

const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

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
  const fitxers = llegirDir(inbox);

  fitxers.forEach((fitxer) => {
    try {
      const chain = llegirFitxer(fitxer);
      escriureFitxer(fitxer, chain);
      console.log(`${fitxer} was succesfully saved in outbox`);
      
    } catch (error) {
      throw new Error (error);
    }
  });
}

noHell();
