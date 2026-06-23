window.DATA = window.DATA || {};
window.DATA.flashcards = window.DATA.flashcards || [];
window.DATA.theory = window.DATA.theory || [];
window.DATA.quiz = window.DATA.quiz || [];

/* =========================================================
   FLASHCARDS – alle 17 Katalogfragen (203-01 … 203-17)
   Block 203: Exceptions & Exception Handling
   ========================================================= */
window.DATA.flashcards.push(
  {
    id: "203-01", topicId: "203",
    question: "Was ist eine Exception?",
    answerVerbose: `<p>Eine Exception ist ein <b>Objekt</b>, das ein außergewöhnliches Ereignis (einen Fehler) zur <b>Laufzeit</b> repräsentiert und den normalen Programmablauf unterbricht.</p>
<p>Tritt ein solches Ereignis auf (z. B. Division durch 0, Datei nicht gefunden), wird ein Exception-Objekt erzeugt und „geworfen\" (<code>throw</code>). Es wandert den Aufrufstapel hinauf, bis es von einem passenden <code>catch</code>-Block behandelt wird. Geschieht das nicht, stürzt das Programm ab.</p>
<p>Eine Exception ist also eine strukturierte Alternative zu Fehlercodes: Fehler werden als Objekte mit Typ und Nachricht behandelt.</p>`,
    answerExam: `<p>Ein Objekt, das einen Fehler/außergewöhnliches Ereignis zur Laufzeit repräsentiert und den normalen Ablauf unterbricht. Es wird geworfen und kann gefangen und behandelt werden.</p>`,
    code: `throw new IllegalArgumentException("age must be >= 0");`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-02", topicId: "203",
    question: "Was ist das Ziel von Exception Handling?",
    answerVerbose: `<p>Ziel ist es, auf Fehler <b>kontrolliert</b> zu reagieren, statt das Programm abstürzen zu lassen. Konkret:</p>
<ul>
  <li>Den normalen Code (Happy Path) von der Fehlerbehandlung <b>trennen</b> – der eigentliche Ablauf bleibt lesbar.</li>
  <li>Fehler an einer geeigneten Stelle behandeln (loggen, Ersatzwert, Benutzer informieren, sauber aufräumen).</li>
  <li><b>Robustheit</b>: das Programm bleibt in einem definierten Zustand und kann ggf. weiterlaufen.</li>
</ul>`,
    answerExam: `<p>Kontrolliert auf Laufzeitfehler reagieren statt abzustürzen: Fehlerbehandlung vom normalen Code trennen, Fehler an passender Stelle behandeln und das Programm robust/stabil halten.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-03", topicId: "203",
    question: "Welche Keywords gibt es beim Exception Handling in Java?",
    answerVerbose: `<p>Fünf Schlüsselwörter:</p>
<ul>
  <li><code>try</code> – umschließt Code, der eine Exception werfen kann.</li>
  <li><code>catch</code> – fängt eine geworfene Exception eines bestimmten Typs und behandelt sie.</li>
  <li><code>finally</code> – Block, der <b>immer</b> ausgeführt wird (für Aufräumarbeiten).</li>
  <li><code>throw</code> – wirft aktiv eine Exception.</li>
  <li><code>throws</code> – deklariert in der Methodensignatur, dass die Methode eine (checked) Exception weitergeben kann.</li>
</ul>`,
    answerExam: `<p><code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code> (Exception werfen) und <code>throws</code> (Exception in der Signatur deklarieren).</p>`,
    code: `try {
    riskyCall();
} catch (IOException e) {
    log(e);
} finally {
    cleanup();
}`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-04", topicId: "203",
    question: "Welche Statements sollten in einem Try-Block stehen?",
    answerVerbose: `<p>In den <code>try</code>-Block gehört <b>nur der Code, der tatsächlich eine Exception werfen kann</b> – und der eng zusammengehörige Folgecode, der nur bei Erfolg sinnvoll ist.</p>
<p>Man sollte den try-Block <b>möglichst klein</b> halten: nicht ganze Methoden umschließen, sondern gezielt die riskante Operation. Das macht klar, welche Anweisung den Fehler verursacht, und verhindert, dass harmlose Statements versehentlich „mitgefangen\" werden.</p>`,
    answerExam: `<p>Nur die Anweisungen, die eine Exception auslösen können (und davon abhängiger Folgecode). Try-Block klein halten, nicht unnötig viel umschließen.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-05", topicId: "203",
    question: "Wann werden die Statements eines Catch-Blocks ausgeführt?",
    answerVerbose: `<p>Ein <code>catch</code>-Block wird nur dann ausgeführt, wenn im zugehörigen <code>try</code>-Block eine Exception geworfen wird, <b>deren Typ zum catch-Parameter passt</b> (gleicher Typ oder eine Oberklasse davon).</p>
<p>Sobald die Exception gefangen ist, wird der restliche try-Code übersprungen und in den passenden catch-Block gesprungen. Läuft der try-Block fehlerfrei durch, wird <b>kein</b> catch-Block ausgeführt.</p>`,
    answerExam: `<p>Nur wenn im try-Block eine Exception auftritt, deren Typ zum catch-Parameter passt (Typ oder Oberklasse). Der restliche try-Code wird dann übersprungen. Ohne Exception läuft kein catch.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-06", topicId: "203",
    question: "Was ist die Exception Hierarchie? Welche Auswirkungen hat sie auf das Exception Handling?",
    answerVerbose: `<p>Alle Exceptions in Java erben von <code>Throwable</code>. Darunter zwei Hauptzweige:</p>
<ul>
  <li><code>Error</code> – schwere, meist nicht behandelbare Systemfehler (z. B. <code>OutOfMemoryError</code>).</li>
  <li><code>Exception</code> – behandelbare Fehler. Darunter <code>RuntimeException</code> (unchecked) und alle anderen (checked).</li>
</ul>
<p><b>Auswirkung:</b> Ein <code>catch</code> für einen Obertyp fängt auch alle Untertypen. Deshalb müssen <b>spezifischere catch-Blöcke vor allgemeineren</b> stehen – ein <code>catch (Exception e)</code> ganz oben würde alles abfangen und spezielle Blöcke unerreichbar machen (Compilerfehler).</p>`,
    answerExam: `<p>Vererbungsbaum: <code>Throwable</code> → <code>Error</code> und <code>Exception</code> (mit <code>RuntimeException</code>). Ein catch fängt auch Untertypen; daher müssen spezielle catch-Blöcke vor allgemeineren stehen, sonst sind sie unerreichbar.</p>`,
    code: `Throwable
 ├─ Error            (unchecked, nicht behandeln)
 └─ Exception
     ├─ RuntimeException  (unchecked)
     └─ IOException, ...  (checked)`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-07", topicId: "203",
    question: "Was ist der Exception Call Stack?",
    answerVerbose: `<p>Der Call Stack ist die Kette der gerade aktiven Methodenaufrufe. Wird eine Exception geworfen und in der aktuellen Methode nicht gefangen, <b>propagiert</b> sie den Stack nach oben zur aufrufenden Methode – und so weiter, bis ein passender catch-Block gefunden wird oder das Programm (mit Stack Trace) abbricht.</p>
<p>Der <b>Stack Trace</b> (z. B. via <code>printStackTrace()</code>) zeigt genau diesen Pfad: in welcher Methode/Zeile der Fehler entstand und über welche Aufrufe er kam – das wichtigste Werkzeug zur Fehlersuche.</p>`,
    answerExam: `<p>Die Kette der aktiven Methodenaufrufe. Eine ungefangene Exception wandert den Stack hinauf, bis ein catch sie behandelt oder das Programm abbricht. Der Stack Trace zeigt diesen Aufrufpfad.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-08", topicId: "203",
    question: "Wozu verwendet man Multi-Catch Statements? Können mehrere Catch-Block Statements ausgeführt werden?",
    answerVerbose: `<p>Ein <b>Multi-Catch</b> fängt mehrere Exception-Typen in einem einzigen catch-Block, wenn die Behandlung identisch ist – getrennt durch <code>|</code>. Das vermeidet duplizierten Code.</p>
<p><b>Nein</b>, pro geworfener Exception wird <b>nur ein</b> catch-Block ausgeführt: der erste passende. Danach geht es nach dem try/catch weiter (bzw. ins finally). Mehrere catch-Blöcke können also nicht für dieselbe Exception nacheinander laufen.</p>`,
    answerExam: `<p>Multi-Catch (<code>catch (A | B e)</code>) behandelt mehrere Typen mit gleichem Code in einem Block (weniger Duplikate). Pro Exception wird nur ein catch-Block ausgeführt – der erste passende.</p>`,
    code: `try {
    process();
} catch (IOException | SQLException e) {
    log(e);
}`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-09", topicId: "203",
    question: "Erkläre den Finally-Block. Wann wird dieser ausgeführt? Wann sollte man ihn einsetzen?",
    answerVerbose: `<p>Der <code>finally</code>-Block wird <b>immer</b> ausgeführt – egal ob im try-Block eine Exception auftrat oder nicht, und sogar wenn try oder catch ein <code>return</code> enthalten. (Nur ein harter Abbruch wie <code>System.exit()</code> verhindert ihn.)</p>
<p>Einsatz: <b>Aufräumarbeiten</b>, die in jedem Fall passieren müssen – Ressourcen schließen (Datei, DB-Connection, Stream). In modernem Java übernimmt das oft <code>try-with-resources</code> automatisch.</p>`,
    answerExam: `<p>finally läuft immer (mit/ohne Exception, auch bei return; außer bei System.exit). Einsatz: Aufräumen/Ressourcen schließen, das garantiert passieren muss. Alternative: try-with-resources.</p>`,
    code: `try {
    conn = open();
    use(conn);
} finally {
    if (conn != null) conn.close();
}`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-10", topicId: "203",
    question: "Erkläre den Unterschied zwischen Checked und Unchecked Exceptions",
    answerVerbose: `<p><b>Checked Exceptions</b> (z. B. <code>IOException</code>, <code>SQLException</code>) prüft der Compiler: Sie müssen entweder mit try/catch behandelt oder mit <code>throws</code> deklariert werden (<em>handle-or-declare</em>). Sie stehen für vorhersehbare, oft umgebungsbedingte Fehler (Datei fehlt, Netzwerk weg).</p>
<p><b>Unchecked Exceptions</b> erben von <code>RuntimeException</code> (z. B. <code>NullPointerException</code>, <code>IllegalArgumentException</code>). Der Compiler erzwingt keine Behandlung. Sie stehen meist für Programmierfehler.</p>
<p><code>Error</code> ist ebenfalls unchecked, soll aber nicht behandelt werden.</p>`,
    answerExam: `<p>Checked: vom Compiler erzwungen (handle-or-declare), z. B. IOException – vorhersehbare externe Fehler. Unchecked: erben von RuntimeException, keine Behandlungspflicht, z. B. NullPointerException – meist Programmierfehler.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-11", topicId: "203",
    question: "Welche Möglichkeiten gibt es mit Checked Exception umzugehen?",
    answerVerbose: `<p>Es gilt die <b>Handle-or-Declare</b>-Regel – zwei Optionen:</p>
<ul>
  <li><b>Handle</b>: die Exception lokal mit <code>try/catch</code> abfangen und behandeln.</li>
  <li><b>Declare</b>: die Exception mit <code>throws</code> in der Methodensignatur deklarieren und damit an den Aufrufer weitergeben, der dann seinerseits handeln oder weiter deklarieren muss.</li>
</ul>
<p>Ignorieren ist bei checked Exceptions nicht möglich – der Code würde nicht kompilieren.</p>`,
    answerExam: `<p>Handle-or-declare: entweder mit try/catch fangen und behandeln, oder mit <code>throws</code> deklarieren und an den Aufrufer weitergeben. Ignorieren geht nicht (Compilerfehler).</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-12", topicId: "203",
    question: "Was bedeutet es eine Exception zu deklarieren? Welches Keyword wird dazu genutzt?",
    answerVerbose: `<p>Eine Exception zu <b>deklarieren</b> heißt, in der Methodensignatur mit dem Keyword <code>throws</code> anzugeben, dass die Methode diese Exception werfen bzw. weitergeben kann. Die Methode behandelt sie dann selbst nicht, sondern überlässt die Behandlung dem Aufrufer.</p>
<p>Das ist Teil des „Vertrags\" der Methode: Aufrufer wissen, womit sie rechnen müssen, und sind (bei checked Exceptions) gezwungen, ihrerseits zu handeln oder weiterzudeklarieren.</p>`,
    answerExam: `<p>Mit dem Keyword <code>throws</code> in der Signatur angeben, dass die Methode eine Exception weitergeben kann, statt sie selbst zu behandeln. Der Aufrufer muss dann handle-or-declare anwenden.</p>`,
    code: `public void readFile(String path) throws IOException {
    // ... keine eigene Behandlung, Aufrufer ist zuständig
}`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-13", topicId: "203",
    question: "Wann sollte man Exceptions mit Try/Catch handeln bzw. wann sollte man Exceptions in der Methode deklarieren?",
    answerVerbose: `<p>Faustregel: <b>Dort behandeln (try/catch), wo man sinnvoll auf den Fehler reagieren kann</b> – wo genug Kontext da ist, um zu loggen, einen Ersatzwert zu liefern oder den Benutzer zu informieren.</p>
<p><b>Deklarieren (throws)</b>, wenn die aktuelle Methode den Fehler nicht sinnvoll behandeln kann und die Entscheidung besser beim Aufrufer liegt. Eine tiefe Hilfsmethode reicht den Fehler oft nach oben, eine höhere Schicht (z. B. Controller) behandelt ihn dann zentral.</p>`,
    answerExam: `<p>Behandeln, wo man sinnvoll reagieren kann (Kontext für Logging/Ersatz/UI vorhanden). Deklarieren, wenn die Methode nicht sinnvoll reagieren kann und der Aufrufer besser entscheidet.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-14", topicId: "203",
    question: "Welchen Einfluss hat die Exception Hierarchie auf die Unterscheidung Checked und Unchecked Exceptions?",
    answerVerbose: `<p>Die Unterscheidung ergibt sich rein aus der <b>Position in der Vererbungshierarchie</b>:</p>
<ul>
  <li>Alles, was von <code>RuntimeException</code> (oder <code>Error</code>) erbt, ist <b>unchecked</b>.</li>
  <li>Alles andere, das von <code>Exception</code> erbt (aber nicht von RuntimeException), ist <b>checked</b>.</li>
</ul>
<p>Damit entscheidet die Wahl der Oberklasse beim Erstellen einer eigenen Exception automatisch, ob sie checked oder unchecked ist.</p>`,
    answerExam: `<p>Die Hierarchie bestimmt es: erbt eine Exception von <code>RuntimeException</code> (oder <code>Error</code>) → unchecked; erbt sie sonst von <code>Exception</code> → checked. Die gewählte Oberklasse legt den Typ fest.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-15", topicId: "203",
    question: "Was sind Custom Exceptions? Wie werden sie erstellt?",
    answerVerbose: `<p>Custom Exceptions sind <b>eigene Exception-Klassen</b>, die ein domänenspezifisches Fehlerbild ausdrücken (z. B. <code>InsufficientFundsException</code>). Sie machen Fehler sprechender als generische Typen.</p>
<p>Erstellt werden sie, indem man von einer passenden Exception-Oberklasse erbt: von <code>Exception</code> für eine <b>checked</b>, von <code>RuntimeException</code> für eine <b>unchecked</b> Custom Exception. Üblich ist ein Konstruktor, der eine Nachricht (und ggf. eine Ursache) an <code>super</code> weitergibt.</p>`,
    answerExam: `<p>Eigene Exception-Klassen für domänenspezifische Fehler. Erstellen durch Erben von <code>Exception</code> (checked) bzw. <code>RuntimeException</code> (unchecked), meist mit Konstruktor, der Nachricht/Ursache an <code>super</code> reicht.</p>`,
    code: `public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}`,
    source: "203 / Standardwissen"
  },
  {
    id: "203-16", topicId: "203",
    question: "Wann sollte man Custom Exceptions einsetzen?",
    answerVerbose: `<p>Wenn die <b>fachliche Bedeutung</b> eines Fehlers wichtig ist und vorhandene Standard-Exceptions sie nicht klar ausdrücken. Eine eigene Exception:</p>
<ul>
  <li>macht den Fehler im Code lesbar und gezielt fangbar (eigener catch-Typ),</li>
  <li>kann zusätzliche Daten transportieren (z. B. den fehlenden Betrag),</li>
  <li>entkoppelt die Domäne von technischen Detail-Exceptions.</li>
</ul>
<p>Für rein technische, generische Fälle (falsches Argument) reichen oft die Standard-Exceptions.</p>`,
    answerExam: `<p>Wenn ein domänenspezifischer Fehler klar ausgedrückt, gezielt gefangen oder mit Zusatzinfos versehen werden soll und Standard-Exceptions das nicht gut abbilden. Für generische Fälle Standard-Exceptions nutzen.</p>`,
    code: null,
    source: "203 / Standardwissen"
  },
  {
    id: "203-17", topicId: "203",
    question: "Warum sollten Custom Exceptions nicht vom Typ Error erben?",
    answerVerbose: `<p><code>Error</code> ist in Java für <b>schwere, nicht behandelbare Systemfehler</b> der JVM reserviert (z. B. <code>OutOfMemoryError</code>, <code>StackOverflowError</code>). Solche Fehler signalisieren, dass das Programm nicht sinnvoll weiterlaufen kann, und sollen <b>nicht</b> gefangen werden.</p>
<p>Eine eigene, fachliche Ausnahme ist dagegen ein erwartbarer, behandelbarer Zustand. Würde sie von <code>Error</code> erben, wäre sie unchecked und semantisch falsch eingeordnet, würde von <code>catch (Exception)</code> nicht erfasst und Entwickler zur falschen (Nicht-)Behandlung verleiten. Daher: von <code>Exception</code> oder <code>RuntimeException</code> erben, nie von <code>Error</code>.</p>`,
    answerExam: `<p>Weil <code>Error</code> für schwere, nicht behandelbare JVM-Fehler reserviert ist, die man nicht fangen soll. Eine fachliche Custom Exception ist behandelbar und gehört unter <code>Exception</code>/<code>RuntimeException</code> – sonst falsche Semantik und sie wird von <code>catch (Exception)</code> nicht erfasst.</p>`,
    code: null,
    source: "203 / Standardwissen"
  }
);

