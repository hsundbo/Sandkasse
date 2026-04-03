import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [elev, setElev] = useLocalStorage('ai-laering-elev', {
    navn: '',
    program: null, // 'IM' | 'MK' | null
  })

  const oppdaterElev = (felt, verdi) => {
    setElev((prev) => ({ ...prev, [felt]: verdi }))
  }

  return (
    <AppContext.Provider value={{ elev, oppdaterElev }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
