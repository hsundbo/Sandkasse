import { Link } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import { useApp } from '../../context/AppContext'
import { ProgressBar } from '../ui/ProgressBar'

export function Header() {
  const { totalFremgang } = useProgress()
  const { elev } = useApp()

  return (
    <header className="bg-brand-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
              <div className="text-2xl font-bold">🤖</div>
              <div>
                <h1 className="text-xl font-bold">AI-lab</h1>
                <p className="text-xs text-brand-200">Lær om kunstig intelligens</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {elev.program && (
              <div className="text-sm">
                <p className="font-medium">{elev.program}-program</p>
              </div>
            )}
            <div className="w-32">
              <ProgressBar value={totalFremgang()} label="Fremgang" />
            </div>
            <Link to="/profil" className="text-sm font-medium hover:text-brand-200 transition">
              Profil
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
