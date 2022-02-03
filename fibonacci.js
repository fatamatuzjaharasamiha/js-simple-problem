// fibonacci
// third=2nd+1st
/* 4th=3rd+2nd
5th=4th+3rd
6th = 6 er 1 kom + 6 er 2 kom */
// evab nth = (n - 1) + (n - 2)

// ith = (i - 1)th + (i - 2)th

// Problem:--for loop diye fibonacci series.......
const fibo = [0, 1]
for (let i = 2; i <= 10; i++) {
    //  nth = (n - 1) + (n - 2)
    // ith = (i - 1)th + (i - 2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
/* 
output:[
    0, 1,  1,  2,  3,
    5, 8, 13, 21, 34,
   55
 ] */