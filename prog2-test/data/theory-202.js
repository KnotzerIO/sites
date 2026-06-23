window.DATA = window.DATA || {};
window.DATA.theory = window.DATA.theory || [];
window.DATA.theory = window.DATA.theory.filter(u => u.topicId !== '202'); // alte knappe Einheit entfernen
var sections202 = [];
window.DATA.theory.push({ topicId: '202', title: 'Software Testing & Maven', sections: sections202 });

sections202.push(
  {
    heading: `1. Warum testen wir überhaupt? (Error, Fault, Failure)`,
    body: `<p>Bevor wir lernen, <i>wie</i> man testet, müssen wir verstehen, <i>warum</i>. Die ehrliche Antwort lautet: <b>Menschen machen Fehler.</b> Niemand schreibt fehlerfreien Code, egal wie erfahren er ist. Wir arbeiten unter Zeitdruck, mit unklaren Anforderungen, mit komplexer Technik und in grossen Teams. Genau deshalb brauchen wir Tests als Sicherheitsnetz.</p>
<p>Ein berühmtes Beispiel: 1999 ging der <b>Mars Climate Orbiter</b> der NASA verloren. Das eine Team rechnete in metrischen Einheiten (Newton), das andere in imperialen Einheiten (Pfund-Kraft). Niemand hatte das geprüft, und die Sonde verglühte in der Marsatmosphäre. Ein winziger, unbemerkter Fehler kostete hunderte Millionen Dollar. Das zeigt: Testen ist kein Luxus, sondern überlebenswichtig.</p>
<p><b>Die drei Ziele des Testens.</b> In der Vorlesung werden drei Hauptgründe genannt, warum wir testen:</p>
<ul>
<li><b>Erfüllung beweisen (prove fulfillment):</b> Wir prüfen, ob die Software wirklich das tut, was die Anforderungen verlangen.</li>
<li><b>Vertrauen schaffen (have confidence):</b> Wir wollen darauf vertrauen können, dass unser Code korrekt funktioniert UND dass wir ihn ändern können, ohne dass alles zusammenbricht.</li>
<li><b>Wissen teilen (share knowledge):</b> Tests sind eine Form von Dokumentation. Wer einen guten Test liest, versteht sofort, wie der Code benutzt werden soll und was er leisten muss.</li>
</ul>
<p><b>Merke:</b> Eine gute Teststrategie beeinflusst direkt die Qualität des Codes und die Zuverlässigkeit des gesamten Systems.</p>
<p>Jetzt zu einem Punkt, der in Prüfungen sehr beliebt ist und oft durcheinandergebracht wird: die drei Begriffe <b>Error</b>, <b>Fault</b> und <b>Failure</b>. Im Deutschen heissen sie Fehlhandlung, Fehlerzustand und Fehlerwirkung. Sie beschreiben eine <b>Kausalkette</b>, also eine Ursache-Wirkungs-Kette in drei Stufen. Wir gehen sie der Reihe nach durch.</p>
<ul>
<li><b>Error (Fehlhandlung, mistake):</b> Das ist die menschliche Handlung, der Denkfehler. Ein Programmierer denkt falsch oder vertippt sich. Der Error passiert im Kopf des Menschen.</li>
<li><b>Fault (Fehlerzustand, defect, bug):</b> Der Error führt dazu, dass etwas Falsches im Quellcode steht. Dieser falsche Code ist der Fault. Er liegt einfach da im Programm und wartet.</li>
<li><b>Failure (Fehlerwirkung):</b> Wird der fehlerhafte Code ausgeführt, kann er in bestimmten Situationen ein sichtbares Fehlverhalten verursachen. Das Programm stürzt ab oder liefert ein falsches Ergebnis. Das ist die Failure.</li>
</ul>
<p><b>Konkretes Beispiel der Kausalkette.</b> Ein Programmierer soll eine Funktion schreiben, die zwei Zahlen addiert. Er <i>denkt</i> aber kurz an Subtraktion (das ist der <b>Error</b>, der Denkfehler im Kopf). Deshalb tippt er <code>return a - b;</code> statt <code>return a + b;</code> (das ist der <b>Fault</b>, der falsche Code im Programm). Solange niemand diese Funktion aufruft, passiert gar nichts. Erst wenn das Programm läuft und jemand <code>add(2, 3)</code> aufruft, kommt <code>-1</code> heraus statt <code>5</code> (das ist die <b>Failure</b>, das sichtbare Fehlverhalten).</p>
<p><b>Wichtige Feinheiten, die gerne in Prüfungen abgefragt werden:</b></p>
<ul>
<li><b>Nicht jeder Fault wird zur Failure.</b> Wenn der fehlerhafte Code nie ausgeführt wird (zum Beispiel ein toter Programmzweig), entsteht nie eine sichtbare Fehlerwirkung. Der Fault schlummert dann unbemerkt.</li>
<li><b>Nicht jeder Fault stammt aus Tippfehlern.</b> Es gibt auch Umgebungsauslöser (environmental triggers), zum Beispiel ein voller Speicher oder eine fehlende Datei.</li>
<li><b>Fault Masking (Fehlerverdeckung):</b> Ein Fault kann einen anderen verstecken. Stell dir zwei Vorzeichenfehler vor, die sich gegenseitig aufheben. Behebst du nur einen, taucht plötzlich die vorher verdeckte Failure auf.</li>
</ul>
<p><b>Warum wichtig?</b> Diese Unterscheidung hilft dir, präzise zu reden. Ein Tester findet immer nur <b>Failures</b> (das Fehlverhalten). Daraus muss man dann den <b>Fault</b> im Code suchen (das nennt man Debugging) und schliesslich verstehen, welcher <b>Error</b> ihn verursacht hat, um beim nächsten Mal schlauer zu sein.</p>`,
    code: null
  },
  {
    heading: `2. Die 7 Testprinzipien`,
    body: `<p>Über Jahrzehnte hat die Software-Branche sieben grundlegende Wahrheiten über das Testen gesammelt. Diese <b>7 Testprinzipien</b> (aus dem ISTQB-Lehrplan) sind keine Werkzeuge, sondern Einsichten, die dir helfen, realistisch über Tests zu denken. Wir gehen jedes einzeln durch.</p>
<p><b>Prinzip 1: Testing shows the presence of defects, not their absence.</b> (Testen zeigt die Anwesenheit von Fehlern, nicht ihre Abwesenheit.) Dieses Prinzip stammt vom berühmten Informatiker Edsger Dijkstra (1970). Es bedeutet: Wenn ein Test fehlschlägt, hast du bewiesen, dass ein Fehler da ist. Aber wenn alle Tests grün sind, hast du <b>nicht</b> bewiesen, dass keine Fehler mehr da sind. Du hast nur die Wahrscheinlichkeit verringert. <b>Analogie:</b> Wenn du in einem dunklen Raum mit einer Taschenlampe eine Spinne findest, weisst du, dass eine Spinne da ist. Wenn du keine findest, heisst das nicht, dass der Raum spinnenfrei ist, du hast vielleicht nur nicht in die richtige Ecke geleuchtet. (Nur eine vollständige <i>formale Verifikation</i> könnte Korrektheit beweisen, aber das ist in der Praxis fast nie machbar.)</p>
<p><b>Prinzip 2: Exhaustive testing is impossible.</b> (Vollständiges Testen ist unmöglich.) Es ist praktisch unmöglich, alle möglichen Eingaben und Vorbedingungen durchzutesten. Der Grund ist die sogenannte <b>kombinatorische Explosion</b>: die Zahl der Kombinationen wächst extrem schnell. <b>Rechenbeispiel aus der Vorlesung:</b> Eine Funktion hat 3 Parameter. Jeder Parameter ist eine 16-Bit-Zahl, kann also 2 hoch 16 = 65.536 verschiedene Werte annehmen. Die Gesamtzahl der Kombinationen ist dann 65.536 * 65.536 * 65.536 = 2 hoch 48 = rund 281 Billionen (281.474.976.710.656) Kombinationen. Selbst wenn ein Rechner pro Sekunde Millionen Tests schaffte, würde das viele Jahre dauern, und das nur für drei kleine Parameter. <b>Konsequenz:</b> Statt alles zu testen, wählen wir clever <i>aus</i>. Genau dafür gibt es Testtechniken (siehe Abschnitt 3 und 4), Risikoanalyse und Priorisierung.</p>
<p><b>Prinzip 3: Early testing saves time and money.</b> (Frühes Testen spart Zeit und Geld.) Man sollte so früh wie möglich im Entwicklungsprozess testen, das nennt man auch <b>Shift Left</b> (nach links verschieben, weil der Anfang eines Zeitplans links liegt). Der Grund ist die <b>Kostenkurve von Fehlern</b>: Die Kosten, einen Fehler zu beheben, steigen <i>exponentiell</i>, je später man ihn findet. Ein Fehler in der Anforderungsphase kostet vielleicht ein paar Euro zum Korrigieren. Derselbe Fehler, erst beim Kunden im laufenden Betrieb entdeckt, kann das Tausendfache kosten, weil dann schon viel darauf aufgebaut wurde, Updates verteilt werden müssen und vielleicht sogar der Ruf leidet. <b>Analogie:</b> Ein Rechtschreibfehler im ersten Satz deiner Arbeit ist leicht korrigiert. Den gleichen Fehler erst zu bemerken, nachdem 10.000 Bücher gedruckt sind, ist eine Katastrophe.</p>
<p><b>Prinzip 4: Defects cluster together.</b> (Fehler treten in Gruppen auf.) Erfahrungsgemäss steckt die Mehrheit der Fehler in einer kleinen Zahl von Modulen. Das ist das <b>Pareto-Prinzip</b> (die 80/20-Regel): grob 80 Prozent der Fehler kommen aus etwa 20 Prozent des Codes. Warum? Programmierer haben schlechte Tage, machen denselben Denkfehler mehrfach, oder ein Modul hat ein grundlegendes Designproblem. <b>Konsequenz:</b> Wo du schon einen Fehler gefunden hast, lohnt es sich, genauer hinzuschauen, dort sind wahrscheinlich noch mehr. <b>Umkehrung:</b> Findest du in einem Bereich kaum Fehler, sind dort vermutlich wirklich wenige.</p>
<p><b>Prinzip 5: Beware of the pesticide paradox.</b> (Hüte dich vor dem Pestizid-Paradoxon.) Wenn man immer wieder dieselben Tests laufen lässt, finden diese irgendwann keine neuen Fehler mehr. <b>Analogie (daher der Name):</b> Ein Pestizid (Schädlingsbekämpfungsmittel) tötet anfangs viele Insekten, aber die überlebenden werden resistent, und irgendwann wirkt das Gift nicht mehr. Genauso decken alte Tests irgendwann keine neuen Fehler mehr auf. <b>Lösung:</b> Tests regelmässig überarbeiten, neue Testdaten und neue Testfälle hinzufügen. (Beachte: bei automatisierten <i>Regressionstests</i>, die nur prüfen, ob altes Verhalten noch stimmt, ist es sogar gut, wenn sie keine Fehler mehr finden, das bedeutet, nichts ist kaputtgegangen.)</p>
<p><b>Prinzip 6: Testing is context dependent.</b> (Testen hängt vom Kontext ab.) Es gibt nicht die eine richtige Art zu testen. Sicherheitskritische Software, etwa die Steuerung eines Herzschrittmachers oder eines Flugzeugs, wird viel intensiver und anders getestet als eine kleine Shopping-App. <b>Analogie:</b> Ein Chirurg arbeitet anders steril und sorgfältig als ein Hobbykoch, obwohl beide mit Messern schneiden. Der Kontext (Risiko, Branche, Vorgehensmodell wie agil oder sequentiell) bestimmt das Vorgehen.</p>
<p><b>Prinzip 7: Absence-of-errors is a fallacy.</b> (Die Fehlerfreiheit ist ein Trugschluss.) Eine <i>Fallacy</i> ist ein Denkfehler, eine falsche Annahme. Selbst wenn du alle gefundenen Fehler beseitigst, heisst das nicht, dass dein System ein Erfolg wird. Es könnte trotzdem schwer zu bedienen sein, an den Bedürfnissen der Nutzer vorbeigehen oder schlechter als die Konkurrenz sein. <b>Merke:</b> Ein technisch fehlerfreies Produkt, das niemand braucht oder benutzen will, ist trotzdem ein Misserfolg. Qualität ist mehr als nur die Abwesenheit von Bugs.</p>
<p><b>Warum wichtig?</b> Diese Prinzipien bewahren dich vor falschen Erwartungen. Du wirst nie alles testen können (Prinzip 2), du wirst nie Fehlerfreiheit beweisen (Prinzip 1), und selbst perfekte Technik garantiert keinen Erfolg (Prinzip 7). Gutes Testen heisst deshalb: klug auswählen, früh anfangen, dort suchen, wo die Fehler stecken.</p>`,
    code: null
  }
);

