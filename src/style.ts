import { styled } from "styled-components";

const TestButton = styled.button`
  padding: 16px;
  background-color: white;
  color: #333;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px;
`;

export { TestButton, ButtonContainer };
