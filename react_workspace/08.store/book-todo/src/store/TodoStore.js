import { action, observable } from 'mobx';
class TodoStore{

    @observable todos = [];
    @observable todo = {id: "", title: "",};

    @action
    setTodoProp(name, value){
        this.todo={
            ...this.todo,
            [name] : value,
        }
    }

    //todoInit() -> view에서 초기화하는게 적절
   

    @action
    addTodo(){
        //this.todos.push({...this.todo, id:getnerateId(5)});
        //this.todos.push(this.todo);
        this.todos = this.todos.concat(this.todo);
    }

    @action
    removeTodo(id){
        //this.todos.filter((element => element.id !== id)) id 인자 추가. 가독성 높은 코드
        //this.todos.filter((element)=> element.id !== this.todo.id); 
        this.todos = this.todos.filter((element)=>element.id !== this.todo.id);
        this.todo={};
    }

    @action
    modifyTodo(){
        this.todos = this.todos.map((element)=>
        (element.id === this.todo.id ? this.todo : element));
        this.todo={};
    }

    @action
    selectTodo(id){
        //state의 데이터인지, 입력데이터인지 구분
        this.todo = this.todos.find((element) => element.id === this.todo.id);
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