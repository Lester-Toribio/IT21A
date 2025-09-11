class person{
    
    constructor(name, age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
getName(){
   console.log(this.name);
}

    displayInfo(){
        console.log("Name:" + this.name);
       console.log ( "Age:" + this.age);
         console.log("occupation:" + this.occupation);
            console.log("----------" );
    }
        }

        const person1 = new person("tungtungsahur", 30, "brainrot");

person1.getName(); 
         person1.displayInfo();
        