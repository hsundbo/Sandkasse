import { useApp } from '../context/AppContext'
import { modules } from '../data/modules'
import { ModuleCard } from '../components/modules/ModuleCard'

export function ModuleOverviewPage() {
  const { elev } = useApp()

  const visningsmoduler = elev.program
    ? modules.filter((m) => m.program.includes(elev.program))
    : modules

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Læringsmoduler</h1>
        <p className="text-gray-600">
          {elev.program === 'IM'
            ? 'Moduler relevant for IT og Medieproduksjon'
            : elev.program === 'MK'
            ? 'Moduler relevant for Medier og Kommunikasjon'
            : 'Alle moduler'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visningsmoduler.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  )
}
