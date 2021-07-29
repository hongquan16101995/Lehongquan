let n = parseInt(prompt("Nhập vào số phần tử của mảng: "))
let arr = []
let arr1 = []
let arr2 = []
for (let i = 0; i < n; i++) {
    let pt = parseInt(prompt("Nhập vào phần tử thứ " + (i+1) + " :"))
    arr.push(pt)
    arr1.push(pt)
    arr2.push(pt)
}

// 1.Tính trung bình cộng các số lẻ ở vị trí chẵn
function sumOdd(arr){
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] %  2 !== 0 && i % 2 === 0) {
            sum += arr[i]
            count++
        }
    }
    return sum/count
}

// 2.Tìm số lớn nhất trong mảng vừa nhập
function maxArr(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// 3.Tìm vị trí các số nhỏ nhất trong mảng
function minArr(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i]
        }
    }

    let  arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            arr1.push(i)
        }
    }
    return arr1
}

// 4.Đếm các số chính phương có trong mảng
function perfectSquare(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if(Math.sqrt(arr[i]) % 1 === 0){
            arr1.push(arr[i])
        }
    }
    return arr1
}

// 5.Hiện thị các số nguyên tố có trong mảng lên màn hình
function displayPrime(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let check = true
        if (arr[i] < 2) {
            check = false
        }
        for (let j = 2; j < arr[i]; j++){
            if(arr[i] < 2 || arr[i] % j === 0){
                check = false
                break
            }
        }
        if (check === true) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

// 6.Thay thế các phần tử âm có trong mảng bằng giá trị 0
function changeNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}

// 7.Xóa các phần tử âm có trong mảng
function removeNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

// 8.Sắp xếp mảng đã nhập theo thứ tự tăng dần
function mySort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

document.write(arr.join(", ") + "<br>")
document.write("Tính trung bình cộng các số lẻ ở vị trí chẵn: " + sumOdd(arr) + "<br>")
document.write("Tìm số lớn nhất trong mảng vừa nhập: " + maxArr(arr) + "<br>")
document.write("Tìm vị trí các số nhỏ nhất trong mảng: " + minArr(arr) + "<br>")
document.write("Đếm các số chính phương có trong mảng: " + perfectSquare(arr) + "<br>")
document.write("Hiện thị các số nguyên tố có trong mảng lên màn hình: " + displayPrime(arr) + "<br>")
document.write("Thay thế các phần tử âm có trong mảng bằng giá trị 0: " + changeNegative(arr) + "<br>")
document.write("Xóa các phần tử âm có trong mảng: " + removeNegative(arr1) + "<br>")
document.write("Sắp xếp mảng đã nhập theo thứ tự tăng dần: " + mySort(arr2))