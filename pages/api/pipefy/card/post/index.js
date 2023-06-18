import Cors from "cors";
const cors = Cors({ methods: ["POST", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { CREATE_NEW_CARD_BY_PIPE_ID } from "../../queries";

import { apolloClient } from "../../../../../src/utils/apolloClient";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  await initMiddleware(req, res, cors);
  const { pipeId } = req.query;
  const { title, category, orderId, description, user } = req.body;

  try {

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const cardProps = {
      pipeId: pipeId,
      title: title,
      fieldAttributes:[
        {field_id: "requisitado_por", field_value: user},
        {field_id: "categoria", field_value: category},
        {field_id: "descri_o_do_incidente", field_value: description},
        {field_id: "id_do_pedido", field_value: orderId},
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


