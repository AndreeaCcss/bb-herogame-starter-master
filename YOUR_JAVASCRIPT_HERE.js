// Write your JS here
const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { 
        type: "",
        damage: 2
    }
}

function rest(hero) {
    if(hero.health == 10) {
        alert("Health is already 10")
    } else {
        hero.health = 10
    }
    return hero;
}

function pickUpItem(hero, weapon) {
    weapon.type = "dagger";
    weapon.damage = 2;
    hero.inventory.push(weapon);
}

function equipWeapon() {

}