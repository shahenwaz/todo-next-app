import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

// Database connection
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ message: "get method hit" });
}
