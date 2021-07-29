class Car {
    name;
    weight;
    height;
    countOfTire;
    Gasoline;

    constructor(name, weight, height, countOfTire, Gasoline) {
        this.name = name
        this.weight = weight;
        this.height = height;
        this.countOfTire = countOfTire;
        this.Gasoline = Gasoline
    }

    getName() {
        return this.name
    }

    getWeight() {
        return this.weight
    }

    getHeight() {
        return this.height
    }

    getCountOfTire() {
        return this.countOfTire
    }

    setName(name) {
        this.name = name
    }

    setWeight(weight) {
        this.weight = weight
    }

    setHeight(height) {
        this.height = height
    }

    setCountOfTire(countOfTire) {
        this.countOfTire = countOfTire
    }

    go() {
        if (this.Gasoline.decrease() !== false) {
            document.write("Xe dang đi" + "<br>")
        }
    }

    start() {
        if (this.Gasoline.getWeight() === 0) {
            document.write("Yc đổ xăng" + "<br>")
        } else {
            document.write("Xe khởi động" + "<br>")
        }
    }

    stop() {
        document.write("Xe dừng" + "<br>")
    }

    doxang(weight) {
        this.Gasoline.setWeight(weight)
        document.write("Đã đổ xăng" + "<br>")
    }
}