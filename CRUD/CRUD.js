let productName = []

function drawTable() {
    let data = "<br><table><tr><th id='name'>Tên sản phẩm</th><th></th><th></th><th></th></tr>"
    for (let i = 0; i < productName.length; i++) {
        data += "<tr>"
        data += "<td>" + productName[i] + "</td>"
        data += "<td>" + "<button type='button' onclick='edit(" + i + ")'>Edit</button>" + "</td>"
        data += "<td>" + "<button type='button' onclick='deleteProduct(" + i + ")'>Delete</button>" + "</td>"
        data += "<td>" + "<button type='button' onclick='viewProduct(" + i + ")'>View</button>" + "</td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("product").innerHTML = data
}

function addName() {
    let newProduct = document.getElementById("add").value
    productName.push(newProduct)
    document.getElementById("add").value = ""
    drawTable()
}

function edit(i) {
    document.getElementById("edit").value = productName[i]
    document.getElementById("index").value = i
    drawTable()
}

function editName() {
    let index = document.getElementById("index").value
    productName[index] = document.getElementById("edit").value
    document.getElementById("edit").value = ""
    drawTable()
}

function deleteProduct(i) {
    productName.splice(i, 1)
    drawTable()
}

function viewProduct(i) {
    document.getElementById("product").innerHTML = "<br>Sản phẩm thứ " + (parseInt(i) + 1) + " là: " + productName[i]
}