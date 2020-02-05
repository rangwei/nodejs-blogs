const fs = require('fs');

console.log('Starting notes.js');

const addNote = (title, body) => {

    fs.readFile('notes.json', (err, data) => {
        if (err) {
            console.log('read file error');
        } else {
            const notes = JSON.parse(data);

            const note = {title, body};

            const duplicateNote = notes.filter(
                note => note.title === title
            );

            if (duplicateNote.length === 0) {
                notes.push(note);
            }

            saveNotes(notes);
        }
    });

};

const removeNote = (title) => {

    fs.readFile('notes.json', (err, data) => {
        if (err) {
            console.log('read file error');
        } else {
            const notes = JSON.parse(data);

            const filterNotes = notes.filter(
                note => note.title != title
            );
            
            saveNotes(filterNotes);
            
        }
    });
};

const saveNotes = (notes) => {
    fs.writeFile('notes.json', JSON.stringify(notes), err => {
        if (err) {
            console.log('write file error!');
        } else {
            console.log('add note successfully!')
        }
    });
};

const getNote = (title, callback) => {

    fs.readFile('notes.json', (err, data) => {
        if (err) {
            console.log('read file error');
            callback(err);
        } else {
            const notes = JSON.parse(data);

            const note = notes.filter(
                note => note.title === title
            );
            
            callback(undefined, note);
            
        }
    });
};

const getAll = (callback) => {
    fs.readFile('notes.json', (err, data) => {
        if (err) {
            console.log('read file error');
            callback(err);
        } else {
            const notes = JSON.parse(data);

            callback(undefined, notes);
            
        }
    });
}

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
}