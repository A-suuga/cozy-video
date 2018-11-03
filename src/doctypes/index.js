import { TODOS_DOCTYPE } from './todos'
import { FILES_DOCTYPE } from './videos'

// the documents schema, necessary for CozyClient
export default {
  todos: {
    doctype: TODOS_DOCTYPE,
    attributes: {},
    relationships: {}
  },
  files: { doctype: FILES_DOCTYPE }
}

// export all doctypes for the application
export * from './todos'
export * from './videos'
