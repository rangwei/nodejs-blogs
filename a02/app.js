const notes = require('./notes');

console.log('Starting app');

// console.log(process.argv);
const command = process.argv[2];

const body = process.argv[3];

if (command == 'add') {
    notes.addNote(body);
} else if (command == 'list') {
    console.log('list notes');
} else if (command == 'read') {
    console.log('read notes');
} else if (command == 'remove') {
    console.log('remove notes');
} else {
    console.log('command undefined');
}
