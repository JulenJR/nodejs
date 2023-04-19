const fs = require('fs');
const path = require('path');
const { reverseText } = require('../callback_hell');
const { test } = require('node:test');

jest.mock('fs');

test("reading directory function should manage errors", () =>{

    const mockCallback = jest.fn();

    fs.readdir.mockImplementation((dir, callback) => {
        callback(new Error("Folder inaccessible"));
      });

    require('../callback_hell');

    expect(console.log).toHavebeenCalledWith('Error: Folder inaccessible');
});
