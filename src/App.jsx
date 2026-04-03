import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { ProgressProvider } from './context/ProgressContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { LandingPage } from './pages/LandingPage'
import { ModuleOverviewPage } from './pages/ModuleOverviewPage'
import { ModulePage } from './pages/ModulePage'
import { QuizPage } from './pages/QuizPage'
import { DemoPage } from './pages/DemoPage'
import { ProfilePage } from './pages/ProfilePage'

function AppContent() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/moduler" element={<ModuleOverviewPage />} />
            <Route path="/moduler/:moduleId" element={<ModulePage />} />
            <Route path="/moduler/:moduleId/quiz" element={<QuizPage />} />
            <Route path="/demo/:demoId" element={<DemoPage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default function App() {
  return (
    <AppProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </AppProvider>
  )
}
