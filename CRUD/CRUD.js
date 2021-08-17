let productName = []

function drawTable() {
    let data = "<br><table>"
    for (let i = 0; i < productName.length; i++) {
        data += "<tr>"
        data += "<td>" + productName[i] + "</td>"
        data += "<td>" + "<button type='button' onclick='edit(" + i + ")'>Edit</button>" + "</td>"
        data += "<td>" + "<button type='button' onclick='deleteP(" + i + ")'>Delete</button>" + "</td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("product").innerHTML = data
}

function edit(i) {
    productName[i] = prompt("Nhập vào tên mới: ");
    drawTable()
}

function deleteP(i) {
    productName.splice(i, 1)
    drawTable()
}

function addName() {
    let newProduct = document.getElementById("add").value
    productName.push(newProduct)
    document.getElementById("add").value = ""
    drawTable()
}