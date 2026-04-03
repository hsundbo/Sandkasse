export const modules = [
  {
    id: 'hva-er-ki',
    tittel: 'Hva er kunstig intelligens?',
    slug: 'hva-er-ki',
    beskrivelse: 'En introduksjon til KI og dens grunnleggende begreper.',
    estimertTid: '20 min',
    rekkefølge: 1,
    program: ['IM', 'MK'],
    demoId: 'neural-network-viz',
    quizId: 'quiz-hva-er-ki',
    seksjoner: [
      {
        id: 'intro',
        tittel: 'Hva er KI egentlig?',
        innhold: [
          {
            type: 'tekst',
            data: 'Kunstig intelligens (KI) handler om å lage datamaskiner og programmer som kan utføre oppgaver som vanligvis krever menneskelig intelligens. Dette inkluderer å lære fra erfaringer, gjenkjenne mønstre, forstå språk og ta beslutninger.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Visste du at?',
              tekst: 'Begrepet "Artificial Intelligence" ble først brukt på Dartmouth-konferansen i 1956, der John McCarthy, Marvin Minsky og andre pionerer møttes for å diskutere mulighetene for maskinell intelligens.',
            },
          },
          {
            type: 'tekst',
            data: 'I dag møter du KI daglig: når du skroller gjennom sosiale medier og får personaliserte innlegg, når du bruker søkemotorer som Google, når du bruker stemmeassistenter som Siri eller Google Assistant, og når du ser anbefalinger på Netflix eller Spotify.',
          },
        ],
      },
      {
        id: 'typer-ki',
        tittel: 'Svak KI og Sterk KI',
        innhold: [
          {
            type: 'tekst',
            data: 'Det er viktig å skille mellom to typer kunstig intelligens:',
          },
          {
            type: 'tekst',
            data: '**Svak KI (Narrow KI)**: Dette er KI som er designet for å løse en spesifikk oppgave. Alle KI-systemer som finnes i dag er svak KI. Eksempler er ansiktsgjenkjenning, maskinoversettelse, sjakkdatamaskiner og chatbots. En svak KI kan være veldig god på sin spesifikke oppgave, men den kan ikke overføre kunnskapen til andre oppgaver.',
          },
          {
            type: 'tekst',
            data: '**Sterk KI (General KI eller AGI)**: Dette er hypotetisk KI som kunne utføre hvilket som helst intellektuelt arbeid som et menneske kan gjøre. Sterk KI finnes ennå ikke, men det er et mål for mye KI-forskning. En slik KI ville kunne læres opp på samme måte som mennesker og kunne generalisere kunnskapen til nye oppgaver.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Eksempel',
              tekst: 'Hvis du lager en AI som kan gjenkjenne katter i bilder, kan den vanligvis ikke gjenkjenne hunder uten å bli trent på nytt. Det er et eksempel på svak AI.',
            },
          },
        ],
      },
      {
        id: 'maskinlaering',
        tittel: 'Hva er Maskinlæring?',
        innhold: [
          {
            type: 'tekst',
            data: 'Maskinlæring er en undergruppe av kunstig intelligens. I stedet for at vi programmerer datamaskinen med eksplisitte regler for hvordan den skal løse et problem, gir vi den eksempler og lar den lære mønstre fra dataene selv.',
          },
          {
            type: 'tekst',
            data: 'Tenk på det slik: I tradisjonell programmering skriver vi nøyaktige instruksjoner. I maskinlæring gir vi eksempler og lar algoritmen finne mønstrene selv.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Eksempel fra virkeligheten',
              tekst: 'En e-postfilter bruker maskinlæring. I stedet for at programmøren skriver regler som "hvis e-posten inneholder ordet "kjøp nå", så er det spam", lærer systemet fra tusenvis av eksempler på spam og legitime e-poster, og finner mønstrene selv.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'maskinlaering',
    tittel: 'Maskinlæring og nevrale nettverk',
    slug: 'maskinlaering',
    beskrivelse: 'Forstå hvordan datamaskiner lærer fra data og hva et nevralt nettverk er.',
    estimertTid: '25 min',
    rekkefølge: 2,
    program: ['IM', 'MK'],
    demoId: 'image-classifier',
    quizId: 'quiz-maskinlaering',
    seksjoner: [
      {
        id: 'hva-er-ml',
        tittel: 'Treningsprosessen',
        innhold: [
          {
            type: 'tekst',
            data: 'I maskinlæring følger vi denne prosessen: Vi samler inn data (kalt treningsdata), vi bygger en modell (som er en matematisk funksjon), vi trener modellen ved å la den lære fra dataene, og til slutt tester vi hvor godt den fungerer på nye data den aldri har sett før.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'De tre stegene',
              tekst: '1. **Treningsdata**: Mange eksempler av det vi vil at modellen skal lære. For eksempel tusenvis av bilder av hunder og katter. 2. **Trening**: Modellen justerer sine interne verdier (vekter) basert på eksemplene. 3. **Testing**: Vi sjekker hvor godt modellen gjør det på nye data.',
            },
          },
        ],
      },
      {
        id: 'nevrale-nettverk',
        tittel: 'Hva er et nevralt nettverk?',
        innhold: [
          {
            type: 'tekst',
            data: 'Et nevralt nettverk er inspirert av hvordan hjernen vår fungerer. Det består av lag av "noder" (kunstige nevroner) som er forbundet med hverandre. Hver forbindelse har en "vekt" som bestemmer hvor viktig den forbindelsen er.',
          },
          {
            type: 'tekst',
            data: 'Dataene flyter gjennom nettverket fra inngang (input) gjennom flere skjulte lag til utgang (output). Under trening justeres vektene slik at nettverket lærer å gjøre riktige forutsigelser.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Analogi',
              tekst: 'Tenk på et nevralt nettverk som en hjerne med milliarder av små forbindelser. Hver forbindelse sterkner eller svekkes avhengig av erfaring (treningsdata). Jo mer du bruker en forbindelse, jo sterkere blir den.',
            },
          },
        ],
      },
      {
        id: 'dype-nettverk',
        tittel: 'Dype nevrale nettverk (Deep Learning)',
        innhold: [
          {
            type: 'tekst',
            data: 'Et "dypt" nevralt nettverk har mange lag av noder. Jo flere lag, jo dypere er nettverket. Dype nettverk kan lære veldig komplekse mønstre, men de trenger også mye treningsdata og computing-kraft.',
          },
          {
            type: 'tekst',
            data: 'Deep learning har revolusjonert AI-feltet de siste 10 årene. Det er bak de fleste moderne AI-systemer som ChatGPT, bildegjenkjenning og språkoversettersystemer.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Hvorfor dypt?',
              tekst: 'Hvert lag i et dypt nettverk lærer å gjenkjenne stadig mer komplekse mønstre. Det første laget kan lære om linjer og kanter, det neste laget lærer om former, det tredje laget lærer om objekter, osv.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ki-medier',
    tittel: 'KI i medier og kommunikasjon',
    slug: 'ki-medier',
    beskrivelse: 'Hvordan brukes KI innen media og kommunikasjon? Eksempler og implikasjoner.',
    estimertTid: '20 min',
    rekkefølge: 3,
    program: ['MK'],
    demoId: 'markov-text',
    quizId: 'quiz-ki-medier',
    seksjoner: [
      {
        id: 'ai-innhold',
        tittel: 'AI genererer innhold',
        innhold: [
          {
            type: 'tekst',
            data: 'AI kan nå generere tekst, bilder, video og musikk. Systemer som ChatGPT, Dall-E og Midjourney kan lage innhold som er svært likt menneskeskapt innhold.',
          },
          {
            type: 'tekst',
            data: 'Dette åpner nye muligheter for medieproduksjon: journalist kan få hjelp til å skrive artikler, designere kan generere bilder, musikere kan få AI til å komponere musikk. Men det reiser også spørsmål om autentisitet og hvem som får æren for verket.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Eksempel fra praksis',
              tekst: 'Mange aviser bruker AI til å skrive korte nyhetsartikler om sportskamper eller finansresultater. AI-verktøyet får data og skriver automatisk artikkelen.',
            },
          },
        ],
      },
      {
        id: 'personalisering',
        tittel: 'Personalisering og algoritmer',
        innhold: [
          {
            type: 'tekst',
            data: 'Sosiale medier som Instagram, Facebook, TikTok og YouTube bruker AI-algoritmer til å bestemme hva slags innhold du skal se. Algoritmene analyserer hva du har liket før, hvor lenge du ser på videoer, hvem du følger, og mer.',
          },
          {
            type: 'tekst',
            data: 'Dette skaper en "filter-boble" der du bare ser innhold som algoritmene tror du vil like. Det kan føre til at du bare ser perspektiver som stemmer overens med dine egne, noe som kan polarisere samfunnet.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Konsekvens',
              tekst: 'Personalisering gjør at to mennesker som bruker samme app kan få helt ulike nyhetsfeeder, noe som gjør det vanskelig å ha en felles offentlig samtale.',
            },
          },
        ],
      },
      {
        id: 'misinformasjon',
        tittel: 'Falsk innhold og misinformasjon',
        innhold: [
          {
            type: 'tekst',
            data: 'AI kan brukes til å lage "deepfakes" – falske videoer der det ser ut som at kjente personer sier eller gjør ting de aldri sa eller gjorde. AI kan også brukes til å lage enorme mengder falske nyhetsartikler.',
          },
          {
            type: 'tekst',
            data: 'Dette er en stor utfordring for mediebransjen og samfunnet. Hvordan skal vi kunne stole på innhold når falsk innhold blir så realistisk at det er vanskelig å skille fra sant innhold?',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Løsninger',
              tekst: 'Noen forslag er å kreve at AI-generert innhold merkes tydelig, å bruke AI til å oppdage falsk innhold, og å forbedre mediekompetansen slik at folk blir bedre til å vurdere kilder.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ki-it',
    tittel: 'KI i IT og medieproduksjon',
    slug: 'ki-it',
    beskrivelse: 'Praktisk bruk av KI innen IT og medieproduksjon.',
    estimertTid: '20 min',
    rekkefølge: 4,
    program: ['IM'],
    demoId: 'image-classifier',
    quizId: 'quiz-ki-it',
    seksjoner: [
      {
        id: 'automatisering',
        tittel: 'Automatisering og effektivitet',
        innhold: [
          {
            type: 'tekst',
            data: 'AI kan automatisere mange rutineoppgaver i IT og medieproduksjon. For eksempel kan AI automatisk skille bakgrunnen fra en video, den kan redigere bilder, den kan transkribere lyd til tekst, og den kan redigere video.',
          },
          {
            type: 'tekst',
            data: 'Dette sparer tid for IT-fagfolk og medieprodusenter, slik at de kan fokusere på mer kreativt arbeid. Men det kan også gjøre at færre mennesker trengs for samme mengde arbeid.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Eksempel',
              tekst: 'En fotograf kan bruke AI til å automatisk redigere hundrevis av bilder fra et fotografi-oppdrag, noe som ellers ville tatt timer manuelt.',
            },
          },
        ],
      },
      {
        id: 'kvalitet-og-analyse',
        tittel: 'Kvalitetstest og analyse',
        innhold: [
          {
            type: 'tekst',
            data: 'AI kan brukes til å teste programvare automatisk, til å finne feil i kode, og til å analysere hvordan brukere bruker applikasjoner.',
          },
          {
            type: 'tekst',
            data: 'AI kan også analyse bilder og videoer og gi tilbakemelding om farger, komposisjon, lydkvalitet og mer. Dette hjelper produsenter med å oppfylle kvalitetsstandarder.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Fordel',
              tekst: 'AI kan gjøre testing og analyse 24/7 uten å bli trøtt, noe som øker hastigheten på produksjon.',
            },
          },
        ],
      },
      {
        id: 'ai-verktoy',
        tittel: 'AI-verktøy for produksjon',
        innhold: [
          {
            type: 'tekst',
            data: 'Det finnes mange AI-verktøy som medieprodusenter kan bruke: Adobe har integrert AI i Photoshop og Premiere Pro, og det finnes spesialiserte verktøy for animasjon, 3D-modellering, lydproduksjon og mye mer.',
          },
          {
            type: 'tekst',
            data: 'Som IT- eller medieproduksjons-elev er det viktig å forstå hvordan disse verktøyene fungerer og hvordan du kan integrere AI i dine egne prosjekter.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Fremtiden',
              tekst: 'I fremtiden vil AI-verktøy antagelig være integrert i de fleste programvarer som brukes i IT og medieproduksjon, akkurat som digitale verktøy er i dag.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'etikk-bias',
    tittel: 'Etikk og bias i KI',
    slug: 'etikk-bias',
    beskrivelse: 'Moralske og etiske spørsmål rundt kunstig intelligens.',
    estimertTid: '25 min',
    rekkefølge: 5,
    program: ['IM', 'MK'],
    demoId: 'bias-explorer',
    quizId: 'quiz-etikk-bias',
    seksjoner: [
      {
        id: 'hva-er-bias',
        tittel: 'Hva er bias?',
        innhold: [
          {
            type: 'tekst',
            data: 'Bias betyr at noe er urettferdig skjevt mot en gruppe mennesker. I AI skjer bias når treningsdataene reflekterer fordommer eller når algoritmen lærer diskriminering fra historiske data.',
          },
          {
            type: 'tekst',
            data: 'Hvis du for eksempel trener en AI på gamle CV-er fra en bedrift som historisk har diskriminert kvinner, vil AI-en lære samme diskriminering og automatisk rangere kvinnelige søkere lavere.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Eksempel fra virkeligheten',
              tekst: 'Amazon laget et AI-system for å velge ut ansatte, men måtte skrote det fordi det diskriminerte kvinnelige søkere. Systemet hadde lært fra historiske ansettelsesmønstre der flere menn var blitt ansatt.',
            },
          },
        ],
      },
      {
        id: 'kilder-til-bias',
        tittel: 'Kilder til bias',
        innhold: [
          {
            type: 'tekst',
            data: 'Bias kan oppstå på flere måter:',
          },
          {
            type: 'tekst',
            data: '1. **Datasettet**: Hvis treningsdataene ikke representerer hele populasjonen, eller hvis de inneholder historiske fordommer, vil AI-en lære disse skjevhetene.',
          },
          {
            type: 'tekst',
            data: '2. **Algoritmen**: Selv om dataene er gode, kan algoritmen designes på måter som favoriserer enkelte grupper.',
          },
          {
            type: 'tekst',
            data: '3. **Brukeren**: Mennesker som bruker AI-systemet kan bruke det på urettferdige måter eller stole for mye på det.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Sjekk selv',
              tekst: 'Hvis en AI brukes til å bestemme hvem som skal få lån, eller hvem som skal bli ansatt, kan bias lede til urettferdige beslutninger som påvirker menneskers liv.',
            },
          },
        ],
      },
      {
        id: 'ansvar-og-gjennomsiktighet',
        tittel: 'Ansvar og gjennomsiktighet',
        innhold: [
          {
            type: 'tekst',
            data: 'Når AI brukes til å ta viktige beslutninger, må det være klart hvem som er ansvarlig hvis noe går galt. Og mennesker bør kunne forstå hvorfor AI-en tok en beslutning.',
          },
          {
            type: 'tekst',
            data: 'Dette kalles "explainability" eller forklarelighet. En AI-modell som sier "nei" til et lånesøknad bør kunne forklare hvorfor, ikke bare gi et resultat.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Lovgivning',
              tekst: 'EU har laget "AI Act" som stiller krav til gjennomsiktighet og ansvar for høyrisikoiske AI-systemer.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'fremtiden',
    tittel: 'Fremtiden med AI',
    slug: 'fremtiden',
    beskrivelse: 'Hva venter oss? Mulighetene og utfordringene.',
    estimertTid: '20 min',
    rekkefølge: 6,
    program: ['IM', 'MK'],
    demoId: 'neural-network-viz',
    quizId: 'quiz-fremtiden',
    seksjoner: [
      {
        id: 'utviklinger',
        tittel: 'Kommende utviklinger',
        innhold: [
          {
            type: 'tekst',
            data: 'AI-feltet utvikler seg raskt. Noen kommende trender inkluderer: mer effektive modeller som trenger mindre data, bedre forklarelighet og gjennomsiktighet, sterkere sikkerhetstiltak mot misbruk, og mer fokus på etikk og rettferdighet.',
          },
          {
            type: 'tekst',
            data: 'Vi kan også forvente at AI blir mer integrert i dagliglivet – fra helsevesen til utdanning til undervisning.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'I helsevesenet',
              tekst: 'AI kan hjelpe leger med å diagnostisere sykdommer raskere og mer nøyaktig, basert på medisinske bilder og pasientdata.',
            },
          },
        ],
      },
      {
        id: 'muligheter',
        tittel: 'Muligheter',
        innhold: [
          {
            type: 'tekst',
            data: 'AI har potensial til å løse store globale problemer: det kan hjelpe oss med klimaendringer, å finne kurer for sykdommer, å forbedre utdanning, og å gi bedre innhold til medier og kommunikasjon.',
          },
          {
            type: 'tekst',
            data: 'For deg som elev i IM eller MK-programmet, betyr dette at det finnes mange spennende karrieremuligheter. Etterspørselen etter fagfolk som forstår både teknologi og medier/kommunikasjon vil øke.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Din rolle',
              tekst: 'Du kan bli en som utvikler AI-systemer, som bruker AI-verktøy i kreativ produksjon, eller som vurderer etikken rundt AI-bruk.',
            },
          },
        ],
      },
      {
        id: 'utfordringer',
        tittel: 'Utfordringer',
        innhold: [
          {
            type: 'tekst',
            data: 'Men det finnes også utfordringer: jobber kan bli automatisert bort, privatsonen kan trues av overvåking via AI, miljøkostnaden ved å trene store AI-modeller er høy, og det er usikkerhet om langsikte effekter av veldig avansert AI.',
          },
          {
            type: 'tekst',
            data: 'Samfunnet må finne balansen mellom å utnytte potensialet i AI og å beskytte mennesker og miljø.',
          },
          {
            type: 'faktaboks',
            data: {
              tittel: 'Ditt ansvar',
              tekst: 'Som framtidig medieprodusent eller IT-fagperson må du tenke kritisk på hvordan AI brukes, og sikre at det brukes på etiske måter.',
            },
          },
        ],
      },
    ],
  },
]
