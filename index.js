var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "project name",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "project description",
    message: "What is the description of your project?"
  },
  {
    type: "confirm",
    name: "yes",
    message: "Would you like to create a table of contents ?"
  },
  {
    type: "input",
    name: "answer",
    message: "What are the installation steps for the application ?"
  },
  // {
  //   type: "checkbox",
  //   message: "Would ",
  //   name: "answer",
  //   choices: [
  //     "HTML", 
  //     "CSS", 
  //     "JavaScript", 
  //     "MySQL"
  //   ]
  // },
  // {
  //   type: "checkbox",
  //   message: "What languages do you know?",
  //   name: "stack",
  //   choices: [
  //     "HTML", 
  //     "CSS", 
  //     "JavaScript", 
  //     "MySQL"
  //   ]
  // },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "contact",
    choices: [
      "email",
      "phone",
      "telekinesis"
    ]
  }
]).then(function(data) {
  console.log(data);
  // var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
    
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Success!");
  //   console.log(data.name);
  //   // console.log(data.name);
  // });
});
