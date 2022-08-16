import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';


const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
`;

const CheckBox = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid lightgray;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.done &&
        css`
            border: 1px solid #9C88FF;
            color: #9C88FF;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 20px;
    color: black;
    ${props => 
        props.done &&
        css`
            color: lightgray;
        `}
`;

function TodoItem( { todo, onRemove, onChecked }) {
    const { id, text, done } = todo;
    return(
        <TodoItemBlock>
            <CheckBox onClick={() => onChecked(id)} done={done}>{done && <MdDone />}</CheckBox>
            <Text done={done}>{text}</Text>
            <div className="remove" onClick={() => onRemove(id)}><MdDelete /></div>
        </TodoItemBlock>
    );
}

export default TodoItem;