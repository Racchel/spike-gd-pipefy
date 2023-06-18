import Cors from "cors";
const cors = Cors({ methods: ["GET", "OPTIONS"] });

import initMiddleware from "../../../../../src/utils/middleware";
import { api } from "../../../../../src/services/baseApi";

const PIPEFY_URL = 'https://api.pipefy.com/graphql';
const _AUTH = `eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE2ODYzMTYzMjIsImp0aSI6ImQyNTU2Yjk5LTZiNzUtNGJjMS1iNzczLWQ1OTg1NGFlODY4ZiIsInN1YiI6MzAyNTYwMTU0LCJ1c2VyIjp7ImlkIjozMDI1NjAxNTQsImVtYWlsIjoicmFjY2hlbHZlbGFzY29AZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDI1NDU5OSwic2NvcGVzIjpbXX0sImludGVyZmFjZV91dWlkIjpudWxsfQ.BH-kl1ZW3XmcZQPiT-JlNQ8Ll5WFTDc7qUuzKdXClyQaIGjv-e2ipnvLsz-Egc3DnGcuTHjn6ztg56DjsopzaA`;

const GET_ORGANIZATION = `
query {
  organizations{
    id
    name
  }
}
`

const GET_VALUES_TABLE = `
query {
  table_records(table_id: "VsIS49z6") {
    edges {
      node {
        id
        title
        done
        table {
          id
        }
        created_at
        created_by {
          id
        }
      }
    }
  }
}
`

const GET_FIELDS_TABLE = `
query {
  table(id:"VsIS49z6"){
    table_fields{
      id
      label
    }
  }
}
`

const GET_TABLE = `
query {
  organization(id:301144729) {
    id
    tables {
      edges {
        node {
          id
          name
          internal_id
        }
      }
    }
  }
}
`

//725027027
const CREATE_CARD = ` 
mutation {
  createCard(input: {
    pipe_id: 303335871,
    title: "New card",
    fields_attributes:[
      {field_id: "requisitado_por", field_value: "728799370"},
      {field_id: "categoria", field_value: "Rede"},
      {field_id: "descri_o_do_incidente", field_value: "Deu PT"},
    ]}
  ) {
    card {
      title
    }
  }
}
`

const FIND_CARD_BY_CATEGORIA = `
query {
  findCards(pipeId: "303335871", search: {fieldId: "categoria", fieldValue: "Rede"}) {
    edges {
      node {
        fields {
          date_value
          datetime_value
          filled_at
          float_value
          indexName
          name
          native_value
          report_value
          updated_at
          value
        }
        title
        done
        id
        updated_at
        assignees {
          name
          email
        }
        attachments {
          url
          path
        }
        current_phase {
          name
        }
        pipe {
          name
        }
      }
    }
  }
}
`


const FIND_START_FORM_FIELDS = `
query {
  pipe(id: 303335871) {
    start_form_fields {
      id
      label
      custom_validation
      options
      help
      minimal_view
      label
      is_multiple
      index_name
      internal_id
      index
      id
      editable
      description
      connected_repo
      connectedRepo
      childMustExistToFinishParent
      canCreateNewConnected
      canConnectExisting
      canConnectMultiples
      allChildrenMustBeDoneToMoveParent
      allChildrenMustBeDoneToFinishParent
    }
  }
}
`

const FIND_PHASE_BY_PIPE_ID = `
query {
  pipe(id: "303335871"){
    phases{
      id
      name
    }
  }
}
`

const FIND_FIELDS_BY_PHASE_ID = `
query MyQuery {
  phase(id: "320454042") {
    fields {
      id
      label
    }
  }
}
`
const FIND_CARD_BY_ID = `
query MyQuery {
  card(id: "728786220") {
    fields {
      name
      value
    }
  }
}`


const GET_ALL_CARDS_ = `
query MyQuery {
  card(id: "725027149") {
    finished_at
    late
    subtitles {
      name
      array_value
    }
    created_at
    creatorEmail
    current_phase_age
    done
    due_date
    expired
  }
}
`

const options = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${_AUTH}`
  },
  body: JSON.stringify({ query: CREATE_CARD })
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