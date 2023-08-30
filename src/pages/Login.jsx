import { styled } from "styled-components"



const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/premium-photo/handsome-young-man-grey-wall-looking-front_256588-1950.jpg?size=626&ext=jpg" ) no-repeat  ;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    
`
const Wrapper=styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    margin-top: 30px;
    margin-left: 30px;

    
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px;
    padding: 10px;
    
`
const Button=styled.button`
    width: 100%;
    border:none;
    padding: 15px 20px;
    color: white;
    background-color: teal;
    cursor: pointer;


    
`
const Link = styled.a`
    text-align:center;
    margin: 5px 0px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="user name"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>have you forgotten your password??</Link>
                <Link>CREATE NEW ACCOUNT</Link>


                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login