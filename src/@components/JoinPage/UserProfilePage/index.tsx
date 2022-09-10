import React, { useState } from "react";

import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import ProfileBirth from "./ProfileBirth";
import ProfileImage from "./ProfileImage";
import ProfileJender from "./ProfileJender";
import ProfileNickname from "./ProfileNickname";
import { St } from "./style";

const errorMessage = {
  nickName: {
    input: "닉네임을 입력해주세요",
    check: "닉네임 중복 확인을 해주세요",
    fail: "이미 존재하는 닉네임입니다",
    success: "사용가능한 닉네임입니다",
  },
  birth: {
    input: "생년월일을 입력해주세요",
    check: "만 14세 이상이 맞는지 다시 한번 확인해주세요",
    fail: "유효하지 않은 생년월일입니다",
  },
};

export default function UserProfilePage() {
  const [nickName, setNickName] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [isbirth, setIsbirth] = useState<string>("");
  const [isSelected, setIsSelected] = useState("");

  const completeBtn = () => {
    console.log(nickName);
    console.log(isbirth);
    console.log(isSelected);
  };

  return (
    <St.Root>
      <Header prevPage={prevPages[4].prevPage} />
      <PageProgressBar rate={progressRate[3].rate} />
      <St.ProfileContainer>
        <St.Title>프로필을 설정해주세요</St.Title>
        <St.SubTitle>프로필 사진(선택)</St.SubTitle>
        <ProfileImage />
        <St.SubTitle>닉네임(필수)</St.SubTitle>
        <St.Requirement>※ 한글, 영문, 숫자 상관없이 8자 이내</St.Requirement>
        <ProfileNickname isChecked={isChecked} setNickName={setNickName} setIsChecked={setIsChecked} />
        {nickName == "" && <St.ErrorMessage>{errorMessage.nickName.input}</St.ErrorMessage>}
        {!isChecked && <St.ErrorMessage>{errorMessage.nickName.check}</St.ErrorMessage>}
        <St.SubTitle>생년월일(필수)</St.SubTitle>
        <St.Requirement>※ 만 14세 이상만 가입가능합니다.</St.Requirement>
        <ProfileBirth isbirth={isbirth} setIsbirth={setIsbirth} />
        {isbirth == "" && <St.ErrorMessage>{errorMessage.birth.input}</St.ErrorMessage>}
        {isbirth === "null" && <St.ErrorMessage>{errorMessage.birth.fail}</St.ErrorMessage>}
        <St.SubTitle>성별</St.SubTitle>
        <ProfileJender isSelected={isSelected} setIsSelected={setIsSelected} />
        <St.NextButton onClick={completeBtn}>다음으로</St.NextButton>
      </St.ProfileContainer>
      <Footer />
    </St.Root>
  );
}
