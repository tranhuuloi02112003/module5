function isPrime(number:number):boolean {
        let isPrime=true;
        if (number<2){
            isPrime=false;
        }else if (number>2){
            for (let i   = 2; i <=Math.sqrt(number) ; i++) {
                if (number%2==0){
                    isPrime=false;
                    break;
                }
            }
        }
    return isPrime;
}

let arrayNumber=[1,2,3,4];
let sumSNT=0;
for (let number of arrayNumber) {
    if (isPrime(number)){
        sumSNT+=number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sumSNT);
