/* global */

import { StackLink } from 'cozy-client'

let links = null
export const getLinks = () => {
  if (links) {
    return links
  }

  const stackLink = new StackLink()
  links = [stackLink]

  return links
}
