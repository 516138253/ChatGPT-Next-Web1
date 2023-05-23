import { NextRequest, NextResponse } from "next/server";

import { getServerSideConfig } from "../../config/server";

const serverConfig = getServerSideConfig();

// Danger! Don not write any secret value here!
// 警告！不要在这里写入任何敏感信息！
const DANGER_CONFIG = {
  needCode: serverConfig.needCode,
  apiKey: "1234567"
};

async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  console.log(req.body)
  
  const api = await postReq()
  const body = await api.json();
  console.log(body)

  return NextResponse.json(body);
}


async function postReq() {
  return fetch("http://gzdjxg.com:8899/checkToken", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ "token": useAccessStore.getState().token }),
  })
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
