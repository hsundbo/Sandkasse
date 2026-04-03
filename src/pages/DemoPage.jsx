import { useParams, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { demos } from '../data/demos'
import { Button } from '../components/ui/Button'

// Lazy load demo components
const ImageClassifier = lazy(() => import('../components/demos/ImageClassifier').then(m => ({ default: m.ImageClassifier })))
const MarkovTextGenerator = lazy(() => import('../components/demos/MarkovTextGenerator').then(m => ({ default: m.MarkovTextGenerator })))
const NeuralNetworkViz = lazy(() => import('../components/demos/NeuralNetworkViz').then(m => ({ default: m.NeuralNetworkViz })))
const BiasExplorer = lazy(() => import('../components/demos/BiasExplorer').then(m => ({ default: m.BiasExplorer })))

const demoComponents = {
  'image-classifier': ImageClassifier,
  'markov-text': MarkovTextGenerator,
  'neural-network-viz': NeuralNetworkViz,
  'bias-explorer': BiasExplorer,
}

export function DemoPage() {
  const { demoId } = useParams()
  const demo = demos.find((d) => d.id === demoId)
  const DemoComponent = demo ? demoComponents[demo.id] : null

  if (!demo || !DemoComponent) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 mb-4">Demo ikke funnet</p>
        <Link to="/moduler">
          <Button variant="primary">Tilbake til moduler</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link to={`/moduler/${demo.relatertModul}`} className="text-brand-600 hover:text-brand-700 mb-4 inline-block">
            ← Tilbake til modul
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{demo.tittel}</h1>
          <p className="text-gray-600 mt-2">{demo.beskrivelse}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-700 mb-4">{demo.instruksjoner}</p>
        </div>

        <Suspense fallback={<div className="text-center py-8">Laster demo...</div>}>
          <DemoComponent />
        </Suspense>
      </div>
    </div>
  )
}