sections202.push(
  {
    heading: `3. Black-box Testing: Equivalence Partitioning & Boundary Value Analysis`,
    body: `<p>Da wir nicht alles testen können (Prinzip 2), brauchen wir <b>Testtechniken</b>, um clever wenige, aber aussagekräftige Testfälle auszuwählen. Man teilt sie grob in zwei Familien ein. Diesen Abschnitt widmen wir der ersten Familie: dem <b>Black-box Testing</b>.</p>
<p><b>Was ist Black-box Testing?</b> Eine Black Box (schwarze Kiste) ist etwas, in das man nicht hineinsehen kann. Beim Black-box Testing testet man die Software, <b>ohne den inneren Code zu kennen oder zu betrachten</b>. Man schaut nur auf die <b>Eingaben (Inputs)</b> und die <b>Ausgaben (Outputs)</b>. Man fragt: "Wenn ich das hineinstecke, kommt das Richtige heraus?" Die Testfälle leitet man aus der <i>Spezifikation</i> ab, also aus den Anforderungen, Use Cases oder der Funktionssignatur. Deshalb heisst es auch <b>spezifikationsbasiert</b> oder verhaltensbasiert. <b>Analogie:</b> Du testest einen Getränkeautomaten, indem du Geld einwirfst und schaust, ob die richtige Dose herauskommt. Du baust ihn nicht auf, um die Verkabelung zu prüfen.</p>
<p>Die wichtigste Black-box-Technik heisst <b>Equivalence Partitioning</b> (Äquivalenzklassenbildung). <i>Equivalence</i> bedeutet Gleichwertigkeit, <i>Partition</i> bedeutet Aufteilung. Die Idee: Man teilt alle möglichen Eingabewerte in <b>disjunkte Gruppen</b> auf (disjunkt = ohne gemeinsame Elemente, sie überschneiden sich nicht). Innerhalb einer Gruppe geht man davon aus, dass sich die Software <i>gleich</i> verhält. Wenn das so ist, reicht <b>ein einziger Wert</b> als Vertreter (Representative) für die ganze Gruppe. So reduziert man die Zahl der Testfälle drastisch und erreicht trotzdem 100 Prozent Klassenabdeckung. Man unterscheidet <b>gültige</b> Klassen (vEP, valid equivalence partition, sollten akzeptiert werden) und <b>ungültige</b> Klassen (iEP, invalid, sollten abgelehnt werden).</p>
<p><b>Durchgerechnetes Beispiel (Rabattfunktion aus der Vorlesung).</b> Ein Supermarkt gibt Rabatt auf Saft, abhängig von der gekauften Menge und davon, ob man im Bonusclub ist. Die Funktion ist <code>calculate_discount(amount, member)</code>. Die Regeln: 1 bis 4 Kartons = 0 Prozent, 5 bis 7 = 25 Prozent, 8 bis 12 = 33 Prozent, mehr als 12 bis 20 = 50 Prozent. Maximal 20 Kartons. Clubmitglieder bekommen 5 Prozent extra.</p>
<p><b>Schritt 1 - Klassen bilden.</b> Für den Parameter <b>amount</b> ergeben sich vier gültige Klassen (vEP), weil es vier Rabattstufen gibt: [1..4], [5..7], [8..12], [13..20]. Dazu drei ungültige Klassen (iEP): zu klein [MIN..0], zu gross [21..MAX] und gar keine Zahl ("abc"). Für den Parameter <b>member</b> gibt es zwei gültige Klassen (true, false) und eine ungültige (kein boolescher Wert, z.B. 3.1415).</p>
<p><b>Schritt 2 - Anzahl der Testfälle berechnen.</b> Das ist der Teil, der gerne gefragt wird. Die Faustregel: gültige Klassen verschiedener Parameter darf man <b>kombinieren</b> (multiplizieren), ungültige Klassen testet man <b>einzeln</b> (mit gültigen Werten der anderen Parameter, addieren). Hier: gültige Klassen amount = 4, gültige Klassen member = 2. Also 4 * 2 = 8 gültige Testfälle. Ungültige Klassen: amount hat 3, member hat 1, das sind 3 + 1 = 4 ungültige Testfälle. <b>Gesamt: 8 + 4 = 12 Testfälle</b> für 100 Prozent EP-Abdeckung. Statt mehrerer Milliarden möglicher Eingaben genügen 12 gut gewählte.</p>
<p>Die zweite Black-box-Technik baut darauf auf: die <b>Boundary Value Analysis (BVA)</b>, deutsch Grenzwertanalyse. Beobachtung aus der Praxis: <b>An den Rändern (Grenzen) einer Äquivalenzklasse passieren Fehler besonders häufig.</b> Der Grund sind typische Programmierfehler, etwa <code>&lt;</code> statt <code>&lt;=</code>, oder eine Schleife, die einen Schritt zu früh oder zu spät endet (der berüchtigte "off-by-one"-Fehler).</p>
<p><b>So wendet man BVA an:</b> Man testet (1) den exakten Grenzwert, (2) den direkt angrenzenden Wert darunter und darüber. <b>Beispiel aus der Vorlesung:</b> Eine Eingabedatei darf 1 bis 200 Datensätze haben. Die Grenzen sind 1 und 200. Also testet man die Werte 0, 1, 2 (untere Grenze und Nachbarn) sowie 199, 200, 201 (obere Grenze und Nachbarn). Bei unserer Rabattfunktion würde man etwa bei der Stufe [5..7] gezielt 4, 5 (Grenze unten) und 7, 8 (Grenze oben) prüfen, weil genau dort die Verwechslung von "kleiner" und "kleiner gleich" am gefährlichsten ist. <b>Vorteil:</b> Findet sehr effizient die häufigsten Fehler. <b>Nachteil:</b> Man braucht etwas Kreativität, um die richtigen Grenzen zu finden.</p>
<p><b>Merke:</b> Equivalence Partitioning sagt dir <i>welche Gruppen</i> du testen musst, Boundary Value Analysis sagt dir <i>welche konkreten Werte innerhalb und am Rand</i> der Gruppen am gefährlichsten sind. Beide ergänzen sich perfekt.</p>`,
    code: `// Beispiel: Tabelle der 12 Testfaelle (Rabattfunktion)
// amount | member | erwartetes Ergebnis
//   1    | false  | 0.0
//   6    | false  | 0.25
//  12    | false  | 0.33333
//  17    | false  | 0.5
//   1    | true   | 0.05
//   6    | true   | 0.30
//  12    | true   | 0.38333
//  17    | true   | 0.55
// -23    | false  | NICHT GUELTIG   (iEP amount zu klein)
//  89    | false  | NICHT GUELTIG   (iEP amount zu gross)
// "abc"  | false  | NICHT GUELTIG   (iEP keine Zahl)
//  ...   | 3.1415 | NICHT GUELTIG   (iEP member kein boolean)

// Anzahl Testfaelle:
// gueltig:   |vEP_amount| * |vEP_member| = 4 * 2 = 8
// ungueltig: |iEP_amount| + |iEP_member| = 3 + 1 = 4
// GESAMT = 12`
  },
  {
    heading: `4. White-box Testing: Statement Coverage vs. Decision (Branch) Coverage`,
    body: `<p>Die zweite Familie von Testtechniken ist das <b>White-box Testing</b> (auch glass-box, strukturbasiert oder strukturell genannt). Hier ist die Kiste durchsichtig: Man <b>kennt und betrachtet den inneren Code</b>. Die Testfälle leitet man aus der Struktur des Programms ab, also aus den if-Abfragen, Schleifen und Pfaden im Code. Man fragt nicht nur "kommt das Richtige heraus?", sondern "habe ich auch jede Zeile, jeden Zweig im Code durchlaufen?".</p>
<p>Dafür zeichnet man den Code gedanklich als <b>Kontrollflussgraph (control-flow graph)</b>: Jeder mögliche Weg durch das Programm ist eine Linie, jede Verzweigung (if, Schleife) ein Knoten. Man misst dann, wie viel von diesem Graphen die eigenen Tests abdecken. Das nennt man <b>Code Coverage</b> (Code-Abdeckung). Die zwei wichtigsten Masse sind Statement Coverage und Decision Coverage.</p>
<p><b>Statement Coverage (Anweisungsüberdeckung, C0):</b> Hier fragt man: Wurde jede einzelne <i>Anweisung</i> (jede Code-Zeile, jedes Statement) mindestens einmal ausgeführt? Die Formel lautet: C0 = (ausgeführte Anweisungen / Gesamtzahl der Anweisungen) * 100 Prozent. Wenn dein Test 8 von 10 Zeilen durchläuft, hast du 80 Prozent Statement Coverage.</p>
<p><b>Decision Coverage (Zweigüberdeckung, Branch Coverage, C1):</b> Das ist eine Erweiterung. Hier fragt man: Wurde jede <i>Entscheidung</i> (jedes if, jede Schleifenbedingung) in <b>beide</b> Richtungen durchlaufen, also einmal mit Ergebnis "wahr" und einmal mit "falsch"? Die Formel: C1 = (ausgeführte Verzweigungen / Gesamtzahl möglicher Verzweigungen) * 100 Prozent.</p>
<p><b>Warum ist Decision Coverage stärker? Das entscheidende Beispiel.</b> Schau dir den Code im Codefeld an. Wenn wir nur den Test <code>foo(5)</code> ausführen, dann ist <code>x &gt; 0</code> wahr, wir betreten den if-Block und führen <code>y = 10;</code> aus. Damit haben wir <b>jede Zeile, die es zu betreten gibt, ausgeführt</b>, denn es gibt gar keinen else-Zweig mit eigener Anweisung. Statement Coverage meldet stolz 100 Prozent. <b>ABER:</b> wir haben nie getestet, was passiert, wenn <code>x &gt; 0</code> falsch ist, also wenn wir den if-Block <i>überspringen</i>. Decision Coverage merkt das und meldet nur 50 Prozent, weil nur einer der beiden Zweige (wahr-Zweig ja, falsch-Zweig nein) durchlaufen wurde. Erst mit einem zweiten Test wie <code>foo(-1)</code> erreichen wir 100 Prozent Decision Coverage.</p>
<p><b>Merke (sehr prüfungsrelevant):</b> 100 Prozent Decision Coverage bedeutet automatisch auch 100 Prozent Statement Coverage, aber <b>nicht umgekehrt</b>. Decision Coverage ist also das strengere, aussagekräftigere Mass. Wer alle Zweige durchläuft, durchläuft zwangsläufig auch alle Zeilen, aber wer alle Zeilen durchläuft, hat noch lange nicht alle Verzweigungsrichtungen geprüft.</p>
<p>Es gibt noch feinere Stufen, die in der Vorlesung erwähnt werden: <b>Condition Coverage</b> prüft bei zusammengesetzten Bedingungen wie <code>a &gt; 5 || b == 3</code> jede einzelne Teilbedingung (atomic condition) separat auf wahr und falsch. <b>Multiple Condition Coverage</b> prüft sogar alle Kombinationen der Teilbedingungen, was aber wegen der kombinatorischen Explosion schnell sehr aufwändig wird.</p>
<p><b>Warum können Coverage-Prozente irreführen?</b> Das ist ein zentraler Punkt. Eine hohe Prozentzahl fühlt sich beruhigend an, sagt aber wenig über die <i>Qualität</i> der Tests aus:</p>
<ul>
<li><b>Coverage misst nur, ob Code ausgeführt wurde, nicht ob das Ergebnis geprüft wurde.</b> Du kannst 100 Prozent erreichen, ohne ein einziges <code>assert</code> zu schreiben. Der Code läuft durch, aber niemand prüft, ob das Ergebnis stimmt. Die Zahl lügt dann.</li>
<li><b>Statement Coverage übersieht fehlende Zweige</b> (siehe das foo-Beispiel oben): 100 Prozent Zeilen, aber ungetestete Logik.</li>
<li><b>Coverage sagt nichts über fehlende Fälle.</b> Ein vergessener Sonderfall, den der Code gar nicht behandelt, taucht in keiner Coverage auf, denn man kann nur abdecken, was schon da ist.</li>
<li><b>Für objektorientierten Code wenig aussagekräftig:</b> Der Kontrollfluss in einzelnen Methoden ist meist simpel, die Komplexität steckt im Zusammenspiel der Objekte, das die Coverage nicht erfasst.</li>
</ul>
<p><b>Merke:</b> Hohe Coverage ist eine notwendige, aber keine hinreichende Bedingung für gute Tests. Sie ist ein nützliches <i>quantitatives</i> Mass, aber <b>hohe Coverage ist nicht gleich gute Testqualität</b>. 100 Prozent Coverage mit schlechten Tests ist wertlos.</p>`,
    code: `// Warum Decision Coverage staerker ist als Statement Coverage:
public int foo(int x) {
    int y = 0;
    if (x > 0) {     // eine Entscheidung mit 2 moeglichen Ausgaengen
        y = 10;
    }
    return y;
}

// Test 1: foo(5)
//   -> x > 0 ist WAHR, y = 10 wird ausgefuehrt
//   -> jede vorhandene Anweisung lief mind. einmal
//   -> Statement Coverage = 100 %   (sieht perfekt aus!)
//   -> ABER der FALSCH-Zweig (if uebersprungen) wurde nie getestet
//   -> Decision Coverage = nur 50 % (1 von 2 Zweigrichtungen)

// Test 2 zusaetzlich: foo(-1)
//   -> x > 0 ist FALSCH, if wird uebersprungen
//   -> jetzt beide Zweigrichtungen abgedeckt
//   -> Decision Coverage = 100 %

// Merke: 100 % Decision -> impliziert 100 % Statement.
//        100 % Statement -> impliziert NICHT 100 % Decision.`
  }
);

