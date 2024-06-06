// Login.jsx
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const { signIn } = useGoogleLogin();

  const handleLogin = async () => {
    try {
      await signIn();
      alert("Login successful");
    } catch (error) {
      // Handle login error
      alert("Login error:", error);
    }
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default Login;
