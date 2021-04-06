import React from "react";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/actions/userAction";

const User = ({id,name,complete,todos,active}) => {
    const dispatch = useDispatch();

    //set active user
    const clickHandler = () => {
        if (!active)
            dispatch(setUser({id, name}))
    }
    // calculate rate
    const rate = useMemo(() =>
            todos === 0 ? 100 : Math.floor((complete / todos) * 100)
        , [complete, todos])

    return (
        <div className={`user ${active ? 'active' : ''}`}
             onClick={clickHandler}>
            <div className="user_name">{name}</div>
            <div className='user_rate'>{rate}</div>
        </div>
    )
}

export default React.memo(User)