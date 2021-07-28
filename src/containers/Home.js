import React from 'react';
import HomeTitle from "../components/HomeTitle";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
      <Container fluid>
        <div>
          <HomeTitle />
        </div>
      </Container>
    );
}

export default Home;