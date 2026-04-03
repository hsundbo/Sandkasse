export const demos = [
  {
    id: 'image-classifier',
    tittel: 'Bildegjenkjenning med kamera',
    beskrivelse: 'Se hvordan et nevralt nettverk gjenkjenner objekter i sanntid via webkameraet ditt.',
    komponent: 'ImageClassifier',
    relatertModul: 'maskinlaering',
    instruksjoner: 'Klikk "Start kamera" og hold opp gjenstander foran kameraet. Modellen vil gjenkjenne hva som er i bildet.',
  },
  {
    id: 'markov-text',
    tittel: 'Markov-tekstgenerator',
    beskrivelse: 'Generer norsk tekst ved å bruke Markov-kjeder. Se hvordan AI kan lære språkmønstre.',
    komponent: 'MarkovTextGenerator',
    relatertModul: 'ai-medier',
    instruksjoner: 'Velg teksttype, lengde, og trykk "Generer tekst". Algoritmen kombinerer ord basert på mønstre den har lært.',
  },
  {
    id: 'neural-network-viz',
    tittel: 'Nevralt nettverk visualisering',
    beskrivelse: 'Se visuelt hvordan et nevralt nettverk fungerer med animasjoner og interaksjoner.',
    komponent: 'NeuralNetworkViz',
    relatertModul: 'hva-er-ai',
    instruksjoner: 'Trykk "Kjør signal" for å se hvordan data flyter gjennom nettverket. Du kan endre antall lag med slideren.',
  },
  {
    id: 'bias-explorer',
    tittel: 'Bias-utforsker',
    beskrivelse: 'Interaktiv simulering av hvordan bias i treningsdata påvirker AI-avgjørelser.',
    komponent: 'BiasExplorer',
    relatertModul: 'etikk-bias',
    instruksjoner: 'Juster sliders for å endre treningsdataene, tren modellen, og se hvordan det påvirker resultatene.',
  },
]
