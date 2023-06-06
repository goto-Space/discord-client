import React, { useState } from 'react';

import { ModalCloseIcon } from '../common/Icons';
import {
  BottomRightButton,
  Bottom,
  Background,
  Wrapper,
  Title,
  SubTitle,
  BottomLeftButton,
  Top,
} from './style';

function Modal({
  props: {
    title, subTitle, middleContent, bottomRightButton,
  },
  controller: { hide, previous },
}) {
  const [hidden, setHidden] = useState(false);

  const hideModal = () => {
    setHidden(() => true);
    setTimeout(() => {
      hide();
    }, 300);
  };

  return (
    <Background onClick={hideModal} isHidden={hidden}>
      <Wrapper onClick={(e) => e.stopPropagation()} isHidden={hidden}>
        <Top>
          <ModalCloseIcon onClick={hideModal} />
        </Top>
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <div>{middleContent}</div>
        {bottomRightButton && (
          <Bottom>
            {previous ? (
              <BottomLeftButton onClick={previous}>이전</BottomLeftButton>
            ) : (
              <BottomLeftButton onClick={hideModal}>닫기</BottomLeftButton>
            )}
            <BottomRightButton
              color={bottomRightButton.color}
              onClick={bottomRightButton.onClickHandler}
            >
              {bottomRightButton.text}
            </BottomRightButton>
          </Bottom>
        )}
      </Wrapper>
    </Background>
  );
}

export default Modal;
