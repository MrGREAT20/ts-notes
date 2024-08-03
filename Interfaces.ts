interface Person1{
    name : string;
    age : number;
}

function greet1(person : Person1) : string {
    return `Hello there ${person.name}`;
}

let ans1 : string = greet1({name : 'Pralay', age:24});

console.log(ans1);


/**
 * You can also Export this interface Person1 and Implement this interface in some other class using Import
 * 
 * to export ->
 *      
 *        export interface Person1{
 *              name : string;
 *               age : number;
 *        }
 */