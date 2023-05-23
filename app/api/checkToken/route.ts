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
  await fetch("http://gzdjxg.com:8899/checkToken", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ "token": useAccessStore.getState().token }),
    
  }).then(res => {
    console.log(res.body)
    if (res.ok) {
      //  useAccessStore.getState().updateToken(res.body);
    } else {
    //  useAccessStore.getState().updateToken("");
    }
  });
  return NextResponse.json(DANGER_CONFIG);
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
