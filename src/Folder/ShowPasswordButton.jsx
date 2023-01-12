import styled from "styled-components";


// export default function ShowPasswordButton() {
//   return <StyledButton>{content}</StyledButton>;
// }


export const ShowPasswordButton = styled.button`
  font-weight:bold;
  height: 3rem;
  padding: 1rem;
  margin : 5px;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  line-height:normal;
  color:black;
  text-transform:uppercase;
  cursor:pointer;
  width:70px;
  padding:0;
  &:focus{
    outline:none;
    text-decoration:underline;
    }

`