import { NextApiRequest, NextApiResponse } from "next";
import { getScore } from "../../lib/score";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const score = getScore();
  res.status(200).json(score);
};

export default get;
