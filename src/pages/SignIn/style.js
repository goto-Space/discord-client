import styled from 'styled-components';
import Colors from '../../styles/Colors';

const SignInWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 30vw;
   height: 50%;
   border-radius: 25px;
   padding: 20px 30px;
   background-color: ${Colors.Black2};
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 15vw;
    height: 20vw;
  }
`;

const InputPartWrapper = styled.div`
  width: 90%;
  height: 100%;
`;

const Introduction = styled.div`
  flex-basis: auto;
  & > p {
    height: 43px;
    font-size: 36px;
    font-weight: 600;
    color: ${Colors.Blue};
  }
`;

const InputPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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

const LoginButton = styled.div`
  margin-top: 30px;
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

const ErrorResponse = styled.p`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.DarkRed};
`;

const LinkPart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  
  & > a {
    text-decoration: none;
    
    :hover {
      cursor: pointer;
    }
    
    & > div {
      font-size: 14px;
      margin-top: 15px;
      color: ${Colors.Gray4};
    }
  }
`;

export {
  SignInWrapper,
  LogoWrapper,
  InputPartWrapper,
  Introduction,
  InputPart,
  LoginButton,
  ErrorResponse,
  LinkPart,
};
