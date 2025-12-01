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
      order: ['-fields.publishedDate'],
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
      order: ['-fields.publishedDate'],
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

export interface BlogPost {
  id: string
  title: string
  slug: string
  publishedDate: string
  excerpt: string
  content: any
  coverImage: any
  tags: string[]
  seoDescription?: string
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
      limit: 1,
    })

    if (entries.items.length > 0) {
      const fields = entries.items[0].fields as any
      return {
        id: entries.items[0].sys.id,
        title: fields.title,
        slug: fields.slug,
        publishedDate: fields.publishedDate,
        excerpt: fields.excerpt,
        content: fields.content,
        coverImage: fields.coverImage,
        tags: fields.tags,
        seoDescription: fields.seoDescription,
      }
    }
    return null
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
      order: ['fields.date'],
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

