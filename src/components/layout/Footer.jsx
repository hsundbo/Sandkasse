export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-2">Om KI-lab</h3>
            <p className="text-sm">En interaktiv læringsapp om kunstig intelligens for IM og MK elever.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Kontakt</h3>
            <p className="text-sm">Spørsmål? Ta kontakt med din lærer.</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Ressurser</h3>
            <p className="text-sm">Mere informasjon om AI finner du på openai.com, deepmind.google og andelen kilder.</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 KI-lab. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  )
}
