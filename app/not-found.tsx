import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-accent-blue text-background font-semibold rounded-lg hover:bg-accent-blue-dark transition-all duration-300 transform hover:scale-105 shadow-glow-blue"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
