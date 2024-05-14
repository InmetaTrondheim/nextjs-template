import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req, ctx) => {
	if (!req.auth && req.nextUrl.pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", req.url));
	}
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
