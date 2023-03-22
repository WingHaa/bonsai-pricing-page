import React from "react";
import styled from "styled-components";
import * as Styled from "../styles/Utils.style";
import cs from "../assets/Group_12657-p-800.png";
import pattern from "../assets/pattern.png";

const $Container = styled.section`
  padding-top: 120px 0 80px;
  overflow: hidden;
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media (min-width: 1000px) {
      flex-direction: row;
    }
    > img {
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      @media (min-width: 480px) {
        width: 80%;
      }
      @media (min-width: 768px) {
        width: 50%;
      }
    }

    > div {
      @media (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 390px;
      }
    }
  }
  > div:last-child {
    margin: 120px 30px 0;
    background-color: #003c2f;
    background-image: url(${pattern});
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 60px;
    background-position: 50% 50%;
    background-size: cover;
    padding: 70px;
    gap: 20px;
    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: space-around;
    }
    > div {
      color: white;
      font-size: 36px;
    }
  }
`;

const FlexItem = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 700;
  }
  p {
    color: #65816d;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Support = () => {
  return (
    <$Container>
      <div>
        <img
          src={cs}
          alt=""
          sizes="(max-width: 479px) 82vw, (max-width: 767px) 76vw, 47vw"
        />
        <div>
          <FlexItem>
            <h3>
              Need help? We’ll
              <br />
              answer in under 5 minutes
            </h3>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <p>
              Our friendly, speedy, Customer Support has all the answers and is
              here to help you.
            </p>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <Styled.$FancyLink>Contact us</Styled.$FancyLink>
          </FlexItem>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <Styled.$Border></Styled.$Border>
          <Styled.$Spacer_30></Styled.$Spacer_30>
          <FlexItem>
            <h3>
              Quick to set up
              <br />
              Even easier to use
            </h3>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <p>
              You get 7 days to try it for free. And if it's not what you
              expected, we guarantee your money back within the first two weeks.
            </p>
            <Styled.$Spacer_15></Styled.$Spacer_15>
            <Styled.$DefaultButton>Get started</Styled.$DefaultButton>
          </FlexItem>
        </div>
      </div>
      <div>
        <div>
          Get started in 30 seconds
          <br />
          Free for 7 days
        </div>
        <span>
          <Styled.$DefaultButton>Start free trial now</Styled.$DefaultButton>
        </span>
      </div>
    </$Container>
  );
};

export default Support;
