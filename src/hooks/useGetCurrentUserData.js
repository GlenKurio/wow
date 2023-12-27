import { useQuery } from "@tanstack/react-query";
import { apiGetCurrentUserData } from "../firebase/apiGetCurrentUserData";

export function useCurrentUserData() {
  const userAuth = JSON.parse(localStorage.getItem("user-auth"));

  const uid = userAuth.uid;

  const {
    isLoading,
    data: currentUserData,
    error,
  } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => apiGetCurrentUserData(uid),
    retry: false,
  });

  return { isLoading, error, currentUserData };
}
