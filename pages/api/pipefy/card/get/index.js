import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { api } from "../../../../../src/services/baseApi";

const PIPEFY_URL = 'https://api.pipefy.com/graphql';
const _AUTH = `eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE2ODYzMTYzMjIsImp0aSI6ImQyNTU2Yjk5LTZiNzUtNGJjMS1iNzczLWQ1OTg1NGFlODY4ZiIsInN1YiI6MzAyNTYwMTU0LCJ1c2VyIjp7ImlkIjozMDI1NjAxNTQsImVtYWlsIjoicmFjY2hlbHZlbGFzY29AZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDI1NDU5OSwic2NvcGVzIjpbXX0sImludGVyZmFjZV91dWlkIjpudWxsfQ.BH-kl1ZW3XmcZQPiT-JlNQ8Ll5WFTDc7qUuzKdXClyQaIGjv-e2ipnvLsz-Egc3DnGcuTHjn6ztg56DjsopzaA`;

const GET_ALL_CARDS = `
query MyQuery {
  cards(pipe_id: "303335871") {
    edges {
      node {
        id
      }
    }
  }
}
`

const options = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${_AUTH}`
  },
  body: JSON.stringify({ query: GET_ALL_CARDS })
};


export default async function handler(req, res) {
  await initMiddleware(req, res, cors);

  try {

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const response = await api.post(PIPEFY_URL, options.body, { headers: options.headers})
    console.log(response.data.data.cards.edges)

    return res.status(200).json({ data: 'oii' });
  } catch (err) {
    return res.status(500).json({ data: err?.message });
  }
}


