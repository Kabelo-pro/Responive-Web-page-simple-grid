import chalk from 'chalk';
import { greet } from './greet.js';
import figlet from 'figlet-promised';

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);

// Using Promise
figlet("Hello World!!").then(data => {
    console.log(data);
}).catch(err => {
    console.log("Something went wrong...");
    console.error(err);
});

// Using async/await
async function runFiglet() {
    try {
        const result = await figlet("Hello World!!");
        console.log(result);
    } catch (err) {
        console.log("Something went wrong...");
        console.error(err);
    }
}

runFiglet();
