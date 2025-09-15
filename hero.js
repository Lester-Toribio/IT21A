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
const warrior = new Warrior("kingkong", 100, 10);

warrior.useAbility();
