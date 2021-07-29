let gas = new Gasoline("thơm", "xanh", 0)
let gas1 = new Gasoline("k thơm", "red", 10)
let car = new Car("BMW", 1000, 1.5, 4, gas1)

car.start(gas)
car.go()
car.doxang(5)
car.go()
document.write(gas.getWeight())