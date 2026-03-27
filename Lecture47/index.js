// Default parametre allows to use functions with deafult value

// function sayname(mynm="default name",lnm){
//     console.log("My Name is:"+mynm+""+lnm);
// }

// sayname("Sanika","More");


// function solve(value={age:18,wt:45,ht:155}){
//     console.log("Hello Dunia!!",value);
// }
// solve({age:20,wt:50,ht:160});

// function solve1(value=[18,45,155]){
//     console.log("Hello Dunia!!",value);
// }
// solve1([10,20,30]);

// function solve2(value="Sanika"){
//     console.log("Hello Dunia!!",value);
// }
// solve2(undefined);  //null not ignored but undefined is ignored
// Uses default value


function getAge(){
   return 87;
}
function utility(age=getAge(),name="Tanvi"){
   console.log("Age is: " + age);
   console.log("Name is: " + name);
}
utility()

// Classes and objects

// class human{
//     // properties
//     age;
//     name;
//     #wt=60;    // private property
//     ht;
//     // Constructor

//     constructor(age,name,ht){
//         this.age=age;
//         this.name=name;
//         this.ht=ht;
//     }

//     // behaviour
//      display(age,name,ht) {
//         console.log("Age is: " + age);
//         console.log("Name is: " + name);
//         console.log("Height is: " + ht);

//     }
//     walking(){
//         console.log("Human is walking!!");
//     }
//     get fetchwt(){
//         return this.#wt;
//     }
//     set modiftwt(newwt){
//         this.#wt=newwt;
//     }
    

// }

// let obj=new human(25,"John",5.8);
// obj.display(obj.age,obj.name,obj.ht);
// obj.walking();
// console.log("Weight is: " + obj.fetchwt);
// obj.modiftwt=65;
// console.log("Weight is: " + obj.fetchwt);

