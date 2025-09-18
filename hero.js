class Hero {
    #health;

    constructor(name, health,attack) {
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    }

    gethealth() {
        return this.#health;
}
getAttack(){
    console.log(this.attack);
}
getName(){
    console.log(this.name);
}


getStats(){
    console.log("\n");
    console.log("Name: "+ this.name);
     console.log("Health: "+ this.#health);
 console.log("Attack: "+ this.attack);
}

addItem(item){
    this.items.push(item);
}

totalAttack(){
    return this.attack +this.items.reduce((sum,item) => sum+ item.bonusAttack,0);
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


class Item{
    constructor(name,bonusAttack){
        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}
const sword = new Item ("Sword",5);
const staff = new Item ("Staff",3);


const kingkong = new Warrior ("kingkong",100,50);

kingkong.getName();
kingkong.getAttack();

kingkong.addItem(sword);
console.log(kingkong.totalAttack());
kingkong.addItem(sword);
console.log(kingkong.totalAttack());
kingkong.addItem(sword);
console.log(kingkong.totalAttack());

const magicsarap = new Mage("magicsarap",80 , 8, 50);



function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}
performAbility(kingkong);
performAbility(magicsarap);

