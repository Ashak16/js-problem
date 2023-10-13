let div1=document.createElement("div");
div1.className="container";

let div2=document.createElement("div")
div2.className="cont2"

let image1=document.createElement("img")
image1.className="pic"


let btn1=document.createElement("button")
btn1.innerText="previous"

let btn2=document.createElement("button")
btn2.innerText="Next"

div2.append(btn1,btn2)
div1.append(image1)

let pic2=["moon1.jpg"]
image1.src=pic2

document.body.append(div1,div2)

var i=0;
var image=["moon2.jpeg","moon3.jpg","moon4.jpg","moon5.jpg"]

btn2.addEventListener("click",first)
function first(){
    i++;
    image1.src=image[i]
}

btn1.addEventListener("click",second)
function second(){
    i--;
    image1.src=image[i]
}