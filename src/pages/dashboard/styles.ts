import styled from "styled-components";
import { colors, fonts } from "@app/styles/styles";

export const Container = styled.div`
  width: 100%;
  display: flex;

  min-height: 100vh;
  position; relative; 
  // background-color: ${colors.TERNARY};
`;

export const SideBar = styled.div<{
  expand?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: ${(props) => (props.expand ? "100%" : "298px")};
  padding: 1.5em;

  display: grid;

  grid-template-rows: 50px auto;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  overflow-y: scroll;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 1em;
`;

export const Input = styled.input`
  width: 75%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: none;
  box-sizing: border-box;

  font-family: ${fonts.SECONDARY};
  border: 1px solid rgba(30, 61, 89, 0.2);
  padding: 7px 1em 7px 15px;

  &:focus {
    outline: none;
    border: 1px solid rgba(30, 61, 89, 1);
  }

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Button = styled.button`
  width: 25%;
  color: ${colors.DARK};
  font-family: ${fonts.SECONDARY};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid rgba(30, 61, 89, 0.2);
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: ${colors.DARK};
    color: white;
  }

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Content = styled.div<{
  expand?: Boolean;
}>`
  width: 100%;
  height: ${(props) => (props.expand ? "100%" : "200px")};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow-y: scroll;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  z-index: 20;
`;

export const ContentInner = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  padding: 1em;

  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;

  border: 1px solid rgba(30, 61, 89, 0.2);

  background-color: white;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border: 1px solid rgba(30, 61, 89, 1);
  }
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  overflow-y: scroll;
`;

export const Contents = styled.div<{
  showContents?: Boolean;
}>`
  position: fixed;
  width: 350px;
  height: ${(props) => (props.showContents ? "500px" : "100px")};

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  top: 74px;

  left: ${(props) => (props.showContents ? "500px" : "120px")};
  z-index: 1;
`;

export const ContentsInner = styled.div<{
  showContents?: Boolean;
}>`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(30, 61, 89, 0.2);

  border-top-left-radius: ${(props) => (props.showContents ? "0px" : "3px")};
  border-top-right-radius: ${(props) => (props.showContents ? "0px" : "3px")};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  position: relative;

  padding: 1em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  background-color: white;

  overflow: auto;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  & ul {
    font-family: ${fonts.SECONDARY};

    padding-inline-start: 20px;
    list-style-type: none;
  }

  & li {
    font-family: ${fonts.SECONDARY};

    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  & a {
    text-decoration: none;
    color: ${colors.DARK};
    border-bottom: 1px solid white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & a:hover {
    border-bottom: 1px solid ${colors.DARK};
  }

  &:hover {
    border: 1px solid rgba(30, 61, 89, 1);
  }
`;

export const Slide = styled.div<{
  showContents?: Boolean;
}>`
  width: ${(props) => (props.showContents ? "350px" : "405px")};

  background-color: white;
  color: ${colors.DARK};
  font-family: ${fonts.SECONDARY};
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 1em;
  padding-right: 1em;

  border: 1px solid rgba(30, 61, 89, 0.2);
  border-bottom: ${(props) =>
    props.showContents ? "none" : "1px solid rgba(30, 61, 89, 0.2)"};

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: ${colors.DARK};
    color: white;
    width: ${(props) => (props.showContents ? "350px" : "420px")};
  }

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const SlideButton = styled.div<{
  showContents?: Boolean;
}>`
  width: 100%;

  background-color: white;
  color: ${colors.DARK};
  font-family: ${fonts.SECONDARY};
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 1em;
  padding-right: 1em;

  border: 1px solid rgba(30, 61, 89, 0.2);
  border-top: none;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: ${colors.DARK};
    color: white;
  }

  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Heading1 = styled.h1`
  font-family: ${fonts.PRIMARY};
  color: ${colors.DARK};
  margin: 0px;
`;

export const Heading2 = styled.h2`
  font-family: ${fonts.PRIMARY};
  color: ${colors.DARK};
  margin: 0px;
`;

export const Heading3 = styled.h3`
  font-family: ${fonts.PRIMARY};
  color: ${colors.DARK};
  margin: 0px;
`;

export const Heading4 = styled.h4`
  font-family: ${fonts.PRIMARY};
  color: ${colors.DARK};
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-family: ${fonts.SECONDARY};
  // color: ${colors.DARK};
`;

export const Heading = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Line = styled.span`
  width: 3px;
  height: 25px;

  background-color: ${colors.DARK};
`;

export const ArrowDiv = styled.div<{
  expand?: Boolean;
}>`
  display: flex;
  height: 100%;
  align-items: center;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  transform: ${(props) => (props.expand ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Thumbnail = styled.div<{
  x: number;
  y: number;
}>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid rgba(30, 61, 89, 0.2);
  border-radius: 3px;
`;
