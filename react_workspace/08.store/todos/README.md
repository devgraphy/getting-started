# index.js

## provider 태그?
`import {Provider} from 'mobx-react';`


## <Provider TodoStore={TodoStore}>
mobx는 기존의 props의 복잡한 전이과정을 신경쓰지 않으려고 나온 기술아닌가?
근데 왜 또 props로 전하고 있지?
container 간에는 inject, observer를 사용하여 state를 관리하고
왜 view 에는 props로 넘길까?
```
Provider is a component that can pass stores (or other stuff) using React's context mechanism to child components. This is useful if you have things that you don't want to pass through multiple layers of components explicitly.
```
```
inject can be used to pick up those stores. It is a higher order component that takes a list of strings and makes those stores available to the wrapped component.
```




