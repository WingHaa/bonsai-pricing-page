import styled from "styled-components";

export const $FancyLink = styled.a`
  color: #22ad01;
  position: relative;
  text-decoration: none;
  display: inline-block;
  ::after {
    content: "";
    width: 100%;
    background-color: #22ad01;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    transition: transform 0.5s ease-out;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  :hover::after {
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;

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

export const $DefaultButton = styled.div`
  background-color: #22ad01;
  border-radius: 36px;
  padding: 12px 56px 14px;
  color: white;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #2bb90a;
    transition: background-color 200ms ease-in;
  }
`;

export const $Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1144px;
  margin-left: auto;
  margin-right: auto;
`;

export const $Border = styled.div`
  border-bottom: 1px solid #d3dcd4;
`;
