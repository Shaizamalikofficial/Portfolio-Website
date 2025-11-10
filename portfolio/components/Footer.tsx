import Link from 'next/link'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shaiza-malik/', icon: 'LI' },
  { name: 'GitHub', href: 'https://github.com/Shaizamalikofficial', icon: 'GH' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shaiza Malik. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
                aria-label={link.name}
              >
                <span className="text-lg font-semibold">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

