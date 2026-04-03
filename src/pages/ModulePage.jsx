import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { modules } from '../data/modules'
import { demos } from '../data/demos'
import { useProgress } from '../context/ProgressContext'
import { ArticleRenderer } from '../components/modules/ArticleRenderer'
import { Button } from '../components/ui/Button'

export function ModulePage() {
  const { moduleId } = useParams()
  const module = modules.find((m) => m.id === moduleId)
  const { markerModulLest } = useProgress()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    markerModulLest(moduleId)

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [moduleId, markerModulLest])

  if (!module) {
    return <div className="text-center py-8">Modul ikke funnet</div>
  }

  const demo = module.demoId ? demos.find((d) => d.id === module.demoId) : null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link to="/moduler" className="text-brand-600 hover:text-brand-700 mb-4 inline-block">
            ← Tilbake til moduler
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{module.tittel}</h1>
          <p className="text-gray-600 mt-2">{module.estimertTid}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-500 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">Leseprogress: {scrollProgress}%</p>
        </div>

        <ArticleRenderer seksjoner={module.seksjoner} />

        {demo && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Praktisk demo: {demo.tittel}</h3>
            <p className="text-gray-700 mb-4">{demo.beskrivelse}</p>
            <Link to={`/demo/${demo.id}`}>
              <Button variant="primary">Åpne demo</Button>
            </Link>
          </div>
        )}

        <div className="mt-12 max-w-3xl mx-auto">
          <Link to={`/moduler/${module.id}/quiz`}>
            <Button variant="success" size="lg" className="w-full">
              Ta quiz →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
