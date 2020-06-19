function doanso() {
    let num1 = +prompt("Nhập vào số thứ nhất: ");
    let num2 = +prompt("Nhập vào số thứ hai: ");
    let guestNum = +prompt("Nhập vào số bạn đoán: ");
    let ranNum = Math.round(Math.random()*(num2-num1)+num1);
    while (guestNum < num1 || guestNum > num2) {
            alert("Bạn đã nhập sai, mời nhập lại!")
        guestNum = +prompt("Nhập vào số bạn đoán: ")
        }
    if (guestNum!=ranNum){
        let i=1;
        while (guestNum!=ranNum){
            guestNum = +prompt("Nhập vào số bạn đoán: ")
            i++
            if(i==3) {
                alert("Bạn đã thua!")
                break;
            }else if(guestNum==ranNum){
                alert("Chúc mừng bạn đã đoán đúng!")
                break;
            }
        }
    } else alert("Chúc mừng bạn đã đoán đúng!")
    document.write("Số đúng là: "+ranNum)
}