import { redirect, RedirectType } from "next/navigation";
import { auth } from "@/auth";
import LoginButton from "@/components/login-button";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect("/", RedirectType.replace);
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="grid gap-4">
        <LoginButton />
      </div>
    </main>
  );
}
