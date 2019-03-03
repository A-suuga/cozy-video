import { FILES_DOCTYPE } from './videos'

// the documents schema, necessary for CozyClient
export const schema = {
  files: { doctype: FILES_DOCTYPE }
}

// export all doctypes for the application
export * from './videos'
