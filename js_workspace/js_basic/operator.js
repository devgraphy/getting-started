/*연산자
//산술연산자
*/
let a = 10;
let b = 20;
console.log(a+b);
console.log(`${a}+${b} = ${a+b}`);  //문자열 변수 같이 사용하는 방법
document.getElementById("data").innerHTML+="<div>" + (a + b) + "</div>"

//대입연산자: =
console.log("\n");
const z = a + b;
console.log(z);
//비교연산자: > < >= >= == === !=
//=== : type 비교까지
console.log("\n");
console.log(a + ">" + b + "=" + (a>b)); //연산 순서 주의
console.log(`${a} > ${b} = ${a>b}`);
document.getElementById("data").innerHTML+="<div>" + a + " > " + b + " = " + (a > b) + "</div>"
if( a==='10') console.log(`===연산자로 숫자 문자 비교 a는 문자 10입니다.`);
if( a===10) console.log(`===연산자로 숫자 문자 비교 a는 숫자 10입니다.`);

for(let i = 1; i < a; i++){
    if(i % 2 == 0) console.log(`${i}는 짝수입니다.`);
    else console.log(`${i}는 홀수입니다.`);
}
if(a < b) console.log(`${a}는 ${b}보다 작은 수 입니다.`);
if(a > b) console.log(`${a}는 ${b}보다 큰 수 입니다.`);
if(a != b) console.log(`${a}는 ${b}보다 다른 수 입니다.`);
if(a == b) console.log(`${a}는 ${b}보다 같은 수 입니다.`);
//논리연산자: && || ~

//비트연산자: & | ^
