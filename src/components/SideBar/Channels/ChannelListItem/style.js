import styled from 'styled-components';
import Colors from '../../../../styles/Colors';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  margin: 2px 5px;
  border-radius: 5px;
  color: ${Colors.Gray1};

  & > svg {
    display: none;
  }

  &:hover {
    background-color: ${Colors.Gray3};
    cursor: pointer;
    color: ${Colors.Black};
    & > svg {
      display: inline-block;
    }
  }
  & div {
    display: flex;
    align-items: center;
    & svg {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
    & p {
      max-width: 180px;
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }
`;

export { ListItem };
