const readline = require('readline');
const math = require("./calc"); // Ensure this module has add, sub, and mul functions

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter add/sub/mul: ", function(name) {
    switch (name) {
        case 'add':
            console.log(math.add(5, 5));
            break;
        case 'sub':
            console.log(math.sub(5, 5));
            break;
        case 'mul':
            console.log(math.mul(5, 5));
            break;
        default:
            console.log("Invalid input");
    }

    console.log(math.add(5, 5));
    console.log(math.add(2, 3));

    rl.close(); // Close the readline interface
});