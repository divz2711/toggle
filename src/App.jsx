import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the background animation
const animateBackground = keyframes`
  0% {
    background-color: cyan;
  }
  50% {
    background-color: lightblue;
  }
  100% {
    background-color: cyan;
  }
`;

// Styled components
const Container = styled.div`
  background-color: #ffffff;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  margin-top: 20px;
`;

const EyeIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const StudentDetails = styled.div`
  margin-top: 16px;
`;

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  animation: ${animateBackground} 5s infinite alternate;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px; /* Adjust this value as needed */
`;

const StudentComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <FullPageContainer>
      <TopContainer>
        <Container>
          <EyeIcon src="src\assets\eyeicon.svg" alt="Eye Icon" />
          <div>Name: John Doe</div>
          <div>Registration No: 123456</div>
          <ToggleButton onClick={toggleVisibility}>
            {isVisible ? 'Hide Details' : 'Show Details'}
          </ToggleButton>
          {isVisible && (
            <StudentDetails>
              Additional details go here!
            </StudentDetails>
          )}
        </Container>
      </TopContainer>
    </FullPageContainer>
  );
};

export default StudentComponent;
