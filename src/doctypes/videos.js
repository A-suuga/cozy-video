export const FILES_DOCTYPE = 'io.cozy.files'

export const videosQuery = client =>
  client.find(FILES_DOCTYPE).where({ mime: 'application/dash+xml' })
