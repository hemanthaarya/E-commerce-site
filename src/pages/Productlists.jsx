import React from 'react'
import { styled } from 'styled-components'
import Announcements from '../Components/Announcements'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin-left: 10px;
    
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    margin: 20px;

    
`
const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    
`
const Option = styled.option`
    
`
 
const Productlists = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <Filtertext>Filter Products:<Select>
            <Option disabled selected>color</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>green</Option>
            <Option>yellow</Option>
            <Option>pink</Option>
            <Option>olive-green</Option>
        </Select><Select>
            <Option disabled selected>size</Option>
            <Option>x-small</Option>
            <Option>small</Option>
            <Option>medium</Option>
            <Option>large</Option>
            <Option>x-largr</Option>
            <Option>xx-large</Option>
            <Option>xxx-large</Option>
        </Select></Filtertext>
            </Filter>
            <Filter>
                <Filtertext>sort products:<Select>
            <Option disabled selected>price</Option>
            <Option>newest</Option>
            <Option>Price (asc)</Option>
            <Option>price(desc)</Option>
        </Select></Filtertext>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Productlists