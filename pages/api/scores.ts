import { NextApiRequest, NextApiResponse } from "next";

let scores: any[] = []; // 仮のデータストア

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(scores);
  } else if (req.method === "POST") {
    const newScore = { id: Date.now().toString(), ...req.body };
    scores.push(newScore);
    res.status(201).json(newScore);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}