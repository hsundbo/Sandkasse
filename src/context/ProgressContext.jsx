import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { modules } from '../data/modules'

const ProgressContext = createContext(null)

function lagInitialProgress() {
  const moduler = {}
  modules.forEach((m) => {
    moduler[m.id] = {
      lest: false,
      fullforteSeksjoner: [],
      quizForsok: [],
      bestePoeng: null,
      bestatt: false,
    }
  })
  return { moduler }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useLocalStorage(
    'ki-laering-fremgang',
    lagInitialProgress()
  )

  const markerSeksjonFullfort = (moduleId, seksjonId) => {
    setProgress((prev) => {
      const modul = prev.moduler[moduleId] || { lest: false, fullforteSeksjoner: [], quizForsok: [], bestePoeng: null, bestatt: false }
      if (modul.fullforteSeksjoner.includes(seksjonId)) return prev
      return {
        ...prev,
        moduler: {
          ...prev.moduler,
          [moduleId]: {
            ...modul,
            fullforteSeksjoner: [...modul.fullforteSeksjoner, seksjonId],
          },
        },
      }
    })
  }

  const markerModulLest = (moduleId) => {
    setProgress((prev) => ({
      ...prev,
      moduler: {
        ...prev.moduler,
        [moduleId]: {
          ...(prev.moduler[moduleId] || {}),
          lest: true,
        },
      },
    }))
  }

  const lagreQuizResultat = (moduleId, poeng, maksPoeng) => {
    setProgress((prev) => {
      const modul = prev.moduler[moduleId] || { lest: false, fullforteSeksjoner: [], quizForsok: [], bestePoeng: null, bestatt: false }
      const bestatt = poeng / maksPoeng >= 0.6
      const bestePoeng = modul.bestePoeng === null ? poeng : Math.max(modul.bestePoeng, poeng)
      return {
        ...prev,
        moduler: {
          ...prev.moduler,
          [moduleId]: {
            ...modul,
            lest: true,
            bestatt: modul.bestatt || bestatt,
            bestePoeng,
            quizForsok: [
              ...modul.quizForsok,
              { dato: new Date().toISOString(), poeng, maksPoeng },
            ],
          },
        },
      }
    })
  }

  const hentModulStatus = (moduleId) => {
    return progress.moduler[moduleId] || { lest: false, fullforteSeksjoner: [], quizForsok: [], bestePoeng: null, bestatt: false }
  }

  const totalFremgang = () => {
    const totalModuler = modules.length
    const bestatte = Object.values(progress.moduler).filter((m) => m.bestatt).length
    return Math.round((bestatte / totalModuler) * 100)
  }

  const nullstill = () => {
    setProgress(lagInitialProgress())
  }

  return (
    <ProgressContext.Provider
      value={{ progress, markerSeksjonFullfort, markerModulLest, lagreQuizResultat, hentModulStatus, totalFremgang, nullstill }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
