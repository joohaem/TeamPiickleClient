import useSWR, { useSWRConfig } from "swr";

import { PiickleSWRResponse } from "../../types/swr";
import { UserProfile } from "../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// API 로직 응집된 것 좋아요!
// SWR에서는 C,U,D 통신은 어려워서, ㅋㅋ ... react-query 도 한번 공부해보면 좋겠네욤.
// 요새는 리액트 쿼리가 대세더라구요 ㅋㅋ

export default function useUserProfile() {
  const { data, error } = useSWR<PiickleSWRResponse<UserProfile>>(PATH.USERS, realReq.GET_SWR);
  const { mutate } = useSWRConfig();

  const handleNewProfile = () => {
    mutate(PATH.USERS);
  };

  return {
    userProfile: data?.data,
    isLoading: !error && !data,
    handleNewProfile,
  };
}

// 프로필사진 수정
function patchProfileImg(file: FormData) {
  return realReq.PATCH(`${PATH.USERS}/profile-image`, file);
}

// 유저 닉네임 수정
function patchUserNickName(nickname: string) {
  return realReq.PATCH(`${PATH.USERS}/nickname`, {
    nickname: nickname,
  });
}

// 유저 비밀번호 재설정
// 저는 서버 remote 데이터 모든 스키마를 타입으로 분리하는 편이에요.
// 왜냐하면 여기에서 email:string, newPassword: string이 쓰이는데,
// 이를 사용하는 컴포넌트에서도 똑같이 타입을 지정해줘야할 일이 생길 수 있거든요.
// response도 같은 맥락이구요!!
// dto (data transfer object) 라거나 remote 라는 폴더 안에 request.ts / response.ts 파일을 분리해서
// body 타입을 모두 모아서 한눈에 파악하기 쉽게 하려고 노력해요
function patchUserPassword(email: string, newPassword: string) {
  return realReq.PATCH(`${PATH.USERS}/me/password`, {
    email,
    newPassword,
  });
}

export const myPageApi = {
  patchProfileImg,
  patchUserNickName,
  patchUserPassword,
};
