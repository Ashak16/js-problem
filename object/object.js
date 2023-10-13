

// let student1 = ["kavin", 23 , "12-08-2004"]


// console.log(student1[0])

// let studentObj = { name : "kavin" ,
//                    age : 23 , 
//                    dob : "12-08-2003"
//                 }

// let studentObj2 = { name : "Naveen" ,
//                    age : 22 , 
//                    dob : "12-11-2003"
//                 }


//  console.log(studentObj.name+" "+studentObj.dob)

//  console.log(studentObj2.name)

//  studentObj2.name = "Hari"
//  console.log(studentObj2.name)



// ----------------- using new object -------------


// let laptop = new Object();

// laptop.name = "lenovo";
// laptop.id = 2391;
// laptop.price = 55000;
// laptop.RAM = "16gb";


// console.log(laptop)


// --------------------- access Objects ---------------

// console.log(laptop.price)

// laptop.price = 70000;

// console.log(laptop["price"])

// let laptop2 = {
//         0 : 23,
//         1 : 24,
//         2 : 25
// }


// console.log(laptop2[0])


// ---------------------- Nested Objects  - Arrays ---------------

// ---------------------- try to code on your own --------------

// let laptop3 = {
//     name : "Dell",
//     id : 231,
//     price : 75000,
//     RAM : "32gb",
//     dimensions : { },
//     category : []
     
// }



// ----------------------- methods ------------------  



// let laptop3 = {
//         name : "Dell",
//         id : 231,
//         price : 75000,
//         RAM : "32gb",
//         display() {
//             console.log("Displaying content")
//         },
//         totalPrice(GST){
            
//            console.log(laptop3.price+GST) 
//         }
//     }


// laptop3.display();
// laptop3.totalPrice(20000)

// ----------------------nested object-----------------------
let laptop ={
    name:"lenovo",
     id :230,
     price:80000,
    dimension:{
        length:7,
        breadth:4.5,
        height:5
    },
    category:["electronic","phones","clothes"],

    address:{
        city:"madurai",
        state:"Tamilnadu",
        country:"India",
        number:[1,2,4,9],
    studentinfo:{
        name:"asha",
        department:"CSE",
        employeeinfo:{
           name2:"vanthana"
        }
    }
    }
    
}
console.log(laptop.address.studentinfo)
console.log(laptop)
console.log(laptop .dimension.length)
console.log(laptop.category[1])
console.log(laptop.address.number[2])
console.log(laptop.address.studentinfo.name)

// let names = ["abc","def","ghi"]
// console.log(names)
// let obj = Object.assign({},names)
// console.log(obj)