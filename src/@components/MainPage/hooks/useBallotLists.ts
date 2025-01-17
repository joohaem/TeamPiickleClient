import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { BallotList } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useBallotLists(shoudOnSuspense = false) {
  const swrSetting = shoudOnSuspense ? { suspense: true } : { suspense: false };
  const { data } = useSWR<PiickleSWRResponse<BallotList[]>>(`${PATH.BALLOTS}`, realReq.GET_SWR, swrSetting);

  return {
    ballotLists: data?.data,
  };
}
