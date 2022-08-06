import { PropsWithChildren } from "react";

import { IcModalCloseBtn } from "../../../asset/icon";
import { St } from "./style";

type ModalContents = {
  closeHandler: () => void;
};

// Modal은 React의 Portal을 이용해보면 좋아요.
// 쌓임맥락을 신경쓸 필요가 없다는 점이 장점입니다!
export default function Modal({ closeHandler, children }: PropsWithChildren<ModalContents>) {
  // PropWithChildren을 이용해서 children 타입을 받아오면 좋아요.
  // 왜냐하면 ModalContents 컴포넌트에 children이 생기면 재사용될 확률이 매우 떨어지거든요!
  return (
    <St.Root>
      <St.Modal>
        <St.CloseBtn type="button" onClick={closeHandler}>
          <IcModalCloseBtn aria-label="필터 모달 닫기" />
        </St.CloseBtn>
        <St.ModalContents>{children}</St.ModalContents>
      </St.Modal>
    </St.Root>
  );
}
