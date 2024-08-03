var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Mul"] = 2] = "Mul";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    console.log(type);
}
var ans2 = calculate(1, 2, Arithmetic.Add);
