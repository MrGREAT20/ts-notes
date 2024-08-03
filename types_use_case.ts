interface Circle {
    radius : number;
    borderWidth? : number; // this means borderWidth field in Circle is optional, it can be there or it cant be
}

interface Square{
    side : number;
}

interface Rectangle {
    width : number;
    height : number;
}

type Shape = Circle | Square | Rectangle;

function renderShape(shape : Circle | Square | Rectangle){
    console.log("rendered!!");
}
// the above function's arguments will become complex if i introduce more shapes, we can solve this using Types

function newRenderShape(shape : Shape){
    console.log("rendered!!");
}

function renderCircle(circle : Circle){
    let borderWidthVariable : (number | undefined) = circle.borderWidth; //since borderWidth is optional borderWidthVariable can be undefined or will contain a value.

}