// let str = "Hii"
// let str2 ="welcome to DCKAP"
// console.log(str===str2)

// let str3 = str.concat(" "+str2," "+2003," "+"bye","***")
// console.log (str3)

// let str4 = str2.slice(3,8)
// console.log(str4)
// console.log(str4.length)

// let str5 = str2.substring(1,3)
// console.log(str5)

// let str6 = str2.substr(-4)
// console.log(str6)

// let str7 = str2.replace("DCKAP","DCKAP PALLI")
// console.log(str7)

// console.log (str7.toLowerCase())
// console.log(str7.toUpperCase())






// -------------string1---------------
// ---------------3rd string to array-----------
// let str = prompt("Enter a value")
// console.log(str)
// let arr = str.split(" ")
// console.log(arr)


// ---------------4th -----------------

// let str = prompt("Enter a value")
// let str2 = prompt("Enter a Startindex")
// let str3 = prompt("Enter a Endindex")
// let str4= str.slice(str2,str3)
// console.log(str4)

// -------------2nd blank--------------
// let a= prompt("Enter a value")
// a= a.trim();
// if(a.length==0)
// {
//     console.log("true")
// }
// else{
//     console.log("False")
// 
// --------------1st number or not--------------------


// var a = prompt("enter the value");

// let valid = a.trim();

// let input = Number(valid);


// console.log(" value : "+valid.length)

// if(valid.length == 0)
// {
//     alert("INVALID INPUT")
// }
// else{
//     if(input)
//     {
//         alert("is a not a string")
//     }
//     else{
//         alert("Its a string")
//     }
// }

// --------------5th hide----------------

// let a = prompt("Enter your email");
// let a1=a.search(/@/);
// console.log(a1);
// let a2=a.slice(4,a1);
// let a3=a.replace(a2,"....");

// console.log(a3);

                   // ---------------string2----------------

// -------------------6th --------------------------
// let a = prompt("Enter a string")
// console.log(a)
// let b = a.replaceAll(" ","-")
// let c = b.toLowerCase()
// console.log(c)
// ---------------------------8th---------------------
// let num = parseInt(prompt("Enter a number"))
//  let onesdigit = num%10;
//  let tensdigit = num%100;

//  if(num%10==1 && num%100!=11)
//  {
//     console.log(num+"st")
//  }
//  else if(num%10==2 && num%100!=12)
// {
//     console.log(num+"nd")
// }
//  else if(num%10==3 && num%100!=13)
//  {
//     console.log(num+"rd")
//  }
//  else{
//     console.log(num+"th")
//  }

// -------------------9th--------------------------
// let a = prompt("Enter a value")
// let b = prompt("Enter a number")
// let c = a.split(" ",b)
// let d = c.join(" ");
// console.log(d)



// -------------------10th--------------------------
// let a=prompt("Enter a string")
// let b=prompt("Enter a Word to remove");

// let c=a.replace(b,'');
// let d=c.replace("  "," ")
// console.log("Result: "+d);

// -------------------11th--------------------------
// let a = prompt("Enter a string")
// let b = prompt("Enter a value")
// a = a.toLowerCase();
// b= b.toLowerCase();
// if(a.match(b)==null)
// {
//     console.log("not matched")
// }
// else{
//     console.log("Matched")
// }

// -------------------12th--------------------------
// let input1 = prompt("Enter a value")
// let input2 = prompt("Enter a value2")
//   input1=input1.toUpperCase()
//   input2=input2.toUpperCase()

// if(input1==input2){
//     console.log("True")
// }
// else{
//     console.log("false")
// }

// -------------13th---------------
// let a = prompt('Enter a string to change')
// let b = ''

// for(i=0;i<a.length;i++)
// {
//     if(a[i].match(/[a-z]/))
//     {
//         b += a[i].toUpperCase();
//     }
//     else
//     {
//         b += a[i].toLowerCase();
//     }

// }
// console.log(b)
// ---------------------array------------------------
// -------------1st------------
// var arr = array([1,2,3]);

// function array(x){
//     return(x[0]);
// }

// console.log(arr)

// ------------2nd---------------
// var arr = array([1,2,3,4],5);

// function array(x,y)
// {
//    console.log(x)
//    console.log(y)
//    return x.includes(y);
// }
// console.log(arr);

// -------------3rd-----------

// var a = rev([20,30,40])

// function rev(x){
//     return x.reverse();
// }
// console.log(a)


// ----------------5th-------------------
// var a = arr(["abc","def","ghi"])

// function arr(y){
//     return y.indexOf("abc")
// }
// console.log(a)


// ---------------6th------------


// var b = rem(["A","B","C","E","asha","test",true,"asha"])
 
// function rem(x){
//  console.log(x)
//     return x[x.length-1]
    
// }
// console.log(b)

// var b = rem(["A","B","C","E"])
 
// function rem(x){
//     return x.pop()
// }
// console.log(b)

// -----------------7th--------------
//  var a1 = a2(["A","B","C","D","E"])

//  function a2(x){
//     return x.join("")
//  }
// console.log(a1)



// ---------4th-----------

// var a = array(1,5)

// function array(x,y){
//      return([x,y])
// }
// console.log(a)

// ----------8th----------

// var a = x("Wash your hands!")
//  console.log(a) 

// function x(y){
//     let b = y.slice(-1);
//     let c = y.lastIndexOf(b);
//       c = c + 1;
//       return(c)
// }
