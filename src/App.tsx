import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";
const StyledRoot = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  max-width: 1440px;
`;

function App() {
  return (
    <StyledRoot>
      <Header />
      <Main />
      <Footer />
    </StyledRoot>
  );
}

export default App;
