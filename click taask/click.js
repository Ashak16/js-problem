let clk1=document.getElementById("btn1")
let clk2=document.getElementById("btn2")
let clk3=document.getElementById("btn3")

clk1.addEventListener("click",func)
function func(){
   if(clk1.innerText==="ClickMe"){
   clk1.innerText="clicked"
   clk1.style.color="yellow"
   clk1.style.backgroundColor="red"
   }
  else if(clk1.innerText==="clicked"){
   clk1.innerText="ClickMe"
   clk1.style.color="#8fce00"
   clk1.style.backgroundColor="#9551d4"
  }
  }

clk2.addEventListener("click",func2)
function func2(){
   if(clk2.innerText==="ClickMe"){
      clk2.innerText="clicked"
      clk2.style.color="yellow"
      clk2.style.backgroundColor="red"
      }
     else if(clk2.innerText==="clicked"){
      clk2.innerText="ClickMe"
      clk2.style.color="#8fce00"
      clk2.style.backgroundColor="#9551d4"
     }
   
}
clk3.addEventListener("click",func3)
function func3(){
   if(clk3.innerText==="ClickMe"){
      clk3.innerText="clicked"
      clk3.style.color="yellow"
      clk3.style.backgroundColor="red"
      }
     else if(clk3.innerText==="clicked"){
      clk3.innerText="ClickMe"
      clk3.style.color="#8fce00"
      clk3.style.backgroundColor="#9551d4"
     }
}


// let btn = document.querySelectorAll("button");

// console.log(btn);

// for(let i=0; i<= btn.length-1;i++)
// {
//     btn[i].flag = false;
//     btn[i].addEventListener("click",function(){
//       // console.log("btn flag check : "+btn[i].flag )
//       if(btn[i].flag == false)
//       {
//          console.log("if block")
//          btn[i].classList.add("color")
//          // btn[i].style.backgroundColor = "green";
//          btn[i].innerText ="Clicked";
   
//          btn[i].flag = true;
//          console.log(btn[i])
//       }
//       else{
//          btn[i].classList.add("color2")
//          // btn[i].style.backgroundColor = "#9551d4";
//          btn[i].innerText ="click me";
   
//          btn[i].flag = false;
//       }
      

     
//    });

   
// }





