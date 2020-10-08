const inquirer = require("inquirer");
const fs = require('fs');
const filename = "README.md";
const generateReadme = require("./generateReadMe")


const writeToFile = data =>{
  fs.writeFile(filename, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Title Added to Read me!");
  });
}

const appendToFile = data =>{
  fs.appendFile(filename, data + '\n', function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  });
}


function main(){
inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project ?"
  },
  {
    type: "input",
    name: "projectDescription",
    message: "What is the description of your project ?"
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation process for the application ?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this application ?"
  },
  {
  type: "list",
  name: "license",
  message: "Chose the preferred license for this project: ",
  choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"
  ]
   },
   {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this projects?"
   },
   {
    type: "input",
    name: "test",
    message: "Command to test the Application ?"
   },
   {
    type: "input",
    name: "github",
    message: "Enter your git hub name"
   },
   {
    type: "input",
    name: "email",
    message: "Enter your email address"
   },
   {
    type: "input",
    name: "questions",
    message: "Report issues here :"
   }
]).then(  answers =>{
console.log({...answers});
writeToFile(generateReadme({...answers}));



});

}

main();

  // // var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  // var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
  
  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
    
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Success!");
  //   console.log(data[1]);
  //   // console.log(data.name);
  // });
 
 