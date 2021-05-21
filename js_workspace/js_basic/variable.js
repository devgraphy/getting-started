var x;  //변수 선언
//x =6;   //값 할당
x = "6";    //동적으로 할당. 이러한 유연성이 디버깅에서 애먹을 수 있음
const z = 1;
//z = 2;
let globalVariable=5;
{
    let localVariable=5;
    var y=5;
    console.log("localVariable ",  localVariable);
    console.log("globalVariable ",  globalVariable);

    console.log("var x", x);
    console.log("var y", y);
}
//console.log("localVariable ",  localVariable);
console.log("globalVariable ",  globalVariable);

console.log("var x", x);
console.log("var y", y);
/*
var, let, const

let: ECMA6 에서 추가됨
가능하면 var 사용x, let 권장
- var: 변수 유효범위 구분 못 하기 때문에 let 사용한다.

const: 상수(read only), 값 변경 안 하는 경우를 명시한다. 
- TypeError: Assignment to constant variable.
*/


document.getElementById("data").innerHTML= "<h3>variable x = " + x + "</h3>";
document.getElementById("data").innerHTML= "<h3>variable y = " + y + "</h3>";

/*
* innerHTML이기 때문에 태그가 들어가 도 상관 없음 
* "" , '' 상관없음
*``(백 쿼트) 사용하면 문자열과 변수 함께 사용가능(+ 쓰기 불편하면)

* 제일 발생 많이 하는 에러가 타입에러
Uncaught typeError: Cannot set property innerHTML of null
:document.getElementById를 통한 요소를 못 찾았다는 의미
*/


/*
* DataType - primitive(int, float, char, boolean), Referemce(class, array)
문자열과 숫자의 연산->앞에나오느냐 뒤에나오느냐에 따라 차이가 난다.
- type이 명시되지 않아 발생하는 혼동 발생
varnilla JS에서는 타입을 명시

<개발자 습관 가이드>
실무에 가면 코딩가이드가 있는데, FE는 개발자 개인에게 맡기는 경우가 많음
실무에 가서 코딩가이드가 존재하는지 확인하고 준수하여 코드 작성하는 습관가지기!!!
*/
let a = 10 + "16";  //1016
let b= "10" / 16;   // 10/16 0.62
console.log("a: " + a);
console.log("b: " + b);




