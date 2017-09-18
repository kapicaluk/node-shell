let fs = require('fs');

const directory = function() {
    process.stdout.write("Your current working directory is " + process.cwd());
    process.stdout.write('\nprompt > ');
};

const ls = function() {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write('\nprompt > ');
    });
    
};

module.exports = { directory, ls }