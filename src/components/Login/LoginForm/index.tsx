import useLoginForm from "../../../util/hooks/useLoginForm";
import { St } from "./style";

export default function LoginForm() {
  // Custom Hook을 어떻게 사용할 수 있는가 예시를 보여드리고 싶어서 하나 간단히 만들어보았어요.
  // 1. 비즈니스 로직을 분리한다
  // 2. 컴포넌트 구조를 파악하기 쉬워진다.
  // 3. 회원가입/유저수정 폼을 고려하면, 재활용도 할 수 있다.
  // 4. 선언적이다. 이름만 잘 지으면, 내부 구현을 볼 필요없이 함수만 보면 된다.
  const { inputRefs, errorMessage, submitLoginForm } = useLoginForm();

  return (
    <St.Section onSubmit={submitLoginForm}>
      <St.Title>로그인</St.Title>
      <St.Form>
        <St.Label htmlFor="email">이메일</St.Label>
        <St.Input
          id="email"
          type="text"
          ref={(el) => {
            if (el !== null) inputRefs.current[0] = el;
          }}
        />
        {errorMessage.emailError && <St.ErrorMessage>{errorMessage.emailError}</St.ErrorMessage>}
        <St.Label htmlFor="password">비밀번호</St.Label>
        <St.Input
          id="password"
          type="password"
          ref={(el) => {
            if (el !== null) inputRefs.current[1] = el;
          }}
        />
        {errorMessage.passwordError && <St.ErrorMessage>{errorMessage.passwordError}</St.ErrorMessage>}
        <St.LoginBtn type="submit">로그인하기</St.LoginBtn>
      </St.Form>
      <St.LinkWrapper>
        <St.Link>회원가입</St.Link> <St.Delimeter>|</St.Delimeter> <St.Link>비밀번호 재설정</St.Link>
      </St.LinkWrapper>
    </St.Section>
  );
}
