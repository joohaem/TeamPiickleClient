import { useNavigate } from "react-router-dom";

import { St } from "./style";

export default function MySetting() {
  const navigate = useNavigate();

  const handleClickDetail = (key: string) => {
    switch (key) {
      case "로그아웃":
        localStorage.removeItem("piickle-token");
        navigate("/");
        break;
    }
  };

  // 이것두 컴포넌트 안에 두어서 매번 렌더링 시킬 필요가 있을까요?~
  const mySetting = ["공지사항", "문의", "팀 정보", "로그아웃", "회원 탈퇴"];
  const mySettingList = mySetting.map((setting, index) => (
    <St.MySettingList key={index}>
      <St.MySettingListDetail onClick={() => handleClickDetail(setting)}>{setting}</St.MySettingListDetail>
    </St.MySettingList>
  ));

  return <St.MySettingContainer>{mySettingList}</St.MySettingContainer>;
}
