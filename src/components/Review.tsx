import React from "react";
import styled from "styled-components";
import g2Icon from "../assets/g2.svg";
import trustIcon from "../assets/Trustpilot.svg";

const $Container = styled.section`
  padding-top: 60px;
  overflow: hidden;
  h3 {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 485px) {
      font-size: 32px;
    }
    @media (min-width: 770px) {
      font-size: 42px;
    }
  }
  > h3 + div {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    img {
      margin-left: 20px;
    }
    img:first-child {
      border-right: 1px solid #d3dcd4;
      padding-right: 20px;
      width: 120px;
      @media (min-width: 560px) {
        width: 224px;
      }
    }
    img:last-child {
      width: 130px;
      @media (min-width: 560px) {
        width: 240px;
      }
    }
  }
`;

const $ReviewContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  gap: 20px;
  > div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1920px) {
      column-gap: normal;
    }
    > p {
      min-width: max-content;
      padding: 20px 18px 10px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 20px;
      color: #65816d;
      background-color: #ecf1ec;
      > strong {
        color: #003c2f;
      }
    }
  }
`;

export const Review = () => {
  return (
    <$Container>
      <h3>Trusted by 500,000+ business owners</h3>
      <div>
        <img src={g2Icon} alt="" />
        <img src={trustIcon} alt="" />
      </div>
      <$ReviewContainer>
        <div>
          <p>
            "<strong>My best friend</strong> in scaling my business"
          </p>
          <p>
            "Like putting my <strong>finances on auto-pilot</strong>"
          </p>
          <p>
            "Bonsai does <strong>the hard work</strong>"
          </p>
          <p>
            "Everything is <strong>streamlined</strong>"
          </p>
        </div>
        <div>
          <p>
            "Huge <strong>timesaver</strong>"
          </p>
          <p>
            "It’s been <strong>the most stress-free year of my life!</strong>"
          </p>
          <p>
            "I feel <strong>more confident</strong>"
          </p>
          <p>
            "Backbone <strong>of my business</strong>"
          </p>
          <p>
            "<strong>So simple</strong>"
          </p>
        </div>
        <div>
          <p>
            "<strong>Clients love</strong> how easy my systems are"
          </p>
          <p>
            "A <strong>must-have!</strong>"
          </p>
          <p>
            "<strong>I do less admin</strong> and do more of what I love"
          </p>
          <p>
            "<strong>Worry-free</strong> contracts and invoices"
          </p>
        </div>
        <div>
          <p>
            "<strong>It pays for itself</strong>"
          </p>
          <p>
            "Great <strong>customer service!</strong> "
          </p>
          <p>
            "A <strong>life-saver!</strong> "
          </p>
          <p>
            "Clients <strong>take me more seriously</strong> "
          </p>
          <p>
            "<strong>I upped my rates</strong> and won more clients"
          </p>
        </div>
      </$ReviewContainer>
    </$Container>
  );
};
