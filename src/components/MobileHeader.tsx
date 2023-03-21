import React, { useState } from "react";
import * as Styled from "../styles/Utils.style";
import styled from "styled-components";
import menuIcon from "../assets/menu.svg";
import bonsaiIcon from "../assets/bonsai-icon.svg";
import rectangle from "../assets/Rectangle.svg";

const $MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px 12px 40px;
  @media (min-width: 1000px) {
    display: none;
  }
  > span:last-child {
    cursor: pointer;
  }
`;

const $MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  z-index: 2;
  max-height: ${({ isOpen }) => (isOpen ? "80vh" : "0")};
  overflow-y: auto;
  transition: all 125ms ease-in;
  > div {
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 40px;
  }
`;

const $NavGroup = styled.div`
  > div {
    border-bottom: 1px solid #d3dcd4;
  }
  & + div {
    display: block;
  }
  > div:last-child {
    border-bottom: none;
  }
`;

const $NavMainItem = styled.div<{
  isOpen?: boolean;
  onClick?: (e: React.Dispatch<React.SetStateAction<boolean>>) => void;
}>`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  :hover {
    color: #22ad01;
  }

  > div {
    color: inherit;
    font-weight: 700;
  }
  > img {
    transform: ${({ isOpen }) => (isOpen ? "rotate3d(0,0,1,180deg)" : "")};
    transition: transform 125ms ease-in;
  }
`;

const $NavSubItem = styled.div<{ isOpen?: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "3000px" : "0")};
  transition: all 125ms ease-in;
  div {
    padding: 6px 0;
    color: #65816d;
    &:hover {
      color: #22ad01;
    }
  }
`;

const MobileHeader = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const [templateMenuIsOpen, setTemplateMenuIsOpen] = useState(false);
  return (
    <>
      <$MobileHeader>
        <span>
          <img src={bonsaiIcon} alt="Bonsai Icon" />
        </span>
        <span onClick={() => setMobileMenuIsOpen((prevState) => !prevState)}>
          <img src={menuIcon} alt="Menu" />
        </span>
      </$MobileHeader>
      <$MobileMenu isOpen={mobileMenuIsOpen}>
        <div>
          <$NavGroup>
            <div>
              <$NavMainItem
                isOpen={productMenuIsOpen}
                onClick={() => setProductMenuIsOpen((prevState) => !prevState)}
              >
                <div>Product</div>
                <img src={rectangle} alt="" />
              </$NavMainItem>
              <$NavSubItem isOpen={productMenuIsOpen}>
                <div>CRM</div>
                <div>Scheduling</div>
                <div>Proposals</div>
                <div>Contracts</div>
                <div>Forms</div>
                <div>Time tracking</div>
                <div>Tasks</div>
                <div>File sharing</div>
                <div>Client portal</div>
                <div>Collaboration</div>
                <div>Invoicing</div>
                <div>Payments</div>
                <div>Accounting</div>
                <div>Taxes</div>
                <div>Banking</div>
              </$NavSubItem>
            </div>
            <div>
              <$NavMainItem
                isOpen={templateMenuIsOpen}
                onClick={() => setTemplateMenuIsOpen((prevState) => !prevState)}
              >
                <div>Templates</div>
                <img src={rectangle} alt="" />
              </$NavMainItem>
              <$NavSubItem isOpen={templateMenuIsOpen}>
                {templateMenuIsOpen && (
                  <>
                    <div>Agreements</div>
                    <div>Briefs</div>
                    <div>Contracts</div>
                    <div>Credit notes</div>
                    <div>Estimates</div>
                    <div>Forms</div>
                    <div>Invoices</div>
                    <div>Proposals</div>
                    <div>Quotes</div>
                    <div>Scopes of Work</div>
                  </>
                )}
              </$NavSubItem>
            </div>
            <div>
              <$NavMainItem>
                <div>Pricing</div>
              </$NavMainItem>
            </div>
            <div>
              <$NavMainItem>
                <div>Review</div>
              </$NavMainItem>
            </div>
          </$NavGroup>
          <Styled.$DefaultButton>Start free</Styled.$DefaultButton>
        </div>
      </$MobileMenu>
    </>
  );
};

export default MobileHeader;
