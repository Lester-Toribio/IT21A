class Hero {
    #health;

    constructor(name, health,attack) {
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }
    gethealth() {
        return this.#health;
}
getStats(){
    console.log("Name: "+ this.name);
     console.log("Health: "+ this.#health);
 console.log("Attack: "+ this.attack);
}
}
class Warrior extends Hero {
    useAbility() {
        console.log(`${this.name} uses.power Strike`);
}}

class Mage extends Hero {
    constructor(name, health, attack, mana)  {
        super(name, health, attack);
        this.mana = mana;
    }
    useAbility() {
        console.log(`${this.name} cast sarapness!`)
}}
function performAbility(hero){
    hero.useAbility();
}



const kingkong = new Warrior("kingkong", 100, 10);
kingkong.useAbility();
kingkong.getStats();

const magicsarap  = new Mage("magic sarap", 80, 5, 50);
magicsarap.useAbility();
magicsarap.getStats();

function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}


performAbility(kingkong);
performAbility(magicsarap);