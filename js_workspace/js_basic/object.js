/*클래스, 객체
생성방법
*/
//생성방법 1. 
class Person{
    _name="";
    _age=0;
    constructor(name, age){
        /*this 사용하는 대신 로컬변수와 구분하여 작성한다. */
        this._name=name;
        this._age=age;

    }
    print(){
        console.log(`이름 : ${this._name} 나이: ${this._age}`);
    }
    get birthYear(){    //함수가 아니다.    브라우저는 bi
        return 2021-this._age + 1;
    }
    set birthYear(year){    //함수가 아니다.
        this._age = 2021-year + 1;
    }
}

let p = new Person("권혜영", 0);   //ECMA6에서 사용가능. 그 이전 버전이라면 바벨을 사용해 변형시켜줘야 함
p.birthYear = 1997; //대입연산자를 통해 브라우저는 set 호출
console.log(`${p._name}님 ${p.birthYear}년 출생`)    //birthYear는 함수가 아니다. 멤버변수를 확인한 후 get 확인
p.print();


//생성방법2. function 객체로 선언  (ECMA6 이전 버전에서 주로 사용하던 방법)
/*<naming convention>
기능인지 클래스인지 구분하기 위해 첫글자를 대문자로 하는 것이 가독성이 높다 */

function Student(name, age, major){
    this._name = name;
    this._age = age;
    this._major = major;
    this.print = function(){    //익명함수
        console.log(`이름: ${this._name} 나이: ${this._age} 전공: ${this._major}`);
    }
}

let S = new Student("김창준", 30, "컴퓨터공학");
S.print();


//생성방법3. JSON
/*
여기서는 데이터를 갖는 객체
분산환경에서 xml을 대체하는 데이터 표현 용도로 사용
한마디로, 분산환경에서 데이터를 주고받는 용도로 사용
key-value 형태로 object data로 쓸 수 있게 됨.
데이터와 기능을 같이 포함하고 있기보다는 위와 같은 용도로 사용함
배열은 어떻게 표현하는지?? JS에서 제공하지 않는 것들을 제공함
json.org 제공

json에서는 얼마든지 공백을 무시할 수 있다.
왜 이런 얘기를 하냐? JS에서는 에러가 날 수 있음

value
*/
let e = {name  : '김창준', age  : 30, major  : '컴퓨터공학'};
e = {name : p._name, age : p._age};
console.log(`이름: ${e.name} 나이: ${e.age} 전공: ${e.major}`);