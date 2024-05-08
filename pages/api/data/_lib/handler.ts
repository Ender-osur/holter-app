import { NextApiRequest, NextApiResponse } from "next";

class GetData {
  async handle(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method === "POST") {
        res.status(200).json(req.body);
        res.redirect(307, '/dashboard');
      }
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' });
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GetData();
