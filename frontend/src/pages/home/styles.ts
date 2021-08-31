import styled, { keyframes } from "styled-components";
import { device } from "@app/shared/components/layout/layout";
import { colors, fonts } from "@app/styles/styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  // background-color: ${colors.TERNARY};
`;

export const ContainerInner = styled.div`
  max-width: 992px;
  display: flex;
  justify-content: center;

  @media ${device.mobileS} {
    box-sizing: border-box;
    width: 80%;
  }

  @media ${device.laptopM} {
    padding: 0px 0px;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  @media ${device.mobileS} {
    font-size: 36px;
  }

  font-family: ${fonts.PRIMARY};

  margin: 0px;
  font-weight: bold;
  color: ${colors.DARK};
`;

export const Description = styled.p`
  font-family: ${fonts.SECONDARY};
  font-size: 17px;
  margin: 0px;
  margin-bottom: 1em;
  color: rgba(30, 61, 89, 0.5);
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-size: 17px;
  margin: 0px;
  color: #1e3d59;
  line-height: 1.3;
  margin-top: 1em;
`;

export const Input = styled.input`
  margin-top: 1em;
  width: calc(100% - 30px);
  border: none;
  font-family: ${fonts.SECONDARY};

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(30, 61, 89, 1);
    font-size: 15px;
    padding-bottom: 5px;
  }

  transition: 0.2s;
  font-size: 12px;
  border-bottom: 2px solid rgba(30, 61, 89, 0.2);
`;
