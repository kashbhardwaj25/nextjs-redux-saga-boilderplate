import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Input, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

import styles from "../styles/Home.module.css";
import { isNilOrEmpty } from "../utils/helper";
import actionTypes from "../redux/actionTypes";

export default function Root() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userSigningIn = useSelector((state) => state.user.userSigningIn);

  const onLoginClick = useCallback(() => {
    dispatch({
      type: actionTypes.USER_SIGN_IN_REQUEST,
      payload: { email, password },
    });
  }, [dispatch, email, password]);

  return (
    <div className={styles.container}>
      <Head>
        <title>FIFO Login Page</title>
        <meta name="Build a community" content="FIFO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection="column" gap={2}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <LoadingButton
          disabled={isNilOrEmpty(email) || isNilOrEmpty(password)}
          variant="outlined"
          onClick={onLoginClick}
          loading={userSigningIn}
        >
          Login
        </LoadingButton>
        <Link href="/register">New here? Register</Link>
      </Box>
    </div>
  );
}
