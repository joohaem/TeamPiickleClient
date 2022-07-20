import { bookmarkApi } from "../core/api/bookmark";
import { cardCollectionApi } from "../core/api/cardCollection";
import { CardsTypeLocation } from "../types/cardCollection";

export default function fetchCardCollection<T>(CARD_TYPE_LOCATION: CardsTypeLocation, handler: (data: T) => void) {
  switch (CARD_TYPE_LOCATION.type) {
    case "category":
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithCategory<{ data: { cardList: T } }>(
          CARD_TYPE_LOCATION.categoryId,
        );
        handler(data.cardList);
      })();
      break;

    case "best":
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithBest<{ data: T }>();
        handler(data);
      })();
      break;

    case "all":
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithFilter<{ data: T }>([]);
        handler(data);
      })();
      break;

    case "bookmark":
      (async () => {
        const { data } = await bookmarkApi.fetchCardsWithBookmarks<{ data: T }>();
        handler(data);
      })();
      break;
  }
}
