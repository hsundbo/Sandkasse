// Markov-kjedegenerator for norsk tekst

const norskTeknologiTekst = `Kunstig intelligens er en av de mest spennende teknologiene i dag.
AI brukes til å løse komplekse problemer og automatisere oppgaver.
Maskinlæring lar datamaskiner lære fra eksempler i stedet for eksplisitte instruksjoner.
Nevrale nettverk er inspirert av hvordan hjernen vår fungerer.
Deep learning har revolusjonert feltet med sitt potensial.
Treningsdata er avgjørende for å få gode AI-systemer.
Bias i data kan føre til urettferdige resultater.
Etikk er viktig når vi utvikler AI-systemer.
Transparens og forklaring av AI-avgjørelser er nødvendig.
Teknologi utvikler seg stadig raskere.
Innovation driver samfunnet fremover.
Data er det nye gullet i digitale økonomien.`

const norskNyheterTekst = `Nye AI-system viser lovende resultater i medisinsk diagnostikk.
Teknologibedrifter investerer milliarder i AI-forskning.
Ansatte verden over får hjelp av AI-verktøy i sitt daglige arbeid.
Regulatorer diskuterer strengere regler for kunstig intelligens.
Universiteter tilbyr nye studier innen machine learning og AI.
Startups lanserer innovative løsninger basert på AI-teknologi.
Eksperter advarer mot teknologi uten tilstrekkelig sikkerhet.
Samarbeid mellom bedrifter og forsking øker innovation.
Kjempe bedrifter åpner AI-sentre i flere byer.
Utviklere deler kunnskapen via åpen kildekode-prosjekter.`

const norskPoesiTekst = `I dataenes hjerte slumrer drømmer av tanker.
Algoritmen danser mellom nuller og enere.
Lyse noder sender signaler gjennom nettet.
Mønstre oppstår som blomster i våren.
Læring flyter som elven mot havet.
Visdom bygges lag for lag, dypt ned.
Ord kombineres i uendelige varianter.
Ord danser med ord i nye melodier.
Tiden berører hvert element med varme.
Håp ligger i hver beregning.`

function buildMarkovChain(tekst, order = 2) {
  const ord = tekst.toLowerCase().split(/\s+/)
  const chain = new Map()

  for (let i = 0; i < ord.length - order; i++) {
    const key = ord.slice(i, i + order).join(' ')
    const nextWord = ord[i + order]

    if (!chain.has(key)) {
      chain.set(key, [])
    }
    chain.get(key).push(nextWord)
  }

  return chain
}

function generateText(chain, length = 50) {
  const keys = Array.from(chain.keys())
  let startKey = keys[Math.floor(Math.random() * keys.length)]
  let text = startKey.split(' ')

  for (let i = 0; i < length - text.length; i++) {
    const currentKey = text.slice(-2).join(' ')
    const possibleWords = chain.get(currentKey)

    if (!possibleWords || possibleWords.length === 0) {
      const randomKey = keys[Math.floor(Math.random() * keys.length)]
      text = text.concat(randomKey.split(' '))
    } else {
      const nextWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
      text.push(nextWord)
    }
  }

  return text.slice(0, length).join(' ')
}

export function genererTekst(type = 'teknologi', lengde = 50) {
  let tekst = norskTeknologiTekst

  if (type === 'nyheter') {
    tekst = norskNyheterTekst
  } else if (type === 'poetisk') {
    tekst = norskPoesiTekst
  }

  const chain = buildMarkovChain(tekst, 2)
  return generateText(chain, Math.min(lengde, 200))
}
