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

// Test for handling inaccessible folder error
test('Error: Folder inaccessible', () => {
  const originalReaddir = fs.readdir;

  fs.readdir = (dir, cb) => {
    const error = new Error('Folder inaccessible');
    cb(error, null);
  };

  reverseText('hello', (error) => {
    expect(error).toBeTruthy();
    expect(error.message).toBe('Error: Folder inaccessible');

    fs.readdir = originalReaddir;
  });
});