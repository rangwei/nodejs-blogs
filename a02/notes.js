const fs = require('fs');

console.log('Starting notes.js');

module.exports.addNote = (body) => {

    console.log('add note');

    fs.appendFile('notes.txt', body, err => {
        if (err) {
            console.log('write file error!');
        }
    });
    return 'new note';
};