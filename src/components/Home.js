import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Imgwrapper = styled(Box)`
    width: 50%;
    height: 80vh;
    padding: 10px;
    border-radius: 4px;
    margin-top: 30px;
    & > img {
      width: 100%;
      height: 80vh;
      border-radius: 10px;
    }
`;

const Container = styled(Box)`
    display: flex;
    align-items: center;
`;  

const Textwrapper = styled(Box)`
    text-align: center;
    width: 50%;
`;

const MainHeading = styled(Typography)`
    font-size: 80px;
    font-weight: bold;
    color: #ff66b3;
`;

const SubHeading = styled(Typography)`
    font-size: 40px;
    font-weight: medium;
    color: #99003d;
`;

const Home = () => {
  const imgURL = 'https://i.ytimg.com/vi/WPz014v_Qho/maxresdefault.jpg';

  return (
    <Container>
      <Imgwrapper>
        <img src={imgURL} alt="img" />
      </Imgwrapper>
      <Textwrapper>
        <MainHeading>CRUD Application</MainHeading>
        <SubHeading>using <b>MERN</b></SubHeading>
      </Textwrapper>
    </Container>
  )
}

export default Home
