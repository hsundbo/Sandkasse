export function ProgressBar({ value = 0, label = '', className = '' }) {
  const percentage = Math.min(100, Math.max(0, value))

  return (
    <div className={className}>
      {label && <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-accent-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-600 mt-1">{percentage}%</p>
    </div>
  )
}
