import React from "react";
import styled from "styled-components";

interface StyleProps {
  isMonthly: boolean;
}

interface Props extends StyleProps {
  handleClick: () => void;
}

const $SwitchOuter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 261px;
  height: 52px;
  border-radius: 50px;
  padding: 6px 25px 6px 36px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #f0f5f0;
  font-family: sans-serif;
  cursor: pointer;
`;

const $SwitchInner = styled.div<StyleProps>`
  width: ${(props) => (props.isMonthly ? "110px" : "210px")};
  height: 52px;
  border-radius: 50px;
  background-color: #003c2f;
  position: absolute;
  left: 6px;
  top: auto;
  transition: 250ms ease-in;
  transform: ${(props) =>
    props.isMonthly ? "none" : "translate3d(100px,0,0)"};
`;

const $SwitchLabel = styled.div`
  z-index: 1;
  color: #22ad01;
  transition: 250ms ease-in;
  font-size: 10px;
  background-color: white;
  padding: 0 13px;
  border-radius: 40px;
  line-height: 150%;
  font-weight: 700;
`;

const $MonthlyLabel = styled.div<StyleProps>`
  z-index: 1;
  color: ${(props) => (props.isMonthly ? "white" : "black")};
  transition: 250ms ease-in;
`;

const $YearlyLabel = styled.div<StyleProps>`
  z-index: 1;
  color: ${(props) => (props.isMonthly ? "black" : "white")};
  transition: 250ms ease-in;
`;
const Switch = ({ isMonthly, handleClick }: Props) => {
  return (
    <$SwitchOuter onClick={() => handleClick()}>
      <$SwitchInner isMonthly={isMonthly}></$SwitchInner>
      <$MonthlyLabel isMonthly={isMonthly}>Monthly</$MonthlyLabel>
      <$YearlyLabel isMonthly={isMonthly}>Yearly</$YearlyLabel>
      <$SwitchLabel>2 months for free</$SwitchLabel>
    </$SwitchOuter>
  );
};

export default Switch;
