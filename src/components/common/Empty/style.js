import styled from 'styled-components';

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 20px;
    font-weight: 600;
  }
`;

export default EmptyWrapper;
