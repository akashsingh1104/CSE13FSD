// console.log("hey.. im using JS")
// // let and var keyword

// var a=23;
// console.log("value of a ="+a)

// function sum(){
//     return 20+40;
// }
// function sumofsum(){
//     console.log(sum()+sum());
    
// }
// sumofsum();

// function info(roll,name,college,branch){
//     return "roll" + roll + "name" + name+"college" + college + "branch"+ branch;
// }
// function myinfo(){
//     const myData = info("123","akash","ABES","CSE")
// }
// const info1 = myinfo();
// console.log(info1);

function generateNumber(){
    return Math.floor(Math.random()*1000)
}
// const randomNumber = generateNumber();
// console.log(randomNumber);

function findEvenNumber(){
    const num = generateNumber();
    // console.log(num);
    if(num%2==0){
        // console.log(num + "is even number");

    }
    else{
        // console.log(num + "is odd number");
    }
}
findEvenNumber();

//IIFE
// (()=> (console.log("Hey... using IIFE")))(); //bound in paranthesis

//CALLBACK FUNCTION
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result = clbk(20,40);
//     return msg+result;
// }
// const callback = sumWithMsg(sum,"Hii....Sum");
// console.log(callback);

// setTimeout(()=> (console.log("Hello")),2000)
setTimeout(()=>{
    console.log("One");
    setTimeout(()=>{
        console.log("Two");
        setTimeout(()=>{
            console.log("Three");
            setTimeout(()=>{
                console.log("Four");
                setTimeout(()=>{
                    console.log("Five");
                    setTimeout(()=>{
                        console.log("Six");
                        setTimeout(()=>{
                            console.log("Seven");
        
                        },1000)
        
                    },1000)
                    
        
                },1000)
        
            },1000)
        
        },1000)
    },1000)
    
},2000)