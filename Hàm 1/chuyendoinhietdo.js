function calTempC(tempF){
    let tempC = (tempF-32)/1.8
    return tempC
}
function result() {
    let tempF = document.getElementById("input").value;
    let result = calTempC(tempF);
    document.getElementById("output").innerHTML = result;
}