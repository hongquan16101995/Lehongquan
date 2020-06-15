function doanso() {
    let num1 = +prompt("Nhập vào số thứ nhất: ");
    let num2 = +prompt("Nhập vào số thứ hai: ");
    let numdoan = +prompt("Nhập vào số bạn đoán: ");
    let numran = Math.round(Math.random()*(num2-num1)+num1);
    while (numdoan < num1 || numdoan > num2) {
            alert("Bạn đã nhập sai, mời nhập lại!")
            numdoan = +prompt("Nhập vào số bạn đoán: ")
        }
    if (numdoan!=numran){
        let i=1;
        while (numdoan!=numran){
            numdoan = +prompt("Nhập vào số bạn đoán: ")
            i++
            if(i==3) {
                alert("Bạn đã thua!")
                break;
            }else if(numdoan==numran){
                alert("Chúc mừng bạn đã đoán đúng!")
                break;
            }
        }
    } else alert("Chúc mừng bạn đã đoán đúng!")
    document.write("Số đúng là: "+numran)
}