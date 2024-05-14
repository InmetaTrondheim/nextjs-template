import LoginButton from "@/components/login-button";
import React from "react";

export default function LoginPage() {
	return (
		<main className="min-h-screen w-full flex items-center justify-center">
			<div className="grid gap-4">
				<LoginButton />
			</div>
		</main>
	);
}
