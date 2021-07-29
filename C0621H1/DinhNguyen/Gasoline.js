class Gasoline {
    odor;
    color;
    weight;

    constructor(odor, color, weight) {
        this.odor = odor;
        this.color = color;
        this.weight = weight;
    }

    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }

    getColor() {
        return this.color
    }

    setColor(color) {
        this.color = color
    }

    decrease(){
        if (this.isEmpty()) {
            return false
        } else {
            this.weight--
        }
    }

    isEmpty() {
        return this.weight === 0
    }
}