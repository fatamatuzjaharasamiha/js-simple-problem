var first = 5;
var second = 7;
console.log('Two numbers are', first, 'and', second);

// swap korte caile/
var temp = first;
first = second;
second = temp;
console.log('after swaping', first, 'and', second);

// distruturing-swap without temp/
[first, second] = [second, first];
console.log('swaping without temp', first, 'and', second);