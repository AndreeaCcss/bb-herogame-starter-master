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
const weapon = {
    type: "",
    damage: 2
}

function rest(hero) {
    if(hero.health == 10) {
        alert("Health is already 10");
    } else {
        hero.health = 10;
    }
    return hero;
}

function pickUpItem(hero, weapon) {
    weapon.type = "dagger";
    weapon.damage = 2;
    hero.inventory.push(weapon);
    let image = document.getElementById("dagger");
    image.style.display = "none";
}

function equipWeapon(hero) {
    if(hero.inventory.length === 0){
        return null;
    } else {
        hero.weapon = hero.inventory[0];
    }
    displayStats();
}

function displayStats() {
    let stats = document.getElementById("stats");
    stats.textContent = `Hero name: ${hero.name}, Health: ${hero.health}, Weapon type: ${hero.weapon.type}, Weapon damage: ${hero.weapon.damage}`
}

function submitName() {
    let inputField = document.getElementById("name");
    let name = inputField.value;

    if (doesNotPassAllValidations(name)) {
        return null;
    };
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let header = document.getElementById("header");
    header.textContent = `${name}`;
    hero.name = name;
    displayStats();

    inputField.value = null;
};


function doesNotPassAllValidations (name) { 
    if (!name) {
        alert('You forgot to fill in the name!');
        return true;
    } else {
        return false;
    }
}

displayStats()