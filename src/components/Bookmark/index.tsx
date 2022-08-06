import useUserBookmarks from "../../core/api/bookmark";
import { HeadingTitle } from "../../core/main/headingTitles";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import MyPiickleItem from "./MyPiickleItem";
import { St } from "./style";

const bookmarkHeadingTitles: HeadingTitle = {
  title: "MY Piickle",
  content: "내가 픽한 대화 주제들을 확인해보세요",
  isMoreBtn: false,
};

export type myPiickle = {
  cardId: string;
  content: string;
};

export default function Bookmark() {
  const { userBookmarks } = useUserBookmarks();

  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
      <St.List>
        {userBookmarks &&
          userBookmarks.data.map((myPiickle: myPiickle, idx: number) => (
            // 위 아래 차이점을 아시나요? 렌더링 관점에서 무엇이 더 유리할까요?
            // 힌트 : myPiickle은 객체이다.

            // <MyPiickleItem key={myPiickle.cardId} myPiickle={myPiickle} idx={idx} />
            <MyPiickleItem key={myPiickle.cardId} {...myPiickle} idx={idx} />
          ))}
      </St.List>
      <Footer />
    </main>
  );
}
