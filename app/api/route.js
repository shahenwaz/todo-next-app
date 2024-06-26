import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

// Database connection
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// GET method
export async function GET(request) {
  return NextResponse.json({ message: "get method hit" });
}

// POST method
export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ message: "Todo Created" });
}
