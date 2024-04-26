"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../lib/features/userAuth/auth";
import { setLoading } from "../lib/features/loading";

const requireAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
      dispatch(setLoading(true));
      if (!user) {
        router.push("/login");
      } else {
        dispatch(setLoading(false));
      }
    }, [user, router, dispatch]);

    // if (!user) {
    //   return <div>Loading...</div>;
    // }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default requireAuth;
