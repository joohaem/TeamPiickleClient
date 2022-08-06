import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { activeState, activeStateModal } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";

// 이 함수처럼, 컴포넌트 내에 속할 필요가 없는 녀석이 있음.
// 컴포넌트 바깥에 선언, 컴포넌트 안에 선언 각각 어떤 의미를 지니는지 생각해보면 좋을것 같아욤! (렌더링 관점에서~~!)
function setScreenSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default function App() {
  const isActive = useRecoilValue(activeState);
  const isActiveModal = useRecoilValue(activeStateModal);

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <St.MobileContainer>
      {(isActive || isActiveModal) && <ModalStyle />}
      <Router />
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    position: relative;

    margin: 0 auto;

    @media screen and (min-width: 48rem), screen and (min-height: 48rem) and (orientation: landscape) {
      width: 36rem;
    }
  `,
};
