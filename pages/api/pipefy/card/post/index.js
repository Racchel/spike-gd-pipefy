import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { CREATE_NEW_CARD_BY_PIPE_ID } from "../../queries";

import { apolloClient } from "../../../../../src/utils/apolloClient";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  await initMiddleware(req, res, cors);

  try {

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const cardProps = {
      pipeId: 303335871,
      title: "Meuu carddd",
      fieldAttributes:[
        {field_id: "requisitado_por", field_value: "728799370"},
        {field_id: "categoria", field_value: "Rede"},
        {field_id: "descri_o_do_incidente", field_value: "Deu PT"},
        {field_id: "id_do_pedido", field_value: "0909"},
      ]
    }

    const options = {
      mutation: gql`${CREATE_NEW_CARD_BY_PIPE_ID}`,
      variables: cardProps
    }

    const response = await apolloClient.mutate(options)

    const data = response.data.createCard.card;
    console.log("data", data);

    return res.status(200).json({ data: data });
  } catch (err) {
    return res.status(500).json({ data: err?.message });
  }
}


