import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  
  width: 30%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  position : relative;
  transition: all 0.5s;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &:hover  {
    
    padding-right: 25px;
    opacity: 0.5;
    right: 0;
  }
  
`;
