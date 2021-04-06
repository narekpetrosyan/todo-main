import React from "react";
import TodoStatus from "./todoStatus";
import {useDispatch} from "react-redux";
import {updateTodo} from "../../redux/actions/todoAction";

const Todo = ({status,text,id,userId}) => {
    const dispatch = useDispatch();

    // set todo completed
    const updateHandler = () => {
        if (!status)
            dispatch(updateTodo({id, userId}))
    }

    return (
        <div className='todo'>
            <div className="todo_info">
                <TodoStatus status={status}/>
                <p>{text}</p>
            </div>
            <div className="todo_action">
                <button disabled={status}
                        onClick={updateHandler}>Mark as done
                </button>
            </div>
        </div>
    )
}
export default React.memo(Todo)