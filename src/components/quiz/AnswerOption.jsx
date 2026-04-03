export function AnswerOption({
  alt,
  valgt,
  disabled,
  korrekt,
  harSvart,
  onClick,
}) {
  let bgColor = 'bg-white hover:bg-gray-50'
  let borderColor = 'border-gray-300'

  if (harSvart && valgt) {
    bgColor = korrekt ? 'bg-green-50' : 'bg-red-50'
    borderColor = korrekt ? 'border-green-500' : 'border-red-500'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left p-4 rounded-lg border-2 transition ${bgColor} ${borderColor} ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-1 w-5 h-5 rounded-full border-2 flex-shrink-0 ${
            harSvart && valgt
              ? korrekt
                ? 'bg-green-500 border-green-500'
                : 'bg-red-500 border-red-500'
              : 'border-gray-400'
          }`}
        >
          {harSvart && valgt && (
            <span className="text-white flex items-center justify-center w-full h-full">
              {korrekt ? '✓' : '✗'}
            </span>
          )}
        </div>
        <span className="font-medium text-gray-900">{alt.tekst}</span>
      </div>
    </button>
  )
}
