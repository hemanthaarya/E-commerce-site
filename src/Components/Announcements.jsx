import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: rgb(1, 80, 78);
    color:white;
    display: flex;
    padding-top: 3px;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal!.Free shipping on above 250/- 
    </Container>
  )
}

export default Announcements