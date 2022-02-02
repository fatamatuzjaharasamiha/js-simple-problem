function getLargeElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(i);
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let ages = [12, 54, 34, 76, 32];
let oldest = getLargeElement(ages);
console.log('large element is', oldest);