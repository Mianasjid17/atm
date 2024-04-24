#!/usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let myPin = 1234;
let pinCode = await inquirer.prompt([
    { name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinCode.pin === myPin) {
    console.log("your pin is correct");
    let optionsA = await inquirer.prompt([{
            name: "options",
            message: "enter your choice",
            type: "list",
            choices: ["deposit", "withdraw", "check balance", "exit"]
        }]);
    console.log(optionsA);
    if (optionsA.options === "withdraw") {
        let amountt = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number"
            }
        ]);
        balance -= amountt.amount;
        console.log("your remaining balanceis" + balance);
    }
    else if (optionsA.options === "check balance") {
        console.log("your balance is" + balance);
    }
    if (optionsA.options === "deposit") {
        let amountt = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number"
            }
        ]);
        balance += amountt.amount;
        console.log("your new balance is" + balance);
    }
}
else {
    console.log("your pin is incorrect");
}
