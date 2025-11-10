import { createClient } from 'contentful'

export function getContentfulClient(preview = false) {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_TOKEN || ''
      : process.env.CONTENTFUL_CDA_TOKEN || '',
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  })
}

export type ContentfulImage = {
  fields: {
    file: {
      url: string
      details: {
        image?: {
          width: number
          height: number
        }
      }
    }
  }
}

