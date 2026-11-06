
# BLOOM - Landing page --- ![Logo Bloom](img/logo.png)


Questa repository contiene il codice sorgente di una landing pare, sviluppata per **BLOOM**. La piattaforma è progettata per accogliere il cliente, presentare l'azienda e i servizi offerti.

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
- [Aggiornamenti](#aggiornamenti)
- [Realizzato da](#realizzato-da)


### Funzionalità

L'applicazione ha un'interfaccia moderna e minimale con uno stile visivo pulito e curato. 

## Anteprima

- [Pagina principale](assets/)

## Tecnologie Utilizzate

- **HTML5**: Strutturazione semantica dell'interfaccia utente.
- **CSS3**: Styling moderno e layout responsive.
- **JavaScript (ES6+)**: Gestione dello stato dell'applicazione, timer dinamico, logica del quiz e calcolo del punteggio finale.

## Come Eseguire il Progetto Locale

1. **Clona il repository**:
   ```bash
   git clone https://github.com/lisasciacca/progetto-settimana-5
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

L'applicazione è costruita sul modello one-page.

## Albero del dom


## Come funziona

Le domande sono oggetti in un array chiamato "QUESTIONS". Ogni oggetto ha una proprietà domanda "question", una proprietà "correct_answer" contenente la risposta corretta e un array "incorrect_answers" contenente le risposte errate:

```js
{
 array:

}
```

### Aspetto grafico

L'applicazione si presenta con un design pulito, moderno e minimale, progettato per offrire un'esperienza visiva professionale ed elegante. L'applicazione è inoltre pensata per essere mobile-first, con il design che varia leggermente a mano a mano che la dimensione dello schermo cresce.
Si sviluppa su un'impostazione incentrata su toni scuri e chiari ben bilanciati, con una forte enfasi sul colore primario del brand: un verde elegante e naturale (tonalità basata su HSL 150, 60%, 30%), utilizzato per loghi, dettagli in evidenza e stati interattivi.
Gli sfondi alternano sezioni luminose a blocchi scuri (#121212) per creare un piacevole contrasto visivo e dare profondità alla struttura a sezioni.
Vengono impiegati font sans-serif lineari e altamente leggibili, con gerarchie ben definite (titoli d'impatto, sottotitoli tracciati e testi descrittivi con un’ottimizzata altezza di riga per una lettura confortevole)

### Aggiornamenti 

ver. 0 - File di base
ver. 0.1 - Prima versione della pagina HTML aggiunta
ver. 1.0 - Prima versione della pagina CSS aggiunta


### Convenzioni di codice

- **camelCase** e lingua inglese per tutto.
- **Commenti che favoriscono la comprensione del codice**.

### Realizzato da

| Persona | Ruolo |

| Lisa Irene Sciacca | README, HTML, CSS, javaScript |
