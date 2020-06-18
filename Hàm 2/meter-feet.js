function chuyenFeet(meter) {
    let feet = (3.279*meter)
    return feet
}

function tinhtoan1() {
    let input1=document.getElementById("meter").value;
    let ketqua1=chuyenFeet(input1);
    document.getElementById("ketqua1").innerHTML = ketqua1;
}

function chuyenMeter(feet) {
    let meter = (0.305*feet)
    return meter
}

function tinhtoan2() {
    let input2=document.getElementById("feet").value;
    let ketqua2=chuyenMeter(input2);
    document.getElementById("ketqua2").innerHTML = ketqua2;
}