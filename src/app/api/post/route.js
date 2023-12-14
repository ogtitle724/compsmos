import { create } from "@/service/mongoDB/mongoose";

export async function POST(req) {
  const data = await req.json();
  create(data);

  return new Response("create data complete", {
    status: 200,
  });
}
