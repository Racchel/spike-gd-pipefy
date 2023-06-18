import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { GET_ALL_CARD_IDS_BY_PIPE_ID } from "../../queries";

import { apolloClient } from "../../../../../src/utils/apolloClient";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  await initMiddleware(req, res, cors);

  try {

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const response = await apolloClient.query({ query: gql`${GET_ALL_CARD_IDS_BY_PIPE_ID}`})

    const data = response.data.cards.edges.map(card => card.node.id )

    return res.status(200).json({ data: data });
  } catch (err) {
    return res.status(500).json({ data: err?.message });
  }
}


