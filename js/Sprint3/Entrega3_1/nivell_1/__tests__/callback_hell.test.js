const fs = require("fs");
const path = require("path");
const {
  reverseText
} = require("../app/callback_hell.js"); 

jest.mock("fs");

// Test case for readdir error
test("readdir should handle error correctly", () => {
  const mockCallback = jest.fn();

  
  fs.readdir.mockImplementation((dir, callback) => {
    callback(new Error("Folder inaccessible"));
  });

  require("../app/callback_hell.js");

  expect(console.log).toBe("Error: Folder inaccessible");
});

// Test case for reading and writing files
test("readFile and writeFile should work correctly", () => {
  const mockCallback = jest.fn();

  fs.readdir.mockImplementation((dir, callback) => {
    callback(null, ["testing.txt", "testing2.txt"]);
  });

  fs.readFile.mockImplementation((file, encoding, callback) => {
    callback(null, "reversed code outbox");
  });

  fs.writeFile.mockImplementation((file, data, callback) => {
    callback(null);
  });

  require("../app/callback_hell.js");

  expect(fs.writeFile).toHaveBeenCalledWith(
    path.join(__dirname, "outbox", "testing.txt"),
    "xobtuo edoc deserver",
    expect.any(Function)
  );
});
