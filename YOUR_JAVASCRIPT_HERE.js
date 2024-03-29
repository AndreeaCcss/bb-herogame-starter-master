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
        alert("Health is up to 10");
    } else {
        hero.health = 10;
    }
    displayStats();
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

    let attackButton = document.getElementById("attackButton");
    attackButton.removeAttribute("disabled")

    displayStats();
}

function displayStats() {
    let stats = document.getElementById("stats");

    stats.textContent = `Hero name: ${hero.name}, Health: ${getHealth(hero)}, Weapon type: ${hero.weapon.type}, Weapon damage: ${hero.weapon.damage}`
}

function submitName() {
    let inputField = document.getElementById("name");
    let name = inputField.value;

    if (doesNotPassAllValidations(name)) {
        return null;
    };
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let h1 = document.getElementById("heroName");
    h1.textContent = `${name}`;
    hero.name = name;
    displayStats();

    const form = document.getElementById("form");
    form.style.display = "none";

    const attackButton = document.getElementById("attackButton");
    attackButton.style.display = "inherit"

    inputField.value = null;
}

function doesNotPassAllValidations (name) { 
    if (!name) {
        alert('You forgot to fill in the name!');
        return true;
    } else {
        return false;
    }
}

const enemy = {
    name: "Ganondorf",
    health: 10,
    weapon: { 
        type: "sword",
        damage: 8
    }
}

function attack(victim, attacker) {
    if(attacker.health === 0) {
        alert("You can't attack if you're dead");
        return null;
    };

    if (victim.health > 0){
        const healthAfterAttack = victim.health - attacker.weapon.damage;
        victim.health = Math.max(healthAfterAttack, 0);
    } else {
        alert("He's dead already");
        return null;
    }

    displayEnemyStats();
    displayStats();
}

function displayEnemyStats() {
    let enemyStats = document.getElementById("enemyStats");    
    enemyStats.textContent = `Enemy name: ${enemy.name}, Health: ${getHealth(enemy)}, Weapon type: ${enemy.weapon.type}, Weapon damage: ${enemy.weapon.damage}`
}

function getHealth(subject) {
    if(subject.health === 0) {
        return "Dead";
    } else {
        return subject.health;

    }
}

displayEnemyStats();
displayStats();