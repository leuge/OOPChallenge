const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const employeeDB = []

let  id = employeeDB.length + 1

menu()
function menu() {
    inquirer.prompt([{
        type: "list",
        message: "Please choose from the selection",
        name: "addEmployee",
        choices: ["add manager", "add engineer", "add intern"]
    }]).then(userInput => {
        switch (userInput.addEmployee) {
            case "add manager":
                addManager()
                break
            case "add engineer":
                addEngineer()
                break
            case "add intern":
                addIntern()
                break
        }
    })
}
function addManager(){
    inquirer.prompt([{
        type:"input",
        message:"What is your name",
        name:"employeeName"
    },
    {
        type:"input",
        message:"What is your email?",
        name:"employeeEmail"
    },
    {
        type:"input",
        message:"What is your office number?",
        name:"employeeOfficeNumber"
    }
]).then(userInput=>{
    var manager=new Manager(userInput.employeeName,id++,userInput.employeeEmail,userInput.employeeOfficeNumber)
    employeeDB.push(manager)
   console.log(employeeDB)

   menu()
})
}