import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const awesomeCard = css`
  font-family: "Times New Roman", Times, serif;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border-radius: 5px;
  margin: 10px;
  ${awesomeCard};
`;

const Contianer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f39c12;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Contianer>
          <Input placeholder="good night" />
        </Contianer>
      </React.Fragment>
    );
  }
}

export default App;
