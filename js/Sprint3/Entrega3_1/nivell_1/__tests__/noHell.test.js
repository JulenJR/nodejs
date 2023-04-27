const fs = require("fs");
const path = require("path");
const { reverseText } = require("../app/callback_hell");

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