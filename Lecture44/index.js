// Referance type

// 1.Object
// 2.Array
// 3.Function


// let obj={name:"sanika", age:12,city:"Pune",
//     greet:function(){
//         console.log("hello!!")
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj))

// let obj2=obj;

// obj2.name="Saniya"
// console.log(obj2);
// console.log(obj);

// arrays-Collection of items
// let arr=[1,2,3,4,5];
// console.log(arr);

// let arr1=[1,'sanika',true,3.14]
// console.log(arr1);


// array Constructor
// let brr=new Array(1,'sanika',96.40);
// console.log(brr);
// // console.log(typeof(brr));
// // console.log(brr[2]);
// brr.push("Pune");
// // brr.pop();
// brr.unshift("Hello!!");
// // console.log(brr);
// brr.push(10);
// brr.push(20);
// brr.push(40);
// brr.push(50);
// brr.push(60);
// console.log(brr.slice(2,5));

// brr.pop();
// console.log(brr);
// var arr=[10,20,30];
//  let ansarr=arr.map((num=>{return num*num}));
//  console.log(ansarr);
// arr.map((num,index)=>{console.log(num*num);
// console.log(index)})

// Filter method

// var arr=[21,12,75,23,44,122,56,79];
// let arr1=arr.filter((num)=>{
//     // if(num%2==0){
//     //    return true;
//     // }else{
//     //     return false;
//     // }
//     return num%2==0;
// })
// console.log(arr1);

// let arr=[1,'sanika',true,'smirity',5,7];
// let ans=arr.filter((val)=>{
//     if(typeof(val)=='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);

// let arr=[10,40,30,20,10];
// let ans=arr.reduce((acc,curr)=>{return acc+curr},0)
// console.log(arr.sort().reverse());
// console.log(ans);
// console.log(arr.indexOf(10));
// console.log(arr.find)
// arr.forEach((num)=>{
//    console.log(num*2)});
// Built in methods in array
// push, pop,shift,unshift,slice,map,filter,sort,find,reduce

// for in loop
// let obj={
//     name:"sanika",
//     age:12,
//     city:"Pune",
//     weight:45,
//     height:"5ft 2innch",
//     greet:function(){
//         console.log("hello!!");
//     }

// }
// for (let key in obj){
//    console.log(key," ",obj[key]);
// }
let arr=[10,20,30,40,50];
// for(let val of arr){
//     console.log(val);
// }
// let fnm="Sanika";
// for(let val of fnm){
//     console.log(val);
// }
function getsum(arr){
    let sum=0;
    let len=arr.length;
    for(let i=0;i<len;i++){
        sum+=arr[i];    
    }
    return sum;
}
let ans=getsum(arr);;
console.log(ans);