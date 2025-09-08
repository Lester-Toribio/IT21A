console.log("factorial application");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}

)




function mainMenu(){
console.log("1. say hello");
  console.log("2.compute factorial");
   console.log("3.exit");

   rl.question("enter your choice(1-3)", choice => {
if (choice === "1"){
console.log("hello there");

   } else if (choice === "2"){
    console.log("factorial");

    rl.question("enter a number for factorial: ", (numstr) =>{
let num = parseInt(numstr);

if(isNaN(num) || num<0){
  console.log("Please enter a non-negative integer");
} else {
  let fact = 1;

  for(let i= 1; i <= num ; i++){
    fact *=i;
  }
  console.log ("The factorial of " + num +" is " + " " +fact);
}
    });
   
   }else if (choice === "3"){
    console.log("Exiting program... Goodbye");
    rl.close();
   }else {
    console.log("invalid choice. please try again");

   }
   }
   )
  }
