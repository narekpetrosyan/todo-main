import {useSelector} from "react-redux";
import UserList from "./components/user/userList";
import Todos from "./components/todo/todos";


function App() {
    const activeUser=useSelector(state=>state.users.active)

    return (
        <div className={`todos-box ${activeUser?'active':''}`}>
            <UserList/>
            <Todos activeUser={activeUser}/>
        </div>
    );
}

export default App;
