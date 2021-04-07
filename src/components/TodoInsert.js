import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import './TodoInsert.css'

const TodoInsert = () => {
    
    return(
        <from className="TodoInsert">
            <input className="input" placeholder="할 일을 입력해주세요."></input>
            <button className="button" type="submit">
                <MdAddCircleOutline/>
            </button>
        </from>
    )
}

export default TodoInsert;