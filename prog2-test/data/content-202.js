window.DATA = window.DATA || {};
window.DATA.flashcards = window.DATA.flashcards || [];
window.DATA.theory = window.DATA.theory || [];
window.DATA.quiz = window.DATA.quiz || [];

/* =========================================================
   FLASHCARDS – alle 25 Katalogfragen (202-01 … 202-25)
   Thema 202: Software Testing & Maven
   ========================================================= */
window.DATA.flashcards.push(

  {
    id: "202-01",
    topicId: "202",
    question: "Erkläre den Unterschied von Error, Fault und Failure anhand eines Beispiels",
    answerVerbose: `<p>Diese drei Begriffe beschreiben eine Kausalkette, wie ein Softwarefehler entsteht und wirkt:</p>
<ul>
  <li><b>Error</b> (Fehlhandlung, <em>mistake</em>): die menschliche Handlung des Programmierers, z. B. ein Tippfehler oder ein Denkfehler in der Logik.</li>
  <li><b>Fault</b> (Fehlerzustand, <em>defect/bug</em>): der dadurch entstandene fehlerhafte Zustand im Quellcode.</li>
  <li><b>Failure</b> (Fehlerwirkung): das nach außen sichtbare Fehlverhalten, das auftritt, <em>wenn</em> der Fault ausgeführt wird.</li>
</ul>
<p><b>Beispiel:</b> Der Entwickler schreibt versehentlich <code>a - b</code> statt <code>a + b</code> (Error). Im Code steht nun eine falsche Berechnung (Fault). Ruft ein Nutzer die Funktion auf und bekommt ein falsches Ergebnis, ist das die Failure.</p>
<p>Wichtig: Nicht jeder Fault führt zwangsläufig zu einer Failure – nur wenn die fehlerhafte Stelle auch ausgeführt wird. Bei <em>Fault Masking</em> verdeckt zudem ein Fault einen anderen.</p>`,
    answerExam: `<p><b>Error</b> = menschliche Fehlhandlung des Programmierers. <b>Fault</b> = der dadurch entstandene Defekt im Code. <b>Failure</b> = das sichtbare Fehlverhalten bei Ausführung des Faults. Beispiel: <code>a-b</code> statt <code>a+b</code> getippt (Error) → falsche Codestelle (Fault) → falsches Ergebnis zur Laufzeit (Failure). Nicht jeder Fault wird zur Failure.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-02",
    topicId: "202",
    question: "Was sind die Ziele von Software-Testing?",
    answerVerbose: `<p>Eine gute Teststrategie beeinflusst direkt die Qualität des Codes und die Zuverlässigkeit des Systems. Die zentralen Ziele laut Vorlesung:</p>
<ul>
  <li><b>Prove fulfillment</b> (Erfüllung nachweisen): prüfen, ob Erwartungen und Anforderungen erfüllt sind.</li>
  <li><b>Have confidence</b> (Vertrauen schaffen): Vertrauen, dass der Code korrekt funktioniert und Änderungen verträgt, ohne dass neue Fehler entstehen.</li>
  <li><b>Share knowledge</b> (Wissen teilen): Tests dienen als eine Form der Dokumentation des erwarteten Verhaltens.</li>
</ul>
<p>Ergänzend: Tests finden Defekte (reduzieren das Risiko unentdeckter Fehler), beugen ihnen vor und ermöglichen sicheres Refactoring.</p>`,
    answerExam: `<p>Ziele: Anforderungen nachweisen (prove fulfillment), Vertrauen in Korrektheit und Änderbarkeit schaffen (have confidence) und Wissen teilen (share knowledge, Tests als Dokumentation). Insgesamt: Defekte finden und Qualität/Zuverlässigkeit sichern.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-03",
    topicId: "202",
    question: "Wie sollten Unit Tests strukturiert sein?",
    answerVerbose: `<p>Ein Unit Test soll <b>genau ein Verhalten</b> testen und <b>schnell sowie isoliert</b> laufen. Strukturiert wird er nach dem Muster <b>AAA</b> (Arrange/Act/Assert) bzw. <b>Given-When-Then</b>:</p>
<ul>
  <li><b>Arrange / Given</b>: Vorbedingung herstellen, Testdaten und Objekte vorbereiten.</li>
  <li><b>Act / When</b>: die zu testende Aktion ausführen (die Funktion aufrufen) – idealerweise nur eine Zeile.</li>
  <li><b>Assert / Then</b>: prüfen, ob die Nachbedingung erfüllt ist (erwartetes Ergebnis).</li>
</ul>
<p>Warnzeichen für schlechte Struktur: mehrere Given-When-Then-Abschnitte, <code>if/else</code> im Test oder mehr als eine Zeile im Act-Teil – dann testet man mehr als ein Verhalten und sollte aufteilen.</p>`,
    answerExam: `<p>Ein Unit Test testet genau ein Verhalten, läuft schnell und isoliert. Struktur nach AAA (Arrange/Act/Assert) bzw. Given-When-Then: Vorbedingung herstellen, eine Aktion ausführen, Ergebnis prüfen. Mehrere When-Zeilen oder if/else sind ein Zeichen, dass man mehr als ein Verhalten testet.</p>`,
    code: `@Test
public void calculate_distance_points_same_position_is_0() {
    // Given
    Point p1 = new Point(1.0, 1.0);
    Point p2 = new Point(1.0, 1.0);
    // When
    double actual = p1.calcDistance(p2);
    // Then
    double expected = 0.0;
    assertEquals(expected, actual, 0.0001);
}`,
    source: "202 / Slides Testing"
  },

  {
    id: "202-04",
    topicId: "202",
    question: "Erkläre das Testprinzip \"Testing shows the presence of defects, not their absence\" in eigenen Worten.",
    answerVerbose: `<p>Dieses Prinzip (nach Dijkstra) besagt: Testen kann <b>zeigen, dass Fehler vorhanden sind</b>, aber niemals <b>beweisen, dass keine Fehler existieren</b>.</p>
<p>Wenn ein Test fehlschlägt, weiß man sicher, dass ein Defekt da ist. Findet man dagegen keine Fehler, heißt das nur, dass die <em>durchgeführten</em> Tests nichts gefunden haben – nicht, dass der Code fehlerfrei ist. Testen reduziert die Wahrscheinlichkeit unentdeckter Fehler, ist aber kein Korrektheitsbeweis. Für einen echten Beweis bräuchte man formale Verifikation.</p>`,
    answerExam: `<p>Tests können die Anwesenheit von Fehlern zeigen, aber nie deren Abwesenheit beweisen. Keine gefundenen Fehler bedeutet nicht fehlerfrei. Testen senkt nur die Wahrscheinlichkeit unentdeckter Defekte; ein Korrektheitsbeweis erfordert formale Verifikation.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-05",
    topicId: "202",
    question: "Erkläre das Testprinzip \"Exhaustive testing is impossible\" anhand eines Beispiels.",
    answerVerbose: `<p>Vollständiges Testen – also <b>alle</b> Kombinationen von Eingaben und Vorbedingungen – ist außer in trivialen Fällen nicht machbar, weil die Zahl der möglichen Eingaben, Ausgaben und Pfade extrem groß wird (<em>combinatorial explosion</em>).</p>
<p><b>Beispiel aus der Vorlesung:</b> Eine Funktion mit 3 Parametern, jeder Parameter 16 Bit → 2<sup>16</sup> = 65.536 mögliche Werte je Parameter. Insgesamt 2<sup>16</sup> · 2<sup>16</sup> · 2<sup>16</sup> = 2<sup>48</sup> ≈ 281 Billionen Kombinationen.</p>
<p>Konsequenz: Statt alles zu testen, nutzt man Risikoanalyse, Testtechniken und Prioritäten, um eine sinnvolle Stichprobe zu wählen.</p>`,
    answerExam: `<p>Alle Eingabekombinationen zu testen ist außer in Trivialfällen unmöglich (kombinatorische Explosion). Beispiel: 3 Parameter à 16 Bit ergeben 2<sup>48</sup> ≈ 281 Billionen Kombinationen. Man wählt daher per Risikoanalyse und Testtechniken eine Stichprobe.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-06",
    topicId: "202",
    question: "Erkläre das Testprinzip \"Early testing saves time and money\" in eigenen Worten.",
    answerVerbose: `<p>Statische und dynamische Testaktivitäten sollten so <b>früh wie möglich</b> im Softwareentwicklungsprozess beginnen. Man spricht auch von <b>Shift Left</b>.</p>
<p>Der Grund: Die Kosten zur Behebung eines Fehlers steigen <b>exponentiell</b>, je später er gefunden wird. Ein Fehler in der Spezifikation, der erst in der Produktion entdeckt wird, ist um ein Vielfaches teurer als einer, der schon beim Schreiben der Anforderung auffällt. Frühes Testen reduziert oder vermeidet kostspielige spätere Änderungen.</p>`,
    answerExam: `<p>Tests sollten so früh wie möglich starten (Shift Left), weil die Kosten der Fehlerbehebung exponentiell steigen, je später ein Fehler gefunden wird. Frühes Finden vermeidet teure späte Änderungen.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-07",
    topicId: "202",
    question: "Erkläre das Testprinzip \"Defects cluster together\" in eigenen Worten.",
    answerVerbose: `<p>Defekte häufen sich: Eine kleine Zahl von Modulen enthält meist die meisten der vor Release gefundenen Defekte bzw. ist für die meisten Ausfälle im Betrieb verantwortlich (Pareto-artige Verteilung).</p>
<p><b>Gründe:</b> Programmierer haben schlechte Tage, wiederholen denselben Fehler, oder Design/Architektur hat ein grundlegendes Problem, das mehrere scheinbar unzusammenhängende Bugs verursacht.</p>
<p><b>Konsequenz:</b> Vorhergesagte und beobachtete Defekt-Cluster sind ein wichtiger Input für die Risikoanalyse – der Testaufwand wird auf diese Hotspots fokussiert. Umkehrschluss: Findet man in einem Bereich wenige Bugs, sind dort vermutlich tatsächlich wenige.</p>`,
    answerExam: `<p>Wenige Module enthalten die meisten Defekte (Cluster, Pareto-Prinzip). Ursachen: wiederholte Fehler, schlechte Designstellen. Folge: Testaufwand auf diese Hotspots fokussieren.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-08",
    topicId: "202",
    question: "Was ist Black-box Testing? Beschreibe eine Technik des Black-box Testing im Detail.",
    answerVerbose: `<p><b>Black-box Testing</b> (auch spezifikationsbasiert, behavioral) leitet Testfälle aus der <b>Testbasis</b> ab, z. B. Anforderungen, Use Cases oder Funktionssignaturen. Man betrachtet nur <b>Eingaben und Ausgaben</b> des Testobjekts, <em>ohne</em> die innere Struktur (den Code) zu kennen. So findet man Abweichungen zwischen Anforderung und Implementierung.</p>
<p><b>Technik: Equivalence Partitioning.</b> Die Eingabedaten werden in disjunkte Klassen (Äquivalenzklassen) zerlegt, für die das Testobjekt das gleiche Verhalten zeigt. Es gibt <em>gültige</em> (vEP) und <em>ungültige</em> (iEP) Klassen. Ein Repräsentant pro Klasse genügt, da er stellvertretend für alle Werte der Klasse steht. Dadurch sinkt die Zahl der Testfälle bei weiterhin 100% Abdeckung der Klassen.</p>
<p>Beispiel-Klasse für Rabatt nach Menge: [1–4] = 0%, [5–7] = 25% usw. Pro Klasse ein Repräsentant testen.</p>`,
    answerExam: `<p>Black-box Testing leitet Testfälle aus der Spezifikation (Anforderungen, Signaturen) ab und betrachtet nur Ein-/Ausgaben ohne Kenntnis des Codes. Technik <b>Equivalence Partitioning</b>: Eingaben in disjunkte Äquivalenzklassen (gültig/ungültig) teilen, pro Klasse einen Repräsentanten testen – reduziert Testfälle bei voller Klassenabdeckung.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-09",
    topicId: "202",
    question: "Was ist White-box Testing? Beschreibe eine Technik des White-box Testing im Detail",
    answerVerbose: `<p><b>White-box Testing</b> (auch strukturbasiert, structural) basiert auf der Analyse der <b>inneren Struktur</b> des Testobjekts: Architektur, detailliertes Design und vor allem der <b>Code</b>. Testfälle werden aus dem Kontrollfluss abgeleitet. Typische Maße: Path-, Statement- (Anweisungs-) und Branch- (Zweig-) Coverage sowie Condition Coverage.</p>
<p><b>Technik: Statement Testing &amp; Coverage.</b> Der Code wird als <em>Kontrollflussgraph</em> dargestellt. Man wählt Testfälle so, dass möglichst alle ausführbaren Anweisungen mindestens einmal durchlaufen werden. Die Statement Coverage C0 berechnet sich als:</p>
<p><code>C0 = (ausgefuehrte Anweisungen / Gesamtzahl Anweisungen) × 100%</code></p>
<p>Hinweis: Ausnahmebehandlung ist schwer testbar, daher sind 100% oft schwer erreichbar.</p>`,
    answerExam: `<p>White-box Testing basiert auf der inneren Codestruktur (Kontrollflussgraph). Testfälle werden aus dem Code abgeleitet. Technik <b>Statement Coverage (C0)</b>: möglichst alle Anweisungen mind. einmal ausführen; <code>C0 = ausgefuehrte / gesamte Anweisungen × 100%</code>.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-10",
    topicId: "202",
    question: "Erkläre Equivalence Partitioning anhand eines von dir gewählten Beispiels. Wie berechnet sich die Anzahl der Testcases?",
    answerVerbose: `<p><b>Equivalence Partitioning</b> teilt die Eingabewerte je Parameter in disjunkte Äquivalenzklassen, für die gleiches Verhalten erwartet wird – getrennt nach gültig (vEP) und ungültig (iEP). Pro Klasse testet man einen Repräsentanten.</p>
<p><b>Beispiel (Rabatt):</b> Parameter <code>amount</code> mit gültigen Klassen [1–4]→0%, [5–7]→25%, [8–12]→33%, ]12–20]→50% (4 gültige) und ungültigen Klassen [MIN..0], ]20..MAX], "keine Zahl" (3 ungültige). Parameter <code>member</code>: gültig False, True (2 gültige) und "kein Boolean" (1 ungültige).</p>
<p><b>Anzahl der Testfälle:</b> Man kombiniert je Parameter <em>einen</em> gültigen Repräsentanten mit den gültigen der anderen Parameter; die ungültigen Klassen testet man jeweils einzeln. Im Beispiel:</p>
<ul>
  <li>gültig: |vEP_amount| × |vEP_member| = 4 × 2 = 8</li>
  <li>ungültig (einzeln): |iEP_amount| + |iEP_member| = 3 + 1 = 4</li>
  <li><b>Gesamt: 8 + 4 = 12 Testfälle</b> für 100% EP-Coverage.</li>
</ul>`,
    answerExam: `<p>Eingaben je Parameter in disjunkte Äquivalenzklassen (gültig/ungültig) teilen, pro Klasse ein Repräsentant. Anzahl Testfälle: gültige Klassen aller Parameter multiplizieren, ungültige Klassen einzeln addieren. Beispiel Rabatt: 4·2 (gültig) + 3+1 (ungültig) = <b>12 Testfälle</b>.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-11",
    topicId: "202",
    question: "Was sind Grenztests? (Boundary Value Analysis)",
    answerVerbose: `<p><b>Boundary Value Analysis (BVA)</b> ist eine Erweiterung des Equivalence Partitioning und wird angewendet, wenn die Partitionen <b>geordnet</b> sind (Zahlen, Datum, Zeit). Hintergrund: An den <b>Grenzen</b> der Äquivalenzklassen treten Fehler wahrscheinlicher auf als mitten in der Klasse (z. B. <code>&lt;</code> statt <code>&lt;=</code>).</p>
<p><b>Vorgehen:</b></p>
<ul>
  <li>den genauen Grenzwert jeder Klasse testen (Ein- und Ausgaben!),</li>
  <li>die (beiden) benachbarten Werte testen,</li>
  <li>Grenzwerte in Testfällen kombinieren.</li>
</ul>
<p><b>Beispiel:</b> erlaubter Bereich 1 bis 200 Datensätze → Testdaten 0, 1, 2, 199, 200, 201. <b>Vorteil:</b> findet typische Grenzfehler effizient. <b>Nachteil:</b> erfordert Kreativität bei der Wahl der Testdaten.</p>`,
    answerExam: `<p>BVA ist eine Erweiterung des Equivalence Partitioning für geordnete Klassen. Fehler treten an Klassengrenzen wahrscheinlicher auf. Man testet den Grenzwert und seine Nachbarwerte. Beispiel Bereich 1–200: Testdaten 0, 1, 2, 199, 200, 201.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-12",
    topicId: "202",
    question: "Was versteht man unter Statement und Decision Testing? Wodurch unterscheiden sie sich?",
    answerVerbose: `<p>Beide sind White-box-Techniken auf Basis des Kontrollflussgraphen:</p>
<ul>
  <li><b>Statement Testing (C0)</b>: Ziel ist, jede ausführbare <em>Anweisung</em> mindestens einmal zu durchlaufen. <code>C0 = ausgefuehrte / gesamte Anweisungen × 100%</code>.</li>
  <li><b>Decision Testing (C1, Branch Coverage)</b>: Erweiterung; testet zusätzlich jedes <em>Entscheidungsergebnis</em> (jeden Zweig). Bei jedem <code>if</code>, jeder Schleife usw. müssen beide Ausgänge (true/false bzw. Schleifenkörper und Rücksprung) durchlaufen werden. <code>C1 = ausgefuehrte / moegliche Entscheidungen × 100%</code>.</li>
</ul>
<p><b>Unterschied:</b> Statement Coverage prüft nur, ob Anweisungen erreicht werden; Decision Coverage prüft zusätzlich alle Verzweigungsrichtungen. Wichtig: <b>100% Branch Coverage impliziert 100% Statement Coverage, aber nicht umgekehrt.</b> Ein <code>if</code> ohne <code>else</code> kann z. B. 100% Statements erreichen, ohne den false-Zweig abzudecken.</p>`,
    answerExam: `<p>Statement Testing (C0): jede Anweisung mind. einmal ausführen. Decision/Branch Testing (C1): zusätzlich jedes Entscheidungsergebnis (jeden Zweig) abdecken. Unterschied: C1 prüft die Verzweigungsrichtungen mit. 100% C1 impliziert 100% C0, aber nicht umgekehrt.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-13",
    topicId: "202",
    question: "Was sollte bei der Benennung von Tests beachtet werden? Warum?",
    answerVerbose: `<p>Testnamen sollen <b>aussagekräftig und gut lesbar</b> sein und das <b>Verhalten</b> beschreiben, nicht die Methode. Richtlinien aus der Vorlesung:</p>
<ul>
  <li>Keine starre Namenskonvention – benenne den Test, als würdest du das Szenario einem fachkundigen Nicht-Programmierer beschreiben.</li>
  <li>Wörter durch Unterstriche trennen (bessere Lesbarkeit), z. B. <code>calculate_distance_points_same_position_is_0</code>.</li>
  <li>Den Methodennamen <em>nicht</em> in den Testnamen aufnehmen – teste Verhalten, nicht Methoden.</li>
</ul>
<p><b>Warum?</b> Bei einem fehlschlagenden Test erkennt man sofort am Namen, welches fachliche Verhalten verletzt ist, ohne den Testcode lesen zu müssen. Tests dienen so auch als Dokumentation.</p>`,
    answerExam: `<p>Testnamen sollen das fachliche Verhalten beschreiben (nicht die Methode), als erkläre man das Szenario einem Nicht-Programmierer; Wörter mit Unterstrich trennen. Grund: Bei einem Fehlschlag ist sofort klar, welches Verhalten verletzt ist – Tests als Doku.</p>`,
    code: `// gut: beschreibt Verhalten
@Test
public void calculate_distance_points_same_position_is_0() {}
// schlecht: nichtssagend / Methodenname im Test
@Test
public void test1() {}`,
    source: "202 / Slides Testing"
  },

  {
    id: "202-14",
    topicId: "202",
    question: "Warum kann man bedenkenlos Code-Refactoring betreiben, wenn man Unit Tests hat?",
    answerVerbose: `<p><b>Refactoring</b> ändert die innere Struktur des Codes, ohne sein nach außen sichtbares Verhalten zu verändern. Eine ausreichende Suite von Unit Tests bildet ein <b>Sicherheitsnetz (safety net)</b>: Die Tests beschreiben das erwartete Verhalten.</p>
<p>Nach jeder Umstrukturierung lässt man die Tests laufen. Bleiben sie grün, hat sich das Verhalten nicht verändert – man kann der Änderung vertrauen. Schlägt ein Test fehl, zeigt er sofort, dass das Refactoring etwas kaputtgemacht hat. So bekommt man schnelles, zuverlässiges Feedback und kann mutig umbauen, statt aus Angst vor Regressionen alles zu lassen.</p>`,
    answerExam: `<p>Unit Tests sichern das nach außen sichtbare Verhalten ab (safety net). Nach dem Refactoring lässt man sie laufen: Bleiben sie grün, ist das Verhalten unverändert; schlägt einer fehl, wird der Fehler sofort sichtbar. Das gibt Vertrauen, ohne Regressionsangst umzubauen.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-15",
    topicId: "202",
    question: "Was versteht man unter parametrisierten Tests?",
    answerVerbose: `<p><b>Parametrisierte Tests</b> führen <em>dieselbe</em> Testmethode mehrfach mit <em>unterschiedlichen Eingabewerten</em> aus. So testet man viele Fälle (z. B. mehrere gültige Repräsentanten einer Äquivalenzklasse oder Grenzwerte) ohne Code-Duplikation.</p>
<p>In JUnit 5 verwendet man dazu <code>@ParameterizedTest</code> statt <code>@Test</code> und gibt die Werte z. B. über <code>@ValueSource</code> an. Der Parameter der Methode nimmt nacheinander jeden Wert an. Dafür wird die Dependency <code>junit-jupiter-params</code> benötigt.</p>`,
    answerExam: `<p>Parametrisierte Tests führen dieselbe Testmethode mit mehreren Eingabewerten aus – viele Fälle ohne Duplikation. In JUnit 5: <code>@ParameterizedTest</code> + z. B. <code>@ValueSource</code> (Dependency <code>junit-jupiter-params</code>).</p>`,
    code: `@DisplayName("Pass zip codes 4 Vienna")
@ParameterizedTest
@ValueSource(ints = { 1010, 1020, 1030 })
public void zip_codes_4_vienna(int zip_code) {
    String actual = PostalAddress.getState(zip_code);
    assertEquals("Wien", actual);
}`,
    source: "202 / Slides Testing"
  },

  {
    id: "202-16",
    topicId: "202",
    question: "Warum können Prozentangaben bei einer Testcoverage irreführend sein?",
    answerVerbose: `<p>Code Coverage ist ein hilfreiches <b>quantitatives</b> Maß, sagt aber wenig über die <b>Qualität</b> der Tests aus: <b>hohe Coverage ≠ gute Tests</b>.</p>
<ul>
  <li>Coverage misst nur, ob Code <em>ausgeführt</em> wurde – nicht, ob das Ergebnis sinnvoll <em>überprüft</em> (asserted) wurde. Ein Test ohne Assertions kann 100% Coverage erzeugen, ohne etwas zu prüfen.</li>
  <li>Statement Coverage kann 100% erreichen, ohne alle Zweige abzudecken (ein <code>if</code> ohne <code>else</code>). 100% Branch impliziert zwar 100% Statement, aber nicht umgekehrt.</li>
  <li>Auch 100% Coverage testet keine fehlenden Funktionen, keine Grenzwerte und keine nicht-bedachten Eingaben.</li>
  <li>Bei objektorientiertem Code liegt die Komplexität oft in den Beziehungen zwischen Objekten, nicht im einzelnen Kontrollfluss.</li>
</ul>`,
    answerExam: `<p>Coverage misst nur, ob Code ausgeführt wurde, nicht ob das Ergebnis sinnvoll geprüft wird (Tests ohne Assertions). Hohe Coverage ≠ gute Tests; vergessene Funktionen/Grenzfälle bleiben unentdeckt. 100% Statement deckt nicht alle Zweige ab.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-17",
    topicId: "202",
    question: "Erkläre manuelles und automatisiertes Testen. Nenne Vor- und Nachteile",
    answerVerbose: `<p><b>Manuelles Testen:</b> Ein Mensch führt die Testschritte selbst aus und prüft das Ergebnis. <b>Automatisiertes Testen:</b> Ein Programm (z. B. JUnit) führt die Tests reproduzierbar aus.</p>
<p><b>Automatisiert – Vorteile (laut Slides):</b></p>
<ul>
  <li><b>Predictability</b>: schnelles Feedback nach dem Coden macht den Prozess planbarer.</li>
  <li><b>Reproducibility</b>: die Maschine vergisst keine Schritte und macht keine Flüchtigkeitsfehler.</li>
  <li><b>Collaboration</b>: Tests sichern, dass Features nach einem Merge weiter funktionieren.</li>
  <li><b>Speed</b>: einmal geschrieben, laufen Tests beliebig oft schnell durch.</li>
</ul>
<p><b>Automatisiert – Nachteile:</b> Das Schreiben kostet anfangs Zeit; sie prüfen nur, was man vorgesehen hat. <b>Manuell – Vorteile:</b> kein Aufbau nötig, flexibel, gut für exploratives Testen und UX-Eindruck. <b>Manuell – Nachteile:</b> fehleranfällig, langsam, nicht reproduzierbar, der Aufwand wächst mit der Codebasis.</p>`,
    answerExam: `<p>Manuell = Mensch führt Tests aus; automatisiert = Programm (JUnit) führt sie aus. Automatisiert: + planbar, reproduzierbar, kollaborationssicher, schnell wiederholbar; − Schreibaufwand, prüft nur Vorgedachtes. Manuell: + flexibel/explorativ, kein Setup; − langsam, fehleranfällig, nicht reproduzierbar.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-18",
    topicId: "202",
    question: "Was versteht man unter AAA bzw. Given When Then im Unit Testing?",
    answerVerbose: `<p>Beides sind Strukturmuster für Unit Tests, die einen Test in drei klar getrennte Abschnitte gliedern:</p>
<ul>
  <li><b>Arrange / Given</b>: Vorbedingung herstellen – Objekte und Testdaten vorbereiten.</li>
  <li><b>Act / When</b>: die zu testende Aktion ausführen (die Funktion aufrufen).</li>
  <li><b>Assert / Then</b>: die Nachbedingung prüfen – erwartetes mit tatsächlichem Ergebnis vergleichen.</li>
</ul>
<p>Der Nutzen: Tests werden lesbar und einheitlich. Enthält ein Test mehrere Given-When-Then-Blöcke oder mehr als eine Act-Zeile, testet er mehr als ein Verhalten und sollte aufgeteilt werden.</p>`,
    answerExam: `<p>AAA = Arrange/Act/Assert, gleichbedeutend mit Given/When/Then: Vorbedingung herstellen (Arrange/Given), Aktion ausführen (Act/When), Ergebnis prüfen (Assert/Then). Strukturiert Tests einheitlich; ein Test = ein Verhalten.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-19",
    topicId: "202",
    question: "Woran erkennt man gute Tests, woran erkennt man weniger gute Tests?",
    answerVerbose: `<p><b>Gute Tests:</b></p>
<ul>
  <li>testen genau <b>ein Verhalten</b> und sind klar nach AAA / Given-When-Then strukturiert;</li>
  <li>laufen <b>schnell und isoliert</b>, unabhängig von anderen Tests (kein gemeinsamer Zustand, Dependencies ggf. gemockt);</li>
  <li>haben <b>aussagekräftige Namen</b>, die das Verhalten beschreiben;</li>
  <li>sind deterministisch (gleiche Eingabe → gleiches Ergebnis) und enthalten sinnvolle Assertions.</li>
</ul>
<p><b>Schlechte Tests (Warnzeichen):</b></p>
<ul>
  <li>mehrere Given-When-Then-Abschnitte oder mehr als eine Act-Zeile → mehr als ein Verhalten;</li>
  <li><code>if/else</code> oder Schleifen im Test;</li>
  <li>Abhängigkeit von anderen Tests oder gemeinsamem Zustand;</li>
  <li>nichtssagende Namen wie <code>test1</code>; Testen von Konfigurationswerten; keine echten Assertions.</li>
</ul>`,
    answerExam: `<p>Gut: ein Verhalten pro Test, AAA-Struktur, schnell, isoliert, unabhängig, deterministisch, aussagekräftiger Name, sinnvolle Assertions. Schlecht: mehrere When/Assert-Blöcke, if/else im Test, geteilter Zustand, Namen wie <code>test1</code>, Testen von Configs.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-20",
    topicId: "202",
    question: "Was ist Test Driven Development? Wie funktioniert es?",
    answerVerbose: `<p><b>Test Driven Development (TDD)</b> ist ein Entwicklungsansatz, bei dem die Tests <b>vor</b> dem Produktivcode geschrieben werden. Die Testfälle spezifizieren und validieren, was der Code tun soll – die <b>Tests sind die Anforderungen</b>, und die Testbasis wächst mit der Codebasis.</p>
<p>Es läuft in einem kurzen Zyklus (<b>Red-Green-Refactor</b>):</p>
<ul>
  <li><b>Red:</b> einen Test schreiben, der die Anforderung abbildet – er schlägt fehl (Code/Klasse existiert noch nicht).</li>
  <li><b>Green:</b> gerade so viel Code schreiben, dass der Test grün wird (einfachste Lösung, "assume simplicity").</li>
  <li><b>Refactor:</b> den Code aufräumen, während die Tests grün bleiben.</li>
</ul>
<p>Diesen Zyklus wiederholt man für jede neue Anforderung. Testbarkeit wird so zum wichtigsten Designkriterium.</p>`,
    answerExam: `<p>TDD: Tests werden vor dem Code geschrieben; sie sind die Anforderungen. Zyklus Red-Green-Refactor: fehlschlagenden Test schreiben (Red), minimal implementieren bis grün (Green), Code aufräumen bei grünen Tests (Refactor), wiederholen.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-21",
    topicId: "202",
    question: "Was sind Vorteile von Test Driven Development? Was könnten Nachteile von TDD sein?",
    answerVerbose: `<p><b>Vorteile (laut Slides):</b></p>
<ul>
  <li><b>Besseres Design</b> – Testbarkeit als Designkriterium führt zu entkoppeltem Code;</li>
  <li><b>Sichereres Refactoring</b> – die Tests bilden ein Sicherheitsnetz;</li>
  <li><b>Schnelleres Debugging</b> und insgesamt <b>bessere Code-Qualität</b>;</li>
  <li>Testfälle zeigen, <b>wie der Code anzuwenden</b> ist, und sind Teil der <b>Dokumentation</b>.</li>
</ul>
<p><b>Mögliche Nachteile:</b></p>
<ul>
  <li>höherer Anfangsaufwand / steile Lernkurve;</li>
  <li>bei sich häufig ändernden Anforderungen müssen Tests laufend mit angepasst werden;</li>
  <li>schwer anwendbar, wenn Anforderungen noch unklar sind oder für reine Prototypen;</li>
  <li>Gefahr trügerischer Sicherheit, wenn Tests schlecht geschrieben sind.</li>
</ul>`,
    answerExam: `<p>Vorteile: besseres Design, sicheres Refactoring, schnelleres Debugging, höhere Codequalität, Tests als Doku/Anwendungsbeispiel. Nachteile: höherer Anfangsaufwand, Lernkurve, ständige Testpflege bei wechselnden Anforderungen, schwierig bei unklaren Anforderungen/Prototypen.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-22",
    topicId: "202",
    question: "Was sind Best Practices beim Unit Testing?",
    answerVerbose: `<p>Best Practices aus der Vorlesung:</p>
<ul>
  <li><b>Nur ein Verhalten pro Test</b> – z. B. je ein eigener Test für "erster Parameter null", "zweiter Parameter null", "beide null", und schließlich den gültigen Fall.</li>
  <li><b>Tests unabhängig voneinander</b> machen – kein gemeinsamer Zustand, keine geteilten Instanzvariablen, Dependencies per Mocking isolieren.</li>
  <li><b>Keine Konfigurationswerte testen</b> – das beweist nur, dass man copy-paste kann.</li>
  <li><b>Klar und konsistent benennen</b>, z. B. <code>create_user_given_null_id_throws_exception</code>.</li>
  <li>Zuerst Methoden mit den <b>wenigsten Abhängigkeiten</b> testen.</li>
  <li>Jeder Test prüft <b>genau ein erwartetes Verhalten</b>.</li>
</ul>`,
    answerExam: `<p>Ein Verhalten pro Test; Tests unabhängig (kein geteilter Zustand, Mocking); keine Configs testen; klare, konsistente Namen; zuerst Methoden mit den wenigsten Abhängigkeiten testen; sinnvolle Assertions.</p>`,
    code: null,
    source: "202 / Slides Testing"
  },

  {
    id: "202-23",
    topicId: "202",
    question: "Wozu braucht man in der Software Entwicklung Build- und Dependencymanagement Tools wie Maven?",
    answerVerbose: `<p>Fast jedes Softwareprojekt nutzt <b>Dependencies</b> – Third-Party-Bibliotheken und Frameworks (z. B. JavaFX), wiederverwendbare Module, Kommandozeilentools. Diese manuell zu verwalten ist fehleranfällig.</p>
<ul>
  <li><b>Dependency Management</b>: automatisches Installieren, Aktualisieren, Konfigurieren und sauberes Entfernen von Bibliotheken/Paketen/Tools. Maven löst dabei auch transitive Abhängigkeiten auf.</li>
  <li><b>Build Management</b>: legt fest, wie die Anwendung kompiliert wird und was zum Ausführen nötig ist – standardisierter, reproduzierbarer Build-Prozess.</li>
</ul>
<p>Maven bietet zudem ein standardisiertes Projekt-Setup ("best practices in Sekunden"), ist in IDEs wie IntelliJ und Eclipse integriert und macht Builds für das ganze Team einheitlich und nachvollziehbar.</p>`,
    answerExam: `<p>Maven automatisiert <b>Dependency Management</b> (Bibliotheken installieren/aktualisieren/entfernen inkl. transitiver Abhängigkeiten) und <b>Build Management</b> (standardisiertes, reproduzierbares Kompilieren/Packen). Das spart Aufwand und macht Builds im Team einheitlich und nachvollziehbar.</p>`,
    code: null,
    source: "202 / Slides 01"
  },

  {
    id: "202-24",
    topicId: "202",
    question: "Was ist ein POM File in Maven? Wie ist es strukturiert?",
    answerVerbose: `<p>Maven definiert ein <b>Project Object Model (POM)</b>. Die Metadatei <code>pom.xml</code> muss im Wurzelverzeichnis des Projekts liegen und beschreibt das Projekt sowie seinen Build.</p>
<p>Zentrale Bestandteile:</p>
<ul>
  <li><code>modelVersion</code> – die POM-Version (4.0.0);</li>
  <li><code>groupId</code> – eindeutige Kennung des Herstellers, üblich als umgekehrte URL (z. B. <code>at.ac.fhcampuswien</code>);</li>
  <li><code>artifactId</code> – Name des zu bauenden Artefakts;</li>
  <li><code>version</code> – Version des Projekts/Artefakts (z. B. <code>1.0.0-SNAPSHOT</code>);</li>
  <li><code>properties</code> – Standardparameter wie Versionsnummern (wiederverwendbar);</li>
  <li><code>dependencies</code> – Liste der benötigten Bibliotheken;</li>
  <li>optional <code>repositories</code>.</li>
</ul>
<p>Das kleinstmögliche POM enthält modelVersion, groupId, artifactId und version (siehe Code).</p>`,
    answerExam: `<p>Das POM (<code>pom.xml</code> im Projektwurzelverzeichnis) ist die zentrale Metadatei, die Projekt und Build beschreibt. Pflichtteile: <code>modelVersion</code>, <code>groupId</code>, <code>artifactId</code>, <code>version</code>; dazu <code>properties</code> und <code>dependencies</code>.</p>`,
    code: `<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>at.ac.fhcampuswien</groupId>
  <artifactId>small-example</artifactId>
  <version>1.0.0-SNAPSHOT</version>
</project>`,
    source: "202 / Slides 01"
  },

  {
    id: "202-25",
    topicId: "202",
    question: "Wie funktioniert das Hinzufügen von Dependencies mit Maven? Was ist das Maven Repository?",
    answerVerbose: `<p>Eine Dependency fügt man hinzu, indem man im POM innerhalb von <code>&lt;dependencies&gt;</code> einen <code>&lt;dependency&gt;</code>-Eintrag mit <b>groupId</b>, <b>artifactId</b> und <b>version</b> anlegt. Maven lädt die Bibliothek dann automatisch herunter (inkl. transitiver Abhängigkeiten) und stellt sie beim Kompilieren bereit.</p>
<p>Praktisches Vorgehen: Auf <b>Maven Central</b> (<code>mvnrepository.com</code>) die gewünschte Bibliothek und Version suchen und das fertige Maven-Snippet ins POM kopieren.</p>
<p>Das <b>Maven Repository</b> ist ein zentraler Speicher für Artefakte (Bibliotheken). Es gibt das öffentliche zentrale Repository (Maven Central) und ein <em>lokales</em> Repository auf dem eigenen Rechner, in das z. B. <code>mvn install</code> Artefakte ablegt, damit andere lokale Projekte sie nutzen können. Auch ältere Versionen sind verfügbar.</p>`,
    answerExam: `<p>Im POM unter <code>&lt;dependencies&gt;</code> einen <code>&lt;dependency&gt;</code> mit groupId, artifactId, version eintragen; Maven lädt die Bibliothek automatisch (mit transitiven Abhängigkeiten). Snippet findet man auf <code>mvnrepository.com</code>. Das Maven Repository ist der zentrale Artefakt-Speicher (Maven Central + lokales Repository).</p>`,
    code: `<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    source: "202 / Slides 01"
  }

);

/* =========================================================
   THEORIE – Block 202: Software Testing & Maven
   ========================================================= */
window.DATA.theory.push({
  topicId: "202",
  title: "Software Testing & Maven",
  sections: [
    {
      heading: "Error, Fault & Failure",
      body: `<p>Diese drei Begriffe beschreiben eine Kausalkette:</p>
<ul>
  <li><b>Error</b> – die menschliche Fehlhandlung des Entwicklers (Tipp- oder Denkfehler).</li>
  <li><b>Fault</b> – der dadurch entstandene Defekt (Bug) im Code.</li>
  <li><b>Failure</b> – das sichtbare Fehlverhalten, wenn der Fault zur Laufzeit ausgeführt wird.</li>
</ul>
<p>Nicht jeder Fault wird zur Failure – nur wenn die fehlerhafte Stelle tatsächlich ausgeführt wird.</p>`,
      code: null
    },
    {
      heading: "Ziele & Prinzipien des Testens",
      body: `<p><b>Ziele:</b> Anforderungen nachweisen, Vertrauen in Korrektheit schaffen, Wissen dokumentieren, Defekte finden und Risiko senken.</p>
<p><b>Sieben Testprinzipien (Auswahl):</b></p>
<ul>
  <li>Testen zeigt die <b>Anwesenheit</b> von Fehlern, nie deren Abwesenheit.</li>
  <li><b>Vollständiges Testen ist unmöglich</b> (kombinatorische Explosion) – man wählt eine Stichprobe.</li>
  <li><b>Frühes Testen</b> spart Zeit und Geld (Shift Left): späte Fehler sind exponentiell teurer.</li>
  <li><b>Defects cluster</b>: Fehler häufen sich an wenigen Stellen (Pareto-Prinzip).</li>
  <li><b>Pesticide Paradox</b>: dieselben Tests finden irgendwann keine neuen Fehler mehr.</li>
</ul>`,
      code: null
    },
    {
      heading: "Black-box vs. White-box Testing",
      body: `<p><b>Black-box</b>: Test ohne Kenntnis des inneren Aufbaus – nur Eingabe/Ausgabe gegen die Spezifikation. Techniken: <b>Equivalence Partitioning</b>, <b>Boundary Value Analysis</b>.</p>
<p><b>White-box</b>: Test mit Kenntnis der internen Struktur (Code) – orientiert sich an Pfaden und Zweigen. Techniken: <b>Statement Coverage</b>, <b>Decision/Branch Coverage</b>.</p>`,
      code: null
    },
    {
      heading: "Equivalence Partitioning & Boundary Value Analysis",
      body: `<p><b>Equivalence Partitioning</b>: Eingaben werden in Klassen aufgeteilt, die sich gleich verhalten. Pro Klasse genügt <em>ein</em> Testfall. Anzahl Testfälle = Anzahl der (gültigen + ungültigen) Äquivalenzklassen.</p>
<p>Beispiel Alter 18–65: drei Klassen → &lt;18 (ungültig), 18–65 (gültig), &gt;65 (ungültig) = 3 Testfälle.</p>
<p><b>Boundary Value Analysis</b>: testet gezielt die <b>Grenzen</b> der Klassen, weil dort die meisten Fehler sitzen (z. B. 17, 18, 65, 66).</p>`,
      code: null
    },
    {
      heading: "Statement & Decision Coverage",
      body: `<p><b>Statement Coverage</b>: Anteil der ausgeführten Anweisungen. 100 % heißt, jede Zeile lief mindestens einmal.</p>
<p><b>Decision (Branch) Coverage</b>: Anteil der durchlaufenen Verzweigungen – jeder Zweig (if-true und if-false) muss mindestens einmal genommen werden. Decision Coverage ist stärker als Statement Coverage.</p>
<p>Prozentangaben können <b>irreführen</b>: 100 % Coverage bedeutet nur, dass Code ausgeführt wurde, nicht dass das Verhalten korrekt geprüft (asserted) wurde.</p>`,
      code: null
    },
    {
      heading: "Test Driven Development (TDD)",
      body: `<p>TDD dreht die Reihenfolge um: erst der Test, dann der Code. Zyklus <b>Red – Green – Refactor</b>:</p>
<ol>
  <li><b>Red</b>: einen fehlschlagenden Test schreiben.</li>
  <li><b>Green</b>: minimalen Code schreiben, der den Test bestehen lässt.</li>
  <li><b>Refactor</b>: den Code aufräumen, Tests bleiben grün.</li>
</ol>
<p>Vorteile: hohe Testabdeckung, besseres Design, sicheres Refactoring. Nachteil: anfangs langsamer, Disziplin nötig.</p>`,
      code: `@Test
void shouldStartWithRed() {
    TrafficLight light = new TrafficLight();
    assertEquals("RED", light.getState());
}`
    },
    {
      heading: "Maven: POM, Dependencies, Repository",
      body: `<p><b>Maven</b> ist ein Build- und Dependency-Management-Tool. Die <b>POM</b> (<code>pom.xml</code>) beschreibt das Projekt: Koordinaten (groupId, artifactId, version), Abhängigkeiten und Build-Konfiguration.</p>
<p>Dependencies werden im <code>&lt;dependencies&gt;</code>-Block deklariert; Maven lädt sie automatisch (inkl. transitiver) aus dem <b>Maven Repository</b> (zentral = Maven Central, plus ein lokales Repository auf dem Rechner).</p>`,
      code: `<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter</artifactId>
  <version>5.10.0</version>
  <scope>test</scope>
</dependency>`
    }
  ]
});

/* =========================================================
   QUIZ – Block 202
   ========================================================= */
window.DATA.quiz.push(
  {
    id: "q-202-eff-1", topicId: "202", type: "mc",
    prompt: "Ein Entwickler tippt versehentlich a-b statt a+b. Was ist in dieser Kette der „Fault\"?",
    code: null,
    options: ["Die falsche Codestelle (a-b im Quelltext)", "Der Tippfehler des Entwicklers", "Das falsche Ergebnis zur Laufzeit", "Der Absturz des Programms"],
    correct: [0],
    explanation: "Error = die menschliche Fehlhandlung (Tippfehler), Fault = der entstandene Defekt im Code, Failure = das sichtbare Fehlverhalten zur Laufzeit."
  },
  {
    id: "q-202-princ-1", topicId: "202", type: "mc",
    prompt: "Welche Aussage gibt das Prinzip „Testing shows the presence of defects\" korrekt wieder?",
    code: null,
    options: ["Bestandene Tests beweisen, dass keine Fehler existieren", "Tests können Fehler nachweisen, aber nie deren Abwesenheit beweisen", "Mehr Tests führen immer zu fehlerfreiem Code", "Testen ersetzt formale Verifikation"],
    correct: [1],
    explanation: "Tests können nur zeigen, dass Fehler da sind. Keine gefundenen Fehler heißt nicht fehlerfrei."
  },
  {
    id: "q-202-bbwb-1", topicId: "202", type: "multi",
    prompt: "Welche der folgenden Techniken sind Black-box-Techniken? (Mehrfachauswahl)",
    code: null,
    options: ["Equivalence Partitioning", "Statement Coverage", "Boundary Value Analysis", "Decision Coverage"],
    correct: [0, 2],
    explanation: "Equivalence Partitioning und Boundary Value Analysis sind Black-box (ohne Codekenntnis). Statement/Decision Coverage sind White-box."
  },
  {
    id: "q-202-ep-1", topicId: "202", type: "mc",
    prompt: "Eine Altersprüfung akzeptiert 18 bis 65. Wie viele Äquivalenzklassen (= Testfälle) ergibt Equivalence Partitioning?",
    code: null,
    options: ["1", "2", "3", "65"],
    correct: [2],
    explanation: "Drei Klassen: <18 (ungültig), 18–65 (gültig), >65 (ungültig)."
  },
  {
    id: "q-202-bva-1", topicId: "202", type: "mc",
    prompt: "Warum testet man bei Boundary Value Analysis gezielt die Werte an den Grenzen?",
    code: null,
    options: ["Weil Grenzwerte schneller zu tippen sind", "Weil an Klassengrenzen erfahrungsgemäß die meisten Fehler auftreten", "Weil nur Grenzwerte gültig sind", "Weil die Mitte der Klasse nie getestet werden darf"],
    correct: [1],
    explanation: "Fehler treten besonders häufig an Grenzen auf (z. B. <, <=, off-by-one)."
  },
  {
    id: "q-202-tdd-1", topicId: "202", type: "mc",
    prompt: "Was ist die korrekte Reihenfolge im TDD-Zyklus?",
    code: null,
    options: ["Green – Red – Refactor", "Refactor – Red – Green", "Red – Green – Refactor", "Red – Refactor – Green"],
    correct: [2],
    explanation: "Erst fehlschlagender Test (Red), dann minimaler Code (Green), dann Refactoring."
  },
  {
    id: "q-202-aaa-1", topicId: "202", type: "mc",
    prompt: "Wofür steht AAA in der Unit-Test-Struktur?",
    code: null,
    options: ["Assert, Act, Arrange", "Arrange, Act, Assert", "Arrange, Assert, Act", "Act, Arrange, Assert"],
    correct: [1],
    explanation: "Arrange (vorbereiten), Act (ausführen), Assert (prüfen) – entspricht Given-When-Then."
  },
  {
    id: "q-202-cov-1", topicId: "202", type: "mc",
    prompt: "Warum kann eine Testabdeckung von 100 % irreführend sein?",
    code: null,
    options: ["Weil 100 % unmöglich erreichbar ist", "Weil Coverage nur misst, dass Code ausgeführt wurde – nicht, ob das Verhalten korrekt geprüft wird", "Weil Coverage immer falsch berechnet wird", "Weil 100 % bedeutet, dass keine Tests nötig sind"],
    correct: [1],
    explanation: "Ein Test ohne aussagekräftige Assertions erhöht die Coverage, prüft aber nichts."
  },
  {
    id: "q-202-cov-2", topicId: "202", type: "mc",
    prompt: "Welche Coverage-Art ist stärker (anspruchsvoller)?",
    code: null,
    options: ["Statement Coverage", "Decision/Branch Coverage", "Beide sind identisch", "Keine von beiden misst etwas"],
    correct: [1],
    explanation: "Decision Coverage verlangt, dass jeder Zweig (true und false) durchlaufen wird – das impliziert Statement Coverage, aber nicht umgekehrt."
  },
  {
    id: "q-202-struct-1", topicId: "202", type: "mc",
    prompt: "Welches Merkmal spricht für einen schlecht strukturierten Unit Test?",
    code: null,
    options: ["Er testet genau ein Verhalten", "Er folgt Arrange-Act-Assert", "Er enthält if/else und mehrere Act-Schritte", "Er hat einen sprechenden Namen"],
    correct: [2],
    explanation: "Verzweigungen und mehrere Aktionen deuten darauf hin, dass mehr als ein Verhalten getestet wird – aufteilen."
  },
  {
    id: "q-202-refactor-1", topicId: "202", type: "mc",
    prompt: "Warum kann man mit guten Unit Tests bedenkenlos refactoren?",
    code: null,
    options: ["Weil Refactoring den Code nie ändert", "Weil die Tests sofort melden, falls sich das Verhalten ungewollt ändert", "Weil Tests den Code automatisch umschreiben", "Weil Refactoring ohne Tests verboten ist"],
    correct: [1],
    explanation: "Tests bilden ein Sicherheitsnetz: bleibt das beobachtbare Verhalten gleich, bleiben sie grün."
  },
  {
    id: "q-202-param-1", topicId: "202", type: "mc",
    prompt: "Was ist ein parametrisierter Test?",
    code: null,
    options: ["Ein Test, der nur einen festen Wert prüft", "Ein Test, der mit mehreren Eingabe-/Erwartungs-Sätzen automatisch mehrfach ausgeführt wird", "Ein Test ohne Assertions", "Ein Test, der nur manuell läuft"],
    correct: [1],
    explanation: "Parametrisierte Tests führen dieselbe Logik mit verschiedenen Datensätzen aus (z. B. @ParameterizedTest), spart Duplikate."
  },
  {
    id: "q-202-manual-1", topicId: "202", type: "multi",
    prompt: "Welche Aussagen über automatisiertes Testen treffen zu? (Mehrfachauswahl)",
    code: null,
    options: ["Schnell und beliebig oft wiederholbar", "Gut für Regressionstests", "Höherer initialer Erstellungsaufwand", "Besser für explor, intuitives Erkunden neuer Features"],
    correct: [0, 1, 2],
    explanation: "Automatisierte Tests sind schnell, wiederholbar und ideal für Regression, kosten aber zu Beginn mehr Aufwand. Exploratives Testen ist eine Stärke des manuellen Testens."
  },
  {
    id: "q-202-maven-1", topicId: "202", type: "mc",
    prompt: "Welche drei Koordinaten identifizieren eine Maven-Dependency eindeutig?",
    code: null,
    options: ["name, path, size", "groupId, artifactId, version", "package, class, method", "host, port, scope"],
    correct: [1],
    explanation: "Eine Dependency wird über groupId, artifactId und version (GAV) eindeutig adressiert."
  },
  {
    id: "q-202-maven-2", topicId: "202", type: "mc",
    prompt: "Was ist das Maven (Central) Repository?",
    code: null,
    options: ["Ein Git-Server für Quellcode", "Ein zentraler Speicher für Artefakte/Bibliotheken, aus dem Maven Dependencies lädt", "Ein lokaler Ordner für Testberichte", "Eine IDE-Erweiterung"],
    correct: [1],
    explanation: "Das Maven Repository hält Artefakte; Maven lädt deklarierte Dependencies (inkl. transitiver) von dort, zusätzlich gibt es ein lokales Repository."
  }
);
