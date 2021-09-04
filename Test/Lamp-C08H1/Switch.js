class Switch {
    status;
    lamp;

    constructor(status) {
        this.status = status
    }

    getStatusOfLamp() {
        if (this.lamp !== undefined) {
            return this.lamp.getStatus()
        } else {
            console.log("Hãy kết nối với đèn trước")
            return ("Hãy kết nối với đèn trước")
        }
    }

    connectToLamp(lamp) {
        this.lamp = lamp
        console.log("connect to Lamp")
        return ("connect to Lamp")
    }

    disconnectToLamp() {
        this.lamp = undefined
        console.log("disconnect to Lamp")
        return ("disconnect to Lamp")
    }

    turnOn() {
        if (this.lamp !== undefined) {
            this.lamp.turnOn()
            this.status = true
        } else {
            console.log("Hãy kết nối với đèn trước")
            return ("Hãy kết nối với đèn trước")
        }
    }

    turnOff() {
        if (this.lamp !== undefined) {
            this.lamp.turnOff()
            this.status = false
        } else {
            console.log("Hãy kết nối với đèn trước")
            return ("Hãy kết nối với đèn trước")
        }
    }

    switchStatus() {
        if (this.status) {
            console.log("Switch is ON")
            return ("Switch is ON")
        } else {
            console.log("Switch is OFF")
            return ("Switch is OFF")
        }
    }
}

let mySwitch = new Switch(false)

function test() {
    if (mySwitch.getStatusOfLamp()) {
        mySwitch.turnOff()
        mySwitch.switchStatus()
        lamp.light()
    } else {
        mySwitch.turnOn()
        mySwitch.switchStatus()
        lamp.light()
    }
}

function connect() {
    if (mySwitch.lamp === undefined) {
        mySwitch.connectToLamp(lamp)
    } else {
        mySwitch.disconnectToLamp()
    }
}
