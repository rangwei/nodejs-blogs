const fs = require('fs');

console.log('Starting notes.js');

const addNote = (title, body) => {

    fs.readFile('notes.json', (err, data) => {
        if (err) {
            console.log('read file error');
        } else {
            const notes = JSON.parse(data);

            const note = {title, body};

            notes.push(note);

            fs.writeFile('notes.json', JSON.stringify(notes), err => {
                if (err) {
                    console.log('write file error!');
                } else {
                    console.log('add note successfully!')
                }
            });
        }
    });

};

module.exports = {
    addNote
}