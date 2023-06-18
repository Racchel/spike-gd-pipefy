/**
 * {"data":{"organizations":[{"id":"301144729","name":"Racchel"}]}}
 */
export const GET_ORGANIZATIONS = `
query {
  organizations{
    id
    name
  }
}
`

/**
 * {"data":{"table_records":{"edges":[
 * {"node":{"id":"725027027","title":"Michael Scott","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-08T12:15:48Z","created_by":{"id":"120"}}},
 * {"node":{"id":"725027028","title":"Dwight Schrute","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-08T12:15:48Z","created_by":{"id":"120"}}},
 * {"node":{"id":"725027029","title":"Jim Halpert","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-08T12:15:48Z","created_by":{"id":"120"}}},
 * {"node":{"id":"725027030","title":"Pam Beesly","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-08T12:15:48Z","created_by":{"id":"120"}}},
 * {"node":{"id":"725027031","title":"Ryan Howard","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-08T12:15:48Z","created_by":{"id":"120"}}},
 * {"node":{"id":"728799370","title":"Racchel","done":false,"table":{"id":"VsIS49z6"},"created_at":"2023-06-16T07:50:40Z","created_by":{"id":"302560154"}}}]}}}
 */
export const GET_VALUES_FROM_A_TABLE_BY_ID= `
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

/**
 * {"data":{"table":{"table_fields":[{"id":"nome","label":"Nome"},{"id":"email","label":"Email"}]}}}
 */
export const GET_FIELDS_FROM_A_TABLE_BY_ID = `
query {
  table(id:"VsIS49z6"){
    table_fields{
      id
      label
    }
  }
}
`

/**
 * {"data":{"organization":{"id":"301144729","tables":{"edges":[
 * {"node":{"id":"VsIS49z6","name":"Funcionários","internal_id":"303335867"}},
 * {"node":{"id":"s8uQTG0F","name":"CMDB","internal_id":"303335868"}},
 * {"node":{"id":"KiZIjO2k","name":"Grupos","internal_id":"303335869"}}]}}}}
 */
export const GET_TABLES_BY_ORGANIZATION_ID = `
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
/**
 * {"data":{"createCard":{"card":{"title":"New card"}}}}
 */
export const CREATE_NEW_CARD_BY_PIPE_ID = ` 
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

/**
 * {"data":{"findCards":{"edges":[
 * {"node":{"fields":[
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T06:36:46Z","float_value":null,"indexName":"field_1_connector","name":"Requisitado por","native_value":"Michael Scott","report_value":"Michael Scott","updated_at":"2023-06-16T06:36:46Z","value":"[\"Michael Scott\"]"},
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T06:36:46Z","float_value":null,"indexName":"field_2_string","name":"Categoria","native_value":"Rede","report_value":"Rede","updated_at":"2023-06-16T06:36:46Z","value":"Rede"},
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T06:36:46Z","float_value":null,"indexName":"field_7_string","name":"Descrição do incidente","native_value":"hiyfrstrdfyiguhjghgcfxdgtrytuyiuh","report_value":"hiyfrstrdfyiguhjghgcfxdgtrytuyiuh","updated_at":"2023-06-16T06:36:46Z","value":"hiyfrstrdfyiguhjghgcfxdgtrytuyiuh"}
 * ],"title":"728786220","done":false,"id":"728786220","updated_at":"2023-06-16T07:03:33Z","assignees":[],"attachments":[],"current_phase":{"name":"Ajustes"},"pipe":{"name":"[TI] Gestão de Incidentes"}
 * }},
 * {"node":{"fields":[
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T07:54:06Z","float_value":null,"indexName":"field_1_connector","name":"Requisitado por","native_value":"Racchel","report_value":"Racchel","updated_at":"2023-06-16T07:54:06Z","value":"[\"Racchel\"]"},
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T07:54:06Z","float_value":null,"indexName":"field_2_string","name":"Categoria","native_value":"Rede","report_value":"Rede","updated_at":"2023-06-16T07:54:06Z","value":"Rede"},
 * {"date_value":null,"datetime_value":null,"filled_at":"2023-06-16T07:54:06Z","float_value":null,"indexName":"field_7_string","name":"Descrição do incidente","native_value":"Deu PT","report_value":"Deu PT","updated_at":"2023-06-16T07:54:06Z","value":"Deu PT"}
 * ],"title":"New card","done":false,"id":"728800313","updated_at":"2023-06-16T07:54:06Z","assignees":[],"attachments":[],"current_phase":{"name":"Revisão"},"pipe":{"name":"[TI] Gestão de Incidentes"}
 * }}]}}}
 */
export const SEARCH_CARD_BY_PIPE_ID_AND_FIELD = `
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

