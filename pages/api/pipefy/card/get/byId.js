import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { api } from "../../../../../src/services/baseApi";
import { GET_CARD_BY_ID } from "../../queries";

const PIPEFY_URL = 'https://api.pipefy.com/graphql';
const _AUTH = `eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE2ODYzMTYzMjIsImp0aSI6ImQyNTU2Yjk5LTZiNzUtNGJjMS1iNzczLWQ1OTg1NGFlODY4ZiIsInN1YiI6MzAyNTYwMTU0LCJ1c2VyIjp7ImlkIjozMDI1NjAxNTQsImVtYWlsIjoicmFjY2hlbHZlbGFzY29AZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDI1NDU5OSwic2NvcGVzIjpbXX0sImludGVyZmFjZV91dWlkIjpudWxsfQ.BH-kl1ZW3XmcZQPiT-JlNQ8Ll5WFTDc7qUuzKdXClyQaIGjv-e2ipnvLsz-Egc3DnGcuTHjn6ztg56DjsopzaA`;

const options = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${_AUTH}`
  },
  body: JSON.stringify({ query: GET_CARD_BY_ID })
};


export default async function handler(req, res) {
  await initMiddleware(req, res, cors);

  try {

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const response = await api.post(PIPEFY_URL, options.body, { headers: options.headers})
    console.log(JSON.stringify(response.data))

    return res.status(200).json({ data: 'oii' });
  } catch (err) {
    return res.status(500).json({ data: err?.message });
  }
}



/**
 * start_form_fields
 * {"id":"n_mero_do_incidente","label":"Número do Incidente"},
 * {"id":"requisitado_por","label":"Requisitado por"},
 * {"id":"categoria","label":"Categoria"},
 * {"id":"descri_o_do_incidente","label":"Descrição do incidente"}
 */

/**
 * phases
 * {"id":"320454042","name":"Revisão"},
 * {"id":"320454045","name":"Ajustes"},
 * {"id":"320454043","name":"Confirmação"},
 * {"id":"320454044","name":"Em Andamento"},
 * {"id":"320454040","name":"Solucionados"},
 * {"id":"320454041","name":"Cancelados"}
 */

/**
 * tables"
 * {"node":{"id":"VsIS49z6","name":"Funcionários","internal_id":"303335867"}},
 * {"node":{"id":"s8uQTG0F","name":"CMDB","internal_id":"303335868"}},
 * {"node":{"id":"KiZIjO2k","name":"Grupos","internal_id":"303335869"}}]}}}}
 */