let cal = calcage(65);
console.log("calculated days:"+cal);

function calcage(x)
{
    return 65*365;
}

let less = numbers(22,15);
console.log("value:"+less);

function numbers(x, y)
{
    return (100>(x+y))?true:false;
}

let hour = seconds(2);
console.log("converted value:"+hour);

function seconds(x)
{
    return x*3600;
}

let side = polygon(4);
console.log("returned value:"+side);

function polygon(x)
{
    return (x-2)*180;
}


let logic = values(true,false);
console.log(logic);

function values(x,y)
{
    return x&&y;
}

let code = func(7);
console.log(code);

function func(x){
    return x===7;
}

let only = equal(-2);
console.log (only)

function equal(x)
{
    return x<=0?true:false
}

let check = equality(1,true);
console.log(check)

function equality(a,b){
    return a===b;
}

let string = some("is better than nothing");
console.log(string);

function some(x)
{
    return "something"+" "+x;
}

let farm = counted(2,3,5);
console.log(farm);

function counted(x,y,z)
{
    return (x*2)+(y*4)+(z*4);
}




