function calFeet(meter) {
    return (3.279 * meter);
}

function cal1() {
    let input1 = document.getElementById("meter").value;
    document.getElementById("result1").innerHTML = calFeet(input1);
}

function calMeter(feet) {
    return (0.305 * feet);
}

function cal2() {
    let input2 = document.getElementById("feet").value;
    document.getElementById("result2").innerHTML = calMeter(input2);
}