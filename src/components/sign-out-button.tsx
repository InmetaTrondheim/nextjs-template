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
			className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 active:bg-red-700"
		>
			Sign out
		</button>
	);
};

export default SignOutButton;
