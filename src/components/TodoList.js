import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 30px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList({ todos, onRemove, onChecked}) {
    return(
        <TodoListBlock>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onChecked={onChecked}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;