sections202.push(
  {
    heading: `5. Aufbau guter Unit Tests: AAA / Given-When-Then`,
    body: `<p>Ein <b>Unit Test</b> (Modultest) testet eine isolierte, kleine Einheit (Unit) des Codes, meist eine einzelne Methode oder Klasse, völlig getrennt vom Rest. Drei Grundregeln gelten: Ein Unit Test soll (1) nur <b>ein einziges Verhalten</b> testen, (2) <b>schnell</b> laufen und (3) <b>isoliert</b> sein, also nicht von anderen Tests, der Datenbank oder dem Netzwerk abhängen.</p>
<p><b>Die AAA-Struktur (Arrange, Act, Assert).</b> Jeder gute Unit Test hat drei klar getrennte Phasen. Eine gleichwertige Formulierung ist <b>Given-When-Then</b> (Gegeben, Wenn, Dann), die aus dem verhaltensgetriebenen Testen kommt. Beide meinen dasselbe:</p>
<ul>
<li><b>Arrange / Given (Anordnen / Gegeben):</b> Die Vorbedingungen herstellen. Objekte erzeugen, Eingabewerte vorbereiten, alles aufbauen, was der Test braucht.</li>
<li><b>Act / When (Handeln / Wenn):</b> Die eine Aktion ausführen, die getestet werden soll, also die zu testende Methode aufrufen. Das sollte idealerweise <b>genau eine Zeile</b> sein.</li>
<li><b>Assert / Then (Prüfen / Dann):</b> Überprüfen, ob das Ergebnis der Erwartung (postcondition) entspricht. Hier kommt das <code>assertEquals</code> oder <code>assertTrue</code> hin.</li>
</ul>
<p><b>Analogie:</b> Wie ein wissenschaftliches Experiment. Erst den Versuchsaufbau herrichten (Arrange), dann das Experiment durchführen (Act), dann das Ergebnis ablesen und mit der Hypothese vergleichen (Assert).</p>
<p><b>Test-Benennung.</b> Der Name eines Tests ist enorm wichtig, denn wenn ein Test fehlschlägt, willst du am Namen sofort sehen, <i>was</i> kaputt ist, ohne den Code zu lesen. Die Vorlesung gibt klare Richtlinien:</p>
<ul>
<li><b>Beschreibe das Szenario</b>, als würdest du es einer Person ohne Programmierkenntnisse erklären, die aber das Fachproblem kennt.</li>
<li><b>Wörter mit Unterstrichen trennen</b>, das verbessert die Lesbarkeit: <code>calculate_distance_points_same_position_is_0</code>.</li>
<li><b>Den Methodennamen NICHT in den Testnamen schreiben.</b> Teste das Verhalten, nicht die Methode! Der Methodenname kann sich ändern, das Verhalten bleibt. Gut: <code>given_null_id_throws_exception</code>. Schlecht: <code>test1</code> oder <code>testCalcDistance</code>.</li>
</ul>
<p><b>Parametrisierte Tests.</b> Oft will man dasselbe Verhalten mit vielen verschiedenen Werten prüfen. Dieselbe Testmethode mehrfach zu kopieren wäre mühsam und unübersichtlich. Ein <b>parametrisierter Test</b> (parameterized test) löst das: Man schreibt die Testlogik <b>einmal</b> und füttert sie mit einer <b>Liste von Eingabewerten</b>. JUnit5 führt den Test dann automatisch für jeden Wert einmal aus. In JUnit5 nutzt man dafür <code>@ParameterizedTest</code> zusammen mit einer Wertequelle wie <code>@ValueSource</code> (siehe Codefeld). Dafür braucht man die Dependency <code>junit-jupiter-params</code>.</p>
<p><b>Merkmale guter vs. schlechter Tests.</b> Woran erkennt man die Qualität?</p>
<ul>
<li><b>Gute Tests</b> testen genau ein Verhalten, sind unabhängig voneinander (kein gemeinsamer Zustand, keine geteilten Variablen), laufen schnell, sind deterministisch (liefern immer dasselbe Ergebnis) und haben aussagekräftige Namen. Sie lesen sich wie eine Dokumentation.</li>
<li><b>Schlechte Tests</b> erkennt man an klaren Warnzeichen aus der Vorlesung: mehrere Given-When-Then-Abschnitte in einem Test (du testest mehr als ein Verhalten); <code>if/else</code>-Verzweigungen im Test (auch dann testest du mehr als ein Verhalten); mehr als eine Zeile im Act-Abschnitt. In all diesen Fällen solltest du den Test in mehrere kleinere Tests <b>aufteilen</b>. Weitere schlechte Zeichen: Abhängigkeit von der Reihenfolge, langsam, instabil (mal grün, mal rot ohne Codeänderung, sogenannte "flaky tests").</li>
</ul>
<p><b>Best Practices (Zusammenfassung):</b> Pro Test nur ein erwartetes Verhalten; Tests voneinander unabhängig (Mocking statt echte DB, kein geteilter Zustand); Konfigurationseinstellungen nicht unit-testen (das beweist nur, dass man kopieren kann); klar und konsistent benennen; mit den Methoden beginnen, die die wenigsten Abhängigkeiten haben.</p>`,
    code: `import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class PointTest {

    // --- Normaler Unit Test nach AAA / Given-When-Then ---
    @Test
    public void calculate_distance_points_same_position_is_0() {
        // Arrange / Given: Vorbedingung herstellen
        Point p1 = new Point(1, 1);
        Point p2 = new Point(1, 1);

        // Act / When: genau EINE Aktion ausfuehren
        double actual = p1.calcDistance(p2);

        // Assert / Then: Ergebnis pruefen (Toleranz fuer double)
        assertEquals(0.0, actual, 0.0001);
    }

    // --- Exception testen ---
    @Test
    public void given_null_point_throws_exception() {
        Point p1 = new Point(1, 1);
        assertThrows(IllegalArgumentException.class,
                     () -> p1.calcDistance(null));
    }

    // --- Parametrisierter Test: eine Logik, viele Werte ---
    @ParameterizedTest
    @ValueSource(ints = { 1010, 1020, 1030 })
    public void zip_codes_belong_to_vienna(int zipCode) {
        assertEquals("Wien", PostalAddress.getState(zipCode));
    }
}`
  },
  {
    heading: `6. Manuelles vs. automatisiertes Testen`,
    body: `<p>Tests kann man auf zwei Arten ausführen: per Hand oder durch den Computer.</p>
<p><b>Manuelles Testen</b> heisst: Ein Mensch bedient die Software, klickt sich durch, gibt Werte ein und prüft mit eigenen Augen, ob alles stimmt. Beispiel: Du startest die App und probierst die Funktion <code>trackOrder(id)</code> durch, indem du eine Bestellnummer eintippst und schaust, ob der richtige Status erscheint.</p>
<p><b>Automatisiertes Testen</b> heisst: Man schreibt einmal Testcode (zum Beispiel mit JUnit), und die Maschine führt diese Tests danach beliebig oft selbständig aus, ohne dass ein Mensch klicken muss.</p>
<p>Die Vorlesung nennt vier Gründe, warum automatisierte Tests so wertvoll sind:</p>
<ul>
<li><b>Predictability (Vorhersagbarkeit):</b> Je schneller du nach dem Schreiben von Code Rückmeldung bekommst, desto planbarer ist deine Entwicklung. Automatische Tests geben diese Rückmeldung in Sekunden.</li>
<li><b>Reproducibility (Reproduzierbarkeit):</b> Eine Maschine vergisst keinen Schritt und macht keine Flüchtigkeitsfehler. Je mehr manuelle Schritte, desto wahrscheinlicher menschliche Fehler.</li>
<li><b>Collaboration (Zusammenarbeit):</b> Wenn mehrere Leute am selben Projekt arbeiten, stellen automatische Tests sicher, dass nach dem Zusammenführen (Merge) der Arbeiten noch alles funktioniert. So merkt man sofort, wenn Alices Änderung deine Funktion kaputtmacht.</li>
<li><b>Speed (Geschwindigkeit):</b> Tests zu schreiben kostet einmalig Zeit, aber sie laufen danach unzählige Male. Manueller Testaufwand wächst mit jeder neuen Funktion immer weiter, automatischer Aufwand bleibt nahezu konstant.</li>
</ul>
<p><b>Vor- und Nachteile im Überblick.</b></p>
<ul>
<li><b>Manuell - Vorteile:</b> kein Programmieraufwand für die Testinfrastruktur, flexibel, ideal um neue Funktionen explorativ zu erkunden, gut für Usability- und Aussehen-Fragen, die ein Mensch besser beurteilt.</li>
<li><b>Manuell - Nachteile:</b> langsam, ermüdend, fehleranfällig, nicht reproduzierbar, schlecht skalierbar (je grösser das System, desto unmöglicher), nicht für häufige Wiederholung geeignet.</li>
<li><b>Automatisiert - Vorteile:</b> schnell, exakt reproduzierbar, beliebig oft wiederholbar, perfekt für Regressionstests, dient als Dokumentation, ermöglicht sicheres Refactoring.</li>
<li><b>Automatisiert - Nachteile:</b> kostet anfangs Zeit (man muss den Testcode schreiben und pflegen), kann nur prüfen, was man vorher als Erwartung definiert hat, ungeeignet für offene Fragen wie "sieht das gut aus?" oder "fühlt sich das intuitiv an?".</li>
</ul>
<p><b>Merke:</b> In der Praxis kombiniert man beides. Das Wiederholbare und Berechenbare automatisiert man, das Kreative und Erkundende (exploratives Testen) macht weiterhin der Mensch.</p>`,
    code: null
  }
);

