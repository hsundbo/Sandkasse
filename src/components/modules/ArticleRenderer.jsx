export function ArticleRenderer({ seksjoner }) {
  return (
    <div className="prose-content max-w-3xl mx-auto">
      {seksjoner.map((seksjon) => (
        <div key={seksjon.id} className="mb-8 scroll-mt-24" id={seksjon.id}>
          <h2>{seksjon.tittel}</h2>

          {seksjon.innhold.map((blokk, idx) => {
            if (blokk.type === 'tekst') {
              return (
                <p key={idx} dangerouslySetInnerHTML={{ __html: blokk.data }} />
              )
            }

            if (blokk.type === 'faktaboks') {
              return (
                <div
                  key={idx}
                  className="bg-brand-50 border-l-4 border-brand-500 p-4 my-4 rounded"
                >
                  <h3 className="text-base font-bold text-brand-700 mb-2">
                    {blokk.data.tittel}
                  </h3>
                  <p className="text-gray-700">{blokk.data.tekst}</p>
                </div>
              )
            }

            if (blokk.type === 'bilde') {
              return (
                <figure key={idx} className="my-6">
                  <img
                    src={blokk.data.src}
                    alt={blokk.data.alt}
                    className="w-full rounded-lg shadow-md"
                  />
                  {blokk.data.bildetekst && (
                    <figcaption className="text-sm text-gray-600 italic mt-2">
                      {blokk.data.bildetekst}
                    </figcaption>
                  )}
                </figure>
              )
            }

            return null
          })}
        </div>
      ))}
    </div>
  )
}
