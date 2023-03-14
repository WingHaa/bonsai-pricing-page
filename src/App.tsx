import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import styled from "styled-components";
const StyledRoot = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
`;

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleChangeIsMonthly = () => {
    setIsMonthly((prev) => !prev);
  };
  return (
    <StyledRoot>
      <Header />
      <Main isMonthly={isMonthly} handleClick={handleChangeIsMonthly} />
      {/* <Footer/> */}
    </StyledRoot>
  );
}

export default App;
