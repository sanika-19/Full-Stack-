


// console.log(age);
// const age=18;

// saymyname();

// function saymyname(){
//     console.log("Sanika");
// }

// console.log(num);
// var num=10;

// let ans=function sum(a,b){
//     console.log(a+b);
// }
// ans(10,20);

// class Person{}
// const obj=new Person();
// function greetme(greet,fnm){
//     console.log('Hello',fnm);
//     greet();
// }
// function solve(num){
//    return function (num){
//     return num*num;
//    }
// }
// let ans=solve(5);
// let finalans=ans(10);
// console.log(finalans);


const arr=[

    function add(a,b){
        return a+b;
    },
     function sub(a,b){
        return a-b;
    },
     function mul(a,b){
        return a*b;
    },
     function div(a,b){
        return a/b;
    }
]
let first=arr[0];
let second=arr[1];
console.log(first(10,20));




// function greet(){
//     console.log("Hello!!");
// }
// // greeet();
// greetme(greet,"Sanika");

let greet=function(){
    console.log('Hey!! Universe');
}
greet();