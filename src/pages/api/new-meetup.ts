// POST api/new-meetup

import { MongoClient } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

const MONGO_URL = process.env.MONGO_URL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST ") {
    const { body } = req;

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(body);

    console.log("result", result);

    client.close();

    res.status(201).json({ message: "Meetups inserted!" });
  }
}
