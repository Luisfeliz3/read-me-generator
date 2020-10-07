const inquirer = require("inquirer");
const fs = require('fs');
const filename = "README.md";


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
    type: "confirm",
    name: "yes",
    message: "Would you like to create a table of contents ?"
  },
  {
    type: "input",
    name: "answer",
    message: "What are the installation process for the application ?"
  },
  {
    type: "input",
    name: "answer",
    message: "What is the usage of this application ?"
  },
  {
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
    name: "contributing",
    message: "Who are the contributors of this projects?"
   }
]).then(function(data) {
  // let formattedTitle = "# " + data.projectName;
  // fs.writeFile(filename, formattedTitle, function(err) {

  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Title Added to Read me!");

let projectName = "# " + data.projectName;
writeToFile(projectName)
let projectDescription = "# " + data.projectDescription;
appendToFile(projectDescription)
    
  });

  

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
 
