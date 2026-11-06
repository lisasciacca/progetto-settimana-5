
# BLOOM - Piattaforma Quiz d'Esame --- ![Logo Bloom](assets)


Questa repository contiene il codice sorgente di un'applicazione web interattiva per la gestione di , sviluppata per **BLOOM**. La piattaforma è progettata per .

---

> **Stato del progetto:** in fase di sviluppo. Questo file viene aggiornato a mano a mano che il progetto viene realizzato. Consulta le relative sezione per vedere lo stato di queste ultime.

## Indice
- [Funzionalità](#funzionalità)
- [Anteprima](#Anteprima)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Come Eseguire il Progetto Locale](#come-eseguire-il-progetto-locale)
- [Struttura del progetto](#struttura-del-progetto)
- [Architettura](#architettura)
- [Albero del dom](#albero-del-dom)
- [Come funziona](#come-funziona)
- [Convenzioni di codice](#convenzioni-di-codice)
- [Il team 5 e il flusso di lavoro](#il-team-5-e-il-flusso-di-lavoro)


### Funzionalità

L'applicazione ha un'interfaccia moderna e reattiva con uno stile visivo curato e un flusso utente strutturato in tre fasi principali:

1. **Schermata di benvenuto**: presentazione .

**Funzionalità principali:**

- **placeholder** loret ipsum.


## Anteprima

- [Pagina di benvenuto](assets/img/welcome.png)

## Tecnologie Utilizzate

- **HTML5**: Strutturazione semantica dell'interfaccia utente.
- **CSS3**: Styling moderno e layout responsive.
- **JavaScript (ES6+)**: Gestione dello stato dell'applicazione, timer dinamico, logica del quiz e calcolo del punteggio finale.

## Come Eseguire il Progetto Locale

1. **Clona il repository**:
   ```bash
   git clone https://github.com/Fabioiad2/Team-5-Progetto-Build-week-1
   ```

2. **Apri l'applicazione**:
   Apri il file `index.html` direttamente nel tuo browser preferito oppure utilizza un'estensione come **Live Server** su VS Code.

---

## Struttura del progetto

```text
.
├── index.html                 pagina unica con il contenitore #app
├── README.md
└── assets/
    ├── css/
    │    └── style.css         stile
    ├── img/
    │    ├── bg.jpg            sfondo
    └── js/
         └── script.js         pagina che contiene tutte le funzionalità

```

---

### Architettura

L'app segue il pattern **stato → render → eventi**:

1. **Stato**: La variabile "currentScreen" gestisce lo stato dell'applicazione.
2. **Render**: La funzione "render" utilizza la condizione switch per renderizzare a seconda dello stato. Lo stato può assumere tre valori: "welcome", "quiz" e "results".
3. **Eventi**:

---

## Albero del dom


## Come funziona

Le domande sono oggetti in un array chiamato "QUESTIONS". Ogni oggetto ha una proprietà domanda "question", una proprietà "correct_answer" contenente la risposta corretta e un array "incorrect_answers" contenente le risposte errate:

```js
{
 array:

}
```

### 1. Schermata di Benvenuto
- Presentazione delle istruzioni di svolgimento dell'esame.
- Pulsante **"Inizia"** per avviare la sessione di test.

### Aspetto grafico

L'applicazione si presenta con un'interfaccia moderna 

### Convenzioni di codice

- **camelCase** per tutte le variabili e **maiuscolo** per le costanti.
- **Variabili, funzioni, costanti e chiavi degli oggetti in inglese**, con nomi intuitivi.
- **Commenti che favoriscono la comprensione del codice**.
- Solo "const" e "let", mai "var".
- "querySelector" / "querySelectorAll" per il DOM.
- "addEventListener", mai "onclick" inline nell'HTML.

### Realizzato da

| Persona | Ruolo |

| Lisa Irene Sciacca | README, HTML, CSS, javaScript |
