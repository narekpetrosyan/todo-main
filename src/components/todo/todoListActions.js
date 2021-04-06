import React from "react";
import {useDispatch} from "react-redux";
import AddTodo from "./addTodo";
import {clearUser} from "../../redux/actions/userAction";

import close from './../../assets/images/close.svg'

const TodoListAction = () => {
    const dispatch = useDispatch();

    // clear active user
    const closeHandler = () => {
        dispatch(clearUser());
    }

    return (
        <div className='todos_actions'>
            <AddTodo/>
            <button className='todos_actions_close-list'
                    onClick={closeHandler}>
                <img src={close} alt=""/>
            </button>
        </div>
    )
}
export default React.memo(TodoListAction)