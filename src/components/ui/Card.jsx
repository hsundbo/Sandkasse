export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-6 pt-4 border-t ${className}`}>{children}</div>
}
