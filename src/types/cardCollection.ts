// 우왕 타입 분리 좋아요
// 유니온 타입 프로퍼티를 담은 인터페이스를 정의하기 보다는, 유니온의 인터페이스를 정의하자!
// 이렇게 하면 타입이 명확히 구분되어서 내로잉이 쉬워져요! (Discriminated Union / Tagged Union)
export type CardsTypeLocation =
  | {
      type: "category";
      categoryId: string;
    }
  | {
      type: "best";
    }
  | {
      type: "all";
    }
  | {
      type: "bookmark";
    };

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
