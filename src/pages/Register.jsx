import { styled } from "styled-components"



const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4911.jpg?size=626&ext=jpg" ) no-repeat  ;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    
`
const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;

    
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
    
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
    
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px;
    padding: 10px;
    
`
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
    
`
const Button=styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    color: white;
    background-color: teal;
    cursor: pointer;


    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="user name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="re-enter password"/>
                <Agreement>By creating an account,
                     I connect to the processing of my personal data in accordance with the 
                     <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register