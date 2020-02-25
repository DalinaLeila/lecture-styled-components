import styled from "styled-components";

// export default styled.img.attrs({
//   src: " IMAGE URL HERE "
// })`
//   width: 400px;
//   height: 300px;
//   border: 10px solid yellow;
// `;

export default styled.img`
  width: 400px;
  height: 300px;
  border: 10px solid yellow;
  background-image: url(${props => props.mainSrc});

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    background-image: url(${props => props.dynamicSrc});
    width: 100px;
    height: 100px;
    border: 1px solid yellow;
  }
`;
