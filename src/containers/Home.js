import React from 'react';
import HomeTitle from "../components/HomeTitle";
import Container from "react-bootstrap/Container";
import S3Upload from "../components/S3Upload";

const Home = () => {
    return (
      <Container fluid>
        <div>
          <HomeTitle />
          <S3Upload />
        </div>
      </Container>
    );
}

export default Home;