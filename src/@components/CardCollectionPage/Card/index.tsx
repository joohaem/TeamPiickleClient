import React, { useState } from "react";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

interface LoginCheckProps {
  openLoginModalHandler: () => void;
  _id: string;
  content: string;
  tags: string[];
}

const Card = (props: LoginCheckProps) => {
  const { _id, content, tags, openLoginModalHandler } = props;
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClickHeart = (_id: string) => {
    switch (LOGIN_STATE) {
      case true:
        setIsBookmarked((prev) => !prev);
        cardCollectionApi.addNDeleteBookmark(_id);
        break;
      case false:
        openLoginModalHandler();
        break;
    }
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={tags} />
      </St.TagsWrapper>
      <St.ContentWrapper>{content}</St.ContentWrapper>
      <St.HeartWrapper onClick={() => handleClickHeart(_id)} aria-label="북마크" role="dialog">
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
};

export default React.memo(Card);