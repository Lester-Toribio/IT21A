console.log("factorial application");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}

)





console.log("1. say hello");
  console.log("2.compute factorial");
   console.log("3.exit");

   rl.question("enter your choice(1-3)", choice => {
if (choice === "1"){
console.log("hello there");

   } else if (choice === "2"){
    console.log("factorial");
   
   }else if (choice === "3"){
    console.log("exit");
   }else {
    console.log("invalid choice. please try again");

   }
   }
   )

