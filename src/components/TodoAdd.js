import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { MdAdd } from 'react-icons/md';

const SubmitButton = styled.button`
    background: blueviolet;
    &:hover {
        background: violet;
    }

    outline: none;
    border: none;
    color: white;
    padding: 0 1rem;
    font-size: 25px;
`;

const AddFormBlock = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const AddForm = styled.form`
    display: flex;
    background: #9C88FF;
    padding: 30px;
    justify-content: center;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 5px;
    border: 1px solid black;
    width: 100%;
    font-size: 18px;
`;

function TodoAdd({ onInsert }) {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert, value])

    return(
        <AddFormBlock>
            <AddForm className="TodoAdd" onSubmit={onSubmit}>
                <Input onChange={onChange} value={value} placeholder="추가할 일을 입력하세요" /> 
                <SubmitButton type="submit"><MdAdd /></SubmitButton>
            </AddForm>
        </AddFormBlock>
    );
}

export default TodoAdd;