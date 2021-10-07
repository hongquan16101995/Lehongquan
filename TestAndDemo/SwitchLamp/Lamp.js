class Lamp {
    status;
    doSang;

    constructor(status, doSang) {
        this.status = status
        this.doSang = doSang
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
