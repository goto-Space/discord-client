import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ChatWrapper = styled.div`
  width: calc(100% - 300px);
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatInputWrapper = styled.div`
  width: 100%;
`;

export { ChatWrapper, Wrapper, ChatInputWrapper };
