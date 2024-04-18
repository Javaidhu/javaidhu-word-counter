import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`Your sentence has ${words.length} words`);
console.log(words);
