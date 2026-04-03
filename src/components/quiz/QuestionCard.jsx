import { AnswerOption } from './AnswerOption'
import { ProgressBar } from '../ui/ProgressBar'

export function QuestionCard({
  sporsmal,
  navaerende,
  total,
  svarValgt,
  onSvarValgt,
  vistForklaring,
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar value={(navaerende / total) * 100} label={`Spørsmål ${navaerende + 1} av ${total}`} className="mb-6" />

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{sporsmal.sporsmal}</h2>

        <div className="space-y-3 mb-6">
          {sporsmal.alternativer.map((alt) => (
            <AnswerOption
              key={alt.id}
              alt={alt}
              valgt={svarValgt === alt.id}
              disabled={vistForklaring}
              korrekt={alt.korrekt && vistForklaring}
              harSvart={svarValgt !== null && vistForklaring}
              onClick={() => !vistForklaring && onSvarValgt(alt.id)}
            />
          ))}
        </div>

        {vistForklaring && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">Forklaring</h3>
            <p className="text-blue-800">{sporsmal.forklaring}</p>
          </div>
        )}
      </div>
    </div>
  )
}
