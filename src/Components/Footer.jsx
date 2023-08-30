import React from 'react'
import {BiLogoFacebook,BiLogoTwitter,BiLogoYoutube,BiLogoInstagram,BiSolidMap,BiPhone,BiLogoGmail} from 'react-icons/bi';
import { styled } from 'styled-components';

const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1;


`
const Brand = styled.h1`

    
`
const Desc =styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display: flex;

    &:hover{
        cursor: pointer;
    }
    
    
`
const Center=styled.div`
    flex: 1;
    padding: 2px;
    flex-wrap: wrap;

`
const Title=styled.h3`
    margin-bottom: 30px;
    margin-left: 90px;
    
`
const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`
const Listitem = styled.li`
    width: 50%;
    margin-bottom: 10px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    
`
const Right=styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
` 

const Footer = () => {
  return (
    <Container>
        <Left>
            <Brand>HEDHYA.</Brand>
            <Desc>Welcome to HEDHYA.., your ultimate destination for men's fashion. Discover curated collections, from tailored suits to streetwear, reflecting the latest trends. Explore expert advice and style guides to enhance your fashion choices. Join our community and embrace your individuality with confidence.</Desc>
            <SocialContainer>
                <BiLogoFacebook style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#3B5999",color:"white",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px",objectFit:"cover"}}/>
                <BiLogoTwitter style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#55ACEE",color:"white",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"}}/>
                <BiLogoYoutube style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#FF0000",color:"white",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"}}/>
                <BiLogoInstagram style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#E4405F",color:"white",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"}}/>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>Orders</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>Order Tracking</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Terms</Listitem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <BiSolidMap style={{marginRight:"5px"}}/>3-27,Rajavolu,Guntur,Andhra Pradesh,522259.
            </ContactItem>
            <ContactItem>
                <BiPhone style={{marginRight:"5px"}}/>  7396919152
            </ContactItem>
            <ContactItem>
                <BiLogoGmail style={{marginRight:"5px"}}/>contacthedhya@gmail.com
            </ContactItem>

        </Right>
    </Container>
  )
}

export default Footer