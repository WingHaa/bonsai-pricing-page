import React, { useState } from "react";
import styled from "styled-components";
import Switch from "./Switch";
import Price from "./PriceOption";
import Addon from "./Addon";
import Support from "./Support";
import { FAQ } from "./FAQ";
import { Review } from "./Review";
import * as Styled from "../styles/Utils.style";

const $Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;

  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 700;
    color: #003c2f;
  }
`;

const $PriceOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .price-option-container {
    position: relative;
    max-width: 560px;
    width: 100%;
    @media (min-width: 1000px) {
      max-width: initial;
    }
    .special-container {
      margin-top: 30px;
      position: relative;
      @media (min-width: 1000px) {
        margin-top: 0px;
      }
    }
  }
  .special {
    position: absolute;
    top: -4%;
    left: -2%;
    width: 102%;
    height: 104%;
    border-radius: 20px;
    padding: 5px 6px 6px;
    background-color: #ee8146;
    color: white;
    z-index: -1;
    display: flex;
    justify-content: center;
  }
`;

const $Main = styled.main`
  padding-top: 10rem;
`;

const Main = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleChangeIsMonthly = () => {
    setIsMonthly((prev) => !prev);
  };
  return (
    <$Main>
      <div className="pricing">
        <$Header>
          <h1>Pick the best plan for your business</h1>
        </$Header>
        <Styled.$Spacer_30></Styled.$Spacer_30>
        <Switch isMonthly={isMonthly} handleClick={handleChangeIsMonthly} />
        <Styled.$Spacer_30></Styled.$Spacer_30>
        <$PriceOuter>
          <Price isMonthly={isMonthly} />
        </$PriceOuter>
      </div>
      <Addon />
      <FAQ />
      <Review />
      <Support />
    </$Main>
  );
};

export default Main;
