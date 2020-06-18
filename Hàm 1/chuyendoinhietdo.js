function tinhDoC(doF){
    let doC = (doF-32)/1.8
    return doC
}
function ketqua() {
    let doF = document.getElementById("nhapvao").value;
    let ketqua = tinhDoC(doF);
    document.getElementById("xuatra").innerHTML = ketqua;
}