/**
 * {"data":{"pipe":{"start_form_fields":[
 * {"id":"n_mero_do_incidente","label":"Número do Incidente","custom_validation":"","options":[],"help":"","minimal_view":false,"is_multiple":false,"index_name":"field_52_string","internal_id":"355658807","index":-100,"editable":false,"description":"🤖 Gerado automaticamente. Formatos Customizados podem ser atribuídos via API.","connected_repo":null,"connectedRepo":null,"childMustExistToFinishParent":false,"canCreateNewConnected":true,"canConnectExisting":false,"canConnectMultiples":true,"allChildrenMustBeDoneToMoveParent":false,"allChildrenMustBeDoneToFinishParent":false},
 * {"id":"requisitado_por","label":"Requisitado por","custom_validation":"","options":[],"help":"","minimal_view":false,"is_multiple":true,"index_name":"field_1_connector","internal_id":"355658808","index":0,"editable":true,"description":"É possível definir diferentes níveis de acesso às listas/Databases\nPesquisar, Criar, e Pesquisar/Criar","connected_repo":{},"connectedRepo":{},"childMustExistToFinishParent":false,"canCreateNewConnected":true,"canConnectExisting":true,"canConnectMultiples":false,"allChildrenMustBeDoneToMoveParent":false,"allChildrenMustBeDoneToFinishParent":false},
 * {"id":"categoria","label":"Categoria","custom_validation":"","options":["Acesso","Aplicação","Rede","Segurança"],"help":"","minimal_view":false,"is_multiple":false,"index_name":"field_2_string","internal_id":"355658813","index":100,"editable":true,"description":"","connected_repo":null,"connectedRepo":null,"childMustExistToFinishParent":false,"canCreateNewConnected":true,"canConnectExisting":false,"canConnectMultiples":true,"allChildrenMustBeDoneToMoveParent":false,"allChildrenMustBeDoneToFinishParent":false},
 * {"id":"descri_o_do_incidente","label":"Descrição do incidente","custom_validation":"","options":[],"help":"","minimal_view":false,"is_multiple":false,"index_name":"field_7_string","internal_id":"355658833","index":700,"editable":true,"description":"","connected_repo":null,"connectedRepo":null,"childMustExistToFinishParent":false,"canCreateNewConnected":true,"canConnectExisting":false,"canConnectMultiples":true,"allChildrenMustBeDoneToMoveParent":false,"allChildrenMustBeDoneToFinishParent":false}]}}}
 */
export const GET_START_FORM_FIELDS_BY_PIPE_ID = `
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

/**
 * {"data":{"pipe":{"phases":[
 * {"id":"320454042","name":"Revisão"},
 * {"id":"320454045","name":"Ajustes"},
 * {"id":"320454043","name":"Confirmação"},
 * {"id":"320454044","name":"Em Andamento"},
 * {"id":"320454040","name":"Solucionados"},
 * {"id":"320454041","name":"Cancelados"}]}}}
 */
export const GET_PHASES_BY_PIPE_ID = `
query {
  pipe(id: "303335871"){
    phases{
      id
      name
    }
  }
}
`

/**
 * {"data":{"phase":{"fields":[
 * {"id":"revisor","label":"Revisor"},
 * {"id":"podemos_prosseguir_com_a_solicita_o_ou_s_o_necess_rias_mais_informa_es_do_requisitante","label":"Podemos prosseguir com a solicitação ou são necessárias mais informações do requisitante?"},
 * {"id":"o_que_mais_necess_rio","label":"O que mais é necessário?"},
 * {"id":"prioridade","label":"Prioridade"},
 * {"id":"urg_ncia","label":"Urgência"},
 * {"id":"impacto","label":"Impacto"},
 * {"id":"sla","label":"SLA"},
 * {"id":"grupo_que_se_apropriar_do_incidente","label":"Grupo que se Apropriará do Incidente"},
 * {"id":"pr_xima_etapa","label":"Próxima Etapa"}]}}}
 */
export const FIND_FIELDS_BY_PHASE_ID = `
query MyQuery {
  phase(id: "320454042") {
    fields {
      id
      label
    }
  }
}
`
/**
 * {"data":{"card":{"fields":[
 * {"name":"Requisitado por","value":"[\"Michael Scott\"]"},
 * {"name":"Categoria","value":"Rede"},
 * {"name":"Descrição do incidente","value":"hiyfrstrdfyiguhjghgcfxdgtrytuyiuh"}]}}}
 */
export const GET_INITIAL_FORM_VALUES_OF_A_CARD_BY_ID = `
query MyQuery {
  card(id: "728786220") {
    fields {
      name
      value
    }
  }
}`

/**
 * {"data":{"card":{"
 * finished_at":null,"late":false,"subtitles":[
 * {"name":"Requisitado por","array_value":["725027027"]},
 * {"name":"Categoria","array_value":null},
 * {"name":"Descrição do incidente","array_value":null}],
 * "created_at":"2023-06-16T06:36:46Z","creatorEmail":"racchelvelasco@gmail.com","current_phase_age":163726,"done":false,"due_date":null,"expired":false}}}
 */
export const GET_CARD_BY_ID = `
query MyQuery {
  card(id: "728786220") {
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

/**
 * {"data":{"cards":{"edges":[
 * {"node":{"id":"725027149"}},
 * {"node":{"id":"725027148"}},
 * {"node":{"id":"725027150"}},
 * {"node":{"id":"728786220"}},
 * {"node":{"id":"728800313"}}]}}}
 */
export const GET_ALL_CARD_IDS_BY_PIPE_ID = `
query MyQuery($cardId: ID!) {
  cards(pipe_id: $cardId) {
    edges {
      node {
        id
      }
    }
  }
}
`