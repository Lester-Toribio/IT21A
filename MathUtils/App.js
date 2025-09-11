console.log("factorial application");
const readline = require("readline");
const MathUtils = require("./MathUtils");
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
    backToMenu();
   } else if (choice === "2"){
    computeFactorial();
    
   }else if (choice === "3"){
    console.log("Exiting program... Goodbye");
    rl.close();
   }else {
    console.log("invalid choice. please try again");
mainMenu();
   }
   });
  }

  function computeFactorial(){
    console.log("Factorial");

    rl.question("enter a number for factorial: ", (numstr) =>{
      let num = parseInt(numstr);

      try{
        console.log(`Factorial of ${num} = ${MathUtils.computeFactorial(n)}`);
      } catch (err) {
          console.log(err.message);
      }



backToMenu();
    });
  }
    function backToMenu(){
      console.log("---------");
      console.log("1. Back to menu");
      console.log("2. Exit");

      rl.question("What would you like to do next? (1-2) :", (backToMenuChoice) =>{
        if (backToMenuChoice ==="1"){
          console.clear();
          mainMenu();
        }else if (backToMenuChoice === "2"){
          console.log("Exiting program... Goodbye");
          rl.close();

        }else { 
          console.log("invalid choice. please try again");
          backToMenu();
        
        }
          
      
        })
      

    }
   
  
  mainMenu();