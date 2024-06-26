import { db } from "@/lib/db";
import { getUserFromToken } from "@/utils/authUtils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = (await req.json()) || "";
  const token = req.cookies.get("token")?.value ?? "";
  const user = getUserFromToken(token);
  const existingUser = await db.user.findMany({
    where: {
      email: user?.email,
    },
  });
  const createdRoom = await db.chatRoom.create({
    data: {
      ...(name.length && { name }),
      creator: {
        connect: { id: existingUser[0].id },
      },
      users: {
        connect: { id: existingUser[0].id },
      },
    },
  });
  return new Response(JSON.stringify(createdRoom.id));
}
