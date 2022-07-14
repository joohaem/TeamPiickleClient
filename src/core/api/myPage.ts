import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 유저 프로필 조회
function fetchUserProfile() {
  return realReq.GET(PATH.USERS);
}

// 프로필사진 수정
// function patchProfileImg() {
//   return realReq.PATCH(PATH.USERS);
// }

// 유저의 북마크 리스트 조회
function fetchUserBookmarks() {
  return realReq.GET(`${PATH.USERS}/bookmarks`);
}

// 유저 닉네임 수정
function patchUserNickName(nickname: string) {
  return realReq.PATCH(`${PATH.USERS}/nickname`, nickname);
}

// 유저 비밀번호 재설정
function patchUserPassword(email: string, newPassword: string) {
  return realReq.PATCH(`${PATH.USERS}/me/password`, {
    email,
    newPassword,
  });
}

export const real = {
  fetchUserProfile,
  fetchUserBookmarks,
  patchUserNickName,
  patchUserPassword,
};