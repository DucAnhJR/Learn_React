import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

function TodoFeature() {
    const initTodoList = [
        { id: 1, title: 'Learn React', status: false },
        { id: 2, title: 'Build a Todo App', status: false },
        { id: 3, title: 'Deploy the App', status: false },
        { id: 4, title: 'Deploy the AppStore', status: false },
        { id: 5, title: 'Deploy the Application', status: false }
    ];

    const [todoList, setTodoList] = useState(initTodoList)

    const handleTodoClick = (todo: any, index: number) => {
        console.log(todo, index);
        //clone array
        const newTodoList = [...todoList];
        // assign value for todo  
        const newTodo = {
            //clone object with other value
            ...newTodoList[index],
            //set value for new object
            status: newTodoList[index].status === false && true
        }
        console.log("🚀 ~ handleTodoClick ~ newTodo:", newTodo)

        newTodoList[index] = newTodo;
        //update state
        setTodoList(newTodoList);
    }

    return (
        <div>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;