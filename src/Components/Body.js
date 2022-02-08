import React from 'react';
import styled from "styled-components"

const Body = () => {
    return <Container>
        <Wrapper>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
            <Card>
                <Name>Name</Name>
                <Email>Email</Email>
            </Card>
        </Wrapper>
    </Container>;
};

export default Body;

const Container = styled.div`
    width: 100%;
    min-height: 50vh;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-color: orange;
    box-shadow: rgba(0, 0, 0, 0.4)  0px 5px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: 350ms;

    :hover{
        cursor: pointer;
        transform: scale(1.001);
        transition: 350ms;
        box-shadow: rgba(225, 225, 225, 0.4)  0px 2px 30px 2px;
        color: white;
    }
`
const Name = styled.div`
    font-family: poppins;
    color: Grey;
    font-size: 18px;
    transition: 350ms;

    :hover{
        color: white;
        transition: 350ms;
    }
`
const Email = styled.div`
    font-family: poppins;
    color: Grey;
    font-size: 18px;

    :hover{
        color: white;
        transition: 350ms;
    }
`