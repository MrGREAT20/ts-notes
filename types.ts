
interface genderInterface {
    gender : string;
    orientation : string;
}

type occupationType = {
    occupationType : string;
    designation : string;
}

type personType = {
    name : string;
    age : number;
    occupation : occupationType;
    gender : genderInterface;
}