import React from 'react';

interface TodoListProps {
    todoList: { id: number; title: string, status: boolean }[];
    onTodoClick: (todo: any, index: number) => void;
}

function TodoList(props: TodoListProps) {
    const { todoList, onTodoClick } = props || { todos: [] };

    return (
        <>
            {todoList.map((item, index) => 
                <div>
                    <h3>{item.id}</h3>
                    <h3 style={{color: item.status ? 'green' : 'black'}}>{item.title}</h3>
                    <h3 style={{color: item.status ? 'green' : 'black'}}>Status: {item.status ? 'Completed' : 'Incompleted'}</h3>
                    <button onClick={() => onTodoClick(item, index)}>Complete</button>
                </div>
            )}
        </>
    );
}

export default TodoList;