import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    text-align: center;
    border-bottom: 1px solid lightgray;

    h1 {
        margin: 0;
        margin-top: 10px;
        font-size: 35px;
        color: black;
    }

    .day {
        margin-top: 5px;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }

    .HeadName {
        color: #9C88FF;
        font-size: 25px;
        margin-top: 30px;
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

function TodoHead() {
    return(
        <TodoHeadBlock>
            <h1>2022년 08월 15일</h1>
            <div className="day">월요일</div>
            <div className="HeadName">TodoList</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;