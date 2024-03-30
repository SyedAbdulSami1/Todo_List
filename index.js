#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let input = await inquirer.prompt([
        {
            name: "recElement",
            message: "What do you want to add in todo List? Pleas Enter: ",
            type: "string",
        },
        {
            name: "confirm",
            message: "Are you want to add? Yes or No",
            type: "confirm",
            default: "false",
        },
    ]);
    todoList.push(input.recElement);
    console.log(todoList);
    condition = input.confirm;
}
