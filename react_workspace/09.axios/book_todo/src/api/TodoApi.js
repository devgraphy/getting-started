// api 설계란 어떤 url과 어떤 data를 받아서 어떤 data를 응답할 것인지를 만드는것
import axios from 'axios';
// 기능정의
class TodoApi{
    URL = '/api/todos/'; //http://IP:8000/api/todos/update/1/

    
    todoCreate(title){
        // axios = 비동기 호출
        return axios.post(this.URL+'create/', {title:`${title}`})   // django_rest todolist 참고 // back quote 사용
            .then((response)=>response.data);    // resolve 응답하는 데이터를 반환 // response는 alias - 변경 가능
            // .catch(()=>{}); // 예외 발생 reject
            // .finally(()=>{});   // resolve, reject 모든 경우
    }
    todoUpdate(id, title){
        
        return axios.put(this.URL+`update/${id}`,{title:`${title}`})    // javascript 변수와 문자열 같이 쓰기 위해 back quote 사용
            .then((response)=>response.data);

    }
    
    //@param : id = 0
    //@return : "deleted!!"
    todoDelete(id){
        // axios 쓰면 promise 쓰는 것보다 간단해짐
        return axios.delete(this.URL+`delete/${id}/`)
            .then((response)=>response.data)
    }

    //@param : id = 0
    //@return : todo (todo = {id:0, title:""})
    todoDetail(id){
        return axios.get(this.URL+`detail/${id}/`)
            .then((response)=>response.data)
    }
    //@return : todos (todos = [{id:0, title:""}, ...])
    todoList(){
        return axios.get(this.URL)
            .then((response)=>response.data) //json object의 배열로 넘어온다.
    }
}
export default TodoApi;