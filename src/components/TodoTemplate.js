import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 510px;
    height: 760px;

    position: relative;
    background: white;
    border-radius: 15px;
    box-shadow: 0 0 8px 8 rgab(0, 0, 0, 0.04);

    margin: 0 auto;

    margin-top: 95px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({ children }) {
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>   
    );
}


export default TodoTemplate;