//Switch Case
//Format :

//let ramzan "fast1"
// switch (ramzan){
    //case "fast1":
    //console.log("Going To Karachi");
    //code block
    //break
    //case "fast2"
    //console.log("Back to home");
    //code block
    //break
    //default
    //console.log("Stay Home Stay Safe .!")
//}

// Going to use switch in inquirer with my knowledege :

import inquirer from "inquirer";
import chalk from "chalk";

const switchCase = await inquirer.prompt(
    [
        {
            name : "switch_inquirer",
            type : "list",
            message : "Select Weather For Suggestion :",
            choices :["Sunny","Rainy","Snowy","Dont Know Witch Weather Is Running ."]
        }
    ]
)
switch (switchCase.switch_inquirer) {
    case "Sunny":
        console.log(chalk.green.bold("Wear Light Cloth And Glasses .!"));
        break;
    case "Rainy":
        console.log(chalk.blue.bold("Take an Umbrella .!!"));
        break;
        case "Snowy":
        console.log(chalk.yellowBright.bold("Wear Warm Cloths .!!"));
        break;
    default:
      console.log(chalk.red.bold("Check The Weather Forecast .!!"));
      
}