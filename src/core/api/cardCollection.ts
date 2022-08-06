import qs from "qs";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// SWR을 사용할 때와 사용하지 않는 때는 어떻게 구분하나요?
// Single Source Of Truth 라는 표현이 있는데요. 원천을 하나로 두자! 그런 의미에요.
// redux 같은 것에서 강조하는...!!
// API 계층이 오직 하나의 통로를 지나야 한다고 하는 관점이에요. (누군가의 의견! / 다른 사람은 다르게 생각할수도)
// 코드를 읽는 입장에서 오오.. 최소한 GET은 모두 SWR을 통해 통신하겠지? 라고 예측하고 보는데, 그게 지켜지지 않아서 헷갈렸답니다.
// 일관성이 부족한 부분이었다..!
// 분기 처리해야하는 상황을 봐서 정확히는 모르겠는데요. 통일 가능하다면 하나로 통일하는 것이 일관성 측면에서 좋다고 생각합니다.

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory<T>(categoryId: string) {
  return realReq.GET<T>(`${PATH.CATEGORIES}/${categoryId}`);
}

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithBest<T>() {
  return realReq.GET<T>(`${PATH.CARDS}/best`);
}

// 필터로 카드 리스트 조회
function fetchCardsWithFilter<T>(types: string[]) {
  const searchParams = qs.stringify(
    {
      search: types.length === 0 ? ["태그"] : types,
    },
    { arrayFormat: "repeat" },
  );

  return realReq.GET<T>(`${PATH.CATEGORIES}/cards?${searchParams}`);
}

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS}/bookmarks`, { cardId });
}

export const cardCollectionApi = {
  fetchCardsWithCategory,
  fetchCardsWithBest,
  fetchCardsWithFilter,
  addNDeleteBookmark,
};
