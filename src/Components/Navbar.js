import React from 'react';
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';
import {BiCart} from 'react-icons/bi' ;
import Register from '../pages/Register';
import Login from '../pages/Login';

const Container=styled.div`
height:60px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language =styled.span`
    font-style: 14px;
    cursor: pointer;
`
const SearchCOntainer=styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Logodescription =styled.div`
    font-style:italic;

`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;

`

const Navbar=()=>{
    const Reg=()=>{
        <Register/>
    }
    const Log=()=>{
        <Login/>
    }
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchCOntainer>
                        <Input style={{color:"gray",fontSize:16}}/>
                        <FaSearch/>

                    </SearchCOntainer>
                </Left>
                <Center>
                    <Logo>
                        HEDHYA.
                    </Logo>
                    <Logodescription>Style Always Matters....</Logodescription>
                </Center>
                <Right>
                    <MenuItem onClick={()=>Reg}>
                    Register
                    </MenuItem>
                    <MenuItem onClick={()=>Log}>
                    Sign-In
                    </MenuItem>
                    <MenuItem>
                    <BiCart style={{fontSize:30}}/>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
