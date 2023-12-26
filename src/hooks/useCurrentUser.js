import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
function useCurrentUser() {
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        localStorage.setItem("user-auth", JSON.stringify(userAuth));
      } else {
        setUser(null);
        localStorage.removeItem("user-auth");
        if (!user && pathname !== "/auth") navigate("/auth");
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component unmounts
    };
  }, []);

  return { user, isLoading };
}

export default useCurrentUser;
