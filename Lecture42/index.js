// Loops and String
// console.log ("sanika")
// for(let i=5;i>=1;i--){
//     console.log(i)
// }

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// break statement is used to exit the loop when a certain condition is met. In the above code, when i is equal to 3, the break statement will be executed, and the loop will terminate. Therefore, the output will be:
// for(let i=1;i<=5;i++){
//     if(i==3)break;
//     console.log(i);
// }

// // continue statement is used to skip the current iteration of the loop and move to the next iteration. In the above code, when i is equal to 3, the continue statement will be executed, and the console.log(i) will be skipped for that iteration. Therefore, the output will be:
// for(let i=1;i<=5;i++){
//     if(i==3)continue;
//     console.log(i);
// }


// while loop
// let i=5;

// while(i<10){
//     console.log(i);
//     i++;
// }

// do while

// let i=1;
// do{
//    console.log(i); 
//    i++;
// }while(i<=5);


// strings in js

let str="sanika";
let nm=`Hey!! 
I am sanika
Nice to Meet u!`
console.log(str.length);
console.log(nm)

let namee=new String("sanika more");
console.log(namee);
console.log(namee.toUpperCase());
console.log(namee.slice(0,3));
console.log(namee+str)

let s="Hello I am sanika More"
console.log(s.split(" "))