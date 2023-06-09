import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const Section = styled.div`
  width: 100%;
`;

const StickyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 5px;
  z-index: 2;
  & > button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    z-index: 10;
    line-height: 27px;
    padding: 0 16px;
    border-radius: 24px;
    background-color: ${Colors.White};
    border: 1.5px solid ${Colors.Gray2};
  }
`;

const Chats = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.Gray2};
    border-radius: 10px;
  }

  &:hover::-webkit-scrollbar {
    display: block;
    width: 15px;
  }
`;

export { Chats, StickyWrapper, Section };
