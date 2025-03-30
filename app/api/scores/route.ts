import { NextResponse } from "next/server";

let scores: any[] = []; // 仮のデータストア

export async function GET() {
  return NextResponse.json(scores);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newScore = { id: Date.now().toString(), ...body };
  scores.push(newScore);
  return NextResponse.json(newScore, { status: 201 });
}