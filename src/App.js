import React from "react";
import logo from "./logo.svg";
import "./App.css";

//styled-components
import Wrapper from "./styled-components/Wrapper";
import Text from "./styled-components/Text";
import HeaderText from "./styled-components/HeaderText";
import Button from "./styled-components/Button";
import NewButton from "./styled-components/NewButton";

//components
import MyComponent from "./MyComponent";

//To use style Components: npm install --save styled-components

function App() {
  return (
    <Wrapper>
      <HeaderText color={"purple"}>Hello World!</HeaderText>
      <MyComponent />
      <Text alert>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
        voluptate minus veniam, perspiciatis vitae adipisci tenetur aliquam quos
        ipsam illum, esse consequuntur et perferendis repudiandae omnis. Nemo,
        facere atque.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
        voluptate minus veniam, perspiciatis vitae adipisci tenetur aliquam quos
        ipsam illum, esse consequuntur et perferendis repudiandae omnis. Nemo,
        facere atque.
      </Text>
      <Button primary>Button 1</Button>
      <Button>Button 2 </Button>
      <NewButton>Button 3 </NewButton>
    </Wrapper>
  );
}

export default App;
