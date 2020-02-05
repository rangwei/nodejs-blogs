const yargs = require('yargs');
const notes = require('./notes');

console.log('Starting app');

const argv = yargs.argv;
const command = argv._[0];

if (command == 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command == 'list') {
    console.log('list notes');
} else if (command == 'read') {
    console.log('read notes');
} else if (command == 'remove') {
    console.log('remove notes');
} else {
    console.log('command undefined');
}
