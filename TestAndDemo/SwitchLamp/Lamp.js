class Lamp {
    status;

    constructor(status) {
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
            document.write("Lightning" + "<br>")
        } else {
            document.write("Not Lightning" + "<br>")
        }
    }
}

let lamp1 = new Lamp(false)
let lamp2 = new Lamp(false)
