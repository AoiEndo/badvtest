"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewScore() {
  const [player, setPlayer] = useState("");
  const [opponent, setOpponent] = useState("");
  const [score, setScore] = useState(0);
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newScore = { player, opponent, score, date };

    // 仮のAPIエンドポイントにPOSTリクエスト
    await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newScore),
    });

    router.push("/scores");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">スコア登録</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="プレイヤー名"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="対戦相手名"
          value={opponent}
          onChange={(e) => setOpponent(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="スコア"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="p-2 border rounded"
          required
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          登録
        </button>
      </form>
    </div>
  );
}