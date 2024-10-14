// just testing it working or not
var a =2;
var b =3;

var sum = a+b;
console.log(sum);

//loop statement
const arr =[3,4,5,6,7,8];
arr.forEach((item)=>{
    console.log(item);
});

//console.log(arr);

//console.log(length.arr);
//object in js...
let school ={
    name: "vikas",
    course: 'b.tech',
};
console.log(school);
//map in js
arr.map((val,i)=>{
    console.log(val*i)
});

let result = arr.map((val,i)=>{
    return(val*i);
});
console.log(result);

//filter function
const result2 =arr.filter((val,i)=>{
    if (val%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(result2);
//larger element in array
const array = [3,4,5,6,7,8,9];
let get = array[0];

for (let i=1; i<array.length; i++) {
    if (array [i] > get) {
        get = array[i];
    }
}
console.log(get);
