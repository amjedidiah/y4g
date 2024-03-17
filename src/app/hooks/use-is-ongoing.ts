import { isOngoingFetcher } from "@/lib/utils";
import useSWR from "swr";

export default function useIsOngoing() {
  const { data: isOngoing } = useSWR("/is-ongoing", isOngoingFetcher);
  return isOngoing;
}
