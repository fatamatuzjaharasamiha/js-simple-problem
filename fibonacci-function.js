// fibonacci
// third=2nd+1st
/* 4th=3rd+2nd
5th=4th+3rd
6th = 6 er 1 kom + 6 er 2 kom */

/* evab nth = (n - 1) + (n - 2)
ith = (i - 1)th + (i - 2)th */

// function diye fibonacci series
function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo;
}

let fibonacci = fibonacciSeries(13);
console.log('13th fibonacci series is =', fibonacci);

let fibonacci1 = fibonacciSeries(10);
console.log('10th fibonacci series is =', fibonacci1);

let fibonacci2 = fibonacciSeries(5);
console.log('5th th fibonacci series is =', fibonacci2);

let fibonacci3 = fibonacciSeries(12);
console.log('13 th fibonacci series is =', fibonacci3);

/* output:
13th fibonacci series is = [
    0,   1,  1,  2,  3,  5, 
    8,  13, 21, 34, 55, 89, 
  144, 233
]
10th fibonacci series is = [
   0, 1,  1,  2,  3,        
   5, 8, 13, 21, 34,        
  55
]
5th th fibonacci series is = [ 0, 1, 1, 2, 3, 5 ]
13 th fibonacci series is = [
    0,  1,  1,  2,  3,  5,
    8, 13, 21, 34, 55, 89,
  144
] */