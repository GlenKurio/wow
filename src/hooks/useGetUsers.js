import { useQuery } from "@tanstack/react-query";
import { apiGetUsers } from "../firebase/apiGetUsers";
import { useCurrentUserData } from "./useGetCurrentUserData";

export function useGetUsers(roomId) {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users", roomId],
    queryFn: () => apiGetUsers({ roomId }),
  });

  return { isLoading, error, users };
}
