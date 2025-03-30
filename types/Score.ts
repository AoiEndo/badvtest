export interface Score {
  id: string; // 一意のID
  player: string; // プレイヤー名
  opponent: string; // 対戦相手名
  score: number; // スコア
  date: string; // 試合日時 (ISO形式)
}