import { NextResponse } from "next/server";
import { getProjects } from "@/service/project";

export async function GET() {
  return getProjects() //
    .then((res) => NextResponse.json(res));
}
