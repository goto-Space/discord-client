import styled from 'styled-components';
import Colors from '../../styles/Colors';

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  height: 70vh;
  background-color: ${Colors.Black2};
  border-radius: 25px;
  border: 1px solid ${Colors.Gray1};
  padding: 20px 30px 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: ${Colors.Blue};
  font-weight: 600;
`;

const InputPart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & > label {
    color: ${Colors.Gray2};
  }
  & > input {
    border: 1px solid gray;
    height: 47px;
    border-radius: 10px;
    margin-top: 5px;
    background-color: ${Colors.White};
    font-size: 18px;
    padding: 0 10px;
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px inset ${Colors.White};
    }
    &:-webkit-autofill::first-line {
      font-size: 18px;
    }
  }
`;
const ErrorResponse = styled.p`
  margin-top: 10px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.DarkRed};
`;

const ButtonWrapper = styled.div`
  width: 70%;
  margin-top: 20px;
  & > div {
    text-align: right;
    margin-top: 10px;
    cursor: pointer;
    
    & > a {
      font-size: 14px;
      color: ${Colors.Gray4};
      text-decoration: none;
    }
  }
`;

const SignUpButton = styled.div`
  margin-top: 10px;
  height: 48.3px;
  border-radius: 15px;
  background-color: ${Colors.Blue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${Colors.White};
  :hover {
    cursor: pointer;
  }
`;

export {
  SignUpWrapper, Title, InputPart, ErrorResponse, ButtonWrapper, SignUpButton,
};
