// POST api/new-meetup

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST ") {
    const { body } = req;

    const { title, image, address, description } = body;
  }
}
