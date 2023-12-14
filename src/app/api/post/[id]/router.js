import { create, update } from "@/service/mongoDB/mongoose";

export async function GET(params) {
  const id = params.id;
  const postData = read(id);

  return new Response(postData, {
    status: 200,
  });
}

export async function PATCH(req, params) {
  const id = params.id;
  const data = await req.json();
  update(id, data);

  return new Response("update data complete", {
    status: 200,
  });
}

export async function DELETE(req, params) {
  const id = params.id;
  const data = await req.json();
  //delete(data);

  return new Response("create data complete", {
    status: 200,
  });
}
