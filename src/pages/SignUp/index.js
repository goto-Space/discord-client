import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/common/Background';
import {
  SignUpWrapper,
  Title,
  InputPart,
  ErrorResponse,
  SignUpButton,
  ButtonWrapper,
} from './style';

function SignUp() {
  return (
    <Background>
      <SignUpWrapper>
        <Title>회원가입</Title>
        <InputPart>
          <label htmlFor="user_name">사용자명</label>
          <input id="user_name" type="text" />
          <ErrorResponse>에러</ErrorResponse>
        </InputPart>
        <InputPart>
          <label htmlFor="user_id">아이디</label>
          <input id="user_id" type="text" />
          <ErrorResponse>에러</ErrorResponse>
        </InputPart>
        <InputPart>
          <label htmlFor="user_password">비밀번호</label>
          <input id="user_password" type="password" />
          <ErrorResponse>에러</ErrorResponse>
        </InputPart>
        <ButtonWrapper>
          <SignUpButton>
            <p>가입하기</p>
          </SignUpButton>
          <div>
            <Link to="/" replace>
              이미 계정이 있으신가요?
            </Link>
          </div>
        </ButtonWrapper>
      </SignUpWrapper>
    </Background>
  );
}

export default SignUp;
