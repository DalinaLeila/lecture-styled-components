import styled from "styled-components";

export default styled.button`
  background-color: ${props => (props.primary ? "blue" : "green")};
  color: ${props => (props.primary ? "white" : "black")};
  width: 90px;
  height: 40px;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-right: 20px;

  &:hover {
    background-color: ${props => (props.primary ? "DodgerBlue" : "yellow")};
  }

  &:focus {
    outline: none;
  }
`;
