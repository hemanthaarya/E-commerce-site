import React, { useState } from 'react'
import { styled } from 'styled-components'
import {BiCaretRight,BiCaretLeft} from 'react-icons/bi'
import { Slideritems } from './SlidesData';

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
    

`
const Wrapper =styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideindex * -100}vw);
`
const Slide=styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    margin-top: 8px;
    background-color: #${props=>props.bg};
    height: 105vh;
`
const ImgContainer =styled.div`
    flex: 1;
    height: 100%;
`
const Image =styled.img`
    height: 80%;
    width: 75%;
    margin-top: 1px;
    flex: 1;
    
`
const InfoContainer =styled.div`
    flex: 1;
    padding: 50px;
`
const Title =styled.h1`
    font-size: 70px;
    
`
const Desc =styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    
`
const Button =styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;

    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0c7c7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    bottom: 0;
    margin: auto;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    position: absolute;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    
    
`

const Slider = () => {
    const[slideindex,setslideindex]=useState(0)
    const handleClick=(direction)=>{
        if(direction==="left"){
            setslideindex(slideindex > 0 ? slideindex-1 : 2)
        }
        else{
            setslideindex(slideindex<2 ? slideindex+1 : 0)
        }
        

    }
  return (
    <Container >
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <BiCaretLeft/>
        </Arrow>
        <Wrapper slideindex={slideindex}>
            {Slideritems.map((item)=>(
                <Slide bg ={item.bg} key={item.id}>
                <ImgContainer>
                <Image src ={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop Now</Button>

                </InfoContainer>
            </Slide>

            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <BiCaretRight/>
        </Arrow>
    </Container>

  )
}

export default Slider