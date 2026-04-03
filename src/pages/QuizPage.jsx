import { useParams, useNavigate } from 'react-router-dom'
import { useQuiz } from '../hooks/useQuiz'
import { useProgress } from '../context/ProgressContext'
import { modules } from '../data/modules'
import { QuestionCard } from '../components/quiz/QuestionCard'
import { QuizResult } from '../components/quiz/QuizResult'
import { Button } from '../components/ui/Button'

export function QuizPage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = modules.find((m) => m.id === moduleId)

  const quizId = module ? `quiz-${module.id}` : null
  const {
    quiz,
    navaerende,
    svar,
    vistForklaring,
    ferdig,
    handleSvarValgt,
    handleNesteSporsmal,
    beregnPoeng,
    nullstill,
  } = useQuiz(quizId)

  const { lagreQuizResultat } = useProgress()

  if (!quiz || !module) {
    return <div className="text-center py-8">Quiz ikke funnet</div>
  }

  if (ferdig) {
    const poeng = beregnPoeng()
    const maksPoeng = quiz.sporsmal.reduce((sum, q) => sum + q.poeng, 0)

    // Lagre resultatet i context
    lagreQuizResultat(moduleId, poeng, maksPoeng)

    const svarData = {}
    quiz.sporsmal.forEach((q) => {
      svarData[q.id] = svar[q.id] || {}
    })

    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <QuizResult
          poeng={poeng}
          maksPoeng={maksPoeng}
          sporsmal={quiz.sporsmal}
          svar={svarData}
          onGjentagQuiz={() => {
            nullstill()
          }}
        />
      </div>
    )
  }

  const sporsmal = quiz.sporsmal[navaerende]
  const svarValgt = svar[sporsmal.id]?.id || null

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(`/moduler/${moduleId}`)}
        className="text-brand-600 hover:text-brand-700 mb-6 inline-block"
      >
        ← Tilbake til modul
      </button>

      <QuestionCard
        sporsmal={sporsmal}
        navaerende={navaerende}
        total={quiz.sporsmal.length}
        svarValgt={svarValgt}
        onSvarValgt={handleSvarValgt}
        vistForklaring={vistForklaring}
      />

      <div className="flex justify-center mt-8">
        {vistForklaring && (
          <Button
            variant="primary"
            size="lg"
            onClick={handleNesteSporsmal}
          >
            {navaerende === quiz.sporsmal.length - 1 ? 'Se resultat' : 'Neste spørsmål'}
          </Button>
        )}
      </div>
    </div>
  )
}
