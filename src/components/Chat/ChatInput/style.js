import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const Wrapper = styled.form`
  background-color: ${Colors.White};
  display: grid;
  gap: 2px;
  grid-template-columns: auto;
  padding: 0 20px 18px 20px;
  width: 100%;
`;

const ChatInputWrapper = styled.div`
  background-color: ${Colors.Gray2};
  padding: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  width: 100%;
  & > input {
    outline: none;
    border: none;
    width: 100%;
    background-color: inherit;
  }
`;

export { Wrapper, ChatInputWrapper };
