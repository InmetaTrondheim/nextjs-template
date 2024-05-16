"use client";

import { signOut } from "next-auth/react";

type Props = {
  callbackUrl?: string;
};

const SignOutButton: React.FC<Props> = ({ callbackUrl = "/" }) => {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl })}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 active:bg-red-700"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
