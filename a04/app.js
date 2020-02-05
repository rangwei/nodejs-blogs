const yargs = require('yargs');
const notes = require('./notes');

console.log('Starting app');

const argv = yargs.argv;
const command = argv._[0];

if (command == 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command == 'list') {
    notes.getAll((err, result) => {
        if (err) {
            console.log('get all notes err!');
        }else {
            console.log(result);
        }
    });
} else if (command == 'read') {
    notes.getNote(argv.title, (err, result) => {
        if (err) {
            console.log('get note err!');
        } else {
            if (result.length === 1) {
                console.log(result[0]);
            } else {
                console.log(`could not find ${argv.title}!` );
            }
        }
    });
} else if (command == 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command undefined');
}