sections202.push(
  {
    heading: `7. Test Driven Development (TDD)`,
    body: `<p><b>Test Driven Development</b> (testgetriebene Entwicklung, kurz TDD) dreht die gewohnte Reihenfolge um. Normalerweise schreibt man erst Code und testet ihn danach. Bei TDD schreibt man <b>zuerst den Test</b> und erst dann den Code, der ihn besteht. Das klingt verkehrt herum, hat aber einen tiefen Sinn: Du musst dir <i>vor</i> dem Programmieren genau überlegen, was die Funktion eigentlich können soll. Der Test ist damit zugleich deine Spezifikation.</p>
<p><b>Der Zyklus: Red – Green – Refactor.</b> TDD läuft in kleinen, sich wiederholenden Runden ab. Jede Runde hat drei Phasen, oft nach ihren Farben benannt:</p>
<ol>
<li><b>Red (rot):</b> Schreibe einen Test für ein noch nicht vorhandenes Verhalten. Du führst ihn aus – er schlägt fehl (rot), weil der Code ja noch fehlt. Das ist Absicht! Ein fehlschlagender Test beweist, dass der Test überhaupt etwas prüft.</li>
<li><b>Green (grün):</b> Schreibe den <i>minimalen</i> Code, der nötig ist, damit der Test besteht (grün). Nicht mehr. Es ist völlig okay, hier erst einmal die einfachste, fast schon naive Lösung zu nehmen. Hauptsache, der Test wird grün.</li>
<li><b>Refactor (aufräumen):</b> Jetzt, wo ein grüner Test dich absichert, verbesserst du den Code: Duplikate entfernen, Namen klären, Struktur aufräumen. Nach jedem Schritt führst du die Tests erneut aus – bleiben sie grün, hast du nichts kaputtgemacht.</li>
</ol>
<p>Danach beginnt die nächste Runde mit dem nächsten kleinen Verhalten. So wächst die Funktionalität Stück für Stück, und es gibt zu jeder Zeile Code bereits einen Test.</p>
<p><b>Konkretes Beispiel.</b> Stell dir eine Ampel vor, die mit <code>next()</code> ihren Zustand weiterschaltet. Bei TDD schreibst du zuerst den Test "am Anfang ist die Ampel ROT", lässt ihn fehlschlagen, und baust dann die minimale Klasse, die genau das erfüllt. Erst danach kommt der Test für den nächsten Übergang ROT → GELB, und so weiter.</p>
<p><b>Vorteile von TDD:</b></p>
<ul>
<li>Sehr hohe Testabdeckung praktisch automatisch, weil kein Code ohne vorherigen Test entsteht.</li>
<li>Besseres Design: Weil du den Code aus Sicht des Aufrufers (im Test) zuerst benutzt, entstehen oft klarere, einfacher benutzbare Schnittstellen.</li>
<li>Schnelles Feedback und Mut zum Ändern: Das dichte Sicherheitsnetz macht Refactoring angstfrei.</li>
<li>Weniger Über-Engineering: Du baust nur, was ein Test wirklich verlangt (YAGNI – "You Aren't Gonna Need It").</li>
</ul>
<p><b>Mögliche Nachteile:</b></p>
<ul>
<li>Am Anfang fühlt es sich langsamer an, weil man scheinbar "doppelt" arbeitet.</li>
<li>Es erfordert Disziplin und Übung; die kleinen Schritte sind ungewohnt.</li>
<li>Bei unklaren oder sich ständig ändernden Anforderungen oder bei reiner Experimentier-Code kann es weniger passen.</li>
</ul>
<p><b>Warum erlauben Tests sicheres Refactoring?</b> Refactoring heißt: die innere Struktur des Codes verbessern, <i>ohne</i> sein nach außen sichtbares Verhalten zu ändern. Genau dieses Verhalten prüfen die Tests. Solange alle Tests nach dem Umbau weiterhin grün sind, weißt du mit hoher Sicherheit, dass du nichts kaputtgemacht hast. Ohne Tests müsstest du nach jeder Änderung alles mühsam von Hand durchklicken und hoffen, nichts übersehen zu haben.</p>`,
    code: `// TDD-Runde 1 — erst der Test (Red):
@Test
void shouldStartWithRed() {
    TrafficLight light = new TrafficLight();
    assertEquals("RED", light.getState());   // schlägt fehl: Klasse gibt es noch nicht
}

// dann minimaler Code (Green):
class TrafficLight {
    private String state = "RED";
    public String getState() { return state; }
}

// TDD-Runde 2 — nächster Test (Red):
@Test
void shouldSwitchFromRedToYellow() {
    TrafficLight light = new TrafficLight();
    light.next();
    assertEquals("YELLOW", light.getState());
}
// ... dann next() minimal implementieren, danach refactoren.`
  },
  {
    heading: `8. Maven: Build- und Dependency-Management`,
    body: `<p>Ein echtes Java-Projekt besteht aus vielen Dateien und nutzt viele fremde Bibliotheken (zum Beispiel JUnit zum Testen). All das von Hand zu kompilieren, die richtigen Bibliotheken in den richtigen Versionen herunterzuladen und zusammenzupacken, wäre extrem mühsam und fehleranfällig. Genau diese Arbeit nimmt dir <b>Maven</b> ab. Maven ist ein <b>Build- und Dependency-Management-Tool</b>.</p>
<p>Zwei Begriffe dahinter:</p>
<ul>
<li><b>Build-Management:</b> der automatisierte Ablauf, der aus deinem Quellcode ein fertiges, lauffähiges Produkt macht (kompilieren, Tests ausführen, in eine JAR-Datei packen). Maven kennt dafür feste Phasen, den sogenannten <i>Build-Lifecycle</i> (z. B. <code>compile</code>, <code>test</code>, <code>package</code>, <code>install</code>).</li>
<li><b>Dependency-Management:</b> die Verwaltung der Abhängigkeiten, also der fremden Bibliotheken, die dein Projekt braucht. Maven lädt sie automatisch herunter – inklusive der Bibliotheken, die <i>diese</i> Bibliotheken wiederum brauchen (das nennt man <b>transitive Abhängigkeiten</b>).</li>
</ul>
<p><b>Die POM (pom.xml).</b> Das Herzstück eines Maven-Projekts ist die Datei <code>pom.xml</code>. POM steht für <b>Project Object Model</b>, also eine Beschreibung des Projekts als Objekt. Sie ist in XML geschrieben und enthält:</p>
<ul>
<li>Die <b>Koordinaten</b> des Projekts: <code>groupId</code> (Organisation, z. B. <code>com.firma</code>), <code>artifactId</code> (Projektname) und <code>version</code>. Diese drei zusammen (oft "GAV" genannt) identifizieren jedes Artefakt eindeutig.</li>
<li>Die Liste der <b>Dependencies</b> im Block <code>&lt;dependencies&gt;</code>.</li>
<li>Build-Konfiguration und Plugins.</li>
</ul>
<p><b>Wie fügt man eine Dependency hinzu?</b> Man sucht die gewünschte Bibliothek auf <code>mvnrepository.com</code>, kopiert das fertige <code>&lt;dependency&gt;</code>-Schnipsel mit groupId, artifactId und version in den <code>&lt;dependencies&gt;</code>-Block der pom.xml. Beim nächsten Build lädt Maven die Bibliothek automatisch und stellt sie bereit.</p>
<p><b>Das Maven Repository.</b> Ein <b>Repository</b> ist ein Lager für Artefakte (Bibliotheken). Es gibt zwei wichtige:</p>
<ul>
<li><b>Maven Central</b> – das große öffentliche Repository im Internet, aus dem Maven die meisten Bibliotheken herunterlädt.</li>
<li>Das <b>lokale Repository</b> – ein Ordner auf deinem eigenen Rechner (standardmäßig <code>~/.m2</code>), in dem Maven heruntergeladene Bibliotheken zwischenspeichert. So muss eine einmal geladene Bibliothek nicht jedes Mal neu aus dem Internet geholt werden. Mit <code>mvn install</code> legt man auch eigene Projekte dort ab, damit andere lokale Projekte sie nutzen können.</li>
</ul>
<p><b>Merke:</b> groupId + artifactId + version identifizieren eine Dependency eindeutig. Maven liest die pom.xml, lädt die deklarierten Bibliotheken (mit transitiven Abhängigkeiten) aus dem Repository und baut daraus dein Projekt – reproduzierbar und automatisiert.</p>`,
    code: `<project>
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>prog2-app</artifactId>
  <version>1.0.0</version>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>`
  }
);
