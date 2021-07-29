class Player {
    weight;
    height;
    constructor(weight, height) {
        this.weight = weight
        this.height = height
    }

    draw(){
        ctx.fillRect(100, 100, this.weight, this.height)
    }
}