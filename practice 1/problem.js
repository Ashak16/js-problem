let add = addnum(3,2);
console.log("Addition:"+add);


function addnum(x,y){
    return x+y;
}
let sec = minutes(3);
console.log("minutes-seconds:"+sec);

function minutes(x){
    return x*60;
}
let triangle = area(10,10);
console.log("Area of traingle:"+triangle);

function area(x,y){
    return(1/2)*x*y;
}
let integer = increment(9);
console.log("Incremented value:"+integer);

function increment(x){
    return x++;
}

let remainder = value(3,4);
console.log("remainder value:"+remainder)

function value(x,y){
    return x%y;
}
