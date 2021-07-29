class Human {
    name;
    age;
    gender;
    weight;
    height;

    constructor(name, age, gender, weight, height) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    say(string) {
        return string
    }

    walk() {

    }
}

let human = new Human("Hợp", 23, "Male", 50, 1,7);
document.write(human.getName() + "<br>")
human.setName("Hưng")
document.write(human.getName() + "<br>")
human.say()