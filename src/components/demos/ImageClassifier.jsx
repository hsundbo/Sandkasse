import { useState, useRef, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function ImageClassifier() {
  const videoRef = useRef(null)
  const [kameraStartet, setKameraStartet] = useState(false)
  const [klassifikasjoner, setKlassifikasjoner] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const modelRef = useRef(null)

  useEffect(() => {
    // Last TensorFlow.js ved mount
    const lastModel = async () => {
      try {
        const tf = await import('@tensorflow/tfjs')
        await import('@tensorflow-models/mobilenet')
        const mobilenet = window.mobilenet || (await import('@tensorflow-models/mobilenet')).load()
        modelRef.current = mobilenet
      } catch (err) {
        console.error('Feil ved lasting av modell:', err)
        setError('Kunne ikke laste AI-modellen')
      }
    }
    lastModel()
  }, [])

  const startKamera = async () => {
    try {
      setLoading(true)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setKameraStartet(true)
        setError(null)
      }
    } catch (err) {
      setError('Kunne ikke få tilgang til kameraet. Sjekk at du har gitt lov.')
      setLoading(false)
    }
  }

  const stoppKamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop())
      setKameraStartet(false)
      setKlassifikasjoner([])
    }
  }

  const klassifiser = async () => {
    if (!videoRef.current || !modelRef.current) return

    try {
      setLoading(true)
      const predictions = await modelRef.current.classify(videoRef.current)
      setKlassifikasjoner(predictions.slice(0, 3))
      setLoading(false)
    } catch (err) {
      console.error('Klassifiseringsfeil:', err)
      setError('Feil ved klassifisering')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Bildegjenkjenning</h3>

        <div className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-300 rounded p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          {kameraStartet ? (
            <div className="bg-black rounded-lg overflow-hidden w-full">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
              <p className="text-gray-600">Kamera ikke startet</p>
            </div>
          )}

          <div className="flex gap-2">
            {!kameraStartet ? (
              <Button variant="primary" onClick={startKamera} disabled={loading} className="flex-1">
                {loading ? 'Starter...' : 'Start kamera'}
              </Button>
            ) : (
              <>
                <Button variant="success" onClick={klassifiser} disabled={loading} className="flex-1">
                  {loading ? 'Klassifiserer...' : 'Klassifiser'}
                </Button>
                <Button variant="secondary" onClick={stoppKamera}>
                  Stopp
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>

      {klassifikasjoner.length > 0 && (
        <Card>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resultater</h3>

          <div className="space-y-3">
            {klassifikasjoner.map((pred, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{pred.className}</span>
                  <span className="font-bold text-gray-900">
                    {Math.round(pred.probability * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-accent-500 h-2 rounded-full transition-all"
                    style={{ width: `${pred.probability * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Modellen er trent på tusenvis av bilder og kan gjenkjenne hundrevis av objekter.
          </p>
        </Card>
      )}

      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Hvordan fungerer det?</h3>
        <div className="text-gray-700 text-sm space-y-2">
          <p>
            MobileNet er et dypt nevralt nettverk som er trent på millioner av bilder.
            Det kan gjenkjenne objekter, dyrer, gjenstander og mer.
          </p>
          <p>
            Modellen kjører direkte i nettleseren din – dataene dine sendes ikke til servere!
          </p>
          <p>
            Prøv å holde ulike gjenstander foran kameraet og se hva modellen gjenkjenner.
          </p>
        </div>
      </Card>
    </div>
  )
}
