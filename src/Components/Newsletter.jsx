import React from 'react';
import {BiSolidSend} from 'react-icons/bi'
import { styled } from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    
`
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    
`
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;

    
`
const Input = styled.input`
    border:none;
    flex:8;
`
const Button = styled.button`
    flex:1;
    background-color: #0b270b;
    color: #b1afaf;
    
`

const Newsletter = () => {
  return (
    <Container>
        <Title>
            News letter
        </Title>
        <Description>
            Get every updates in time!..
        </Description>
        <InputContainer>
        <Input placeholder='your email'/>
        <Button>
            <BiSolidSend style={{fontSize:"25px"}}/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter