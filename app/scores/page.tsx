"use client";

import { useEffect, useState } from "react";

interface Score {
  id: string;
  player: string;
  opponent: string;
  score: number;
  date: string;
}

export default function Scores() {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    // 仮のAPIエンドポイントからデータを取得
    fetch("/api/scores")
      .then((res) => res.json())
      .then((data) => setScores(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">スコア一覧</h1>
      <ul className="space-y-4">
        {scores.map((score) => (
          <li key={score.id} className="p-4 border rounded">
            <p>プレイヤー: {score.player}</p>
            <p>対戦相手: {score.opponent}</p>
            <p>スコア: {score.score}</p>
            <p>試合日時: {new Date(score.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}