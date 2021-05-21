/*1. JS는 일급함수
함수 정의, 함수 호출해서 사용
정의: function 함수명([param, param,...]){ 구현; [return data;]}
호출: let data =  함수명([param, param,...])
parameter, return data에 함수 사용 가능

//====
let functionV = function([param, param,...]){ 구현; [return data;]}
functionV는 함수 객체



*/
//함수정의
function add(x, y){
    return x + y;
}
//함수호출
console.log("add(3,4)=",add(3,4));
console.log(`add(3,4)= ${add(3,4)}`);

//위에서 아래로 실행흐름. 정의하기 전에 호출하면 오류발생할 수 있다.
//정의 전 호출해도 오류없이 실행됨. 왜일까?? defer 때문
//가능하면 정의 먼저!


//익명함수
let substract = function(x, y){
    return x-y;
}
console.log("substract(20,10)=",substract(20,10),typeof substract);

//arrow function
//arrow function: ([param, param,...]) =>{}
//일회용
let divide = (x,y)=>console.log(`divide(${x}/${y}) :`,x/y);
divide(20,10);

let divide1 = (x,y)=>{return x/y};
console.log("divide(20,10) = ",divide1(20,10));

//함수 선언 및 실행
let multiply = ((x,y)=>{console.log(`multiply(${x},${y})`,x*y)})(20, 10);

//mdn:closure 함수 참조
function makeAdder(x){
    let y=1;    //makeAdder function local variable
    return function(z){ //closure 함수
        y=100;  //외부함수 local variable 사용
        return x+y+z;
    }
}

let add5 = makeAdder(5);
console.log(add5(2), add5);

//클로져 교재 예제
function multi(n){
    return function(){
        return n*=n;
    }
}
let multi5 = multi(5);
let multi10 = multi(10);
console.log(multi5, multi5());
console.log(multi10, multi10());

let t = 5;
{
    console.log(t);
}

//재귀함수
let result=1;
function factorial(n){
    if(n === 0){
        console.log('호출 끝');
    }
    else{
        console.log('호출' + n);
        result*=n;
        factorial(n-1);

    }
    return result;
}
console.log("10!", factorial(10));