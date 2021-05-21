// rendering 목적x
// 데이터 관리 목적

import Books from "../Books";
import { action, makeObservable, observable } from 'mobx';

class BookStore  {  //어떤 것들이 변하고 관찰할까
    @observable books = Books;
    @observable book = Books[0];

    constructor(){
        makeObservable(this)    //6버전 이상 사용할때
    }

    //언제 값 변경할거야
    //observer 하고 있는 컴포넌트의 event를 통해 호출 - observable 데이터 상태값 변경
    @action 
    bookSelect= (book) =>{
        this.book = book;
    }
    // @computed : state 값을 계산해서 리턴
}

export default new BookStore();