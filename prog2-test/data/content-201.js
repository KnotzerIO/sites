window.DATA = window.DATA || {};
window.DATA.flashcards = window.DATA.flashcards || [];
window.DATA.theory = window.DATA.theory || [];
window.DATA.quiz = window.DATA.quiz || [];

/* =========================================================
   FLASHCARDS – alle 24 Katalogfragen (201-01 … 201-24)
   ========================================================= */
window.DATA.flashcards.push(

  {
    id: "201-01",
    topicId: "201",
    question: "(Wiederholung) Was ist das Ziel von Interfaces? Nenne Beispiele für Interfaces",
    answerVerbose: `<p>Ein <b>Interface</b> definiert einen <em>Vertrag</em>: Es legt fest, welche Methoden ein Objekt anbieten muss, ohne deren Implementierung vorzuschreiben. Das Ziel ist <b>Entkopplung</b> – der Aufrufer kennt nur den Vertrag, nicht die konkrete Klasse dahinter. Dadurch lassen sich Implementierungen austauschen (z. B. für Tests), und unterschiedliche Klassen können denselben Vertrag erfüllen (<em>Polymorphismus</em>).</p>
<ul>
  <li><code>Comparable&lt;T&gt;</code> – Objekte können sortiert werden</li>
  <li><code>Runnable</code> – etwas kann in einem Thread ausgeführt werden</li>
  <li><code>ActionListener</code> – GUI-Events abonnieren</li>
  <li>Eigene Interfaces aus der Vorlesung: <code>MyFunctionalInterface</code>, <code>HttpHandler</code></li>
</ul>`,
    answerExam: `<p>Interfaces definieren einen Vertrag (Methodensignaturen ohne Implementierung) und ermöglichen so Entkopplung und Polymorphismus. Beispiele: <code>Comparable</code>, <code>Runnable</code>, <code>ActionListener</code>, <code>HttpHandler</code>.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-02",
    topicId: "201",
    question: "Was sind APIs? Warum werden APIs eingesetzt?",
    answerVerbose: `<p>Eine <b>API (Application Programming Interface)</b> stellt eine Schnittstelle zu den Daten und Funktionen einer Anwendung für externe Systeme bereit. Sie ermöglicht <em>Maschine-zu-Maschine-Kommunikation</em> auf Basis vordefinierter Regeln und standardisierter Datenformate.</p>
<p>APIs werden eingesetzt weil sie:</p>
<ul>
  <li><b>Abstraktion</b> bieten – interne Implementierungsdetails werden versteckt</li>
  <li><b>Integration</b> ermöglichen – unterschiedliche Technologien kommunizieren über ein einheitliches Interface</li>
  <li><b>Wiederverwendbarkeit</b> fördern – einmal entwickelte Funktionalität ist für viele Clients nutzbar</li>
  <li><b>Schnelle Entwicklung</b> ermöglichen – Entwickler bauen auf bestehenden APIs auf, anstatt alles neu zu implementieren</li>
</ul>`,
    answerExam: `<p>Eine API (Application Programming Interface) stellt Daten und Funktionen einer Anwendung für externe Systeme bereit. Sie wird eingesetzt für Abstraktion interner Details, Integration unterschiedlicher Technologien und schnelle Entwicklung durch Wiederverwendung.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-03",
    topicId: "201",
    question: "Mit welchen APIs hast du bereits gearbeitet? Wie unterscheiden sie sich?",
    answerVerbose: `<p>Im Studium wurden verschiedene API-Typen eingesetzt:</p>
<ul>
  <li><b>Java Standard-APIs</b> (z. B. <code>String</code>, <code>Collections</code>, <code>List</code>): Programmiersprachenbasierte APIs, lokal, kein Netzwerk nötig</li>
  <li><b>Java HttpServer-API</b>: Lokal laufender HTTP-Server, der REST-Endpunkte bereitstellt</li>
  <li><b>Web-based/Remote APIs</b> (z. B. Trivia-API, externe REST-Dienste): Zugriff über HTTP/HTTPS, Daten kommen als JSON, läuft über das Netzwerk</li>
</ul>
<p>Der Hauptunterschied: Lokale Sprachapis erfordern kein Netzwerk und liefern Ergebnisse synchron; web-based APIs kommunizieren über HTTP, verwenden Datenformate wie JSON und benötigen Request/Response-Mechanismen.</p>`,
    answerExam: `<p>Beispiele: Java-Standard-APIs (<code>String</code>, <code>Collections</code>) – lokal, kein Netzwerk. Web-based REST-APIs (z. B. Trivia-API) – über HTTP/HTTPS, Daten als JSON. Unterschied: Lokale APIs erfordern keinen Netzwerkaufruf, web-based APIs arbeiten request/response-basiert über das Netzwerk.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-04",
    topicId: "201",
    question: "Was versteht man unter Remote/web-based API? Welche Technologien werden typischerweise bei einer Remote API verwendet?",
    answerVerbose: `<p>Eine <b>Remote API</b> (auch web-based API) ist eine Schnittstelle, auf die über ein Netzwerk zugegriffen wird. Der Client sendet eine Anfrage an einen Server, der die Anfrage verarbeitet und eine Antwort zurückschickt (<em>Request-Response-Modell</em>).</p>
<p>Typische Technologien:</p>
<ul>
  <li><b>Protokoll:</b> HTTP / HTTPS</li>
  <li><b>Architekturstil:</b> REST, GraphQL, gRPC</li>
  <li><b>Datenformate:</b> JSON (häufigste), XML</li>
  <li><b>Tools:</b> Postman (Testen), Swagger (Dokumentation), Curl (Kommandozeile)</li>
</ul>`,
    answerExam: `<p>Eine Remote/web-based API ist eine über das Netzwerk erreichbare Schnittstelle (Request-Response-Modell). Typische Technologien: HTTP/HTTPS als Protokoll, REST als Architekturstil, JSON als Datenformat.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-05",
    topicId: "201",
    question: "Wodurch ermöglichen APIs die Verwendung unterschiedlicher Softwarekomponenten? Wie kann bspw. eine C# Applikation mit einer Java Applikation durch den Einsatz von APIs interagieren?",
    answerVerbose: `<p>APIs ermöglichen Interoperabilität, weil sie auf <b>technologieneutralen Standards</b> basieren. Solange beide Seiten dasselbe Protokoll (HTTP) und dasselbe Datenformat (JSON) sprechen, spielt die zugrunde liegende Programmiersprache keine Rolle.</p>
<p>Beispiel C# ↔ Java:</p>
<ul>
  <li>Die Java-Anwendung stellt einen HTTP-Server bereit, der JSON-Antworten liefert (z. B. <code>GET /api/hello</code> → <code>{"message": "Hello"}</code>)</li>
  <li>Die C#-Anwendung sendet HTTP-Requests an diesen Endpunkt und deserialisiert die JSON-Antwort in C#-Objekte</li>
  <li>Beide Seiten müssen nichts über die interne Implementierung der anderen wissen</li>
</ul>`,
    answerExam: `<p>APIs abstrahieren die Implementierung hinter standardisierten Protokollen (HTTP) und Datenformaten (JSON). Eine C#-App kann HTTP-Requests an einen Java-Server senden und die JSON-Antwort empfangen – beide Seiten müssen nur den API-Vertrag kennen, nicht die Sprache der anderen Seite.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-06",
    topicId: "201",
    question: "Aus welchen Komponenten besteht ein web-based API Request typischerweise?",
    answerVerbose: `<p>Ein typischer API-Request besteht aus folgenden Komponenten:</p>
<ul>
  <li><b>Endpoint (URL):</b> Die Adresse der Ressource, z. B. <code>https://api.example.com/api/movies</code></li>
  <li><b>HTTP-Methode:</b> Gibt die Art der Operation an (GET, POST, PUT, DELETE)</li>
  <li><b>Parameter:</b> Zusätzliche Angaben – als Teil der URL (Pfadparameter), als Query-String (<code>?id=1</code>) oder im Request Body</li>
  <li><b>Request Headers:</b> Key-Value-Paare mit Metadaten, z. B. <code>Content-Type: application/json</code> oder Authentifizierungs-Token</li>
  <li><b>Request Body:</b> Der eigentliche Dateninhalt (bei POST/PUT), enthält die zu sendenden Daten (meist als JSON)</li>
</ul>`,
    answerExam: `<p>Ein API-Request besteht aus: Endpoint (URL), HTTP-Methode (GET/POST/PUT/DELETE), Parametern (URL/Query/Body), Request Headers (Metadaten wie Content-Type) und Request Body (Nutzdaten, z. B. als JSON).</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-07",
    topicId: "201",
    question: "Aus welchen Komponenten besteht eine web-based API Response typischerweise?",
    answerVerbose: `<p>Eine typische API-Response enthält:</p>
<ul>
  <li><b>Status Code:</b> Dreistelliger HTTP-Code, der das Ergebnis beschreibt (z. B. 200 OK, 201 Created, 404 Not Found, 500 Internal Server Error)</li>
  <li><b>Response Headers:</b> Metadaten der Antwort, z. B. <code>Content-Type: application/json</code></li>
  <li><b>Response Body:</b> Die eigentlichen Daten, die der Client angefordert hat (JSON, XML, Text) – oder eine Fehlermeldung, wenn etwas schiefgelaufen ist</li>
</ul>`,
    answerExam: `<p>Eine API-Response besteht aus: HTTP-Status-Code (z. B. 200, 404), Response Headers (Metadaten) und Response Body (die angeforderten Daten oder eine Fehlermeldung, typischerweise als JSON).</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-08",
    topicId: "201",
    question: "Was ist JSON?",
    answerVerbose: `<p><b>JSON (JavaScript Object Notation)</b> ist ein leichtgewichtiges, textbasiertes Datenformat zum Austausch strukturierter Daten. Es ist für Menschen gut lesbar und für Maschinen einfach zu parsen.</p>
<p>JSON kennt folgende Datentypen:</p>
<ul>
  <li><b>Objekte:</b> <code>{ "key": "value" }</code> – Schlüssel-Wert-Paare in geschwungenen Klammern</li>
  <li><b>Arrays:</b> <code>[1, 2, 3]</code> – geordnete Listen in eckigen Klammern</li>
  <li><b>Primitive:</b> String, Number, Boolean, null</li>
</ul>
<p>JSON ist sprachunabhängig und wird von praktisch allen Programmiersprachen unterstützt – deshalb ist es das Standard-Datenformat für web-based APIs.</p>`,
    answerExam: `<p>JSON (JavaScript Object Notation) ist ein textbasiertes, sprachunabhängiges Datenformat für den Datenaustausch. Es verwendet Schlüssel-Wert-Paare (Objekte) und Arrays und ist das Standardformat für web-based APIs.</p>`,
    code: `// Beispiel JSON-Objekt
{
  "id": 1,
  "name": "Bart Simpson",
  "active": true,
  "scores": [10, 20, 30]
}`,
    source: "201 / Slides 01"
  },

  {
    id: "201-09",
    topicId: "201",
    question: "Wozu benötigt eine API JSON Parsing?",
    answerVerbose: `<p>HTTP überträgt Daten als <em>Text</em>. Wenn eine API JSON-Daten empfängt (z. B. im Request Body) oder senden möchte, muss sie:</p>
<ul>
  <li><b>Deserialisierung (Parsing):</b> Den empfangenen JSON-Text in Java-Objekte umwandeln, damit das Programm damit arbeiten kann</li>
  <li><b>Serialisierung:</b> Java-Objekte in einen JSON-String umwandeln, um sie als Response zu senden</li>
</ul>
<p>Ohne Parsing würde die API nur rohe Strings sehen und hätte keinen typsicheren Zugriff auf die enthaltenen Daten. In Java übernehmen Bibliotheken wie <b>Gson</b> oder <b>Jackson</b> das Parsing.</p>`,
    answerExam: `<p>HTTP überträgt Daten als Text. JSON Parsing (Deserialisierung) wandelt empfangene JSON-Strings in Java-Objekte um; Serialisierung wandelt Java-Objekte in JSON-Strings für die Response. Ohne Parsing hat die API keinen strukturierten Datenzugriff.</p>`,
    code: `// Gson-Beispiel: JSON -> Java-Objekt
Gson gson = new Gson();
HelloMessage msg = gson.fromJson(jsonString, HelloMessage.class);

// Java-Objekt -> JSON
String json = gson.toJson(msg);`,
    source: "201 / Slides 01"
  },

  {
    id: "201-10",
    topicId: "201",
    question: "Nenne 3 HTTP Status-Codes und wann du sie einsetzen würdest. Begründe deine Antworten.",
    answerVerbose: `<p>HTTP-Status-Codes sind dreistellige Codes, die das Ergebnis einer Anfrage beschreiben. Wichtige Gruppen: 2xx (Erfolg), 4xx (Client-Fehler), 5xx (Server-Fehler).</p>
<ul>
  <li><b>200 OK:</b> Die Anfrage war erfolgreich und die Response enthält die angeforderten Daten. Einsatz: GET-Request hat Daten gefunden, PUT/POST wurde erfolgreich ausgeführt.</li>
  <li><b>201 Created:</b> Eine neue Ressource wurde erfolgreich erstellt. Einsatz: Nach einem POST-Request, der ein neues Objekt anlegt (z. B. neuer Film wurde hinzugefügt).</li>
  <li><b>404 Not Found:</b> Die angeforderte Ressource existiert nicht. Einsatz: Wenn ein Client einen ungültigen Pfad aufruft oder ein gesuchtes Objekt nicht in der Datenbank vorhanden ist.</li>
  <li><b>405 Method Not Allowed:</b> Die HTTP-Methode wird für diesen Endpunkt nicht unterstützt. Einsatz: DELETE auf einen Endpunkt, der nur GET/POST unterstützt.</li>
  <li><b>500 Internal Server Error:</b> Ein unerwarteter Fehler auf dem Server. Einsatz: Datenbankfehler oder unbehandelte Exception.</li>
</ul>`,
    answerExam: `<p>Drei wichtige HTTP-Status-Codes: <b>200 OK</b> – Anfrage erfolgreich, Daten werden zurückgeliefert. <b>201 Created</b> – neue Ressource wurde erfolgreich angelegt (nach POST). <b>404 Not Found</b> – Ressource existiert nicht. Begründung: Codes kommunizieren das Ergebnis klar und maschinenlesbar an den Client.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-11",
    topicId: "201",
    question: "Erkläre das MVC Pattern und warum es in der Softwareentwicklung eingesetzt wird.",
    answerVerbose: `<p><b>MVC (Model-View-Controller)</b> ist ein Architekturmuster, das eine Anwendung in drei klar getrennte Schichten unterteilt:</p>
<ul>
  <li><b>Model:</b> Daten und Geschäftslogik (was wird gespeichert und verarbeitet)</li>
  <li><b>View:</b> Darstellung der Daten für den Nutzer (UI oder API-Response)</li>
  <li><b>Controller:</b> Nimmt Anfragen entgegen, koordiniert Model und View</li>
</ul>
<p>Warum es eingesetzt wird:</p>
<ul>
  <li><b>Separation of Concerns:</b> Jede Schicht hat eine klar definierte Aufgabe → einfacher zu verstehen und zu warten</li>
  <li><b>Testbarkeit:</b> Model und Controller können unabhängig getestet werden</li>
  <li><b>Wiederverwendbarkeit:</b> Dasselbe Model kann von unterschiedlichen Views (z. B. Web + Mobile) genutzt werden</li>
  <li><b>Teamarbeit:</b> Frontend- und Backend-Entwickler können parallel arbeiten</li>
</ul>`,
    answerExam: `<p>MVC trennt eine Anwendung in Model (Daten/Logik), View (Darstellung) und Controller (Anfragen koordinieren). Eingesetzt wegen Separation of Concerns, besserer Testbarkeit, Wiederverwendbarkeit und paralleler Teamarbeit.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-12",
    topicId: "201",
    question: "Wie funktioniert die Kommunikation und Aufteilung der Verantwortlichkeiten im MVC Pattern?",
    answerVerbose: `<p>Im MVC-Pattern fließt die Kommunikation nach einem festen Ablauf:</p>
<ol>
  <li>Der <b>Client</b> sendet einen HTTP-Request an einen Endpunkt</li>
  <li>Der <b>Controller</b> empfängt die Anfrage, extrahiert Parameter und HTTP-Methode</li>
  <li>Der Controller delegiert die Verarbeitung an den <b>Service</b> (Geschäftslogik)</li>
  <li>Der Service nutzt das <b>Repository</b> für Datenzugriff und arbeitet mit <b>Model</b>-Klassen</li>
  <li>Das Ergebnis wird als <b>Response</b> (z. B. JSON) an den Client zurückgeschickt</li>
</ol>
<p>Verantwortlichkeiten:</p>
<ul>
  <li><b>Controller:</b> HTTP-Handling (Request/Response), Routing</li>
  <li><b>Service:</b> Geschäftslogik, Regeln, Berechnungen</li>
  <li><b>Repository:</b> Datenpersistenz (Lesen/Schreiben)</li>
  <li><b>Model:</b> Datenhaltung (Domänenobjekte)</li>
</ul>`,
    answerExam: `<p>Controller empfängt HTTP-Requests und delegiert an den Service (Geschäftslogik). Der Service nutzt das Repository (Datenzugriff) und arbeitet mit Model-Klassen. Das Ergebnis wird als Response zurückgegeben. Jede Schicht hat eine klar getrennte Verantwortung.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-13",
    topicId: "201",
    question: "Gib ein Beispiel zu jeder Komponente des MVC Pattern.",
    answerVerbose: `<p>Am Beispiel einer Film-API:</p>
<ul>
  <li><b>Model:</b> Die Klasse <code>Movie</code> mit Feldern wie <code>id</code>, <code>title</code>, <code>year</code> – repräsentiert die Domänedaten</li>
  <li><b>Controller:</b> <code>MovieController implements HttpHandler</code> – empfängt GET/POST/DELETE-Requests auf <code>/api/movies</code> und gibt JSON-Responses zurück</li>
  <li><b>Service:</b> <code>MovieService</code> – enthält Logik wie "Ein Film darf nur hinzugefügt werden, wenn der Titel nicht leer ist"</li>
  <li><b>Repository:</b> <code>MovieRepository</code> – speichert und liest <code>Movie</code>-Objekte (z. B. aus einer Liste oder Datenbank)</li>
  <li><b>View:</b> In einer REST-API ist die "View" die JSON-Serialisierung des Model-Objekts als Response Body</li>
</ul>`,
    answerExam: `<p>Beispiel Film-API: <b>Model</b> = Klasse <code>Movie</code> (Felder: id, title, year). <b>Controller</b> = <code>MovieController</code> (HTTP-Requests empfangen, JSON senden). <b>Service</b> = <code>MovieService</code> (Validierung, Logik). <b>Repository</b> = <code>MovieRepository</code> (Datenpersistenz). <b>View</b> = JSON-Response an den Client.</p>`,
    code: `// Model
public class Movie { int id; String title; int year; }

// Controller (vereinfacht)
public class MovieController implements HttpHandler {
    private MovieService service = new MovieService();
    public void handle(HttpExchange ex) throws IOException {
        // parse request, call service, send JSON response
    }
}

// Service
public class MovieService {
    private MovieRepository repo = new MovieRepository();
    public List<Movie> getAll() { return repo.findAll(); }
}

// Repository
public class MovieRepository {
    private List<Movie> movies = new ArrayList<>();
    public List<Movie> findAll() { return movies; }
}`,
    source: "201 / Slides 01"
  },

  {
    id: "201-14",
    topicId: "201",
    question: "Was wird benötigt, damit man Lambda Expressions in Java verwenden kann?",
    answerVerbose: `<p>Lambda Expressions wurden in <b>Java 8</b> eingeführt. Um sie verwenden zu können, braucht man:</p>
<ul>
  <li>Ein <b>Functional Interface</b> – ein Interface mit genau einer abstrakten Methode. Die Lambda Expression implementiert genau diese Methode.</li>
  <li>Das Functional Interface kann entweder <em>selbst definiert</em> werden oder eines der <em>vordefinierten Interfaces</em> aus der Java-Bibliothek verwendet werden (z. B. <code>Runnable</code>, <code>Comparator</code>, <code>ActionListener</code>)</li>
</ul>
<p>Ohne Functional Interface hat die Lambda Expression keinen "Zieltyp" – der Compiler weiß nicht, welche Methode die Lambda-Expression implementieren soll.</p>`,
    answerExam: `<p>Um Lambda Expressions zu verwenden (seit Java 8) braucht man ein <b>Functional Interface</b> – ein Interface mit genau einer abstrakten Methode. Entweder selbst definiert oder vordefiniert (z. B. <code>Runnable</code>, <code>Comparator</code>).</p>`,
    code: `@FunctionalInterface
public interface MyFunctionalInterface {
    void doSomething(); // genau eine abstrakte Methode
}

// Verwendung mit Lambda
MyFunctionalInterface mf = () -> System.out.println("Lambda!");
mf.doSomething();`,
    source: "201 / Slides 01"
  },

  {
    id: "201-15",
    topicId: "201",
    question: "Welche Charakteristiken hat ein Functional Interface?",
    answerVerbose: `<p>Ein <b>Functional Interface</b> hat folgende Merkmale:</p>
<ul>
  <li><b>Genau eine abstrakte Methode</b> – das ist die Kernbedingung. Die Lambda Expression implementiert genau diese Methode.</li>
  <li>Kann mit der Annotation <code>@FunctionalInterface</code> markiert werden – der Compiler prüft dann, ob wirklich nur eine abstrakte Methode vorhanden ist (optional, aber empfohlen)</li>
  <li>Darf mehrere <b>Default-Methoden</b> und <b>statische Methoden</b> haben</li>
  <li>Darf Methoden von <code>Object</code> (<code>equals</code>, <code>toString</code>, ...) deklarieren, diese zählen nicht als abstrakte Methoden</li>
</ul>
<p>Beispiele vordefinierter Functional Interfaces: <code>Runnable</code>, <code>Callable</code>, <code>Comparator</code>, <code>ActionListener</code>, <code>Predicate</code>, <code>Function</code>.</p>`,
    answerExam: `<p>Ein Functional Interface hat <b>genau eine abstrakte Methode</b>. Es kann mit <code>@FunctionalInterface</code> annotiert werden (Compiler-Check). Default- und statische Methoden sind erlaubt. Beispiele: <code>Runnable</code>, <code>Comparator</code>, <code>Predicate</code>.</p>`,
    code: `@FunctionalInterface
public interface MyComparator {
    boolean compare(int a, int b); // die EINE abstrakte Methode
    // default und static Methoden sind erlaubt
}`,
    source: "201 / Slides 01"
  },

  {
    id: "201-16",
    topicId: "201",
    question: "Welchen Zweck haben Lambda Expressions?",
    answerVerbose: `<p>Lambda Expressions ermöglichen <b>funktionale Programmierung in Java</b>. Ihr Zweck:</p>
<ul>
  <li><b>Weniger Boilerplate-Code:</b> Statt einer anonymen inneren Klasse reicht ein knapper Ausdruck</li>
  <li><b>Verhalten als Parameter übergeben:</b> Funktionen (= Verhalten) können wie Objekte gespeichert und weitergereicht werden</li>
  <li><b>Lesbarkeit:</b> Code wird deklarativer – man beschreibt <em>was</em> gemacht werden soll, nicht <em>wie</em></li>
  <li><b>Zusammenarbeit mit der Stream API:</b> Lambdas sind das Herzstück der Stream-Operationen (filter, map, forEach ...)</li>
</ul>
<p>Analogie: Statt eine ganze Klasse zu schreiben, die "Vergleiche zwei Zahlen" implementiert, übergibt man einfach <code>(a, b) -> a > b</code>.</p>`,
    answerExam: `<p>Lambda Expressions ermöglichen es, Verhalten (Funktionen) als Parameter zu übergeben, reduzieren Boilerplate-Code gegenüber anonymen Klassen und machen Code deklarativer. Sie sind essenziell für die Java Stream API.</p>`,
    code: `// Ohne Lambda (anonym)
Collections.sort(names, new Comparator<String>() {
    public int compare(String a, String b) { return a.compareTo(b); }
});
// Mit Lambda
Collections.sort(names, (a, b) -> a.compareTo(b));`,
    source: "201 / Slides 01"
  },

  {
    id: "201-17",
    topicId: "201",
    question: "Wie sind Lambda Expressions aufgebaut? (Parameter, Body, Return Typ)",
    answerVerbose: `<p>Syntax: <code>(Parameter) -> Body</code></p>
<ul>
  <li><b>Parameter:</b>
    <ul>
      <li>Kein Parameter: <code>()</code></li>
      <li>Ein Parameter: <code>x</code> oder <code>(x)</code> (Klammern optional)</li>
      <li>Mehrere Parameter: <code>(a, b)</code></li>
      <li>Typen können angegeben oder weggelassen werden (Type Inference)</li>
    </ul>
  </li>
  <li><b>Pfeil:</b> <code>-&gt;</code> trennt Parameter vom Body</li>
  <li><b>Body:</b>
    <ul>
      <li>Einzeiliger Ausdruck: kein <code>{}</code> nötig, Wert wird implizit zurückgegeben</li>
      <li>Mehrzeiliger Block: <code>{ ... }</code> mit explizitem <code>return</code></li>
    </ul>
  </li>
  <li><b>Rückgabetyp:</b> Wird vom Compiler aus dem Functional Interface inferiert – kein expliziter Rückgabetyp in der Lambda-Syntax</li>
</ul>`,
    answerExam: `<p>Aufbau: <code>(Parameter) -&gt; Body</code>. Parameter: <code>()</code> kein Param, <code>x</code> ein Param, <code>(a,b)</code> mehrere. Body: einzeiliger Ausdruck (implizit return) oder <code>{ ... return ...; }</code>. Return-Typ wird vom Compiler inferiert.</p>`,
    code: `// Kein Parameter
() -> System.out.println("Hallo")

// Ein Parameter (Klammern optional)
x -> x * 2

// Mehrere Parameter, einzeilig mit implizitem return
(a, b) -> a + b

// Mehrzeiliger Body
(a, b) -> {
    int result = a + b;
    return result;
}`,
    source: "201 / Slides 01"
  },

  {
    id: "201-18",
    topicId: "201",
    question: "Was sind typische Anwendungsbereiche für Lambda Expressions? In welchem Kontext hast du schon Lambda Expressions angewandt?",
    answerVerbose: `<p>Typische Anwendungsbereiche:</p>
<ul>
  <li><b>Stream API:</b> <code>filter</code>, <code>map</code>, <code>forEach</code> – das häufigste Einsatzgebiet im Studium</li>
  <li><b>Event Listener:</b> GUI-Events (z. B. <code>button.addActionListener(e -> ...)</code>)</li>
  <li><b>Sortierung:</b> <code>Collections.sort(list, (a, b) -> a.compareTo(b))</code></li>
  <li><b>Runnable / Threads:</b> <code>new Thread(() -> doWork()).start()</code></li>
  <li><b>Callback-Funktionen:</b> Verhalten wird als Parameter übergeben und später aufgerufen</li>
  <li><b>Wiederholende einfache Verhaltensweisen</b> ohne eigene Klasse definieren zu müssen</li>
</ul>
<p>Im Kurs: Stream-Operationen auf Mitarbeiterlisten (<code>filter</code> nach Gehalt, <code>forEach</code> zur Ausgabe), Sortierung mit <code>Comparator</code>.</p>`,
    answerExam: `<p>Typische Einsatzgebiete: Stream API (filter/map/forEach), Event Listener (GUI), Sortierung (Comparator), Threads (Runnable), Callback-Funktionen. Im Kurs wurden Lambdas vor allem bei Stream-Operationen und der Sortierung von Listen eingesetzt.</p>`,
    code: `// Stream + Lambda
employees.stream()
    .filter(e -> e.getSalary() > 1000)
    .forEach(e -> System.out.println(e.getName()));

// Thread + Lambda
new Thread(() -> System.out.println("Running")).start();`,
    source: "201 / Slides 01"
  },

  {
    id: "201-19",
    topicId: "201",
    question: "Wie ist ein Stream aufgebaut (Datasource, Operationen)?",
    answerVerbose: `<p>Ein Java Stream besteht aus drei Teilen:</p>
<ul>
  <li><b>1. Datenquelle (Source):</b> Woher kommen die Elemente? Typisch: <code>Collection.stream()</code>, <code>Arrays.stream(array)</code>, <code>Stream.of(...)</code></li>
  <li><b>2. Intermediate Operations (Zwischenoperationen):</b> Transformieren den Stream, geben wieder einen Stream zurück – können beliebig verkettet werden. Beispiele: <code>filter()</code>, <code>map()</code>, <code>sorted()</code>, <code>peek()</code>. Sie sind <em>lazy</em> – werden erst bei Aufruf der Terminal Operation ausgeführt.</li>
  <li><b>3. Terminal Operation (Abschlussoperation):</b> Schließt die Pipeline ab, löst die Ausführung aus und liefert ein Ergebnis. Beispiele: <code>forEach()</code>, <code>collect()</code>, <code>count()</code>, <code>findFirst()</code>. Nach einer Terminal Operation ist der Stream <em>verbraucht</em>.</li>
</ul>`,
    answerExam: `<p>Ein Stream besteht aus: <b>Source</b> (z. B. <code>list.stream()</code>), beliebig vielen <b>Intermediate Operations</b> (filter, map, sorted – lazy, geben Stream zurück) und genau einer <b>Terminal Operation</b> (forEach, collect, count – löst Ausführung aus, verbraucht Stream).</p>`,
    code: `List<String> names = List.of("Anna", "Bob", "Clara");
long count = names.stream()              // Source
    .filter(n -> n.length() > 3)         // Intermediate
    .map(String::toUpperCase)            // Intermediate
    .count();                            // Terminal`,
    source: "201 / Slides 01"
  },

  {
    id: "201-20",
    topicId: "201",
    question: "Welche Eigenschaften haben Java Streams?",
    answerVerbose: `<p>Java Streams (seit Java 8) haben folgende charakteristische Eigenschaften:</p>
<ul>
  <li><b>Sequenz von Elementen:</b> Ein Stream stellt eine Folge von Elementen eines bestimmten Typs bereit</li>
  <li><b>Keine Datenspeicherung:</b> Streams speichern keine Elemente – sie verarbeiten sie aus der Quelle</li>
  <li><b>Keine Modifikation der Quelle:</b> Die zugrundeliegende Collection wird nicht verändert</li>
  <li><b>Lazy Evaluation:</b> Intermediate Operations werden erst ausgeführt, wenn eine Terminal Operation aufgerufen wird</li>
  <li><b>Pipelining:</b> Intermediate Operations geben einen neuen Stream zurück – Operationen können zu einer Pipeline verkettet werden</li>
  <li><b>Einmalige Nutzung:</b> Ein Stream kann nur einmal konsumiert werden (nach der Terminal Operation ist er verbraucht)</li>
  <li><b>Interne Iteration:</b> Im Gegensatz zu for-Schleifen iteriert der Stream intern über die Elemente</li>
</ul>`,
    answerExam: `<p>Java Streams: speichern keine Daten, modifizieren die Quelle nicht, sind lazy (Ausführung erst bei Terminal Operation), unterstützen Pipelining (Verkettung von Operationen), können nur einmal konsumiert werden, iterieren intern.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-21",
    topicId: "201",
    question: "Wann würdest du Streams einsetzen? Welche Vorteile bieten sie im Vergleich zu klassischen Schleifen?",
    answerVerbose: `<p>Streams eignen sich besonders wenn:</p>
<ul>
  <li>Daten <b>gefiltert, transformiert oder aggregiert</b> werden sollen (filter/map/reduce)</li>
  <li>Der Code <b>deklarativ</b> und lesbar sein soll ("was wird gemacht" statt "wie")</li>
  <li>Mehrere Operationen <b>verkettet</b> werden sollen</li>
  <li>Potenzielle <b>Parallelisierung</b> gewünscht ist (<code>parallelStream()</code>)</li>
</ul>
<p>Vorteile gegenüber klassischen Schleifen:</p>
<ul>
  <li><b>Weniger Code / bessere Lesbarkeit:</b> Kein manuelles Verwalten von Index oder temporären Listen</li>
  <li><b>Deklarativ:</b> <code>filter(e -> e.getAge() > 18)</code> ist klarer als ein if-Block in einer for-Schleife</li>
  <li><b>Verkettung:</b> Komplexe Datentransformationen in einer Zeile</li>
  <li><b>Fehlersicherer:</b> Kein Off-by-one-Fehler</li>
</ul>
<p>Nachteil: Für sehr einfache Schleifen oder wenn Ausnahmen behandelt werden müssen, kann eine klassische for-Schleife übersichtlicher sein.</p>`,
    answerExam: `<p>Streams einsetzen bei Filtern/Transformieren/Aggregieren von Daten. Vorteile: weniger Code, deklarativer Stil (was statt wie), einfache Verkettung, keine manuellen Index-Fehler. Bei sehr einfachen Schleifen kann eine klassische for-Schleife klarer sein.</p>`,
    code: null,
    source: "201 / Slides 01"
  },

  {
    id: "201-22",
    topicId: "201",
    question: "Nenne 3 Stream Operationen und wie/wofür man diese einsetzt",
    answerVerbose: `<p>Drei wichtige Stream-Operationen:</p>
<ul>
  <li><b>filter(Predicate):</b> Intermediate Operation – behält nur Elemente, die die Bedingung erfüllen. Einsatz: Mitarbeiter mit Gehalt > 1000 filtern, nur gerade Zahlen behalten.</li>
  <li><b>map(Function):</b> Intermediate Operation – transformiert jedes Element in ein anderes. Einsatz: Namen in Großbuchstaben umwandeln, Objekte in DTOs konvertieren, Zahlen quadrieren.</li>
  <li><b>collect(Collector):</b> Terminal Operation – sammelt Stream-Elemente in eine Datenstruktur. Einsatz: <code>collect(Collectors.toList())</code> – Ergebnis als neue Liste, <code>collect(Collectors.joining(", "))</code> – Strings verbinden.</li>
</ul>
<p>Weitere wichtige Operationen: <code>forEach</code> (Terminal, jedes Element verarbeiten), <code>sorted</code> (Intermediate, sortieren), <code>findFirst</code> (Terminal, erstes Element), <code>count</code> (Terminal, Anzahl).</p>`,
    answerExam: `<p>Drei Stream-Operationen: <b>filter(Predicate)</b> – Elemente nach Bedingung filtern (Intermediate). <b>map(Function)</b> – Elemente transformieren, z. B. in anderen Typ (Intermediate). <b>collect(Collector)</b> – Ergebnis in Liste/Set/String sammeln (Terminal).</p>`,
    code: `List<Employee> filtered = employees.stream()
    .filter(e -> e.getSalary() > 300.0)          // filter
    .map(e -> new EmployeeDTO(e.getName()))       // map
    .collect(Collectors.toList());               // collect

// sorted + forEach
employees.stream()
    .sorted((e1, e2) -> e1.getName().compareTo(e2.getName()))
    .forEach(e -> System.out.println(e.getName()));`,
    source: "201 / Slides 01"
  },

  {
    id: "201-23",
    topicId: "201",
    question: "In welchem Zusammenhang stehen Streams, Lambda Expressions und APIs?",
    answerVerbose: `<p>Diese drei Konzepte ergänzen sich in modernen Java-Applikationen:</p>
<ul>
  <li><b>Lambda Expressions</b> sind die Syntax, mit der man Verhalten kompakt definiert. Sie implementieren Functional Interfaces.</li>
  <li><b>Streams</b> verwenden Lambda Expressions als Parameter ihrer Operationen (<code>filter</code>, <code>map</code>, <code>forEach</code>). Ohne Lambdas wäre die Stream-API kaum benutzbar.</li>
  <li><b>APIs</b> liefern oft Daten (z. B. als JSON-Liste), die dann in Java-Objekte geparst und anschließend mit Streams und Lambdas verarbeitet werden.</li>
</ul>
<p>Typischer Ablauf in einer REST-API: Client sendet Request → Controller empfängt Daten → Service verarbeitet Daten mit Streams/Lambdas → Repository speichert Ergebnis → JSON-Response wird zurückgeschickt.</p>`,
    answerExam: `<p>Streams nutzen Lambda Expressions als Parameter (filter, map, forEach). APIs liefern Daten (JSON), die nach dem Parsing mit Streams und Lambdas effizient verarbeitet werden. Lambdas sind die Grundlage für die deklarative Stream-API.</p>`,
    code: `// API liefert JSON-Liste -> parsen -> Stream-Verarbeitung
List<Employee> employees = gson.fromJson(apiResponse, listType);
employees.stream()
    .filter(e -> e.getSalary() > 1000)
    .map(Employee::getName)
    .forEach(System.out::println);`,
    source: "201 / Slides 01"
  },

  {
    id: "201-24",
    topicId: "201",
    question: "(Frage 24 – offene Reflexionsfrage aus dem Katalog)",
    answerVerbose: `<p>Der Fragenkatalog enthält 23 nummerierte Fragen (1–23); Frage 24 ist im Katalog nicht mit einem Text versehen. Diese Karte dient als Zusammenfassung der behandelten Themen:</p>
<ul>
  <li>APIs abstrahieren Implementierungsdetails und ermöglichen Interoperabilität</li>
  <li>REST-APIs nutzen HTTP, JSON und das Request-Response-Modell</li>
  <li>MVC trennt Verantwortlichkeiten (Model, View, Controller/Service/Repository)</li>
  <li>Functional Interfaces + Lambda Expressions = funktionale Programmierung in Java</li>
  <li>Streams verarbeiten Daten deklarativ durch verkettete Operationen</li>
</ul>`,
    answerExam: `<p>Zusammenfassung Block 201: APIs (Abstraktion, HTTP/JSON/REST), MVC-Pattern (Schichtenarchitektur), Lambda Expressions (anonyme Funktionen auf Basis von Functional Interfaces), Java Streams (deklarative Datenverarbeitung mit filter/map/collect).</p>`,
    code: null,
    source: "201 / Slides 01"
  }

);

/* =========================================================
   THEORY – ein Objekt mit allen Abschnitten für Topic 201
   ========================================================= */
window.DATA.theory.push({
  topicId: "201",
  title: "APIs, MVC, Lambdas & Streams",
  sections: [
    {
      heading: "Was ist eine API?",
      body: `<p>Eine <b>API (Application Programming Interface)</b> ist eine Schnittstelle, die Daten und Funktionen einer Anwendung für externe Systeme zugänglich macht. Sie ermöglicht <em>Maschine-zu-Maschine-Kommunikation</em> auf Basis vordefinierter Regeln und standardisierter Datenformate.</p>
<p>APIs abstrahieren interne Implementierungsdetails – der Nutzer der API muss nur den <em>Vertrag</em> kennen (welche Methoden/Endpunkte existieren, welche Parameter sie erwarten, welche Daten sie liefern), nicht wie die API intern funktioniert. Das Prinzip kennt man auch von Interfaces in Java: <code>String.toUpperCase()</code> nutzt man, ohne zu wissen, wie die Methode intern implementiert ist.</p>
<p>Typen von APIs:</p>
<ul>
  <li><b>Sprachbibliotheks-APIs:</b> Java Standard Library (<code>Collections</code>, <code>Stream</code>)</li>
  <li><b>SDK-APIs / Hardware-APIs:</b> Android SDK, OpenGL</li>
  <li><b>Web-based APIs:</b> REST, GraphQL, gRPC – über das Netzwerk erreichbar</li>
</ul>`,
      code: null
    },
    {
      heading: "REST und web-based APIs",
      body: `<p>Web-based APIs arbeiten nach dem <b>Request-Response-Modell</b>: Ein Client sendet eine HTTP-Anfrage an einen <em>Endpunkt</em> (URL), der Server verarbeitet sie und sendet eine Antwort.</p>
<p><b>Komponenten eines API-Requests:</b></p>
<ul>
  <li><b>Endpoint:</b> URL der Ressource, z. B. <code>GET https://api.example.com/api/movies</code></li>
  <li><b>HTTP-Methode:</b> GET (Lesen), POST (Erstellen), PUT (Aktualisieren), DELETE (Löschen)</li>
  <li><b>Parameter:</b> Pfadparameter, Query-String oder Request Body</li>
  <li><b>Request Headers:</b> Metadaten (z. B. <code>Content-Type: application/json</code>, Auth-Token)</li>
  <li><b>Request Body:</b> Nutzdaten für POST/PUT (JSON)</li>
</ul>
<p><b>Komponenten einer API-Response:</b></p>
<ul>
  <li><b>Status Code:</b> 200 OK, 201 Created, 404 Not Found, 405 Method Not Allowed, 500 Internal Server Error</li>
  <li><b>Response Headers:</b> z. B. <code>Content-Type: application/json</code></li>
  <li><b>Response Body:</b> Die Daten (JSON) oder eine Fehlermeldung</li>
</ul>`,
      code: `// Beispiel: Java HttpServer – Controller registrieren
HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
server.createContext("/api/movies", new MovieController());
server.start();`
    },
    {
      heading: "JSON – JavaScript Object Notation",
      body: `<p><b>JSON</b> ist das Standard-Datenformat für web-based APIs. Es ist textbasiert, sprachunabhängig und gut lesbar.</p>
<p>JSON-Datentypen:</p>
<ul>
  <li><b>Objekt:</b> <code>{ "key": "value", "age": 25 }</code></li>
  <li><b>Array:</b> <code>[1, 2, 3]</code> oder <code>[{"id":1}, {"id":2}]</code></li>
  <li><b>Primitive:</b> String, Number, Boolean (<code>true</code>/<code>false</code>), <code>null</code></li>
</ul>
<p><b>JSON Parsing in Java:</b> HTTP überträgt Daten als Text. Um mit den Daten arbeiten zu können, müssen sie <em>deserialisiert</em> (JSON → Java-Objekt) werden. Beim Senden werden Java-Objekte <em>serialisiert</em> (Java-Objekt → JSON-String). Bibliotheken: <b>Gson</b>, Jackson.</p>`,
      code: `// Gson: JSON-String -> Java-Objekt (Deserialisierung)
Gson gson = new Gson();
Movie movie = gson.fromJson(jsonString, Movie.class);

// Java-Objekt -> JSON-String (Serialisierung)
String json = gson.toJson(movie);`
    },
    {
      heading: "HTTP-Status-Codes",
      body: `<p>HTTP-Status-Codes sind dreistellige Zahlen, die das Ergebnis einer API-Anfrage kommunizieren. Gruppen:</p>
<ul>
  <li><b>2xx – Erfolg:</b> 200 OK, 201 Created, 204 No Content</li>
  <li><b>3xx – Umleitung:</b> 301 Moved Permanently, 304 Not Modified</li>
  <li><b>4xx – Client-Fehler:</b> 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed</li>
  <li><b>5xx – Server-Fehler:</b> 500 Internal Server Error, 503 Service Unavailable</li>
</ul>
<p>Wichtige Codes im Kurs:</p>
<ul>
  <li><b>200 OK</b> – GET erfolgreich, Daten werden zurückgegeben</li>
  <li><b>201 Created</b> – POST erfolgreich, neue Ressource angelegt</li>
  <li><b>404 Not Found</b> – Endpunkt oder Ressource existiert nicht</li>
  <li><b>405 Method Not Allowed</b> – HTTP-Methode nicht unterstützt</li>
  <li><b>500 Internal Server Error</b> – unbehandelte Exception auf dem Server</li>
</ul>`,
      code: `// ApiUtils.sendResponse mit Status-Code
ApiUtils.sendResponse(exchange, 200, gson.toJson(movie));    // OK
ApiUtils.sendResponse(exchange, 201, gson.toJson(newMovie)); // Created
ApiUtils.sendResponse(exchange, 404, "Not found");           // Not Found
ApiUtils.sendResponse(exchange, 405, "Method not allowed");  // Method Not Allowed`
    },
    {
      heading: "MVC / Service-Controller-Repository Pattern",
      body: `<p>Das <b>MVC-Pattern</b> (Model-View-Controller) ist ein Architekturmuster, das eine Anwendung in klar getrennte Schichten unterteilt. Im Kurskontext wird es als <em>Service-Controller-Repository</em>-Pattern umgesetzt:</p>
<ul>
  <li><b>Controller:</b> Empfängt HTTP-Requests, extrahiert Methode und Parameter, delegiert an Service, sendet Response</li>
  <li><b>Service:</b> Enthält die Geschäftslogik (Validierung, Berechnungen, Regeln)</li>
  <li><b>Repository:</b> Datenzugriffsschicht – liest und schreibt Domänenobjekte (Datenbankabstraktion)</li>
  <li><b>Model:</b> Domänenklassen, z. B. <code>Movie</code>, <code>Employee</code></li>
  <li><b>View:</b> Bei REST-APIs die JSON-Serialisierung als Response Body</li>
</ul>
<p>Warum MVC? <b>Separation of Concerns</b> – jede Schicht hat genau eine Aufgabe, dadurch einfacheres Testen, Warten und Erweitern. Teams können parallel arbeiten.</p>
<p>Kommunikationsfluss: Client → Controller → Service → Repository → Model → zurück als JSON-Response.</p>`,
      code: `// Controller delegiert an Service
public void handle(HttpExchange exchange) throws IOException {
    switch (exchange.getRequestMethod()) {
        case "GET"    -> sendJson(exchange, 200, movieService.getAll());
        case "POST"   -> {
            String body = new String(exchange.getRequestBody().readAllBytes());
            Movie m = gson.fromJson(body, Movie.class);
            sendJson(exchange, 201, movieService.add(m));
        }
        default       -> sendJson(exchange, 405, "Method not allowed");
    }
}`
    },
    {
      heading: "Lambda Expressions",
      body: `<p>Lambda Expressions wurden in <b>Java 8</b> eingeführt. Sie sind <em>anonyme Funktionen</em> – eine Funktion ohne Namen und ohne eigene Klasse.</p>
<p><b>Syntax:</b> <code>(Parameter) -&gt; Body</code></p>
<ul>
  <li>Kein Parameter: <code>() -&gt; System.out.println("Hallo")</code></li>
  <li>Ein Parameter: <code>x -&gt; x * 2</code></li>
  <li>Mehrere Parameter: <code>(a, b) -&gt; a + b</code></li>
  <li>Mehrzeiliger Body: <code>(a, b) -&gt; { int r = a + b; return r; }</code></li>
</ul>
<p><b>Voraussetzung:</b> Ein <b>Functional Interface</b> mit genau einer abstrakten Methode. Die Lambda Expression implementiert genau diese Methode. Die Annotation <code>@FunctionalInterface</code> ist optional, aber empfohlen.</p>
<p><b>Vorteile:</b> Weniger Code als anonyme innere Klassen, deklarativer Stil, Verhalten als Parameter übergeben.</p>
<p><b>Einsatzgebiete:</b> Stream API, Event Listener, Sortierung (Comparator), Threads (Runnable), Callbacks.</p>`,
      code: `@FunctionalInterface
interface MyComparator {
    boolean compare(int a, int b);
}

// Gültige Lambdas für dieses Interface:
MyComparator gt = (a, b) -> a > b;
MyComparator lt = (a, b) -> { return a < b; };

// Nicht gültig (falsche Signatur):
// MyComparator bad = () -> true;   // kein Parameter
// MyComparator bad2 = x -> x > 0; // nur ein Parameter

// Sortierung mit Lambda
List<String> names = Arrays.asList("Bart", "Lisa", "Homer");
Collections.sort(names, (a, b) -> a.compareTo(b));`
    },
    {
      heading: "Java Streams",
      body: `<p>Die <b>Stream API</b> (seit Java 8) ermöglicht deklarative Datenverarbeitung auf Collections und Arrays.</p>
<p><b>Aufbau einer Stream-Pipeline:</b></p>
<ol>
  <li><b>Source:</b> <code>collection.stream()</code>, <code>Arrays.stream(arr)</code>, <code>Stream.of(...)</code></li>
  <li><b>Intermediate Operations</b> (0 bis n, lazy): <code>filter(Predicate)</code>, <code>map(Function)</code>, <code>sorted(Comparator)</code>, <code>peek(Consumer)</code>, <code>limit(n)</code></li>
  <li><b>Terminal Operation</b> (genau 1, löst Ausführung aus): <code>forEach(Consumer)</code>, <code>collect(Collector)</code>, <code>count()</code>, <code>findFirst()</code>, <code>reduce(...)</code></li>
</ol>
<p><b>Eigenschaften:</b> Speichern keine Daten, modifizieren die Quelle nicht, sind lazy, können nur einmal konsumiert werden, iterieren intern.</p>
<p><b>Vergleich mit for-Schleife:</b> Streams sind deklarativer ("was"), for-Schleifen imperativer ("wie"). Streams ermöglichen einfache Verkettung ohne temporäre Listen und Off-by-one-Fehler.</p>`,
      code: `Employee[] employees = {
    new Employee(1, "Bart", 100.10),
    new Employee(2, "Lisa", 9999.99),
    new Employee(3, "Homer", 2030.20)
};

// filter + forEach (Terminal)
Arrays.stream(employees)
    .filter(e -> e.getSalary() > 300.0)
    .forEach(e -> System.out.println(e.getName()));

// map + collect -> neue Liste
List<Employee> sorted = Arrays.asList(employees).stream()
    .sorted((e1, e2) -> e1.getName().compareTo(e2.getName()))
    .collect(Collectors.toList());

// count
long count = Arrays.stream(employees)
    .filter(e -> e.getSalary() > 500)
    .count();`
    }
  ]
});

