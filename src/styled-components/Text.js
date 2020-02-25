import styled from "styled-components";

export default styled.p`
  border: 1px dotted black;
  padding: 20px;
  background-color: ${props => (props.alert ? "red" : "lightGrey")};
`;
