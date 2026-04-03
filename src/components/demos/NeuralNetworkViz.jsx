import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function NeuralNetworkViz() {
  const [antallLag, setAntallLag] = useState(3)
  const [animating, setAnimating] = useState(false)

  const nodePrLag = {
    0: 4, // input
    1: 6,
    2: 5,
    3: 3, // output
  }

  const handleKjorSignal = () => {
    setAnimating(true)
    setTimeout(() => setAnimating(false), 2000)
  }

  const genererNoder = (lagIndex, antallNoder) => {
    const noder = []
    const spacing = 60
    const startY = 150 - (antallNoder * spacing) / 2

    for (let i = 0; i < antallNoder; i++) {
      noder.push({
        id: `${lagIndex}-${i}`,
        x: lagIndex * 150 + 50,
        y: startY + i * spacing,
        radius: 15,
      })
    }
    return noder
  }

  const alleNoder = []
  for (let i = 0; i <= Math.min(antallLag, 3); i++) {
    alleNoder.push(...genererNoder(i, nodePrLag[i]))
  }

  const bredde = (Math.min(antallLag, 3) + 1) * 150 + 50
  const høyde = 350

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Kontroller</h3>

        <div className="space-y-4">
          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Antall skjulte lag:</span>
              <span className="font-bold text-brand-600">{antallLag}</span>
            </label>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={antallLag}
              onChange={(e) => setAntallLag(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <Button variant="primary" onClick={handleKjorSignal} disabled={animating} className="w-full">
            {animating ? 'Kjører...' : 'Kjør signal'}
          </Button>
        </div>
      </Card>

      <Card className="overflow-auto">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Nevralt nettverk</h3>

        <svg width={bredde} height={høyde} className="border border-gray-200 rounded">
          {/* Tegn forbindelser (edges) */}
          {alleNoder.map((node, idx) => {
            const lagIndex = parseInt(node.id.split('-')[0])
            if (lagIndex < Math.min(antallLag, 3)) {
              const nesteNoder = alleNoder.filter((n) => {
                const nLag = parseInt(n.id.split('-')[0])
                return nLag === lagIndex + 1
              })

              return nesteNoder.map((nesteNode) => (
                <line
                  key={`edge-${node.id}-${nesteNode.id}`}
                  x1={node.x}
                  y1={node.y}
                  x2={nesteNode.x}
                  y2={nesteNode.y}
                  stroke="#ccc"
                  strokeWidth="1"
                />
              ))
            }
            return null
          })}

          {/* Tegn noder */}
          {alleNoder.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.radius}
              fill={animating ? '#10b981' : '#4f46e5'}
              opacity={animating ? 0.8 : 0.6}
              className={animating ? 'animate-pulse' : ''}
            />
          ))}

          {/* Lag-labels */}
          {[0, Math.min(antallLag, 3)].map((i) => (
            <text
              key={`label-${i}`}
              x={i * 150 + 50}
              y={30}
              textAnchor="middle"
              className="text-xs font-bold fill-gray-600"
            >
              {i === 0 ? 'Input' : 'Output'}
            </text>
          ))}
          {Array.from({ length: Math.min(antallLag - 1, 3) }).map((_, i) => (
            <text
              key={`label-hidden-${i}`}
              x={(i + 1) * 150 + 50}
              y={30}
              textAnchor="middle"
              className="text-xs font-bold fill-gray-600"
            >
              Lag {i + 1}
            </text>
          ))}
        </svg>
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Forklaring</h3>
        <div className="text-gray-700 text-sm space-y-2">
          <p>
            Et nevralt nettverk har lag av noder (kunstige nevroner) forbundet med hverandre.
            Dataene flyter fra venstre (input) gjennom flere lag til høyre (output).
          </p>
          <p>
            Hvert lag lærer å gjenkjenne stadig mer komplekse mønstre. Jo flere lag, jo mer
            komplekse mønstre kan det gjenkjenne – men jo mer data og computing-kraft trengs det.
          </p>
        </div>
      </Card>
    </div>
  )
}
