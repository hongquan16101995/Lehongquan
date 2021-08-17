function showValue(value) {
    document.getElementById("display").value += value
}

function calculator() {
    document.getElementById("display").value = eval(document.getElementById("display").value)
}