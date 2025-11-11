import { getContentfulClient } from './contentful'

export async function getProfile() {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'profile',
      limit: 1,
    })
    return entries.items[0]?.fields || null
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}

export async function getProjects() {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'project',
      order: '-fields.publishedDate' as any,
    })
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    }))
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getBlogPosts(limit?: number) {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'post',
      order: '-fields.publishedDate' as any,
      limit: limit || 100,
    })
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
      slug: item.fields.slug,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string) {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
      limit: 1,
    })
    return entries.items[0] ? {
      ...entries.items[0].fields,
      id: entries.items[0].sys.id,
    } : null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getTimelineItems() {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'timelineItem',
      order: 'fields.date' as any,
    })
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    }))
  } catch (error) {
    console.error('Error fetching timeline items:', error)
    return []
  }
}

