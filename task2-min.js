// write a function to find the smallest of three number/

function getSmall(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }

}
let smallest = getSmall(40, 15, 20);
console.log('smallest number is', smallest);
let smallest1 = getSmall(10, 15, 20);
console.log('smallest number is', smallest1);
let smallest2 = getSmall(5, 2, 20);
console.log('smallest number is', smallest2);