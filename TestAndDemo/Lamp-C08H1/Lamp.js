class Lamp {
    status;

    constructor(status) {
        this.status = status
    }

    getStatus() {
        return this.status
    }

    setStatus(status) {
        this.status = status
    }

    turnOn() {
        this.status = true
    }

    turnOff() {
        this.status = false
    }

    light() {
        if (this.status) {
            console.log("Lightning")
            return ("Lightning")
        } else {
            console.log("Not Lightning")
            return ("Not Lightning")
        }
    }
}

let lamp = new Lamp(false)