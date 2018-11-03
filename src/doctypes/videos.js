export const videosQuery = client =>
  client.find('io.cozy.files').where({ mime: 'application/dash+xml' })
