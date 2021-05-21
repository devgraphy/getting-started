

# TypeError: Cannot read property 'setState' of undefined

handleChange

C:/Users/albei/cloud-msa/react_workspace/05.form/form_exercise/src/component/InputText.js:11

```
   8 |     // this.handleSubmit = this.handleSubmit.bind(this);   
   9 | }  
   10 | handleChange(e){> 
   11 |     this.setState({value: e.target.value});     | ^  
   12 | }  
   13 | handleSubmit(e){  
   14 |     alert('A name was submitted: ' + this.state.value);
```



해결책

-  setState 정의가 안 되어 있다. this의 setState를 못 찾고 있는 것이다.

- this 를 현재 컴포넌트를 가리키기 위해선 생성자에서 바인딩 코드를 작성해주어야 한다.

  - ```javascript
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    ```

    

