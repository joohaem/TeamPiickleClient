import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { headingTitles } from "../../../core/main/headingTitles";
import { gridValue } from "../../../core/main/moodPiickle";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export type moodPiickle = {
  _id: string;
  title: string;
  content: string;
  imgurl: string;
};

export default function MoodPiickle() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { categoryLists } = useCategoryLists();

  const navigate = useNavigate();
  const moveCategory = (id: string) => {
    // PATH 경로가 상수화 되어 있으면 휴먼 에러 가능성도 줄고, 변경사항에 대처도 편리할 것 같아요.
    navigate("/card-collection", { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };

  // 좜이가 짠 코드인지는 모르겠지만, 항상 이 코드가 컴포넌트 안에 있어야 하는가? 밖에 있어야하는가? utils로 분리해야하는가? 고민하면 렌더링에 대한 이해도가 올라가더라구요!
  // 아참 그리고 이 찾아보면 이 방식의 shuffle은 정확히 1/n 확률이 아니에요. 편향된 결과를 낫는 걸로 알고있어요.
  // 더 정확한 shuffle을 넣어봅시당~
  const shuffle = () => Math.random() - 0.5;
  const randomCategory = categoryLists && [...categoryLists.data].sort(shuffle);

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        {randomCategory &&
          randomCategory.slice(0, 4).map((moodPiickle, index) => (
            <St.Category
              key={moodPiickle._id}
              onClick={() => moveCategory(moodPiickle._id)}
              imgUrl={moodPiickle.imgurl}
              columnStart={gridValue[index].columnStart}
              columnEnd={gridValue[index].columnEnd}
              rowStart={gridValue[index].rowStart}
              rowEnd={gridValue[index].rowEnd}>
              <St.CategoryTitle>{moodPiickle.title}</St.CategoryTitle>
              <St.CategoryContent>{moodPiickle.content}</St.CategoryContent>
            </St.Category>
          ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
