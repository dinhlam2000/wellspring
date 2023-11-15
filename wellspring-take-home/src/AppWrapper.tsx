import { useEffect } from "react";
import App from "./App";

// This Wrapper is used to automatically give you correct credential to login
// as a test user!

export default function AppWrapper() {
  useEffect(() => {
    const intervalID = setTimeout(() => {
      const inputUserName: HTMLInputElement | undefined =
        document.querySelector('input[name="username"]') as HTMLInputElement;
      if (inputUserName) {
        inputUserName.value = "testing";
      }
      const inputPassword: HTMLInputElement | undefined =
        document.querySelector('input[name="password"]') as HTMLInputElement;
      if (inputPassword) {
        inputPassword.value = "wellspring";
      }
    }, 500);
    return () => clearTimeout(intervalID);
  }, []);
  return <App />;
}
