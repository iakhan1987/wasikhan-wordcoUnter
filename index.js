#! /usr/bin/env node
// This line is called a Shebang, it tells the operating system to run it with node.js
import inquirer from "inquirer";
import chalk from "chalk";
async function wordCounter() {
    let moreSentences = true;
    while (moreSentences) {
        const answers = await inquirer.prompt([
            {
                name: "Sentence",
                type: "input",
                message: chalk.red("Enter Your Sentence to Count the Word (or type 'done' to finish):"),
            },
        ]);
        const words = answers.Sentence.trim().split(" ");
        console.log(chalk.green(words));
        console.log(chalk.cyan(`Your Sentence word count is ${words.length}`));
        const answer = await inquirer.prompt([
            {
                name: "more",
                type: "input",
                message: "Do you have more sentences to count? (yes/no)",
            },
        ]);
        moreSentences = answer.more.toLowerCase() === "yes";
    }
}
wordCounter();
