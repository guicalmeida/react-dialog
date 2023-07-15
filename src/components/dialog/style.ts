import { styled } from "styled-components";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000cc;
  position: relative;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 1001;
  right: 0;
  bottom: 0;
  left: 0;
  height: fit-content;
  max-height: 90%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h1 {
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.704px;
  }
`;

const Body = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.504px;
  overflow: auto;

  & *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export { Backdrop, Body, DialogContainer, Header };
