/*조건문 */
//제어문
let x = prompt("월 입력: ", "0");
if(x==1|| x=='3'|| x==5||x==7||x==8||x==10||x==12)
    console.log(`${x}월은 31일까지 있습니다.`);
else if(x==4||x==6||x==9||x==11)
    console.log(`${x}월은 30일까지 있습니다.`);
else if(x==2)
    console.log(`${x}월은 28일까지 있습니다.`);
else
    console.log(`월 입력을 확인하세요.`);


switch(x){  /// ===로 비교하는 것과 같음(숫자와 문자를 구분)
    case '1':
    case '3':
    case '5':
    case '7':            
    case '8':
    case '10':
    case '12':
        console.log(`${x}월은 31일까지 있습니다.`);
        break;
    case '4':
    case '6':
    case '9':
    case '11':
        console.log(`${x}월은 330일까지 있습니다.`);
        break;
    case '2':
        console.log(`${x}월은 28일까지 있습니다.`);
        break;
}

//반복문
let temp = x;
console.log('while');
while(temp > 0){
    console.log(`${temp}\n`);
    temp--;
}
console.log('do while');
do{
    temp++;
    console.log(`${temp}\n`);
}while(temp < x);
console.log('for');
for(;temp > 0; temp--){
    console.log(`${temp}\n`);

}

//nested for문 연습 - 구단 출력
for(i = 2; i < 10; i++){
    for(j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}