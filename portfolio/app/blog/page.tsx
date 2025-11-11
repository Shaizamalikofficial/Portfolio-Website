import { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/queries'
import PostCard from '@/components/PostCard'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Blog | Shaiza Malik',
  description: 'Read about my journey in AI, Machine Learning, and Computer Science.',
}

export default async function Blog() {
  const posts = await getBlogPosts()

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text text-center">
          Blog
        </h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Thoughts, learnings and insights from my journey in AI and Machine Learning.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="glass rounded-xl p-12 max-w-md mx-auto">
              <p className="text-gray-300 text-lg mb-4">
                No blog posts yet, but check back soon!
              </p>
              <p className="text-gray-400">
                I&apos;m working on sharing my experiences and learnings in AI and Machine Learning.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post: any, index: number) => (
              <PostCard key={post.id} post={post} delay={index * 0.1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

