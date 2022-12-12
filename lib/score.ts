import fs from "fs";

type Score = {
  [key: string]: number;
};

let score: Score;

fs.readFile("public/score.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    score = JSON.parse(data);
  }
});

const getScore = () => {
  return { ...score };
};

const setScore = (newScore: Score) => {
  score = newScore;
  fs.writeFile("public/score.json", JSON.stringify(score), "utf8", (err) => {
    if (err) console.log(err);
  });
};

export { getScore, setScore };
