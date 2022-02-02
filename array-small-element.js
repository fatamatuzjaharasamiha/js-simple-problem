function getSmallElement(numbers) {
    let smallest = numbers[0];
    // small element ber korte hle 0 tomo index er element k initial man hisebe declare krte hbe,tarpr setr sathe compare hye hye small element ber krbe/
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

let ages = [12, 54, 34, 76, 32];
let young = getSmallElement(ages);
console.log('Small element is', young);

let array1 = [2, 5, 8, 7, 9, 3, 1];
let young1 = getSmallElement(array1);
console.log('Small element is', young1);

let array2 = [10, 20, 30, 70];
let young2 = getSmallElement(array2);
console.log('Small element is', young2);