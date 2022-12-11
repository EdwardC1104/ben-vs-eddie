import { NextApiRequest, NextApiResponse } from "next";
import { getScore, setScore } from "../../lib/score";

const addScore = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body;

  const score = getScore();

  if (!score) {
    res.status(500).send("Scores not loaded");
    return;
  }
  if (!Object.keys(score).includes(name)) {
    res.status(404).send("User not found");
    return;
  }

  score[name] += 1;

  setScore(score);

  res.status(200).json(score);
};

export default addScore;
