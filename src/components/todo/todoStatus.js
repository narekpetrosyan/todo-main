import React from "react";
import complete from '../../assets/images/check.svg'
import pending from '../../assets/images/clock.svg'

// todo's status check
const TodoStatus = ({status}) => {
    const text = status ? 'Completed' : 'Pending';
    const img = status ? complete : pending;

    return (
        <div className={`todo_info_status ${status ? 'completed' : ''}`}>
            <img src={img} alt=""/>
            <span>{text}</span>
        </div>
    )
}
export default React.memo(TodoStatus)