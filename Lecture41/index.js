// Introduction of operator  and conditinal in javascript

/*1.operators
unary and Binary Operators
1.Arithmatic Operator:
+,-,*,/,%,++,--,**
2.Assignment Operator:
=,+=,-=,*=,/=,%=
3.Comparison Operator:
==,===,!=,!==,>,<,>=,<=
4.Logical Operator:
&&,||,!
5.Ternary Operator:
condition?true:false*/


// let a=10;
// let b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// //console.log(a++);
// console.log(a);
// console.log(b--);
// console.log(2**3);

// //Assignment operator
// console.log(a+=3);/


// Comparasion Operator

// console.log(a<b);
// console.log(a>b);

// Logical operator

// console.log(true && false);
// console.log(true || false);
// console.log(!true);
// let a=10;
// let b="10";

// console.log(a===b);

// // ternary operator
// // (a<b)?console.log("a is smaller than b"):console.log("a is greater than b");
// let age=1

// 0;
// let ans=(age>=18)?"You can vote":"you cannote vote";
// console.log(ans);
// console.log(2|5);

// // << number multiply ho jata hai 5>>2=5x2x2=20
// console.log(5<<2);
// console.log(10<<1)

// // >> number divide ho jata hai 5>>2=5/2=1
// console.log(5>>2);



// conditional statements

// 1.if else
// 2.switch (key) 
  

if(10>10){
    console.log("12 is greater than 10");
}else{
    console.log("10 is greater than 12");
}
// switch case

let a="s";
switch(a){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
}