/* =========================================================
   THEORIE – Block 203
   ========================================================= */
window.DATA.theory.push({
  topicId: "203",
  title: "Exceptions & Exception Handling",
  sections: [
    {
      heading: "Was ist eine Exception?",
      body: `<p>Eine Exception ist ein Objekt, das einen Fehler zur Laufzeit darstellt und den normalen Ablauf unterbricht. Statt Fehlercodes durchzureichen, „wirft\" man ein typisiertes Objekt, das gefangen und behandelt werden kann. Ziel: kontrolliert reagieren statt abstürzen, und den normalen Code von der Fehlerbehandlung trennen.</p>`,
      code: null
    },
    {
      heading: "try / catch / finally",
      body: `<p><code>try</code> umschließt riskanten Code, <code>catch</code> fängt einen passenden Exception-Typ, <code>finally</code> läuft immer (Aufräumen). Pro Exception wird nur der erste passende catch-Block ausgeführt. Den try-Block klein halten.</p>`,
      code: `try {
    int x = Integer.parseInt(input);
} catch (NumberFormatException e) {
    System.out.println("Keine Zahl: " + input);
} finally {
    System.out.println("fertig");
}`
    },
    {
      heading: "Die Exception-Hierarchie",
      body: `<p>Wurzel ist <code>Throwable</code>. <code>Error</code> = schwere JVM-Fehler (nicht behandeln). <code>Exception</code> = behandelbar; darunter <code>RuntimeException</code> (unchecked) und alle übrigen (checked). Ein catch auf einen Obertyp fängt auch alle Untertypen – darum spezielle vor allgemeine catch-Blöcke setzen.</p>`,
      code: null
    },
    {
      heading: "Checked vs. Unchecked & handle-or-declare",
      body: `<p><b>Checked</b> (erben von <code>Exception</code>, nicht von RuntimeException) erzwingt der Compiler: behandeln oder mit <code>throws</code> deklarieren. <b>Unchecked</b> (erben von <code>RuntimeException</code>) brauchen keine Behandlung – meist Programmierfehler. Die Oberklasse beim Erben legt fest, was es wird.</p>`,
      code: `public void load() throws IOException { ... }  // declare
// oder
try { load(); } catch (IOException e) { ... }  // handle`
    },
    {
      heading: "Custom Exceptions",
      body: `<p>Eigene Exceptions drücken fachliche Fehler aus. Von <code>Exception</code> erben → checked, von <code>RuntimeException</code> → unchecked. <b>Nie</b> von <code>Error</code> erben (das ist für nicht behandelbare JVM-Fehler reserviert).</p>`,
      code: `public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(String message) { super(message); }
}`
    }
  ]
});

