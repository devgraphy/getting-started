import axios from 'axios/';

// 기능정의
class BookApi{
    URL = "/api/books/";    // '/' 존재 여부 차이 존재
    // 전체 목록 보기
    bookList(){
        return axios.get(this.URL)
            .then((response)=>response.data);
    }
    // 상세 보기
     bookDetail(isbn){
        return axios.get(this.URL+`detail/${isbn}`)
            .then((response)=>response.data);
     }
}
export default BookApi;