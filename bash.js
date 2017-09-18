
let commands = require('./commands');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
   // let args = process.argv.slice(2).join(" ");
   var cmd = data.toString().trim(); // remove the newline
   if (cmd === 'pwd') {
   		commands.directory()
    } else if(cmd === 'date') {
    	let date = new Date().toUTCString();
    	process.stdout.write("Today's date is " + date);
    } else if (cmd === 'ls') {
    	commands.ls();
    } else if (cmd.slice(0,4) === 'echo') {
    	// commands.echo();
    	process.stdout.write(cmd.slice(5));
    }

    else {
        process.stdout.write('You typed: ' + cmd);
    }
    // process.stdout.write('\nprompt > ');

});


// process.cwd()