import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000; /* Changed to black */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff; /* Changed text color to white */
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #fff; /* Changed text color to white */
`;

const Screen = () => {
  return (
    <Container>
      <Title>Welcome to Your Feedback App</Title>
      <Description>
        This is a simple and beautiful feedback application.
      </Description>
    </Container>
  );
};

export default Screen;
