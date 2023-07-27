var array = [0, 1];
var sumFibonacci = 1;
function fibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
for (var i = 1; i <= 9; i++) {
    array.push(fibonacci(i));
    sumFibonacci += fibonacci(i);
}
console.log(array.toString());
console.log("T\u1ED5ng c\u00E1c s\u1ED1 fibonacci l\u00E0: ".concat(sumFibonacci));
