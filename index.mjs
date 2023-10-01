import inquirer from "inquirer";

inquirer
  .prompt([
      {
          type: "input",
          name: "type",
          message: "What kind of pizza do you like?"
    },
     {
          type: "input",
          name: "type2",
          message: "What sauce do you like on your pizza?"
    },
     {
          type: "input",
          name: "type3",
          message: "What cheese do you like on your pizza?"
    },
     {
          type: "input",
          name: "type4",
          message: "What toppings do you like on your pizza?"
    },
     {
          type: "input",
          name: "type5",
          message: "Do you like pineapples on pizza?"
    },
     {
          type: "input",
          name: "type6",
          message: "Do you like stuffed crust?"
    },
     {
          type: "input",
          name: "type7",
          message: "What size of pizza is most fitting for you?"
    },
  ])
  .then((answers) => {
      console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });