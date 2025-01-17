export const enum LocationType {
  ALL = "all",
  BEST = "best",
  BOOKMARK = "bookmark",
  CATEGORY = "category",
  FILTER = "filter",
  MEDLEY = "medley",
}

interface AllTypeLocation {
  type: LocationType.ALL;
}

interface BestTypeLocation {
  type: LocationType.BEST;
}
interface BookmarkTypeLocation {
  type: LocationType.BOOKMARK;
}

interface CategoryTypeLocation {
  type: LocationType.CATEGORY;
  categoryId: string;
}

interface FilterTypeLocation {
  type: LocationType.FILTER;
  filterTypes: string;
}

interface MedleyTypeLocation {
  type: LocationType.MEDLEY;
  medleyId: string;
}

export type CardsTypeLocation =
  | AllTypeLocation
  | BestTypeLocation
  | BookmarkTypeLocation
  | CategoryTypeLocation
  | FilterTypeLocation
  | MedleyTypeLocation;

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
