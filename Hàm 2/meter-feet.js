function calFeet(meter) {
    let feet = (3.279*meter)
    return feet
}

function cal1() {
    let input1=document.getElementById("meter").value;
    let result1=calFeet(input1);
    document.getElementById("result1").innerHTML = result1;
}

function calMeter(feet) {
    let meter = (0.305*feet)
    return meter
}

function cal2() {
    let input2=document.getElementById("feet").value;
    let result2=calMeter(input2);
    document.getElementById("result2").innerHTML = result2;
}