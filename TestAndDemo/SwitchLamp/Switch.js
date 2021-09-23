class Switch {
    status;
    lamp;

    constructor(status) {
        this.status = status
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOn() {
        this.status = true
        this.lamp.turnOn()
    }

    switchOff() {
        this.status = false
        this.lamp.turnOff()
    }
}

let mySwitch = new Switch(false, lamp1)