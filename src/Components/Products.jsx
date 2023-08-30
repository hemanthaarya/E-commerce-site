import React from 'react';
import { Productlist } from './SlidesData';
import { styled } from 'styled-components';
import {BiCart} from 'react-icons/bi' ;
import {FaSearch} from 'react-icons/fa';
import {BiHeart} from 'react-icons/bi';

const Info =styled.div`
    opacity: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    z-index : 3;
    cursor: pointer;
    transition: all  0.5s ease;
    
`
const Container = styled.div`
    display: flex;
    flex:1;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

    
    
    
    
  
`
const Container2 = styled.div`
    margin:3px;
    min-width: 280px;
    height: 300px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #f5fbfd;
    object-fit: cover;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
    
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position:absolute;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 2;
    object-fit: cover;
    
`
const Icon =styled.i`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Products = () => {
  return (
    <Container>
        {Productlist.map((item)=>(
            <Container2 key={item.id}>
                <Circle>
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <BiCart/>
                    </Icon>
                    <Icon>
                        <FaSearch/>
                    </Icon>
                    <Icon>
                        <BiHeart/>
                    </Icon>
                </Info>
                </Circle>
            </Container2>

        ))}
    </Container>
  )
}

export default Products