# Portfolio · Thomas Sacchetti

Il mio portfolio personale: una pagina web statica in **HTML, CSS e JavaScript** puro, senza framework né dipendenze da installare.

🔗 **Sito online:** `https://thomas-sacchetti.github.io/thomassacchetti.github.io/`

## Chi sono

Diplomando in Informatica all'IIS Pascal Comandini (Blaise Pascal) di Cesena. Sviluppo in C#, Python, C++ e Kotlin, e mi occupo anche di riparazioni hardware e software, con uso quotidiano di Linux e del terminale. Ho fatto esperienza in azienda come sviluppatore software e un'esperienza Erasmus+ in Portogallo.

## Funzionalità

- Design responsive, adatto a desktop e telefono
- Tema scuro e chiaro, con scelta salvata nel browser
- Effetto macchina da scrivere nella sezione iniziale
- Sezione progetti generata da un unico file, con filtri automatici per tecnologia
- Animazioni all'apparire delle sezioni (disattivate se il sistema richiede meno movimento)
- Nessuna build, nessun `npm install`: si apre direttamente nel browser

## Struttura del progetto

```
.
├── index.html     # Struttura e contenuti della pagina
├── style.css      # Stile, colori e layout
├── script.js      # Tema, animazioni, rendering dei progetti
├── projects.js    # Elenco dei progetti (il file da modificare)
└── README.md
```

## Aggiungere un progetto

Apri `projects.js` e aggiungi un blocco all'array `PROJECTS`:

```js
{
  title: "Nome del progetto",
  description: "Breve descrizione in una o due frasi.",
  tags: ["Python", "Linux"],
  github: "https://github.com/tuo-username/nome-repo",
  download: "https://github.com/tuo-username/nome-repo/releases",
  year: "2026",
},
```

| Campo         | Descrizione                                                  |
| ------------- | ------------------------------------------------------------ |
| `title`       | Nome del progetto                                            |
| `description` | Breve descrizione                                            |
| `tags`        | Tecnologie usate, da cui nascono i filtri                    |
| `github`      | Link alla repository (`""` per nascondere il pulsante)       |
| `download`    | Link a un download o a una demo (`""` per nascondere)        |
| `year`        | Anno, opzionale                                              |

Ricordati la virgola tra un blocco e l'altro.

## Provarlo in locale

1. Scarica o clona la repository:
   ```bash
   git clone https://github.com/TUO-USERNAME/NOME-REPO.git
   cd NOME-REPO
   ```
2. Apri `index.html` nel browser, oppure avvia un piccolo server locale:
   ```bash
   python3 -m http.server 8000
   ```
   e visita `http://localhost:8000`.

## Pubblicarlo con GitHub Pages

1. Carica i file nella repository, nel ramo `main`.
2. Vai in **Settings → Pages**.
3. In **Build and deployment** scegli **Deploy from a branch**, ramo `main`, cartella `/ (root)`.
4. Dopo circa un minuto il sito è online all'indirizzo indicato nella pagina.

## Personalizzazione

- **Colori:** le variabili all'inizio di `style.css` (`--accent`, `--bg`, …) controllano tutta la palette, sia per il tema scuro sia per quello chiaro.
- **Frasi animate:** l'array `phrases` in `script.js`.
- **Testi, esperienze e competenze:** direttamente in `index.html`.
- **Link GitHub nei contatti:** l'elemento con `id="githubLink"` in `index.html`.

## Tecnologie

HTML5 · CSS3 (variabili, grid, flexbox) · JavaScript vanilla · Google Fonts (Space Grotesk, JetBrains Mono)

## Contatti

📧 tt9290890@gmail.com

---

© Thomas Sacchetti. Sentiti libero di prendere spunto dalla struttura del sito; ti chiedo di non copiare i contenuti personali (testi, esperienze, dati).
