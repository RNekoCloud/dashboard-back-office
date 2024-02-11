import { NextResponse, type NextRequest } from "next/server";
import axios from "axios";

const BASE_URL = process.env.BASE_API_URL;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("page");
  const { data: response } = await axios.get(
    `${BASE_URL}/api/v1/intern?page=${query?.toString()}`
  );
  return NextResponse.json(response);
}
