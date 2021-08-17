function calTempC(tempF) {
    return (tempF - 32) / 1.8;
}

function result() {
    let tempF = document.getElementById("input").value;
    document.getElementById("output").innerHTML = calTempC(tempF);
}