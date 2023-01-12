import React from 'react'
import Input from '../components/Input';
import  {ShowPasswordButton}  from "./ShowPasswordButton";
import styled from "styled-components";

const PasswordInput = ({type,onShowPasswordClick}) => {
    // const[status,setStatus] = useState(false);
    // const onShowPasswordClick = () =>{
    //   setStatus(!status);
    // }
    return (
    <Styleddiv>
        <Input type={type} placeholder="Password"/>
        <ShowPasswordButton onClick={onShowPasswordClick} >{type==='password' ? 'show' : 'hide'}</ShowPasswordButton>
    </Styleddiv>
  )
}
const Styleddiv = styled.div`
  
  display:flex;
  border-radius: 1rem;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export default PasswordInput ;