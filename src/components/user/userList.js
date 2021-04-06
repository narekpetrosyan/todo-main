import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import User from "./user";
import {usersFetch} from "../../redux/actions/userAction";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.data);
    const activeUser = useSelector(state => state.users.active);

    useEffect(() => {
        dispatch(usersFetch());
    }, [dispatch])

    return (
        <div className='users'>
            <div className="users_heading">
                <div>Name</div>
                <div>Completion rate (%)</div>
            </div>
            <div className="users_list">
                {users && users.map(user => (
                    <User key={user.id} {...user} active={activeUser===user.id}/>
                ))}
            </div>
        </div>
    )
}
export default UserList