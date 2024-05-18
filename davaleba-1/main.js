// davaleba 1
function compare(a, b) {
    if (a === b) {
        return "tolia";
    } else {
        return "ar aris toli";
    }
}

console.log(compare(4, 4));

// davaleba 2
function compare(a, b) {
    if (a == b) {
        return "tolia";
    } else {
        return "ar aris toli";
    }
}

console.log(compare(4, 4));

// davaleba 3
function temperature(farenheit) {
    var celsius = (farenheit - 32) * 5 / 9;
    return celsius
}

console.log(temperature(32));
console.log(temperature(100));

// davaleba 4
function temperature(farenheit) {
    if (!Number.isInteger(farenheit)) {
        return false;
    }
    var celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

console.log(temperature(32));
console.log(temperature(100));
console.log(temperature('test'));


// davaleba 5-6
function calc(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    }
}

console.log(calc(5, 3, '+')); // 5+3=8
console.log(calc(5, 3, '-')); // 5-3=2
console.log(calc(5, 3, '*')); // 5*3=15
console.log(calc(5, 3, '/')); // 5/3=1.6666666666666667
console.log(calc('test', 3, '+')); // false