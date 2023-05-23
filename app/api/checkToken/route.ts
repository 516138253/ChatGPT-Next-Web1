import { NextRequest, NextResponse } from "next/server";

async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  const response = await postReq(req);
  const data = await response.json();
  return NextResponse.json(data);
}

async function postReq(req: NextRequest) {
  // return fetch("http://gzdjxg.com/gpt/login", {
  return fetch("http://localhost:8888/gpt/login", {
    method: "POST",
    headers: req.headers,
    body: req.body,
  });
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
