import data from "./data.json";
import data2 from "./data2.json";

const random = (min = 0, max = 1000) =>
  Math.floor(Math.random() * (max + 1)) + min;

let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getData1() {
  currentData = data.map(mapWithRank);
  return currentData;
}
export function getData2() {
  currentData = data2.map(mapWithRank);
  return currentData;
}

export function genNextData() {
  const nextData = [...currentData];
  const changes = random(0, 2);

  for (let i = 0; i < changes; i++) {
    const index = random(0, data.length - 1);
    nextData[index].score = nextData[index].score + random(1000, 5000);
  }

  currentData = nextData.sort((a, b) => b.score - a.score).map(mapWithRank);
  return currentData;
}
