// Example 1

/**
 * A generic function can work with any data type. 
 * You define a generic function by adding a type parameter inside angle brackets (<T>) before the function's parameter list.
 */

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello"); // T is string
let output2 = identity<number>(42);      // T is number


// Example 2

// Generic classes allow you to create a class that can work with various types.

class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "zero";
stringNumeric.add = (x, y) => x + y;


// Example 3

// In this example, if no type argument is provided, T defaults to string for createArray function.

function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let stringArray = createArray(3, "Hello"); // ['Hello', 'Hello', 'Hello']
let numberArray = createArray<number>(3, 5); // [5, 5, 5]