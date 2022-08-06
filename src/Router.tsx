import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmark, CardCollection, Category, Error404, Login, Main, MyPage, Vote } from "./components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 모든 사용자가 모든 페이지에 접근이 가능함. 로그인 전에 들어가지 못 하는 페이지, 로그인 후 들어가지 못 하는 페이지가 나눠지면 더 완성도 있을 것 같음!
          @keyword : PrivateRoute, PublicRoute / withLogin (HOC)
        */}
        {/* path도 상수로 관리하면 좋을것같아요.Link/navigate할때도 쓰니까! 변경사항에 쉽게 대응할 수 있다는 장점이 있어요 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/vote/:voteId" element={<Vote />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
