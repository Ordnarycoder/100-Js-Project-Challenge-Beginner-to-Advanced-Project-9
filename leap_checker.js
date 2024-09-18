const readline = require('readline');

function leap_checker() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a year: ", (year) => {
        if (year % 4 === 0){
            console.log("It's a leap year!")
        } else{
            console.log("It's not a leap year!")
        };
    rl.close()
    });
}

leap_checker();