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
const hero = new Hero("kingkong", 100, 10);

console.log(hero.gethealth());
hero.gethealth();