import React from 'react'
import { styled } from 'styled-components'
import Announcements from '../Components/Announcements'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    
`
const Imagecontainer = styled.div`
    flex:1;
    
`
const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
    
`
const Infocontainer= styled.div`
    flex:1;
    padding: 0px 50px;

    
`
const Title = styled.h1`
font-weight: 200;
    
`
const Desc = styled.p`
    margin: 20px 0px;
    
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    
`
const Filtercontainer=styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`
const Filter=styled.div`
    display: flex;
    align-items: center;
    
    
`
const Filtertitle=styled.span`
    font-size: 20px;
    font-weight: 200;
    margin:15px 0px;
    
`
const Filtercolor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props=>props.color};
    cursor: pointer;
    margin: 0px 5px;
    
`
const Filtersize=styled.select`
    margin-left: 10px;
    padding: 5px;
`
const Filtersizeoption=styled.option`
    
`
const Addcontainer=styled.div`
    width: 50%;
    display: flex;
    align-content: center;
    justify-content: space-between;
`
const Amountcontainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount=styled.span`
    border-radius: 5px;
    width: 30px;
    height: 30px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
    padding: 5px;
    

    
`
const Button=styled.button`
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
    border:2px solid teal;
    background-color: white;
    cursor: pointer;
    color: #424141;

    &:hover{
        background-color: #a2a0a0;
    }
    
`

const Product = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <Imagecontainer><Image src="https://img.freepik.com/free-photo/indian-basketball-player-white-hoodie-men-s-apparel-photoshoot_53876-104320.jpg?t=st=1688048229~exp=1688048829~hmac=b076710f0cc06224f38da7ed10b571b0cc38fb345ec5087761f03f9f0adb0d65"/></Imagecontainer>
            <Infocontainer>
                <Title>Hoodie</Title>
                <Desc>A hoodie is a comfortable and versatile garment with a hood for added warmth.
                     It is often made from soft materials like cotton or fleece. 
                     Hoodies come in various styles, including pullover and zip-up options. 
                     They are popular for casual wear, providing both comfort and style.</Desc>
                <Price>500/- </Price>
                <Filtercontainer>
                    <Filter>
                        <Filtertitle>Color</Filtertitle>
                        <Filtercolor color='black'/>
                        <Filtercolor color='blue'/>
                        <Filtercolor color='gray'/>
                    </Filter>
                    <Filter>
                        <Filtertitle>size</Filtertitle>
                        <Filtersize>
                            <Filtersizeoption disabled value={"size"}>size</Filtersizeoption>
                            <Filtersizeoption>x-small</Filtersizeoption>
                            <Filtersizeoption>small</Filtersizeoption>
                            <Filtersizeoption>medium</Filtersizeoption>
                            <Filtersizeoption>large</Filtersizeoption>
                            <Filtersizeoption>x-large</Filtersizeoption>
                            <Filtersizeoption>xx-large</Filtersizeoption>
                        </Filtersize>
                    </Filter>
                </Filtercontainer>
                <Addcontainer>
                    <Amountcontainer>
                        <GrFormSubtract/>
                        <Amount>1</Amount>
                        <GrFormAdd/>
                    </Amountcontainer>
                    <Button>Add to cart</Button>
                </Addcontainer>
            </Infocontainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product