import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import styled from "styled-components";
const StyledRoot = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

function App() {
  return (
    <StyledRoot>
      <Header />
      <Main />
      {/* <Footer/> */}
    </StyledRoot>
  );
}

export default App;
