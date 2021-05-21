let info = [45, 11, 7, 32, 20, 19];
info.sort(function(a,b){
    return a - b;
});
console.log(info.toString());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("data").innerHTML = fruits.toString();
document.getElementById("data").innerHTML += '\n'
document.getElementById("data").innerHTML += fruits.join(" * ");

//pop 메서드
let last = fruits.pop();   
document.getElementById("data").innerHTML += last;

//push 메서드
let num = fruits.push("kiwi");
console.log(`num(push return) = ${num}`);
//shift 메서드
fruits.shift();
console.log(`after shift = ${fruits.toString()}`);

//unshift 메서드
fruits.unshift("Lemon");
console.log(`after shift = ${fruits.toString()}`);

//sort 메서드
fruits.sort();
console.log(`sort result: ${fruits.toString()}`);

//filter 메서드
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//foreach 메서드
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
array1.forEach(element => {console.log(element)});

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

//map 메서드 : 돌면서 조작할 때. foreach와 구분
    // pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
    // expected output: Array [2, 8, 18, 32]

//splice 메서드: filter, map과 달리 원본 변경됨. 마스터 데이터 삭제,추가하기 위해 사용
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
    // inserts at index 1
console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
    // replaces 1 element at index 4
console.log(months);
    //
months.splice(3, 2, 'May');
console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(4,1); //삭제
console.log(months);












