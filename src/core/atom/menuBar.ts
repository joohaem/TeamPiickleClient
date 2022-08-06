import { atom } from "recoil";

// 상수 분리 좋습니다 ㅎㅎ!!
// enum의 문제점을 아시나욤? 알고 쓰는 것이면 OK!!
enum StateType {
  ACTIVE_STATE = "activestate",
  ACTIVE_STATE_MODAL = "activestatemodal",
}

// 나도 리코일을... 장려하긴 했다만, 왜 Context API를 쓰지 않고, Recoil을 쓸까?
// Context API는 매우매우 구린 녀석일까?
// Context API로 해결할 수는 없을까?
// Recoil, Redux 등 모든 상태관리 도구가 Context API로 만들어졌어요!
// 이런 상태관리 도구들은 무엇이 특별할까? 생각해보면 좋을것같습니다.
export const activeState = atom({
  key: StateType.ACTIVE_STATE,
  default: false,
});

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: false,
});
