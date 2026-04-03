import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Button } from '../components/ui/Button'

export function LandingPage() {
  const navigate = useNavigate()
  const { elev, oppdaterElev } = useApp()
  const [navn, setNavn] = useState(elev.navn || '')
  const [program, setProgram] = useState(elev.program || null)

  const handleKomIGang = () => {
    if (navn && program) {
      oppdaterElev('navn', navn)
      oppdaterElev('program', program)
      navigate('/moduler')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-600 to-brand-700 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-5xl font-bold mb-4">AI-lab</h1>
          <p className="text-xl text-brand-100 mb-8">
            Lær om kunstig intelligens, maskinlæring og fremtiden med AI
          </p>

          <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Kom i gang</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Ditt navn</label>
              <input
                type="text"
                value={navn}
                onChange={(e) => setNavn(e.target.value)}
                placeholder="Skriv ditt navn"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Velg studieprogram</label>
              <div className="space-y-2">
                <button
                  onClick={() => setProgram('IM')}
                  className={`w-full p-3 rounded-lg border-2 font-medium transition ${
                    program === 'IM'
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  IM (IT og Medieproduksjon)
                </button>
                <button
                  onClick={() => setProgram('MK')}
                  className={`w-full p-3 rounded-lg border-2 font-medium transition ${
                    program === 'MK'
                      ? 'border-purple-500 bg-purple-50 text-purple-800'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  MK (Medier og Kommunikasjon)
                </button>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleKomIGang}
              disabled={!navn || !program}
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kom i gang →
            </Button>
          </div>

          <div className="mt-12 text-brand-100 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-4">Hva lærer du?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>✓ Hva er kunstig intelligens?</div>
              <div>✓ Maskinlæring og nevrale nettverk</div>
              <div>✓ AI i medier og kommunikasjon</div>
              <div>✓ Etikk og bias i AI</div>
              <div>✓ Praktiske AI-demoer</div>
              <div>✓ Fremtiden med AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
