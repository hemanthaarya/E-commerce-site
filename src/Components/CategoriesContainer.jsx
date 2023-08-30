import {styled} from 'styled-components';
import { Categoriesitems } from "./SlidesData";


const Container = styled.div`
margin: 3px;
position: relative;
    
    
    
`
const Container2 = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    height: 70vh;

    
`
const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    
`
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    padding-top: 200px;
    padding-left: 100px;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;


    
`
const Title =styled.h1`
    color: white;
    margin-bottom: 20px;
    
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color: white;
    color: #5b5454;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    
`

const CategoriesContainer = () => {
    return(
        <Container2>
            {Categoriesitems.map((item)=>(
                <Container key={item.id}>
                    <Image src={item.img}/>
                    <Info>
                        <Title>
                            {item.title}
                        </Title>
                        <Button>
                            Shop Now
                        </Button>
                    </Info>
                </Container>
            ))}
        </Container2>
    )

}

export default CategoriesContainer