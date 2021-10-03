const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./data/inlist.list',
    { encoding: 'utf8', flag: 'r' });

// Display the file data
//console.log(data);

const split = data.split('\n');
console.log(split.length);
const ary = new Array();

split.forEach(element => {
    ary.push(`127.0.0.1 ${element}`);
});

ary.forEach(element => {
    console.log(element);
});

var file = fs.createWriteStream('./data/outlist.list');
file.on('error', function (err) { Console.log(err) });

ary.forEach(value => file.write(`${value}\r\n`));

file.end();