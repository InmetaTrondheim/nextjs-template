import Image from "next/image";
import { auth } from "@/auth";
import LoginButton from "@/components/login-button";
import SignOutButton from "@/components/sign-out-button";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="grid max-w-screen-sm gap-4">
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

        <pre className="max-w-screen-sm overflow-x-scroll rounded bg-gray-200 p-4 dark:bg-gray-700">
          {JSON.stringify({ session }, null, 2)}
        </pre>
      </div>
    </main>
  );
}
