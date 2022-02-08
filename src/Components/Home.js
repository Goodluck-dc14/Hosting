import React from 'react';
import styled from "styled-components"

const Home = () => {
return (
    <Container>
        <Wrapper>
            <Form>
            <Div>Add Your Name and Email</Div>
                <Input placeholder='Name'/>
                <Input placeholder='email'/>
                <Button>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
)
};

export default Home;

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.div`
    width: 500px;
    height: 200px;
    border-radius: 5px;
    background-color: orange;
    box-shadow: rgba(0, 0, 0, 0.4)  0px 5px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 
const Input = styled.input`
    width: 350px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    outline: none;
    font-size: 18px;
    border: 0.5px solid grey;
    padding-left: 10px;
    box-shadow: rgba(0, 0, 0, 0.4)  5px 5px 5px 2px;

    ::placeholder{
        font-family: poppins;
        color: rgba(0, 0, 0, 0.4) ;
        font-size: 18px;
        padding: 10px;
    }
`
const Button = styled.div`
    height: 30px;
    padding: 5px 50px;
    background-color: coral;
    margin: 10px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.4)  0px 5px 5px 2px;
    transform: scale(1);
    transition: 350ms;
    color: grey;
    font-size: 18px;

    :hover{
        cursor: pointer;
        transform: scale(1.01);
        transition: 350ms;
        box-shadow: rgba(225, 225, 225, 0.4)  0px 10px 10px 2px;
        color: white;
    }
`
const Div = styled.div`
    font-family: poppins;
    color: Grey;
    font-size: 18px;
`