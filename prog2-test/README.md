# Prog2 Prüfungsvorbereitung

Statische Lern-Webapp (Vanilla JS, kein Build) mit drei Modi:

- **Lernen** – Flashcards mit Leitner-Spaced-Repetition (5 Boxen). Pro Karte zwei Antworten: *Verständlich* und *Prüfungsreif*, plus Code-Beispiel. Bewertung „Nochmal / Ok / Sitzt" (Tasten 1/2/3, Aufdecken = Leertaste). Nur Unsicheres kommt wieder.
- **Theorie** – pro Themenblock eine durchgehende Lerneinheit mit Code.
- **Quiz** – auto-korrigierte Fragen (Single-/Multi-Choice, Code-Output) mit Sofort-Erklärung.

Inhalt: 92 Flashcards, 61 Quizfragen, 4 Theorie-Einheiten zu den Blöcken
201 (APIs/MVC/Lambdas/Streams), 202 (Testing/Maven), 203 (Exceptions), 204 (Patterns/SOLID/DI).

## Lokal starten

`index.html` doppelklicken — oder:

```
python3 -m http.server -d app 8080
```
dann http://localhost:8080 öffnen.

## Self-Hosting (Docker)

```
docker build -t prog2-prep app
docker run -p 8080:80 prog2-prep
```

## Entwicklung

```
# Logik-Unit-Tests (Leitner, Quiz, Storage)
node --test app/tests/leitner.test.mjs app/tests/quiz.test.mjs app/tests/storage.test.mjs

# Daten-Schema validieren
node app/tools/validate-data.mjs
```

Der Lernfortschritt (Leitner-Box-Stände) liegt im `localStorage` des Browsers
unter dem Key `prog2-leitner-v1`. Reset-Button in der App löscht ihn.

## Struktur

```
app/
├── index.html
├── css/styles.css
├── js/          leitner.js · quiz.js · storage.js · highlight.js · app.js
├── data/        topics.js · content-201.js … content-204.js
├── tools/       validate-data.mjs
├── tests/       *.test.mjs
└── Dockerfile
```
