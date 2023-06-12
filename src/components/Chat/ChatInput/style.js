import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const Wrapper = styled.div`
  background-color: ${Colors.White};
  display: flex;
  gap: 2px;
  justify-content: space-between;
  grid-template-columns: auto;
  padding: 0 20px 18px 20px;
  width: 97%;
`;

const ChatInputWrapper = styled.div`
  background-color: ${Colors.Gray2};
  padding: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  width: 80%;
  & > input {
    outline: none;
    border: none;
    width: 100%;
    background-color: inherit;
  }
`;
const Button = styled.button`
  border: none;
  background-color: ${Colors.Gray1};
  box-sizing: border-box;
  display: flex;
  width: 20%;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  

  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, ChatInputWrapper, Button };
