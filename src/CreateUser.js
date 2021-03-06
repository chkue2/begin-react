import React, {useRef, useContext} from 'react';
import useInputs from './useInputs';
import {UserDispatch} from './App';

function CreateUser() {
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    const [form , onChange, reset] = useInputs({
        username: '',
        email: '',
    });
    const {username, email} = form;
    return(
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username}/>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <button onClick={() => {
                dispatch({
                    type: 'CREATE_USER',
                    user:{
                      id: nextId.current,
                      username,
                      email,
                    }
                  });
                  nextId.current += 1;
                  reset();
            }}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);