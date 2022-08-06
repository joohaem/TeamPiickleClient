import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useBestPiickle } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import Loading from "../../common/Loading";
import BestPiickleCard from "./BestPiickleCard";
// module을 활용하면 아래와 같이 import 할 수 있어요.
// St를 객체로 선언하는 것의 단점은 해당 스타일이 은닉된다는 것 같아요.
// 다른 컴포넌트내에서 스타일을 import해서 쓰기가 어렵더군요.
// 아래와 같이 export/import하면 여러 장점이 있어요!
import * as St from "./style";

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  slidesToScroll: 1,
};

export default function BestPiickle() {
  const { bestPiickle } = useBestPiickle();

  return (
    <St.Root>
      <HeadingTitleContainer headingTitles={headingTitles[0]} />

      {bestPiickle ? (
        <St.SliderWrapper>
          <St.SliderExtended {...sliderSettings}>
            {bestPiickle &&
              bestPiickle.data.slice(0, 5).map((bestPiickle, idx) => {
                return <BestPiickleCard key={bestPiickle._id} bestPiickle={bestPiickle} idx={idx} />;
              })}
          </St.SliderExtended>
        </St.SliderWrapper>
      ) : (
        // Suspense 로 처리해보는 것도 좋은 경험일 것 같아요!!~
        // 이 컴포넌트는 성공한 경우만 다루고, 로딩은 상위에서 감싸줌으로써 처리할 수 있어요
        // SWR의 suspense: true 옵션을 고려해보아요~
        <Loading backgroundColor="white" />
      )}
    </St.Root>
  );
}
