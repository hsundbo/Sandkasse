import { Link } from 'react-router-dom'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ProgressBar } from '../ui/ProgressBar'
import { useProgress } from '../../context/ProgressContext'

export function ModuleCard({ module }) {
  const { hentModulStatus } = useProgress()
  const status = hentModulStatus(module.id)

  const fremgangProsent = status.bestatt ? 100 : (status.fullforteSeksjoner.length / module.seksjoner.length) * 100

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{module.tittel}</h3>
          </div>
          <p className="text-sm text-gray-600">{module.beskrivelse}</p>
        </div>
        {status.bestatt && (
          <div className="text-2xl">✓</div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {module.program.map((prog) => (
          <Badge key={prog} variant={prog === 'IM' ? 'im' : 'mk'}>
            {prog}
          </Badge>
        ))}
      </div>

      <ProgressBar value={fremgangProsent} label="Fremgang" className="mb-4" />

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{module.estimertTid}</p>
        <Link to={`/moduler/${module.id}`}>
          <Button variant="primary" size="sm">
            {status.bestatt ? 'Gjennomgå' : status.lest ? 'Fortsett' : 'Start'}
          </Button>
        </Link>
      </div>
    </div>
  )
}
