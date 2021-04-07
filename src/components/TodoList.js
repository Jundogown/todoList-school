import react from 'react';
import TodoListitem from './TodoListitem';

const TodoList = () => {
    return(
        <div className="TodoList">
            <TodoListitem/>
            <TodoListitem/>
            <TodoListitem/>
        </div>
    )
}

export default TodoList;