import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTodo} from "../../redux/actions/todoAction";

import plus from './../../assets/images/plus.svg'

const AddTodo = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.users.active)

    const [active, setActive] = useState(false);
    const [text, setText] = useState('');

    // if todo-box is closed or active user is changed set default states
    useEffect(() => {
        setText('');
        setActive(false)
    }, [userId])

    // add todo on enter
    const enterHandler = (e) => {
        if (e.which === 13) addHandler()
    }

    const addHandler = () => {
        if (active && text.trim().length) {
            dispatch(createTodo({text, id: userId}));
            setText('');
        }
        setActive(!active);
    }
    return (
        <div className={`add-todo ${active ? 'active' : ''}`}>
            <input type="text"
                   value={text}
                   onChange={e => setText(e.target.value)}
                   onKeyDown={enterHandler}/>
            <button onClick={addHandler}><img src={plus} alt=''/></button>
        </div>
    )
}

export default AddTodo