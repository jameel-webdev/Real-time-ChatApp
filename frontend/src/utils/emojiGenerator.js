const emojis = [
  "😀",
  "😂",
  "😊",
  "😍",
  "🥳",
  "😎",
  "🤓",
  "😜",
  "🤩",
  "😇",
  "🤔",
  "😄",
  "😉",
  "😘",
  "😋",
  "🤗",
  "🤑",
  "😴",
  "🤪",
  "😷",
  "😅",
  "😱",
  "😈",
  "👻",
  "🎃",
  "🍎",
  "🍕",
  "🍩",
  "🥤",
  "🏆",
  "⚽",
  "🎸",
  "🎮",
  "🎤",
  "🎨",
  "🎭",
  "🎬",
  "🚀",
  "🚗",
  "🚲",
];

export default function generateRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
