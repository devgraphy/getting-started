import { action, makeObservable, observable, runInAction} from 'mobx'; // ✔
import TodoApi from '../api/TodoApi'; // ✔
class TodoStore{
    todoApi = new TodoApi();    // ✔ observable 데이터 위에 정의한 이유
    @observable todos = [];
    @observable todo = {id: "", title: "",};
    @observable message = "";   // ✔
    
    constructor(){
        makeObservable(this)
    }
    @action
    setTodoProp(name, value){
        this.todo={
            ...this.todo,
            [name] : value,
        }
    }

    //todoInit() -> view에서 초기화하는게 적절
   

    @action
    async addTodo(){    // 비동기로 사용하려면 async 사용. 호출해놓고 다음 코드 실행
        //this.todos.push({...this.todo, id:getnerateId(5)});
        //this.todos.push(this.todo);

        const result = await this.todoApi.todoCreate(this.todo.title);    // ✔store api 호출 관련. 서버에 반영하기 위함. await 이유
        // 결과 값 받아서 결과에 따라서 처리할 코드 추가
        if(result == null){
            this.message = `${this.todo.title} 일정이 추가되지 않았습니다.`
        }
        this.todos = this.todos.concat(this.todo);  // push 와 비교
    }

    @action
    async removeTodo(id){   // ✔async
        //this.todos.filter((element => element.id !== id)) id 인자 추가. 가독성 높은 코드
        //this.todos.filter((element)=> element.id !== this.todo.id);
        await this.todoApi.todoDelete(this.todo.id);  // ✔store api 호출  이유
        const result = this.todoApi.todoList();
        runInAction(()=>{this.todos = result})


        // this.todos = this.todos.filter((element)=>element.id !== this.todo.id); // 배열 조작.
        // await this.todoApi.todoDelete(this.todo.id);  // ✔반드시 삭제 후 다음 작업을 수행하는 싱크를 맞추려면 transaction과 관련
        // 프론트와 서버의 데이터 순서 일치시키려면 ✔
        // this.todos = this.todoApi.todoList(); 
        this.todo={};
    }

    @action
    async modifyTodo(){
        await this.todoApi.todoUpdate(this.todo.id, this.todo.title); // ✔ api 호출. await 이유
        const result = this.todoApi.todoList();
        runInAction(()=>{this.todos = result});
        // this.todos = this.todos.map((element)=>
        // (element.id === this.todo.id ? this.todo : element));
        this.todo={};
    }

    @action
    selectTodo(id){
        const result = this.todoApi.todoDetail(id); //✔ 
        runInAction(()=>{this.todo = result});
        //state의 데이터인지, 입력데이터인지 구분
        // this.todo = this.todos.find((element) => element.id === this.todo.id);   // ✔
    }
    
    @action
    async selectAll(){    // ✔목록을 가져올 때 까지 기다려야 하므로 async 사용
        const result = await this.todoApi.todoList(); // ✔맨 처음 didMount할 때만 기다리도록 해준다.
        runInAction(()=>{this.todos = result}); 
    }
    // 보통은 @computed 대신 직접 참조한다.
    // @computed
    // get getTodo(){
    //     return this.todo ? this.todo : {};
    // }

    // @computed
    // get getTodos(){
    //     return this.todos ? this.todos.slice() : {};
    //     //mobx의 배열과 js배열과 다름
    //     //slice: 인자가 없으면 원래 값을 복사
    // }
}
export default new TodoStore(); //싱글톤 -공유해서 쓰기때문에