/* =========================================================
   QUIZ – Block 203
   ========================================================= */
window.DATA.quiz.push(
  {
    id: "q-203-decl-1", topicId: "203", type: "mc",
    prompt: "Eine Methode, die eine andere Methode aufruft, in der eine (checked) Exception deklariert wurde, muss …",
    code: null,
    options: [
      "die Exception in einem catch-Block abfangen ODER sie selbst mit throws deklarieren und weitergeben",
      "die Exception ignorieren",
      "immer das Programm beenden",
      "die Exception in einem try-Block abfangen"
    ],
    correct: [0],
    explanation: "Handle-or-declare: entweder mit try/catch behandeln oder mit throws an den Aufrufer weitergeben."
  },
  {
    id: "q-203-checked-1", topicId: "203", type: "multi",
    prompt: "Welche der folgenden sind typischerweise UNCHECKED Exceptions? (Mehrfachauswahl)",
    code: null,
    options: ["NullPointerException", "IOException", "IllegalArgumentException", "SQLException"],
    correct: [0, 2],
    explanation: "NullPointerException und IllegalArgumentException erben von RuntimeException (unchecked). IOException und SQLException sind checked."
  },
  {
    id: "q-203-finally-1", topicId: "203", type: "mc",
    prompt: "Wann wird ein finally-Block ausgeführt?",
    code: null,
    options: [
      "Nur wenn keine Exception auftrat",
      "Nur wenn eine Exception auftrat",
      "Immer – mit oder ohne Exception, auch bei return (außer bei System.exit)",
      "Nie, wenn ein catch-Block existiert"
    ],
    correct: [2],
    explanation: "finally läuft praktisch immer; nur ein harter Abbruch wie System.exit() verhindert es."
  },
  {
    id: "q-203-order-1", topicId: "203", type: "mc",
    prompt: "Was passiert, wenn catch (Exception e) VOR catch (IOException e) steht?",
    code: `try {
    readFile();
} catch (Exception e) {
    ...
} catch (IOException e) {
    ...
}`,
    options: [
      "Beide Blöcke laufen nacheinander",
      "Compilerfehler – der IOException-Block ist unerreichbar",
      "Nur der IOException-Block läuft",
      "Das Programm stürzt ab"
    ],
    correct: [1],
    explanation: "catch (Exception) fängt bereits alle Untertypen; der speziellere IOException-Block wäre unerreichbar → Compilerfehler. Spezielle vor allgemeine."
  },
  {
    id: "q-203-multi-1", topicId: "203", type: "mc",
    prompt: "Können bei einer einzelnen geworfenen Exception mehrere catch-Blöcke nacheinander ausgeführt werden?",
    code: null,
    options: ["Ja, alle passenden", "Nein, nur der erste passende catch-Block", "Ja, aber nur bei Multi-Catch", "Nur wenn kein finally vorhanden ist"],
    correct: [1],
    explanation: "Pro Exception wird genau ein catch-Block ausgeführt – der erste passende."
  },
  {
    id: "q-203-keyword-1", topicId: "203", type: "mc",
    prompt: "Welches Keyword DEKLARIERT eine Exception in der Methodensignatur (statt sie zu werfen)?",
    code: null,
    options: ["throw", "throws", "catch", "raise"],
    correct: [1],
    explanation: "throws in der Signatur deklariert; throw wirft aktiv eine Exception-Instanz."
  },
  {
    id: "q-203-error-1", topicId: "203", type: "mc",
    prompt: "Warum sollte eine eigene (fachliche) Exception nicht von Error erben?",
    code: null,
    options: [
      "Weil Error nicht kompiliert",
      "Weil Error für schwere, nicht behandelbare JVM-Fehler reserviert ist und nicht gefangen werden soll",
      "Weil Error eine checked Exception ist",
      "Weil Error keine Konstruktoren hat"
    ],
    correct: [1],
    explanation: "Error steht für nicht behandelbare Systemfehler (OutOfMemoryError …). Fachliche, behandelbare Fehler gehören unter Exception/RuntimeException."
  },
  {
    id: "q-203-hierarchy-1", topicId: "203", type: "mc",
    prompt: "Wovon hängt ab, ob eine selbst erstellte Exception checked oder unchecked ist?",
    code: null,
    options: [
      "Vom Namen der Klasse",
      "Von der gewählten Oberklasse (Exception → checked, RuntimeException → unchecked)",
      "Davon, ob ein catch existiert",
      "Vom Package, in dem sie liegt"
    ],
    correct: [1],
    explanation: "Erbt sie von RuntimeException → unchecked; erbt sie sonst von Exception → checked."
  },
  {
    id: "q-203-try-1", topicId: "203", type: "mc",
    prompt: "Welche Anweisungen gehören in den try-Block?",
    code: null,
    options: [
      "Möglichst die ganze Methode",
      "Nur Code, der eine Exception auslösen kann (und davon abhängiger Folgecode)",
      "Nur Variablendeklarationen",
      "Ausschließlich Logging-Aufrufe"
    ],
    correct: [1],
    explanation: "Try-Block klein halten: nur die riskanten Operationen umschließen."
  },
  {
    id: "q-203-purpose-1", topicId: "203", type: "mc",
    prompt: "Was ist das Hauptziel von Exception Handling?",
    code: null,
    options: [
      "Den Code kürzer zu machen",
      "Kontrolliert auf Laufzeitfehler reagieren statt abzustürzen und Fehlerbehandlung vom Normalfall zu trennen",
      "Die Ausführung zu beschleunigen",
      "Compilerwarnungen zu unterdrücken"
    ],
    correct: [1],
    explanation: "Robust auf Fehler reagieren und Happy Path von Fehlerbehandlung trennen."
  },
  {
    id: "q-203-multicatch-1", topicId: "203", type: "mc",
    prompt: "Wofür ist ein Multi-Catch (catch (A | B e)) gedacht?",
    code: null,
    options: [
      "Um mehrere Exceptions gleichzeitig zu werfen",
      "Um mehrere Exception-Typen mit identischem Code in einem Block zu behandeln und Duplikate zu vermeiden",
      "Um finally zu ersetzen",
      "Um eine Exception mehrfach zu fangen"
    ],
    correct: [1],
    explanation: "Mehrere Typen, gleiche Behandlung, ein Block – weniger Code-Duplizierung."
  },
  {
    id: "q-203-stack-1", topicId: "203", type: "mc",
    prompt: "Was geschieht mit einer Exception, die in der aktuellen Methode nicht gefangen wird?",
    code: null,
    options: [
      "Sie verschwindet stillschweigend",
      "Sie propagiert den Call Stack hinauf zur aufrufenden Methode, bis ein catch greift oder das Programm abbricht",
      "Sie wird automatisch zu einem Error",
      "Sie wird in null umgewandelt"
    ],
    correct: [1],
    explanation: "Ungefangene Exceptions wandern den Aufrufstapel hoch; der Stack Trace zeigt diesen Pfad."
  }
);
