'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  post: any
  delay?: number
}

export default function PostCard({ post, delay = 0 }: PostCardProps) {
  const coverImage = post.coverImage as any
  const publishedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <article className="glass rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col">
          {coverImage && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={`https:${coverImage.fields.file.url}`}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          )}
          
          <div className="p-6 flex-1 flex flex-col">
            {publishedDate && (
              <time className="text-gray-400 text-sm mb-2">{publishedDate}</time>
            )}
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
              {post.title}
            </h3>
            
            {post.excerpt && (
              <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
            )}
            
            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            <span className="text-accent-blue text-sm font-semibold mt-4 inline-block group-hover:translate-x-2 transition-transform">
              Read more →
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

