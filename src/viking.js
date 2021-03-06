// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`

    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingobj) {
        this.vikingArmy.push(vikingobj)
    }

    addSaxon(saxonobj) {
        this.saxonArmy.push(saxonobj)
    }

    vikingAttack() {
        let attackedSaxon = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ]
        let attackingViking = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ]
        let vikingAttackResult = attackedSaxon.receiveDamage(attackingViking.strength)

        if (attackedSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter((item) => item !== attackedSaxon);
        }
        return vikingAttackResult

    }
    saxonAttack() {
        let attackedViking = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ]
        let attackingSaxon = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ]
        let saxonAttackResult = attackedViking.receiveDamage(attackingSaxon.strength)
        if (attackedViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter((item) => item !== attackedViking);
        }
        return saxonAttackResult
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }
}