import React from 'react'
import Announcements from '../Components/Announcements'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { styled } from 'styled-components'
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";


const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
    
`
const Title=styled.h1`
    font-weight: 600;
    text-align: center;

    
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    
    
`
const Topbutton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled" ? "solid" : "solid" };
    color:${props=>props.type==="filled" ? "white" : "black" };
    background-color:${props=>props.type==="filled" ? "black" : "white" };
    
`
const Toptexts=styled.div`
    
`
const Toptext=styled.span`
    margin-right: 15px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    
`
const Bottom=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    
`
const Info=styled.div`
    flex:3;
    
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
`
const Productdetail=styled.div`
    flex:2;
    display: flex;
`
const Productname=styled.span`
`
const Productid=styled.span`
`
const Productcolor=styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.bg};
`
const Productsize=styled.span`
`
const Pricedetail=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image=styled.img`
    width: 200px;
`
const Details=styled.div`
    padding: 20px;display: flex;flex-direction:column;
    justify-content: space-around;
`
const Productamountcontainer = styled.div`
    display: flex;
    align-items: center;
    
`
const Productamount = styled.div`
    font-size: 30px;
    margin: 5px;
    
`
const Productprice = styled.div`
    font-weight: 200;
    font-size: 30px;
    
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary=styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 250px;
    height: 50vh;
    

    
`
const  Summarytitle = styled.h1`
    font-weight: 200;
    
`
const  Summaryitem = styled.div`
    margin:  30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};

`
const  Summaryitemtext = styled.span`

`
const  Summaryitemprice= styled.span`

`
const  Button= styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 400;
`



const Cart = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <Title>
                Your Bag
            </Title>
            <Top>
                <Topbutton >CONTINUE SHOPPING</Topbutton>
                <Toptexts>
                    <Toptext>Shopping Bag(2)</Toptext>
                    <Toptext>Your Wishlist(0)</Toptext>
                </Toptexts>
                <Topbutton type="filled">Check out</Topbutton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <Productdetail>
                            <Image src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5022.jpg?size=626&ext=jpg"/>
                            <Details>
                                <Productname><b>Product:</b> JEANS SHIRT </Productname>
                                <Productid><b>Id:</b> 9398337164 </Productid>
                                <Productcolor bg="#1560BD"/>

                                <Productsize><b>size:</b> Medium </Productsize>
                            </Details>
                        </Productdetail>
                        <Pricedetail>
                            <Productamountcontainer>

                                <GrFormAdd/>
                                <Productamount>2</Productamount>
                                <GrFormSubtract/>
                            </Productamountcontainer>
                            <Productprice>565/-</Productprice>
                        </Pricedetail>
                    </Product> 
                    <Hr/>
                    <Product>
                        <Productdetail>
                            <Image src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5022.jpg?size=626&ext=jpg"/>
                            <Details>
                                <Productname><b>Product:</b> JEANS SHIRT </Productname>
                                <Productid><b>Id:</b> 9398337164 </Productid>
                                <Productcolor bg="#1560BD"/>

                                <Productsize><b>size:</b> Medium </Productsize>
                            </Details>
                        </Productdetail>
                        <Pricedetail>
                            <Productamountcontainer>

                                <GrFormAdd/>
                                <Productamount>2</Productamount>
                                <GrFormSubtract/>
                            </Productamountcontainer>
                            <Productprice>565/-</Productprice>
                        </Pricedetail>
                    </Product> 

                </Info>
                <Summary>
                    <Summarytitle>
                        Price details
                    </Summarytitle>
                    <Summaryitem>
                        <Summaryitemtext>sub total</Summaryitemtext>
                        <Summaryitemprice>565/-</Summaryitemprice>
                    </Summaryitem>
                    <Summaryitem>
                        <Summaryitemtext>Estimated shipping</Summaryitemtext>
                        <Summaryitemprice>50/-</Summaryitemprice>
                    </Summaryitem>
                    <Summaryitem>
                        <Summaryitemtext>Shipping discount</Summaryitemtext>
                        <Summaryitemprice>25/-</Summaryitemprice>
                    </Summaryitem>
                    <Hr/>
                    <Summaryitem type = "total" >
                        <Summaryitemtext>Total</Summaryitemtext>
                        <Summaryitemprice>585/-</Summaryitemprice>
                    </Summaryitem>
                    <Button>Check out now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart