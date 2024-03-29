import styled from "styled-components";

export const Form = styled.form`
    width: 450px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    margin: 0 auto;
    padding: 40px 25px;
    display: flex;
    flex-direction: column;

    
`
export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;  
    margin-bottom: 20px;
`
export const Label = styled.label`
    font-family: sans-serif;
    font-weight: 700;
    color: #067ad0;
    padding-left: 18px;
`
export const Input = styled.input`
    border-radius: 35px;
    border: 1px, solid, black;
    height: 35px;
    padding-left: 18px;
    outline: transparent;
    font-family: sans-serif;
    font-size: 16px;
`
export const Button = styled.button`
    padding: 12px 16px;
    background-color: #067ad0;
    color: #fff;
    border: 1px, solid, black;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 700;
    transition: background-color .25s cubic-bezier(.4,0,.2,1), color .25s cubic-bezier(.4,0,.2,1);
    width: 185px;
    margin: 30px auto 0;
    border-radius: 35px;
    cursor: pointer;
        &:hover{
            background-color: #fff;
            color:#067ad0;
        }
`