//1
const arr1 = ['mango', 'banana', 'lemone'];
//2
const arr2 = ['string', 5, true];
//3
const arr3 = [[],[],[]];
//4
const obj1 = {}
console.log(typeof obg1);
//5
const obj2 = {
    id:'03030303',
    email: "03@gmail.com",
    password: "123456"
}
console.log(obj2);
//6
const arrObj1 = [
{
    width: "30",
    height: "70",
},
{
    width: "40",
    height: "80",
},
{
    width: "50",
    height: "90",
}
]
console.log(arrObj1);
//7
const objArr1 = {
    string : "string",
    arr:['karin',"Berlin"],
    obj: {

        age:"27",
        dateOfBirth: "16/7/94"
    }
}
console.log(objArr1);
//8
console.log(typeof objArr1.arr);
console.log(Array.isArray(objArr1.arr));
//9
console.log(typeof objArr1);
//10
let arr4 = ['Tel-Aviv', 'London','Berlin','NYC'];
console.log(arr4);
//10.1
arr4.push('Barcelona');
console.log(arr4);
//10.2
arr4.unshift('Amsterdam');
console.log(arr4);
//10.3
arr4.pop();
console.log(arr4);
//10.4
console.log(arr4.length);
//10.5
arr4.pop();
console.log(arr4);
//10.6
arr4.splice(1,1);
console.log(arr4);



