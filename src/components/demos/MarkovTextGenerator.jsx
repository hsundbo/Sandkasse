import { useState } from 'react'
import { genererTekst } from '../../utils/markov'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function MarkovTextGenerator() {
  const [type, setType] = useState('teknologi')
  const [lengde, setLengde] = useState(50)
  const [tekst, setTekst] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerer = async () => {
    setLoading(true)
    // Simuler litt prosessering
    await new Promise((resolve) => setTimeout(resolve, 500))
    const genertTekst = genererTekst(type, lengde)
    setTekst(genertTekst)
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Innstillinger</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teksttype</label>
            <div className="space-y-2">
              {[
                { id: 'teknologi', label: 'Teknologi' },
                { id: 'nyheter', label: 'Nyheter' },
                { id: 'poetisk', label: 'Poetisk' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setType(opt.id)}
                  className={`w-full p-3 rounded-lg border-2 text-left transition ${
                    type === opt.id
                      ? 'border-brand-500 bg-brand-50 text-brand-900'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lengde: {lengde} ord
            </label>
            <input
              type="range"
              min="20"
              max="200"
              step="10"
              value={lengde}
              onChange={(e) => setLengde(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <Button variant="primary" onClick={handleGenerer} disabled={loading} className="w-full">
            {loading ? 'Genererer...' : 'Generer tekst'}
          </Button>
        </div>
      </Card>

      {tekst && (
        <Card>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Generert tekst</h3>
          <p className="text-gray-700 leading-relaxed">{tekst}</p>
          <p className="text-xs text-gray-600 mt-4">
            Algoritmen brukte en Markov-kjede av orden 2 til å generere denne teksten.
          </p>
        </Card>
      )}

      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Hvordan fungerer det?</h3>
        <div className="text-gray-700 space-y-2 text-sm">
          <p>
            En Markov-kjede lærer mønstre fra ordene. Den husker bare de 2 siste ordene og velger
            hvilket ord som kommer neste basert på statistikk.
          </p>
          <p>
            Det er en enkel, men kraftig måte å lage tekst som ligner på treningsdataene uten å
            forstå betydningen av ordene.
          </p>
        </div>
      </Card>
    </div>
  )
}
