import React from 'react'
import TodoTemplate from './components/TodoTemplete';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert/>
          <TodoList/>
        {/* 17번 전도권 */}
      </TodoTemplate>  
    </div>
  );
}

export default App;