import TodoListAction from "./todoListActions";
import TodosList from "./todosList";

const Todos = ({activeUser}) => {
    return (
        <div className='todos'>
            <TodoListAction />
            {activeUser && <TodosList user={activeUser}/>}
        </div>
    )
}
export default Todos