import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import PasswordInput from "./password/PasswordInput";

import { FaFacebookF, FaInstagram, FaTwitter , FaGoogle } from "react-icons/fa";
import { useState } from "react";
function App() {
  const[status,setStatus] = useState(false);
  const onShowPasswordClick = () =>{
    setStatus(!status);
  }
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
    <MainContainerLeft><img src= "https://i.ibb.co/4Z8sXLW/leftimg.png" alt="No image" /></MainContainerLeft>  
    <MainContainerRight>
      <WelcomeText>LOGIN</WelcomeText>
      <InputContainer>
        <label>Login id</label>
        <Input type="text" placeholder="Enter Login Id" />
        <label>Password</label>
        
        <PasswordInput type={status?'text':'password'} onShowPasswordClick = {onShowPasswordClick}></PasswordInput>  
        
      </InputContainer>
      
      <ButtonContainer>
        <Button content="Log in" />
      </ButtonContainer>
      <HorizontalRule />
      <h5>OR LOGIN WITH SOCIAL's</h5>
      
      <IconsContainer>
      <Icon color={TwitterBackground}>
          <FaGoogle />
        </Icon>
        
        
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        
      </IconsContainer>
      <h4>Don't have an account yet? <SignUp>Register Here</SignUp></h4> 
    </MainContainerRight>
    </MainContainer>
  );
}
const MainContainer = styled.div`
display : flex;
background-color:#CBD5DF;
background-size: cover;
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
font-family: "Raleway", sans-serif;

`
const MainContainerLeft = styled.div`
justify-content:center;
display : flex;
flex:1;
overflow: hidden;
height: 80vh;
width: 30vw;

@media only screen and (max-width: 1000px) {
  display : none;
  width: 80vw;
  height: 90vh;
  
}
@media only screen and (min-width: 360px) {
  
  width: 85vw;
  height: 95vh;
  
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 95vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 85vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 85vh;
}
@media only screen and (min-width: 1280px) {
  width: 40vw;
  height: 85vh;
}

`
const MainContainerRight = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  justify-content : space-between;
  margin-right:10px;
  
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 85vw;
    height: 95vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 95vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 85vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 85vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 40vw;
    height: 85vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-botton:50px;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const SignUp = styled.h4`
  cursor: pointer;
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin : 10px;
  overflow : hidden;
  &:hover{
    text-decoration:underline;
  }
`;

export default App;
