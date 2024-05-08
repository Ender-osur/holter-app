import type { NextApiRequest, NextApiResponse } from "next" 

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      res.status(200).json(req.body)
    }
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}