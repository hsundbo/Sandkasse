import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { modules } from '../../data/modules'

export function QuizResult({ poeng, maksPoeng, sporsmal, svar, onGjentagQuiz }) {
  const prosentoen = Math.round((poeng / maksPoeng) * 100)
  const bestatt = prosentoen >= 60

  const nestemodul = modules[modules.findIndex((m) => m.id === sporsmal[0]?.moduleId || '') + 1]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
        <div className={`text-6xl font-bold mb-4 ${bestatt ? 'text-accent-500' : 'text-orange-500'}`}>
          {poeng}/{maksPoeng}
        </div>
        <div className={`text-2xl font-bold mb-2 ${bestatt ? 'text-accent-700' : 'text-orange-700'}`}>
          {bestatt ? '✓ Bestått!' : '✗ Ikke bestått'}
        </div>
        <p className="text-gray-600 mb-6">Du fikk {prosentoen}% riktige svar.</p>
        {bestatt ? (
          <p className="text-accent-600 font-medium mb-6">Gratulerer! Du har fullført denne modulen.</p>
        ) : (
          <p className="text-orange-600 font-medium mb-6">
            Du må få minst 60% for å bestå. Prøv igjen!
          </p>
        )}

        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="primary" onClick={onGjentagQuiz} size="md">
            Prøv igjen
          </Button>
          <Link to="/moduler">
            <Button variant="secondary" size="md">
              Moduler
            </Button>
          </Link>
          {bestatt && nestemodul && (
            <Link to={`/moduler/${nestemodul.id}`}>
              <Button variant="success" size="md">
                Neste modul →
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-lg font-bold mb-4">Gjennomgang</h3>
        <div className="space-y-6">
          {sporsmal.map((q, idx) => (
            <div key={q.id} className="border-b pb-4">
              <p className="font-medium text-gray-900 mb-2">
                {idx + 1}. {q.sporsmal}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Ditt svar: <span className={svar[q.id]?.korrekt ? 'text-accent-600 font-medium' : 'text-red-600 font-medium'}>
                  {svar[q.id]?.tekst}
                </span>
              </p>
              <p className="text-sm text-gray-700 italic">{q.forklaring}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
