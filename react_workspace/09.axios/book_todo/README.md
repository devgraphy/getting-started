Book_todo 에 axios 적용

yarn add axios


src > api > BookApi.js, TodoApi.js 작성

서버 api를 호출하는 것으로 변경해준다.
container 마다 api 호출 ? < store 에서 api 호출?

cross origin error
create react app > proxy
package.json >  "proxy": "http://localhost:4000", 추가
안전한 방법 - express 이용
setupProxy.js
*포트 다르게한 방법
vscode new windows로 django rest> todolist runserver


*서버 데이터 가져오지 못하는 문제
디버깅하는 방법
network로 가는지 확인 왜왜오애왱??
xhr를 통해 서버쪽에 요청이 갔는지 확인할 수 있음
proxy setting 확인
package.json 확인
axios
http-proxy-middleware
yarn.lock, node_modules 삭제 후 yarn. http-proxy-middleware 문제있는지 확인해보기 위해

역할별로 나누는것의 장점. 
단점 : 클래스가 많아지는 것

api 설계도를 보고 api 작성 (axios api설계도가 어디있지?)
보통 실무에선 주석으로 반환값을 명시하거나 model(TodoApiModel)을 사용한다.

정리
# API 추가 - yarn add axios
1. backend project/project/urls.py 참조
URL = '/api/todos/'
2. backend api 호출 기능 추가
backend project/app/urls.py

todoXxx(){
    return axios.method(this.URL+['url/${param}']).then((response)=>response && response.data || null);

}

# store 수정
1. api 객체 = new XxxApi();
2. @action에서 api객체.method호출
    - 필요시 async, await 사용
    - runInAction(()=>observabledata = 값할당)

# backend integration proxy 추가
1. yarn add http-proxy-middleware
2. src/setupProxy.js 생성
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/todos', // ✔
    createProxyMiddleware({
      target: 'http://localhost:8000',  // ✔
      changeOrigin: true,
    })
  );

  app.use(
    '/api/books',   // ✔
    createProxyMiddleware({
      target: 'http://localhost:8001',  // ✔
      changeOrigin: true,
    })
  );
};