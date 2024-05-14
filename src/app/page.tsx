import { auth } from "@/auth";
import LoginButton from "@/components/login-button";
import SignOutButton from "@/components/sign-out-button";
import Image from "next/image";

export default async function Home() {
	const session = await auth();

	return (
		<main className="min-h-screen w-full flex items-center justify-center">
			<div className="grid gap-4 max-w-screen-sm">
				{session === null ? (
					<LoginButton />
				) : (
					<div className="grid grid-cols-2 gap-4">
						<p>Logged in as {session.user?.email}</p>
						{session?.user?.image && (
							<Image
								unoptimized
								src={session.user.image}
								className="rounded-full"
								width={48}
								height={48}
								alt="Profile picture"
							/>
						)}

						<div className="col-span-2">
							<SignOutButton />
						</div>
					</div>
				)}

				<pre className="bg-gray-200 rounded dark:bg-gray-700 p-4 overflow-x-scroll max-w-screen-sm">
					{JSON.stringify({ session }, null, 2)}
				</pre>
			</div>
		</main>
	);
}
