function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % 2 == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var arrayNumber = [1, 2, 3, 4];
var sumSNT = 0;
for (var _i = 0, arrayNumber_1 = arrayNumber; _i < arrayNumber_1.length; _i++) {
    var number = arrayNumber_1[_i];
    if (isPrime(number)) {
        sumSNT += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sumSNT);
