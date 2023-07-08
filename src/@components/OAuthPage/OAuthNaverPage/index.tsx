import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../../../core/api/login";
import useAuth from "../../../core/hooks/useAuth";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";

export default function OAuthNaverPage() {
  const navigate = useNavigate();
  const authorizationCode = new URL(window.location.href).searchParams.get("code");

  const { login } = useAuth();
  const loginWithUserToken = (accessToken: string) => {
    login(accessToken);
    navigate(routePaths.Main);
  };

  const handlePostNaverLogin = async () => {
    if (authorizationCode === null) return;
    const data = await loginApi.postSocialLogin("naver", "", authorizationCode, import.meta.env.VITE_NAVER_STATE);

    data.data.newMember
      ? navigate(`${routePaths.Join_}${routePaths.Join_Agree}`, { state: { socialLoginToken: data.data.accessToken } })
      : loginWithUserToken(data.data.accessToken);
  };

  useEffect(() => {
    if (authorizationCode) handlePostNaverLogin();
  }, [authorizationCode]);

  return <Loading backgroundColor="white" />;
}
