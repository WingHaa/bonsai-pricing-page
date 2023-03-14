import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/menu.svg";
import bonsaiIcon from "../assets/bonsai-icon.svg";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px 12px 40px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <span>
        <img src={bonsaiIcon} alt="Bonsai Icon" />
      </span>
      <span></span>
      <span>
        <img src={menuIcon} alt="Menu" />
      </span>
    </StyledHeader>
  );
};
