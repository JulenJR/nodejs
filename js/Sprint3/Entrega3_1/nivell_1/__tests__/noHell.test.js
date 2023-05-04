const fs = require("fs");
const path = require("path");
const { reverseText, llegirFitxer } = require("../app/noHell");

jest.mock("fs", () => ({
  ...jest.requireActual("fs"),
  readdir: jest.fn((dir, cb) => {
    const error = new Error("Folder inaccessible");
    cb(error, null);
  }),
}));


//functionallity of function reverseText
test("reverseText should reverse a string correctly", () => {

  expect(reverseText("hello")).toBe("olleh");
});

test("llegirFitxer gets a valid file content", () => {

  const content = llegirFitxer("testing.txt");
  expect(content).toEqual("Hola");
});

test("llegirDir function throws an error if inbox does not exist", () => {

  const inbox = './nonexistent_inbox';
  expect(() => llegirDir(inbox)).toThrow();
});