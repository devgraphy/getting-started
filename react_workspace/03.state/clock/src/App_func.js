import React, {useState} from 'react';
import Counter from './Counter';
function App(props) {
    const [count,setCount] = useState(0);
    return (
        <div>
            <Counter count={count} increase={()=>setCount(count+1)} decrease={()=>setCount(count-1)}/>
        </div>
    );
}

export default App;