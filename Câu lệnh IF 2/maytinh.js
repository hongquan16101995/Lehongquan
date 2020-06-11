function showValue(value) {
    document.getElementById('hienthi').value+=value
}
function calculator() {
    document.getElementById('hienthi').value=eval(document.getElementById('hienthi').value)
}