import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/queries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

export const revalidate = 600

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug) as any
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Shaiza Malik`,
    description: post.excerpt || post.seoDescription,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug) as any

  if (!post) {
    notFound()
  }

  const coverImage = post.coverImage as any

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            {post.title}
          </h1>

          {post.publishedDate && (
            <p className="text-gray-400 mb-8">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}

          {coverImage && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12">
              <Image
                src={`https:${coverImage.fields.file.url}`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {post.excerpt && (
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="prose prose-invert prose-lg max-w-none glass rounded-xl p-8 md:p-12">
            {post.content && documentToReactComponents(post.content as any)}
          </div>

          {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

