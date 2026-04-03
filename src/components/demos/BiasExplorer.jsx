import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function BiasExplorer() {
  const [kvinnerProsent, setKvinnerProsent] = useState(50)
  const [utdanningProsent, setUtdanningProsent] = useState(50)
  const [ansettelsesData, setAnsettelsesData] = useState(null)

  const handleTrenModell = () => {
    // Simuler en enkel diskriminering
    const bias = Math.abs(kvinnerProsent - 50) / 100

    const testPersoner = [
      { navn: 'Inger (kvinne, høy utdanning)', kvinne: true, utdanning: true },
      { navn: 'Ole (mann, høy utdanning)', kvinne: false, utdanning: true },
      { navn: 'Anna (kvinne, lav utdanning)', kvinne: true, utdanning: false },
      { navn: 'Per (mann, lav utdanning)', kvinne: false, utdanning: false },
    ]

    const resultater = testPersoner.map((person) => {
      let poengsum = (utdanningProsent / 100) * 0.7 + 0.3

      // Bias mot kvinner hvis kvinneprosent er lav
      if (person.kvinne && kvinnerProsent < 50) {
        poengsum *= 1 - bias
      } else if (!person.kvinne && kvinnerProsent > 50) {
        poengsum *= 1 - bias / 2
      }

      return {
        navn: person.navn,
        poeng: Math.round(poengsum * 100),
      }
    })

    setAnsettelsesData(resultater)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Treningsdata-builder</h3>

        <div className="space-y-4">
          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Andel kvinner i historiske data:</span>
              <span className="font-bold text-brand-600">{kvinnerProsent}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={kvinnerProsent}
              onChange={(e) => setKvinnerProsent(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Andel med høy utdanning:</span>
              <span className="font-bold text-brand-600">{utdanningProsent}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={utdanningProsent}
              onChange={(e) => setUtdanningProsent(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <Button variant="primary" onClick={handleTrenModell} className="w-full">
            Tren modell
          </Button>
        </div>
      </Card>

      {ansettelsesData && (
        <Card>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ansettelsesscore</h3>

          <div className="space-y-3">
            {ansettelsesData.map((person, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{person.navn}</span>
                  <span className="font-bold text-gray-900">{person.poeng}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      person.poeng >= 50 ? 'bg-accent-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${person.poeng}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Når du endrer andelen kvinner i treningsdataene, ser du hvordan det påvirker ansettelsessystemet.
            Et system som er trent på skjeve data reproduserer og forsterker diskriminering.
          </p>
        </Card>
      )}

      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Refleksjon</h3>
        <ul className="text-gray-700 text-sm space-y-2">
          <li>• Hvordan påvirker historiske data det AI-systemet lærer?</li>
          <li>• Hva er ansvarlig for diskriminering – dataene eller algoritmen?</li>
          <li>• Hvordan kan vi bygge mere rettferdige AI-systemer?</li>
        </ul>
      </Card>
    </div>
  )
}
