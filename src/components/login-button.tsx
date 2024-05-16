"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("microsoft-entra-id")}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-700"
    >
      Sign in with Entra
    </button>
  );
};

export default LoginButton;
