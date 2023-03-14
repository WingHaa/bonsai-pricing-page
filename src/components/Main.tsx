import React, { useState } from "react";
import styled from "styled-components";
import Switch from "./Switch";
import Price from "./PriceOption";
import Addon from "./Addon";
import { FAQ } from "./FAQ";
import { Review } from "./Review";

export const $Spacer_15 = styled.div`
  height: 15px;
`;
export const $Spacer_30 = styled.div`
  height: 30px;
`;

export const $Separator = styled.div`
  border-bottom: 1px solid #d3dcd4;
  width: 100%;
`;

export const $DefaultButton = styled.span`
  background-color: #22ad01;
  border-radius: 36px;
  padding: 12px 56px 14px;
  color: white;
  cursor: pointer;
`;

export const $Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1144px;
  margin-left: auto;
  margin-right: auto;
`;

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

interface StyleProps {
  isMonthly: boolean;
}

interface Props extends StyleProps {
  handleClick: () => void;
}

export const Main = ({ isMonthly, handleClick }: Props) => {
  return (
    <>
      <div className="pricing">
        <$Header>
          <h1>Pick the best plan for your business</h1>
        </$Header>
        <$Spacer_30></$Spacer_30>
        <Switch isMonthly={isMonthly} handleClick={handleClick} />
        <$Spacer_30></$Spacer_30>
        <$PriceOuter>
          <Price isMonthly={isMonthly} />
        </$PriceOuter>
      </div>
      <Addon />
      <FAQ />
      <Review />
    </>
  );
};
