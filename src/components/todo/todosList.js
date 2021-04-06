import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./todo";
import {todosFetch} from "../../redux/actions/todoAction";

const TodosList = ({user}) => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.users.activeUserName);
    const todosData = useSelector(state => state.todos.data);
    const todos = todosData.get(user);

    // if todos are not in redux store
    useEffect(() => {
        if (!todos)
            dispatch(todosFetch(user))
    }, [user, todos, dispatch])

    return (
        <div className='todos_list'>
            <h4>To-do list for {userName}</h4>
            {todos && todos.map(todo =>
                <Todo key={todo.id} {...todo}/>
            )}
        </div>
    )
}

export default TodosList