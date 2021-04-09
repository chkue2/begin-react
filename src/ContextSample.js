import React, {createContext, useContext, useState} from 'react';

const myContext = createContext('defaultValue');

function Child(){
    const text = useContext(myContext);
    return <div>안녕하세요? {text}</div>;
}

function Parent({text}){
    return <Child text={text} />
}

function GrandParent({text}){
    return <Parent text={text} />
}

function ContextSample(){
    const [value, setValue] = useState(true);
    return (
        <myContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </myContext.Provider>
    );
}

export default ContextSample;