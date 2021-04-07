import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdcheckBox,
    MdRemoveCircleOutline,
}from 'react-icons/md'
import './TodoListitem.css'

const TodoListitem = () => {
    return(
        <div className="TodoListItem">    
            <div className="text">할 일</div>
            <div className="checkBox">
                <MdCheckBoxOutlineBlank/>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListitem;