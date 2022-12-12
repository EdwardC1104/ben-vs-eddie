import fs from "fs";

type Score = {
  [key: string]: number;
};

// let score: Score;

const getScore = () => {
  let score: Score = {};
  fs.readFile("/score.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      score = JSON.parse(data);
    }
  });
  return { ...score };
};

const setScore = (newScore: Score) => {
  // score = newScore;
  fs.writeFile("/score.json", JSON.stringify(newScore), "utf8", (err) => {
    if (err) console.log(err);
  });
  return newScore;
};

export { getScore, setScore };
