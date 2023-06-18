import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { SEARCH_CARD_BY_ORDER_ID_AND_PIPE_ID } from "../../queries";

import { apolloClient } from "../../../../../src/utils/apolloClient";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  await initMiddleware(req, res, cors);
  const { pipeId, orderId } = req.query;

  try {

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const options = {
      query: gql`${SEARCH_CARD_BY_ORDER_ID_AND_PIPE_ID}`,
      variables: {
        pipeId: String(pipeId), 
        orderId: String(orderId)
      }
    }

    const response = await apolloClient.query(options)

    const data = response.data.findCards.edges[0].node

    return res.status(200).json({ data: data });
  } catch (err) {
    return res.status(500).json({ data: err?.message });
  }
}


