import { useBallotLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import { St } from "./style";

export default function PiickleMe() {
  const { ballotLists } = useBallotLists();

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[2]} />
      <St.RepresentVoteContentConTainer>
        <St.RepresentVoteContentWrapper>
          <St.RepresentVoteContentSubText>현재 가장 참여수가 많은 투표</St.RepresentVoteContentSubText>
        </St.RepresentVoteContentWrapper>
        <St.RepresentVoteContentText>{ballotLists && ballotLists.data[0].topic}</St.RepresentVoteContentText>
      </St.RepresentVoteContentConTainer>
      <St.RepresentGoVoteBtnWrapper type="button">
        <St.RepresentGoVoteBtn
          to={`${routePaths.Vote}/${ballotLists && ballotLists.data[0]._id}`}
          className={GTM_CLASS_NAME.mainVote1}>
          투표하기
        </St.RepresentGoVoteBtn>
      </St.RepresentGoVoteBtnWrapper>

      {ballotLists &&
        ballotLists.data.slice(1).map((ballot, idx: number) => (
          <St.ContentWrapper key={`${ballot._id}-${idx}`}>
            <St.ContentText>{ballot && ballot.topic}</St.ContentText>
            <St.GoVoteBtn to={`${routePaths.Vote}/${ballot._id}`} className={GTM_CLASS_NAME[`mainVote${idx + 2}`]}>
              투표하기
            </St.GoVoteBtn>
          </St.ContentWrapper>
        ))}
    </St.Container>
  );
}
