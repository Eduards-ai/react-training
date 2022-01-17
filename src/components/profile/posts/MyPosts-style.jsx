import styled from "styled-components";

export const MyPost = styled.h3`
    padding-bottom: 10px;
`;

export const TextArea = styled.textarea`
    min-height: 50px;
    max-height: 50px;
    min-width: 500px;
    max-width: 500px;
    resize: none;
    border-color: #be64f2;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 10px;
`;

export const Button = styled.button`
    height: 50px;
    margin-left: 5px;
    background-color: #be64f2;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;    
`;
