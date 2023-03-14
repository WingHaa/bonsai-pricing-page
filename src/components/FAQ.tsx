import React, { useState } from "react";
import styled from "styled-components";
import * as Styled from "./Main";
import rectangle from "../assets/Rectangle.svg";
import branch from "../assets/Branch.png";

const $StyledContainer = styled.div`
  width: 100%;
  max-width: 1144px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const $Accordion = styled.div`
  padding: 120px 40px 0;
  max-width: 640px;
  position: relative;

  > img {
    position: absolute;
    top: -30px;
    right: -1000px;
    z-index: -1;
  }

  > h2 {
    font-size: 32px;
    font-weight: 700px;
    padding: 20px 0;

    @media (min-width: 1000px) {
      font-size: 42px;
    }
  }
`;

const $AccordionItem = styled.div<StyleProps>`
  border-bottom: 1px solid #d3dcd4;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    > h3 {
      font-size: 20px;
      font-weight: 700;
      padding: 30px 0;
    }
    img {
      transition: transform 125ms ease-in;
      transform: ${({ show }) => show && "rotate3d(0, 0, 1, 180deg)"};
    }
  }
  > div:last-child {
    color: #65816d;
    overflow: hidden;
    transition: all 125ms ease-in;
    max-height: ${({ show }) => (show ? "300px" : "0")};
  }
`;
interface StyleProps {
  show: boolean;
}

export const FAQ = () => {
  const [show, setShow] = useState([false, false, false, false]);
  const handleSetShow = (position: number) => {
    setShow((prevState) =>
      prevState.map((state, index) => {
        if (position === index) return !state;
        return state;
      })
    );
  };
  return (
    <$StyledContainer>
      <$Accordion>
        <img src={branch} alt="" />
        <h2>Frequently asked questions</h2>
        <div>
          <$AccordionItem show={show[0]}>
            <div
              onClick={() => {
                handleSetShow(0);
              }}
            >
              <h3>How does the free trial work?</h3>
              <img src={rectangle} alt="" />
            </div>
            <div>
              {show[0] &&
                `
              When you start your trial with Bonsai you'll receive full,
              unlimited access to the plan you chose. You will need to enter
              your credit card information to begin your trial, but don't worry
              - we won't charge you anything until the trial ends. You can
              cancel at any time during the trial period via your Subscriptions
              settings.
               `}
            </div>
          </$AccordionItem>
          <$AccordionItem show={show[1]}>
            <div onClick={() => handleSetShow(1)}>
              <h3>Can I change my plan anytime?</h3>
              <img src={rectangle} alt="" />
            </div>
            <div>
              {show[1] &&
                ` Yes, you can upgrade, downgrade or cancel your plan
              at any time via your Subscription settings. `}
            </div>
          </$AccordionItem>
          <$AccordionItem show={show[2]}>
            <div onClick={() => handleSetShow(2)}>
              <h3>Is my Bonsai subscription tax deductible?</h3>
              <img src={rectangle} alt="" />
            </div>
            <div>
              {show[2] &&
                ` Is my Bonsai subscription tax deductible? Yes, the
              IRS allows for tax deduction for software you use to run your
              business. Bonsai's expense tracking even automatically categorizes
              your subscription as a deductible software expense. `}
            </div>
          </$AccordionItem>
          <$AccordionItem show={show[3]}>
            <div onClick={() => handleSetShow(3)}>
              <h3>What is your refund policy?</h3>
              <img src={rectangle} alt="" />
            </div>
            <div>
              {show[3] &&
                ` If you contact us within two weeks of being charged
              for your subscription, we will be happy to issue a refund for you.
              Beyond those two weeks, you will need to cancel or modify the
              subscription from the Subscriptions tab in Settings to avoid
              future charges, but refunds will not be issued. This applies to
              both monthly and annual plans. `}
            </div>
          </$AccordionItem>
        </div>
      </$Accordion>
    </$StyledContainer>
  );
};
