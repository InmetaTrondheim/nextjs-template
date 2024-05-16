import { NextResponse } from "next/server";

export async function GET() {
  // TODO: add dependency health checks here
  return NextResponse.json({ status: "ok" });
}
