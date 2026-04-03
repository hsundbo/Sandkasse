import { useState } from 'react'
import { quizzes } from '../data/quizzes'

export function useQuiz(quizId) {
  const quiz = quizzes.find((q) => q.id === quizId)
  const [navaerende, setNavaerende] = useState(0)
  const [svar, setSvar] = useState({})
  const [vistForklaring, setVistForklaring] = useState(false)
  const [ferdig, setFerdig] = useState(false)

  if (!quiz) {
    return { quiz: null }
  }

  const handleSvarValgt = (altId) => {
    if (!vistForklaring) {
      const alt = quiz.sporsmal[navaerende].alternativer.find((a) => a.id === altId)
      setSvar((prev) => ({
        ...prev,
        [quiz.sporsmal[navaerende].id]: {
          id: altId,
          tekst: alt.tekst,
          korrekt: alt.korrekt,
        },
      }))
      setVistForklaring(true)
    }
  }

  const handleNesteSporsmal = () => {
    if (navaerende < quiz.sporsmal.length - 1) {
      setNavaerende((prev) => prev + 1)
      setVistForklaring(false)
    } else {
      setFerdig(true)
    }
  }

  const beregnPoeng = () => {
    let poeng = 0
    quiz.sporsmal.forEach((q) => {
      if (svar[q.id]?.korrekt) {
        poeng += q.poeng
      }
    })
    return poeng
  }

  const nullstill = () => {
    setNavaerende(0)
    setSvar({})
    setVistForklaring(false)
    setFerdig(false)
  }

  return {
    quiz,
    navaerende,
    svar,
    vistForklaring,
    ferdig,
    handleSvarValgt,
    handleNesteSporsmal,
    beregnPoeng,
    nullstill,
  }
}
