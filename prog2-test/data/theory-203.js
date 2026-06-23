window.DATA = window.DATA || {};
window.DATA.theory = window.DATA.theory || [];
window.DATA.theory = window.DATA.theory.filter(u => u.topicId !== '203'); // alte knappe Einheit ersetzen
var sections203 = [];
window.DATA.theory.push({ topicId: '203', title: 'Exceptions & Exception Handling', sections: sections203 });

sections203.push(
  {
    heading: `1. Was ist eine Exception? (Und warum brauchen wir sie?)`,
    body: `<p>Stell dir vor, dein Programm läuft eine Reihe von Schritten ab – wie ein Rezept. Plötzlich passiert etwas Unerwartetes: Eine Datei, die du öffnen willst, existiert nicht. Eine Zahl soll durch 0 geteilt werden. Der Nutzer tippt Buchstaben, wo eine Zahl erwartet wird. Solche außergewöhnlichen Situationen nennt man in Java <b>Exceptions</b> (Ausnahmen).</p>
<p>Technisch ist eine Exception ein <b>Objekt</b>, das einen Fehler zur <b>Laufzeit</b> (also während das Programm läuft) beschreibt. Dieses Objekt enthält Informationen über den Fehler: welcher Typ (z. B. "Datei nicht gefunden"), eine Nachricht, und woher der Fehler kam. Tritt der Fehler auf, wird dieses Objekt <b>geworfen</b> (englisch <i>thrown</i>), und der normale Ablauf wird sofort unterbrochen.</p>
<p><b>Analogie: der Notruf.</b> Stell dir einen Arbeiter am Fließband vor. Läuft alles normal, macht er seine Handgriffe der Reihe nach. Geht aber etwas kaputt, das er selbst nicht reparieren kann, drückt er den Notfallknopf und ruft den Vorgesetzten. Er macht nicht einfach kaputt weiter. Die Exception ist dieser Notruf: ein Signal "hier stimmt etwas nicht, ich kann hier nicht normal weitermachen".</p>
<p><b>Warum nicht einfach Fehlercodes?</b> Früher gaben Funktionen oft spezielle Rückgabewerte zurück, zum Beispiel <code>-1</code> für "Fehler". Das hat zwei Probleme: Erstens kann man den Fehler leicht ignorieren (man prüft den Rückgabewert einfach nicht). Zweitens vermischt sich die Fehlerbehandlung mit dem normalen Code zu einem unübersichtlichen Wust aus <code>if</code>-Abfragen. Exceptions lösen das eleganter: Der normale Code (der "Happy Path") bleibt sauber und lesbar, und die Fehlerbehandlung steht getrennt davon in eigenen Blöcken.</p>
<p><b>Merke:</b> Eine Exception ist ein Fehler-Objekt, das zur Laufzeit entsteht und den normalen Programmablauf unterbricht. Sie kann geworfen, weitergereicht und behandelt werden.</p>`,
    code: `// Eine Exception wird geworfen, wenn etwas schiefgeht:
int[] zahlen = {1, 2, 3};
System.out.println(zahlen[5]);  // Index 5 existiert nicht!
// -> wirft eine ArrayIndexOutOfBoundsException,
//    das Programm bricht an dieser Stelle ab (wenn nicht behandelt).

// Man kann auch selbst eine werfen:
if (alter < 0) {
    throw new IllegalArgumentException("Alter darf nicht negativ sein");
}`
  },
  {
    heading: `2. Das Ziel von Exception Handling`,
    body: `<p><b>Exception Handling</b> (Ausnahmebehandlung) bedeutet, kontrolliert auf solche Fehler zu reagieren, statt das Programm einfach abstürzen zu lassen. Das oberste Ziel lautet meist: <b>Kein unkontrollierter Programmabsturz.</b></p>
<p>Konkret will man mit Exception Handling Folgendes erreichen:</p>
<ul>
<li><b>Robustheit:</b> Das Programm bleibt in einem definierten, stabilen Zustand und kann – wo sinnvoll – weiterlaufen, statt komplett abzustürzen.</li>
<li><b>Trennung von Normalfall und Fehlerfall:</b> Der eigentliche Ablauf bleibt lesbar; die Fehlerbehandlung steht klar abgegrenzt daneben.</li>
<li><b>Sinnvolle Reaktion:</b> Den Fehler protokollieren (loggen), einen Ersatzwert verwenden, es erneut versuchen, oder dem Benutzer eine verständliche Meldung zeigen ("Verbindung fehlgeschlagen, bitte später erneut versuchen") statt eines kryptischen Absturzes.</li>
<li><b>Aufräumen:</b> Offene Ressourcen (Dateien, Datenbankverbindungen) sauber schließen, auch wenn ein Fehler auftritt.</li>
</ul>
<p><b>Warum wichtig?</b> Ein Programm, das bei jedem kleinen Problem abstürzt, ist im echten Einsatz unbrauchbar. Stell dir eine Banking-App vor, die abstürzt, weil das Netzwerk kurz weg war – statt einfach zu sagen "keine Verbindung, versuch es gleich nochmal".</p>`,
    code: null
  },
  {
    heading: `3. try, catch und finally`,
    body: `<p>Java bietet fünf Schlüsselwörter für die Fehlerbehandlung: <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code> und <code>throws</code>. Die ersten drei bilden die eigentliche Behandlungsstruktur.</p>
<ul>
<li><b>try</b> ("versuche"): umschließt den Code, der eine Exception auslösen <i>könnte</i>. Du sagst Java damit: "Pass auf, hier könnte etwas schiefgehen."</li>
<li><b>catch</b> ("fange"): direkt nach dem try-Block. Hier steht, <i>was zu tun ist</i>, wenn eine bestimmte Exception auftritt. In Klammern gibt man den Typ an, den dieser Block behandelt.</li>
<li><b>finally</b> ("schließlich"): ein optionaler Block, der <b>immer</b> ausgeführt wird – ob ein Fehler auftrat oder nicht. Ideal zum Aufräumen.</li>
</ul>
<p><b>Wie läuft das ab?</b> Java führt den try-Block aus. Geht alles gut, werden die catch-Blöcke übersprungen. Tritt im try-Block aber eine Exception auf, stoppt Java sofort an dieser Stelle (der Rest des try-Blocks wird übersprungen) und sucht einen catch-Block, dessen Typ zum Fehler passt. Findet er einen, wird dessen Code ausgeführt. Danach (und auch bei Erfolg) läuft der finally-Block.</p>
<p><b>Was gehört in den try-Block?</b> Nur die Anweisungen, die wirklich eine Exception werfen können, plus der eng zugehörige Folgecode. Halte den try-Block <b>klein</b> – umschließe nicht eine ganze Methode "vorsichtshalber". Ein kleiner try-Block macht klar, welche Operation den Fehler verursacht.</p>
<p><b>Wann läuft ein catch-Block?</b> Nur, wenn im try-Block eine Exception auftritt, deren Typ zum catch-Parameter passt – das heißt: genau dieser Typ oder eine Unterklasse davon. Läuft der try-Block ohne Fehler durch, wird kein catch-Block ausgeführt.</p>`,
    code: `try {
    // riskanter Code:
    int zahl = Integer.parseInt(eingabe);   // kann fehlschlagen
    System.out.println("Doppelt: " + (zahl * 2));
} catch (NumberFormatException e) {
    // läuft NUR, wenn eingabe keine gültige Zahl ist:
    System.out.println("Das war keine Zahl: " + eingabe);
} finally {
    // läuft IMMER, egal ob Fehler oder nicht:
    System.out.println("Verarbeitung abgeschlossen.");
}`
  },
  {
    heading: `4. Der finally-Block im Detail`,
    body: `<p>Der <code>finally</code>-Block ist etwas Besonderes, weil er <b>garantiert ausgeführt wird</b> – und zwar in praktisch allen Fällen:</p>
<ul>
<li>wenn der try-Block normal durchläuft (kein Fehler),</li>
<li>wenn eine Exception auftritt und gefangen wird,</li>
<li>wenn eine Exception auftritt und <i>nicht</i> gefangen wird (er läuft, bevor die Exception weiter nach oben gereicht wird),</li>
<li>sogar wenn im try- oder catch-Block ein <code>return</code> steht – das finally läuft trotzdem noch, kurz bevor die Methode wirklich verlassen wird.</li>
</ul>
<p>Die einzige Ausnahme: Ein harter Abbruch der JVM wie <code>System.exit()</code> verhindert finally.</p>
<p><b>Wofür einsetzen?</b> Für Aufräumarbeiten, die auf jeden Fall passieren müssen, egal wie der try-Block endet: eine Datei schließen, eine Datenbankverbindung freigeben, einen Stream beenden. Würde man das nur am Ende des try-Blocks machen, würde es bei einem Fehler übersprungen – und die Ressource bliebe offen (ein "Ressourcen-Leck").</p>
<p><b>Modernere Alternative: try-with-resources.</b> Für das Schließen von Ressourcen bietet Java eine elegantere Form. Ressourcen, die in den runden Klammern nach <code>try</code> deklariert werden, schließt Java automatisch – man braucht kein manuelles finally mehr.</p>`,
    code: `// Klassisch mit finally:
Connection conn = null;
try {
    conn = datenbank.oeffnen();
    conn.abfrage();
} finally {
    if (conn != null) conn.close();  // wird garantiert ausgeführt
}

// Moderner mit try-with-resources (schließt automatisch):
try (Connection conn = datenbank.oeffnen()) {
    conn.abfrage();
}   // conn.close() passiert hier automatisch`
  },
  {
    heading: `5. Die Exception-Hierarchie`,
    body: `<p>In Java sind Exceptions ganz normale Klassen, die voneinander erben. Diese Vererbung bildet einen Baum, die <b>Exception-Hierarchie</b>. Sie zu kennen ist prüfungsrelevant, weil sie bestimmt, wie das Fangen funktioniert.</p>
<p>An der Wurzel steht <code>Throwable</code> ("das Werfbare"). Nur Objekte dieser Klasse (und ihrer Unterklassen) kann man werfen und fangen. Darunter gibt es zwei große Äste:</p>
<ul>
<li><b>Error:</b> schwere Fehler der Java-Laufzeitumgebung selbst, die ein normales Programm nicht sinnvoll behandeln kann – z. B. <code>OutOfMemoryError</code> (Speicher voll) oder <code>StackOverflowError</code>. Solche Fehler soll man <b>nicht</b> fangen; das Programm kann ohnehin nicht sinnvoll weiterlaufen.</li>
<li><b>Exception:</b> die behandelbaren Fehler – das, womit wir normalerweise arbeiten. Darunter gibt es wieder einen wichtigen Sonderast: <code>RuntimeException</code>.</li>
</ul>
<p><b>Die wichtigste Auswirkung auf das Handling:</b> Ein <code>catch</code> für einen Obertyp fängt automatisch auch alle Untertypen. Ein <code>catch (Exception e)</code> fängt also so gut wie alles. Deshalb gilt die Regel: <b>Spezifischere catch-Blöcke müssen vor allgemeineren stehen.</b> Stünde <code>catch (Exception e)</code> ganz oben, würde es alle Fehler "abfangen", und ein darunter stehender spezieller Block (z. B. für <code>IOException</code>) wäre nie erreichbar – Java meldet das sogar als Compilerfehler.</p>`,
    code: `Throwable
 ├─ Error                  (NICHT behandeln: OutOfMemoryError, ...)
 └─ Exception
     ├─ RuntimeException   (unchecked: NullPointerException, ...)
     │    └─ IllegalArgumentException, ArithmeticException, ...
     └─ IOException, SQLException, ...   (checked)

// Reihenfolge: speziell vor allgemein!
try {
    lies();
} catch (FileNotFoundException e) {   // spezieller zuerst
    ...
} catch (IOException e) {              // allgemeiner danach
    ...
}`
  },
  {
    heading: `6. Checked vs. Unchecked Exceptions`,
    body: `<p>Das ist eines der wichtigsten – und am häufigsten geprüften – Themen. Java teilt Exceptions in zwei Gruppen ein, je nachdem, ob der <b>Compiler</b> ihre Behandlung erzwingt.</p>
<p><b>Checked Exceptions</b> ("geprüfte" Ausnahmen). Diese erbt eine Klasse von <code>Exception</code> (aber <i>nicht</i> von RuntimeException). Beispiele: <code>IOException</code>, <code>SQLException</code>. Der Compiler <b>zwingt</b> dich, sie zu behandeln – sonst kompiliert dein Programm nicht. Sie stehen typischerweise für vorhersehbare Probleme aus der Umgebung, auf die man vorbereitet sein sollte: Datei fehlt, Netzwerk weg, Datenbank nicht erreichbar.</p>
<p><b>Unchecked Exceptions</b> ("ungeprüfte" Ausnahmen). Diese erben von <code>RuntimeException</code>. Beispiele: <code>NullPointerException</code>, <code>IllegalArgumentException</code>, <code>ArithmeticException</code>. Der Compiler verlangt <b>keine</b> Behandlung. Sie stehen meist für <b>Programmierfehler</b> – Dinge, die man durch besseren Code von vornherein vermeiden sollte (z. B. nicht auf <code>null</code> zugreifen). Auch <code>Error</code> ist technisch unchecked.</p>
<p><b>Wovon hängt checked/unchecked ab?</b> Allein von der Position in der Hierarchie: Erbt eine Exception von <code>RuntimeException</code> (oder <code>Error</code>), ist sie unchecked. Erbt sie sonst von <code>Exception</code>, ist sie checked. Beim Erstellen einer eigenen Exception entscheidet also die gewählte Oberklasse.</p>
<p><b>Merke:</b> Checked = Compiler erzwingt Behandlung = "rechne mit diesem äußeren Problem". Unchecked = keine Pflicht = "das ist meist ein Bug, behebe die Ursache".</p>`,
    code: `// CHECKED: muss behandelt oder deklariert werden, sonst Compilerfehler
public void lies() throws IOException {   // IOException ist checked
    Files.readString(Path.of("daten.txt"));
}

// UNCHECKED: keine Pflicht (entsteht hier durch einen Programmierfehler)
String s = null;
s.length();   // NullPointerException (RuntimeException) zur Laufzeit`
  },
  {
    heading: `7. Umgang mit checked Exceptions: handle or declare`,
    body: `<p>Wenn dein Code eine Methode aufruft, die eine <b>checked</b> Exception werfen kann, zwingt dich der Compiler zu einer von zwei Reaktionen. Diese Regel heißt <b>handle-or-declare</b> ("behandeln oder deklarieren"):</p>
<ol>
<li><b>Handle (behandeln):</b> Du fängst die Exception hier und jetzt mit <code>try/catch</code> und kümmerst dich darum.</li>
<li><b>Declare (deklarieren):</b> Du gibst mit dem Schlüsselwort <code>throws</code> in deiner eigenen Methodensignatur an, dass auch deine Methode diese Exception weitergeben kann. Damit reichst du die Verantwortung an deinen Aufrufer weiter – der muss dann seinerseits handeln oder deklarieren.</li>
</ol>
<p>Eine checked Exception einfach ignorieren geht <b>nicht</b> – der Code würde nicht kompilieren. Das ist der ganze Sinn von "checked": Der Compiler stellt sicher, dass niemand den Fehler stillschweigend übergeht.</p>
<p><b>throw vs. throws – nicht verwechseln!</b></p>
<ul>
<li><code>throw</code> (ohne s) <i>wirft</i> aktiv eine Exception-Instanz: <code>throw new IOException("...");</code></li>
<li><code>throws</code> (mit s) steht in der <i>Methodensignatur</i> und <i>deklariert</i>, dass die Methode eine Exception weitergeben kann.</li>
</ul>
<p><b>Wann behandeln, wann deklarieren?</b> Faustregel: Behandle die Exception dort, wo du <i>sinnvoll reagieren</i> kannst – wo genug Kontext da ist, um zu loggen, einen Ersatzwert zu liefern oder dem Nutzer etwas Verständliches zu sagen. Kann die aktuelle Methode nicht sinnvoll reagieren, reiche die Exception per <code>throws</code> nach oben, wo eine höhere Schicht (z. B. ein Controller) sie zentral behandelt. Oft reichen tiefe Hilfsmethoden den Fehler nach oben, und eine zentrale Stelle fängt ihn.</p>`,
    code: `// Variante 1: HANDLE (hier behandeln)
public String leseDatei(String pfad) {
    try {
        return Files.readString(Path.of(pfad));
    } catch (IOException e) {
        return "";   // sinnvolle Reaktion: leeren Text zurueckgeben
    }
}

// Variante 2: DECLARE (weiterreichen an den Aufrufer)
public String leseDatei(String pfad) throws IOException {
    return Files.readString(Path.of(pfad));   // Aufrufer ist zustaendig
}`
  },
  {
    heading: `8. Multi-Catch`,
    body: `<p>Manchmal können in einem try-Block mehrere verschiedene Exception-Typen auftreten, die du aber alle <b>gleich</b> behandeln willst. Statt mehrere fast identische catch-Blöcke zu schreiben, kannst du sie in einem <b>Multi-Catch</b> zusammenfassen – die Typen werden mit einem senkrechten Strich <code>|</code> getrennt.</p>
<p>Das vermeidet doppelten Code (DRY – "Don't Repeat Yourself"). Wichtig zu verstehen: <b>Pro geworfener Exception wird immer nur ein einziger catch-Block ausgeführt</b> – nämlich der erste passende. Es laufen niemals mehrere catch-Blöcke nacheinander für denselben Fehler. Ein Multi-Catch ist nur eine kompakte Schreibweise für "behandle Typ A oder Typ B mit demselben Code".</p>`,
    code: `// Statt zwei fast gleicher Bloecke:
try {
    verarbeite();
} catch (IOException e) {
    log(e);
} catch (SQLException e) {
    log(e);
}

// kuerzer mit Multi-Catch:
try {
    verarbeite();
} catch (IOException | SQLException e) {
    log(e);   // gleiche Behandlung fuer beide Typen
}`
  },
  {
    heading: `9. Custom Exceptions (eigene Exceptions)`,
    body: `<p>Java liefert viele fertige Exception-Typen mit. Manchmal aber willst du einen Fehler ausdrücken, der speziell zu deinem Programm gehört – etwa "Konto hat nicht genug Guthaben". Dafür erstellst du eine <b>Custom Exception</b>, also eine eigene Exception-Klasse.</p>
<p><b>Wie erstellt man sie?</b> Indem man von einer passenden Exception-Oberklasse erbt:</p>
<ul>
<li>von <code>Exception</code> erben → die Custom Exception ist <b>checked</b> (Aufrufer müssen sie behandeln/deklarieren).</li>
<li>von <code>RuntimeException</code> erben → sie ist <b>unchecked</b> (keine Behandlungspflicht).</li>
</ul>
<p>Üblich ist ein Konstruktor, der eine Nachricht (und optional die ursprüngliche Ursache) an die Oberklasse via <code>super(...)</code> weitergibt.</p>
<p><b>Wann einsetzen?</b> Wenn die <i>fachliche Bedeutung</i> eines Fehlers wichtig ist und Standard-Exceptions sie nicht klar ausdrücken. Vorteile: Der Code wird lesbarer (<code>catch (InsufficientFundsException e)</code> sagt sofort, worum es geht), man kann gezielt nur diesen Fehler fangen, und die Exception kann zusätzliche Daten transportieren (z. B. den fehlenden Betrag).</p>
<p><b>Warum NICHT von Error erben?</b> <code>Error</code> ist für schwere, nicht behandelbare Fehler der JVM reserviert, die man bewusst <i>nicht</i> fangen soll. Eine eigene fachliche Exception ist aber ein erwartbarer, behandelbarer Zustand. Würde sie von <code>Error</code> erben, wäre sie semantisch falsch eingeordnet, würde von einem normalen <code>catch (Exception e)</code> nicht erfasst und würde Entwickler dazu verleiten, sie falsch (gar nicht) zu behandeln. Deshalb: eigene Exceptions immer von <code>Exception</code> oder <code>RuntimeException</code> ableiten, nie von <code>Error</code>.</p>`,
    code: `// Eine eigene, fachliche Exception (hier unchecked):
public class InsufficientFundsException extends RuntimeException {
    private final double fehlbetrag;

    public InsufficientFundsException(String message, double fehlbetrag) {
        super(message);              // Nachricht an Oberklasse
        this.fehlbetrag = fehlbetrag; // Zusatzdaten transportieren
    }
    public double getFehlbetrag() { return fehlbetrag; }
}

// Verwendung:
if (betrag > kontostand) {
    throw new InsufficientFundsException("Nicht genug Guthaben", betrag - kontostand);
}`
  }
);
