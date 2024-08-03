enum Arithmetic {
    Add,
    Sub,
    Mul
}

function calculate(a : number, b : number, type : Arithmetic){
    console.log(type);
}

const ans2 = calculate(1, 2, Arithmetic.Add); // Output = 0, since Add is the 0th element, for more details check the enums.js file above