/* =========================================================
   QUIZ – 15 Fragen (mc, multi, code-output)
   ========================================================= */
window.DATA.quiz.push(

  {
    id: "q-201-api-1",
    topicId: "201",
    type: "mc",
    prompt: "Was ist das Hauptziel einer API (Application Programming Interface)?",
    code: null,
    options: [
      "Interne Implementierungsdetails so vollständig wie möglich offenzulegen",
      "Eine standardisierte Schnittstelle bereitzustellen, die interne Details abstrahiert",
      "Direkte Datenbankzugriffe von außen zu ermöglichen",
      "Den Quellcode einer Anwendung für andere Entwickler sichtbar zu machen"
    ],
    correct: [1],
    explanation: "APIs abstrahieren interne Implementierungsdetails und stellen eine standardisierte Schnittstelle bereit. Der Aufrufer kennt nur den Vertrag (Methoden/Endpunkte), nicht die interne Umsetzung."
  },

  {
    id: "q-201-http-1",
    topicId: "201",
    type: "mc",
    prompt: "Ein Client möchte eine neue Ressource auf einem Server anlegen. Welcher HTTP-Status-Code und welche HTTP-Methode sind korrekt?",
    code: null,
    options: [
      "GET + 200 OK",
      "POST + 201 Created",
      "PUT + 200 OK",
      "POST + 200 OK"
    ],
    correct: [1],
    explanation: "POST wird zum Erstellen neuer Ressourcen verwendet. 201 Created signalisiert, dass die Ressource erfolgreich angelegt wurde. 200 OK wäre korrekt für eine erfolgreiche GET-Anfrage."
  },

  {
    id: "q-201-http-2",
    topicId: "201",
    type: "mc",
    prompt: "Ein Client ruft den Endpunkt GET /api/movies/999 auf, aber der Film mit ID 999 existiert nicht. Welcher Status-Code ist korrekt?",
    code: null,
    options: [
      "200 OK",
      "201 Created",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    correct: [2],
    explanation: "404 Not Found zeigt an, dass die angeforderte Ressource nicht existiert. 500 wäre für unbehandelte Server-Fehler, nicht für 'nicht gefunden'. 200 und 201 signalisieren Erfolg."
  },

  {
    id: "q-201-http-3",
    topicId: "201",
    type: "multi",
    prompt: "Welche der folgenden Komponenten gehören zu einem typischen HTTP-Request? (Mehrere Antworten möglich)",
    code: null,
    options: [
      "HTTP-Methode (GET, POST, ...)",
      "HTTP-Status-Code",
      "Request Headers",
      "Request Body",
      "Response Body"
    ],
    correct: [0, 2, 3],
    explanation: "Ein HTTP-Request besteht aus HTTP-Methode, Endpoint-URL, Request Headers und Request Body (bei POST/PUT). HTTP-Status-Code und Response Body gehören zur Response, nicht zum Request."
  },

  {
    id: "q-201-mvc-1",
    topicId: "201",
    type: "mc",
    prompt: "Welche Schicht im MVC/Service-Controller-Repository Pattern ist für die Geschäftslogik (Validierung, Berechnungen, Regeln) zuständig?",
    code: null,
    options: [
      "Controller",
      "Repository",
      "Service",
      "Model"
    ],
    correct: [2],
    explanation: "Der Service enthält die Geschäftslogik: Validierungen, Regeln, Berechnungen. Der Controller handhabt HTTP-Requests/Responses, das Repository den Datenzugriff, das Model die Domänedaten."
  },

  {
    id: "q-201-mvc-2",
    topicId: "201",
    type: "mc",
    prompt: "Was beschreibt die Verantwortlichkeit des Controllers im MVC-Pattern am besten?",
    code: null,
    options: [
      "Daten dauerhaft in einer Datenbank speichern",
      "HTTP-Requests empfangen, delegieren und JSON-Responses senden",
      "Geschäftsregeln und Validierungslogik implementieren",
      "Domänenobjekte wie Movie oder Employee definieren"
    ],
    correct: [1],
    explanation: "Der Controller empfängt HTTP-Requests (Methode, Body, Pfad ermitteln), delegiert die eigentliche Logik an den Service und sendet die JSON-Response zurück. Er ist kein Speicher- oder Logikort."
  },

  {
    id: "q-201-json-1",
    topicId: "201",
    type: "mc",
    prompt: "Warum wird JSON Parsing in einer REST-API benötigt?",
    code: null,
    options: [
      "Weil HTTP ausschließlich Binärdaten überträgt",
      "Weil HTTP Daten als Text überträgt und Parsing JSON-Text in Java-Objekte umwandelt",
      "Weil Java keine Strings verarbeiten kann",
      "Weil JSON nur in JavaScript verwendet werden kann"
    ],
    correct: [1],
    explanation: "HTTP überträgt alles als Text. JSON Parsing (Deserialisierung) wandelt den empfangenen JSON-String in ein Java-Objekt um, mit dem das Programm typsicher arbeiten kann. Serialisierung ist der umgekehrte Weg."
  },

  {
    id: "q-201-lambda-fi-1",
    topicId: "201",
    type: "mc",
    prompt: "Welche der folgenden Lambda-Ausdrücke ist für das Interface `interface Action { void run(int x); }` UNGÜLTIG?",
    code: `@FunctionalInterface
interface Action {
    void run(int x);
}`,
    options: [
      "x -> System.out.println(x)",
      "(int x) -> System.out.println(x)",
      "x -> { if (x > 0) System.out.println(x); }",
      "() -> System.out.println(\"no args\")"
    ],
    correct: [3],
    explanation: "Das Interface Action erwartet genau einen int-Parameter. `() -> ...` hat keinen Parameter und passt nicht zur Signatur `void run(int x)`. Die anderen drei sind gültig: Typ kann weggelassen werden, einzeiliger und mehrzeiliger Body sind erlaubt."
  },

  {
    id: "q-201-lambda-fi-2",
    topicId: "201",
    type: "multi",
    prompt: "Welche der folgenden Lambda-Ausdrücke sind für das Interface `interface Calculator { int compute(int a, int b); }` GÜLTIG? (Mehrere möglich)",
    code: `@FunctionalInterface
interface Calculator {
    int compute(int a, int b);
}`,
    options: [
      "(a, b) -> a + b",
      "(a, b) -> { return a * b; }",
      "(a, b) -> System.out.println(a + b)",
      "a -> a * 2"
    ],
    correct: [0, 1],
    explanation: "(a,b)->a+b gibt implizit int zurück – gültig. (a,b)->{return a*b;} gibt explizit int zurück – gültig. (a,b)->System.out.println(...) gibt void zurück, aber int wird erwartet – ungültig. a->a*2 hat nur einen Parameter – ungültig."
  },

  {
    id: "q-201-lambda-syntax-1",
    topicId: "201",
    type: "mc",
    prompt: "Was ist an folgendem Lambda-Ausdruck FALSCH?\n`MyComparator c = (a, b) -> { a > b };`\n(Interface: `boolean compare(int a, int b)`)",
    code: `@FunctionalInterface
interface MyComparator {
    boolean compare(int a, int b);
}
// Dieser Ausdruck:
MyComparator c = (a, b) -> { a > b };`,
    options: [
      "Es fehlt das Schlüsselwort return im Block-Body",
      "Lambda Expressions dürfen keine geschweiften Klammern verwenden",
      "Der Parameter-Typ muss angegeben werden: (int a, int b)",
      "Das Interface hat zu viele Parameter"
    ],
    correct: [0],
    explanation: "Wenn ein Block-Body ({}) verwendet wird, muss das return-Schlüsselwort explizit angegeben werden: `(a, b) -> { return a > b; }`. Bei einem einzeiligen Ausdruck ohne {} wird der Wert implizit zurückgegeben: `(a, b) -> a > b`."
  },

  {
    id: "q-201-stream-output-1",
    topicId: "201",
    type: "code-output",
    prompt: "Was gibt dieser Code aus?",
    code: `List<Integer> numbers = List.of(1, 2, 3, 4, 5);
numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 3)
    .forEach(System.out::println);`,
    options: [
      "2\n4",
      "6\n12",
      "1\n3\n5",
      "3\n6\n9\n12\n15"
    ],
    correct: [1],
    explanation: "filter(n % 2 == 0) behält nur 2 und 4. map(n * 3) verdreifacht: 2*3=6, 4*3=12. forEach gibt 6 und dann 12 aus."
  },

  {
    id: "q-201-stream-output-2",
    topicId: "201",
    type: "code-output",
    prompt: "Was ist das Ergebnis von `count`?",
    code: `List<String> words = List.of("API", "MVC", "Lambda", "Stream", "Java");
long count = words.stream()
    .filter(w -> w.length() > 3)
    .count();
System.out.println(count);`,
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correct: [1],
    explanation: "Wörter mit mehr als 3 Zeichen: 'Lambda' (6), 'Stream' (6), 'Java' (4) – das sind 3 Wörter. 'API' (3) und 'MVC' (3) werden durch den filter ausgeschlossen, da length() > 3 (nicht >=)."
  },

  {
    id: "q-201-stream-props-1",
    topicId: "201",
    type: "multi",
    prompt: "Welche der folgenden Aussagen über Java Streams sind KORREKT? (Mehrere Antworten möglich)",
    code: null,
    options: [
      "Ein Stream kann mehrfach mit einer Terminal Operation konsumiert werden",
      "Intermediate Operations sind lazy – sie werden erst bei der Terminal Operation ausgeführt",
      "Streams verändern die zugrundeliegende Collection nicht",
      "Ein Stream muss immer mit collect() enden",
      "filter() ist eine Intermediate Operation und gibt einen neuen Stream zurück"
    ],
    correct: [1, 2, 4],
    explanation: "Streams können nur einmal konsumiert werden (A falsch). Sie sind lazy (B korrekt). Sie verändern die Quelle nicht (C korrekt). Terminal Operations sind auch forEach, count, findFirst etc. – nicht nur collect (D falsch). filter() ist Intermediate und gibt einen Stream zurück (E korrekt)."
  },

  {
    id: "q-201-stream-ops-1",
    topicId: "201",
    type: "mc",
    prompt: "Welche der folgenden Stream-Operationen ist eine TERMINAL Operation?",
    code: null,
    options: [
      "filter(Predicate)",
      "map(Function)",
      "sorted(Comparator)",
      "collect(Collector)"
    ],
    correct: [3],
    explanation: "collect() ist eine Terminal Operation – sie beendet die Pipeline, löst die Ausführung aus und liefert ein Ergebnis (z. B. eine Liste). filter(), map() und sorted() sind Intermediate Operations, die einen neuen Stream zurückgeben."
  },

  {
    id: "q-201-functional-interface-1",
    topicId: "201",
    type: "mc",
    prompt: "Welches der folgenden Interfaces ist KEIN Functional Interface?",
    code: `// A
interface A { void doIt(); }

// B
interface B { void doIt(); default void helper() {} }

// C
interface C { void doIt(); void doMore(); }

// D
@FunctionalInterface
interface D { void doIt(); }`,
    options: [
      "Interface A",
      "Interface B",
      "Interface C",
      "Interface D"
    ],
    correct: [2],
    explanation: "Interface C hat zwei abstrakte Methoden (doIt und doMore) und ist daher KEIN Functional Interface. A, B und D haben jeweils genau eine abstrakte Methode – B zusätzlich eine Default-Methode (erlaubt), D die @FunctionalInterface-Annotation (optional aber empfohlen)."
  }

);
