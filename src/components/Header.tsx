import React, { useState } from "react";
import * as Styled from "../styles/Utils.style";
import styled from "styled-components";
import bonsaiIcon from "../assets/bonsai-icon.svg";
import MobileHeader from "./MobileHeader";

const StyledHeader = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  z-index: 2;
  border-bottom: 1px solid #d3dcd4;
  min-width: 100%;
`;

const $Header = styled.div`
  display: none;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px 12px;
  @media (min-width: 1000px) {
    display: flex;
  }
  > * {
    cursor: pointer;
  }
  > div {
    display: flex;
    gap: 50px;
    align-items: center;
  }
  > span:last-child {
    cursor: pointer;
  }
`;

const $Heading = styled.ul`
  display: flex;
  gap: 10px;
  > li {
    > p {
      padding: 24px 14px;
    }
    &:hover > div:last-child {
      display: flex;
    }
    position: static;
  }
`;

const $FeatureMenu = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 46px 40px;
  min-width: 100%;
  position: absolute;
  left: 0;
  box-shadow: 0 24px 40px -20px rgb(0 0 0 / 20%);
  border-top: 1px solid #d3dcd4;
  > div {
    > h5 {
      font-weight: 600;
    }
    > ul {
      margin-top: 20px;
      > li {
        padding: 6px 14px 6px 0;
        position: relative;
        > a {
          text-decoration: none;
          color: #65816d;
          &:hover {
            color: #22ad01;
          }
        }
      }
    }
  }
`;

const $DesktopHeaderContainer = styled.div`
  > div:last-child {
    padding: 0 40px;
    margin-left: auto;
    margin-right: auto;
    > ul {
      border-top: 1px solid #d3dcd4;
      display: flex;
    }
  }
`;

const $FeatureMenuWrapper = styled.div`
  min-width: 100%;
  display: none;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <MobileHeader />
      <$DesktopHeaderContainer>
        <$Header>
          <div>
            <img src={bonsaiIcon} alt="Bonsai Icon" />
            <$Heading>
              <li>
                <p>Products</p>
                <$FeatureMenuWrapper>
                  <$FeatureMenu>
                    <div>
                      <h5>Client Management</h5>
                      <ul>
                        <li>
                          <a href="#">CRM</a>
                        </li>
                        <li>
                          <a href="#">Scheduling</a>
                        </li>
                        <li>
                          <a href="#">Proposals</a>
                        </li>
                        <li>
                          <a href="#">Contracts</a>
                        </li>
                        <li>
                          <a href="#">Forms</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Project Management</h5>
                      <ul>
                        <li>
                          <a href="#">Time tracking</a>
                        </li>
                        <li>
                          <a href="#">Tasks</a>
                        </li>
                        <li>
                          <a href="#">File sharing</a>
                        </li>
                        <li>
                          <a href="#">Client portal</a>
                        </li>
                        <li>
                          <a href="#">Collaboration</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Financial Management</h5>
                      <ul>
                        <li>
                          <a href="#">Invoicing</a>
                        </li>
                        <li>
                          <a href="#">Payments</a>
                        </li>
                        <li>
                          <a href="#">Accounting</a>
                        </li>
                        <li>
                          <a href="#">Taxes</a>
                        </li>
                        <li>
                          <a href="#">Banking</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>What's new</h5>
                      {/* <img src={0} alt="" /> */}
                      <div>Branded scheduling portal</div>
                      <Styled.$FancyLink>Learn more</Styled.$FancyLink>
                    </div>
                  </$FeatureMenu>
                </$FeatureMenuWrapper>
              </li>
              <li>
                <p>Industries</p>
                <$FeatureMenuWrapper>
                  <$FeatureMenu>
                    <div>
                      <h5>Business Services</h5>
                      <ul>
                        <li>
                          <a href="#">Consulting</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">Recruiting</a>
                        </li>
                        <li>
                          <a href="#">Virtual Assistant</a>
                        </li>
                        <li>
                          <a href="#">More...</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Creative and Digital</h5>
                      <ul>
                        <li>
                          <a href="#">Design</a>
                        </li>
                        <li>
                          <a href="#">Photography</a>
                        </li>
                        <li>
                          <a href="#">Software Development</a>
                        </li>
                        <li>
                          <a href="#">Writing</a>
                        </li>
                        <li>
                          <a href="#">More...</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Professional Services</h5>
                      <ul>
                        <li>
                          <a href="#">Coaching</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                        <li>
                          <a href="#">Accounting</a>
                        </li>
                        <li>
                          <a href="#">Legal</a>
                        </li>
                        <li>
                          <a href="#">More...</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Other services</h5>
                      <ul>
                        <li>
                          <a href="#">Event Planning</a>
                        </li>
                        <li>
                          <a href="#">Interior Design</a>
                        </li>
                        <li>
                          <a href="#">Real-Estate</a>
                        </li>
                        <li>
                          <a href="#">More...</a>
                        </li>
                      </ul>
                    </div>
                  </$FeatureMenu>
                </$FeatureMenuWrapper>
              </li>
              <li>
                <p>Templates</p>
              </li>
              <li>
                <p>Pricing</p>
              </li>
              <li>
                <p>Reviews</p>
              </li>
            </$Heading>
          </div>
          <div>
            <span>Log in</span>
            <Styled.$DefaultButton>Start free</Styled.$DefaultButton>
          </div>
        </$Header>
      </$DesktopHeaderContainer>
    </StyledHeader>
  );
};
