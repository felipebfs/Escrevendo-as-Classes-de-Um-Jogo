
class hero {
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attacking(){
        let attack
        switch (this.type){
            case "wizard":
                attack = "used magic"
                break
            case "soldier":
                attack = "used sword"
                break
            case "monk": 
                attack = "used marcial arts"
                break
            case "ninja":
                attack = "used katana and shurikens"
                break
            default:
                attack = "made an unknown attack"
        }
        console.log("The " + this.type + " attacked using " + attack)
    }
}

const hero1 = new hero("Felipe", 23, "soldier")
hero1.attacking()

const hero2 = new hero("Thiago", 16, "wizard")
hero1.attacking()

const hero3 = new hero("Wilson", 52, "monk")
hero1.attacking()

const hero4 = new hero("Flavio", 48, "ninja")
hero1.attacking()
