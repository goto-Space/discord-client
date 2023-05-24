import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { postSignIn } from '../../utils/api/postSignIn';
import { checkLogin } from '../../utils';
import { SIGN_IN_ERROR_MESSAGE, URL, STATUS_CODES } from '../../utils/constants';

import Background from '../../components/common/Background';
import {
  SignInWrapper,
  LogoWrapper,
  InputPartWrapper,
  Introduction,
  InputPart,
  LoginButton,
  ErrorResponse,
  LinkPart,
} from './style';

const { ID_EMPTY_ERROR, PASSWORD_EMPTY_ERROR } = SIGN_IN_ERROR_MESSAGE;

function SignIn() {
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({ ID: '', password: '' });
  const [responseState, setResponseState] = useState({ status: 0, responseText: '' });
  const { ID, password } = inputState;
  const { status, responseText } = responseState;

  const handleIDInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setInputState({
      ...inputState,
      ID: event.currentTarget.value,
    });
  };

  const handlePasswordInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setInputState({
      ...inputState,
      password: event.currentTarget.value,
    });
  };

  // eslint-disable-next-line consistent-return
  const signIn = async () => {
    if (ID === '') return setResponseState({ ...responseState, responseText: ID_EMPTY_ERROR });
    if (password === '') return setResponseState({ ...responseState, responseText: PASSWORD_EMPTY_ERROR });

    try {
      const loginResponse = await postSignIn(ID, password);
      setResponseState({ ...responseState, ...loginResponse });
      if (loginResponse.status === STATUS_CODES.OK) navigate(URL.GROUP(), { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <SignInWrapper className="App">
        <InputPartWrapper>
          <Introduction>
            <p>ID 로그인</p>
          </Introduction>

          <InputPart>
            <label htmlFor="user_id">아이디</label>
            {/* <input type="text" id="user_id" /> */}
            <input type="text" id="user_id" value={ID} onInput={handleIDInputChange} />
          </InputPart>

          {/* <InputPart> */}
          {/*  <label htmlFor="user_password">비밀번호</label> */}
          {/*  <input */}
          {/*    type="password" */}
          {/*    id="user_password" */}
          {/*  /> */}
          {/* </InputPart> */}

          <InputPart>
            <label htmlFor="user_password">비밀번호</label>
            <input
              type="password"
              id="user_password"
              value={password}
              onInput={handlePasswordInputChange}
            />
          </InputPart>
          <ErrorResponse>{checkLogin(status, responseText)}</ErrorResponse>
          {/* <ErrorResponse>존재하지 않는 유저입니다.</ErrorResponse> */}

          {/* <LoginButton> */}
          <LoginButton onClick={signIn}>
            <p>로그인</p>
          </LoginButton>

          <LinkPart>
            <Link to="/passwordinquiry" replace>
              <div>아이디 찾기</div>
            </Link>
            <Link to="/idinquiry" replace>
              <div>비밀번호 찾기</div>
            </Link>
            <Link to="/signup" replace>
              <div>회원가입</div>
            </Link>
          </LinkPart>
        </InputPartWrapper>
      </SignInWrapper>
      <LogoWrapper>
        <img src="/images/gotoSpace_main_logo.jpg" alt="gotoSpace_main_logo" />
      </LogoWrapper>

    </Background>
  );
}

export default SignIn;
