export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    im: 'bg-blue-100 text-blue-800',
    mk: 'bg-purple-100 text-purple-800',
    success: 'bg-accent-100 text-accent-700',
    warning: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
