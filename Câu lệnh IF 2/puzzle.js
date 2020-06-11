let n = 0;
function  changeImg(e) {
    n++;
    let image1="ảnh/first"+n+".jpg";
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg1(e) {
    n++;
    let image1="ảnh/two"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg2(e) {
    n++;
    let image1="ảnh/three"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg3(e) {
    n++;
    let image1="ảnh/four"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg4(e) {
    n++;
    let image1="ảnh/five"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}