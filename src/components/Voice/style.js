import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const VoiceWrapper = styled.div`
  width: calc(100% - 300px);
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 20px;
    font-weight: 600;
  }
`;

export { VoiceWrapper, Wrapper };
