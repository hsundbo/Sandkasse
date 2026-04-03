import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useProgress } from '../context/ProgressContext'
import { modules } from '../data/modules'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

export function ProfilePage() {
  const { elev, oppdaterElev } = useApp()
  const { totalFremgang, hentModulStatus, nullstill } = useProgress()

  const handleNullstill = () => {
    if (window.confirm('Er du sikker på at du vil nullstille all fremgang?')) {
      nullstill()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/moduler" className="text-brand-600 hover:text-brand-700 mb-6 inline-block">
        ← Tilbake til moduler
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm">Navn</p>
          <p className="text-2xl font-bold text-gray-900">{elev.navn || 'Ikke angitt'}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm">Program</p>
          <div className="mt-2">
            {elev.program ? (
              <Badge variant={elev.program === 'IM' ? 'im' : 'mk'}>{elev.program}</Badge>
            ) : (
              <p className="text-gray-600">Ikke valgt</p>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-sm">Total fremgang</p>
          <p className="text-2xl font-bold text-accent-600">{totalFremgang()}%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Moduler</h2>

        <div className="space-y-6">
          {modules.map((module) => {
            const status = hentModulStatus(module.id)
            const prosentoen = status.bestatt ? 100 : (status.fullforteSeksjoner.length / module.seksjoner.length) * 100

            return (
              <div key={module.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{module.tittel}</h3>
                    <p className="text-sm text-gray-600">{module.estimertTid}</p>
                  </div>
                  <div className="text-2xl">{status.bestatt ? '✓' : ''}</div>
                </div>

                <ProgressBar value={prosentoen} />

                {status.bestePoeng && (
                  <p className="text-sm text-gray-600 mt-2">
                    Quiz: {status.bestePoeng} poeng (
                    {status.bestatt ? 'Bestått' : 'Ikke bestått'})
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <Link to="/moduler" className="flex-1">
          <Button variant="primary" size="lg" className="w-full">
            Fortsett læring
          </Button>
        </Link>
        <Button variant="secondary" onClick={handleNullstill} size="lg">
          Nullstill fremgang
        </Button>
      </div>
    </div>
  )
}
