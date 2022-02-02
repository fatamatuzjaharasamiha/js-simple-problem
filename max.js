// // compare 2
// // find max of two values/
// const business = 450;
// const minister = 550;

// if (business > minister) {
//     console.log('business is larger');
// }
// else {
//     console.log('misistr is big');
// }


// 2.find max of three values
const business = 450;
const minister = 550;
const army = 600;
if (business > minister && business > army) {
    console.log('business bigger');
}
else if (minister > business && minister > army) {
    console.log('minister bigg');
}
else {
    console.log('army big')
}

// another way to compare 3 items/
var max = Math.max(business, minister, army);
console.log('largest is', max);

// function diye large ta ber kora 3 tar moddhe

function getLarge(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let largestNum = getLarge(10, 20, 30);
console.log('large number is', largestNum);
let largestNum1 = getLarge(10, 100, 30);
console.log('large number is', largestNum1);
let largestNum2 = getLarge(70, 30, 50);
console.log('large number is', largestNum2);