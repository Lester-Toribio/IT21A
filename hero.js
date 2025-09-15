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
const warrior = new Warrior("kingkong", 100, 10);
warrior.useAbility();

const mage = new Mage("magic sarap", 80, 5, 50);
mage.useAbility();