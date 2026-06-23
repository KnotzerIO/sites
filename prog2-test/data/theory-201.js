window.DATA = window.DATA || {};
window.DATA.theory = window.DATA.theory || [];
window.DATA.theory = window.DATA.theory.filter(u => u.topicId !== '201'); // alte knappe Einheit entfernen
var sections201 = [];
window.DATA.theory.push({ topicId: '201', title: 'APIs, MVC, Lambdas & Streams', sections: sections201 });

sections201.push(
  {
    heading: `1. Was ist eine API? (Das Grundkonzept)`,
    body: `<p>Das Wort <b>API</b> steht für <b>Application Programming Interface</b>, auf Deutsch etwa "Programmierschnittstelle". Das klingt zunächst abstrakt, also nehmen wir es Wort für Wort auseinander. Eine <i>Schnittstelle</i> (englisch <i>interface</i>) ist eine genau festgelegte Stelle, an der zwei Dinge sich treffen und miteinander reden. Eine API ist also eine fest vereinbarte Stelle, an der ein Stück Software einem anderen Stück Software seine Daten und Funktionen anbietet.</p>
<p>Die wichtigste Idee dabei ist die <b>Abstraktion</b>: Eine API zeigt dir <i>was</i> du tun kannst, aber sie versteckt, <i>wie</i> es intern funktioniert. Du bekommst eine Liste von Aktionen und Objekten, die du verwenden darfst, und musst dich nicht darum kümmern, was im Inneren passiert.</p>
<p><b>Die Restaurant-Analogie.</b> Stell dir vor, du sitzt in einem Restaurant. Du möchtest essen, aber du gehst nicht selbst in die Küche, um zu kochen. Stattdessen gibt es einen <b>Kellner</b>. Du sagst dem Kellner, was du willst (deine Bestellung), der Kellner gibt das an die Küche weiter, und später bringt er dir das fertige Gericht. Du weißt nicht, welche Töpfe benutzt wurden oder wie der Herd funktioniert, und das ist auch egal. Der Kellner ist die <b>API</b>: eine klar definierte Schnittstelle zwischen dir (dem aufrufenden Programm) und der Küche (dem System, das die eigentliche Arbeit macht). Die Speisekarte ist dabei wie die <i>API-Dokumentation</i>: sie sagt dir, was du bestellen kannst.</p>
<p><b>APIs sind überall.</b> Auch wenn man heute beim Wort "API" fast immer an Web-APIs (übers Internet) denkt, sind APIs ein ganz allgemeines Konzept. Deine Programmiersprache selbst bietet dir ständig APIs an. Wenn du in Java schreibst <code>"hallo".toUpperCase()</code>, um Text in Großbuchstaben umzuwandeln, dann rufst du eine API-Methode der Klasse <code>String</code> auf. Du weißt nicht, wie genau das intern programmiert ist, und du musst es auch nicht wissen. Du kennst nur die Schnittstelle: "ruf diese Methode auf, bekomm Großbuchstaben zurück".</p>
<p><b>Warum setzt man APIs ein?</b> Es gibt mehrere sehr praktische Gründe:</p>
<ul>
<li><b>Abstraktion / Vereinfachung:</b> Du musst nur wissen, welche Aktionen es gibt, nicht wie sie im Detail umgesetzt sind. Das macht das Programmieren einfacher und schneller.</li>
<li><b>Verstecken interner Details:</b> Wer die API anbietet, kann sein Innenleben jederzeit umbauen. Solange die Schnittstelle gleich bleibt, merken die Nutzer nichts davon.</li>
<li><b>Integration verschiedener Technologien:</b> über eine einheitliche Schnittstelle können ganz unterschiedliche Systeme zusammenarbeiten.</li>
<li><b>Schnellere Entwicklung:</b> Man muss das Rad nicht neu erfinden, sondern nutzt fertige Bausteine über ihre API.</li>
</ul>
<p><b>Zusammenhang zu Interfaces in Java.</b> In Java kennst du bereits das Schlüsselwort <code>interface</code>. Ein Java-Interface legt fest, <i>welche</i> Methoden eine Klasse anbieten muss, ohne zu sagen, <i>wie</i> sie umgesetzt werden. Das ist genau dieselbe Grundidee wie bei einer API: ein Vertrag, der Aktionen festlegt und die Umsetzung offen lässt. Eine API ist sozusagen das größere, allgemeinere Konzept, und ein Java-Interface ist eine konkrete Spielart davon auf Ebene des Quellcodes.</p>
<p><b>Merke:</b> Eine API ist ein klar vereinbarter "Vertrag" zwischen Software-Komponenten. Sie sagt, <i>was</i> möglich ist, und verbirgt, <i>wie</i> es funktioniert. Das nennt man Abstraktion.</p>`,
    code: `// Beispiel: Du nutzt ständig APIs, ohne es zu merken.

// Die String-API der Java-Standardbibliothek:
String name = "anna";
String laut = name.toUpperCase();   // -> "ANNA"
// Du rufst nur die Methode auf (das "Was").
// WIE toUpperCase() intern jeden Buchstaben umwandelt,
// musst du nicht wissen (das versteckte "Wie").

// Die List-API der Collections:
List<String> namen = new ArrayList<>();
namen.add("Bob");          // API-Methode: Element hinzufügen
int anzahl = namen.size(); // API-Methode: Anzahl abfragen
// Wie ArrayList intern den Speicher verwaltet -> verborgen.`
  },
  {
    heading: `2. Web-APIs und REST (wie Maschinen über das Internet reden)`,
    body: `<p>Heute meint man mit "API" meistens eine <b>Web-API</b> (auch <i>Remote API</i> oder <i>web-based API</i> genannt). "Remote" heißt "entfernt": Die beiden Programme, die miteinander reden, laufen nicht auf demselben Computer, sondern auf verschiedenen Rechnern, die über das Internet verbunden sind. Eine Web-API ermöglicht <b>Maschine-zu-Maschine-Kommunikation</b> über das Netzwerk, nach festen Regeln und mit standardisierten Datenformaten.</p>
<p><b>Das Client-Server-Modell.</b> Web-APIs arbeiten nach dem <b>Request-Response-Modell</b> (Anfrage-Antwort-Modell). Es gibt zwei Rollen:</p>
<ul>
<li><b>Client</b> (Kunde): das Programm, das etwas haben möchte und eine Anfrage (Request) stellt. Zum Beispiel deine Handy-App.</li>
<li><b>Server</b> (Diener): das Programm, das die Anfrage entgegennimmt, verarbeitet und eine Antwort (Response) zurückschickt. Zum Beispiel der Computer des Wetterdienstes.</li>
</ul>
<p>Der Ablauf ist immer derselbe: Der Client schickt einen Request an einen sogenannten <b>Endpoint</b> (Endpunkt) der API, der Server verarbeitet ihn und schickt eine Response zurück. Wieder die Restaurant-Analogie: Du (Client) bestellst beim Kellner (Request), die Küche kocht (Server verarbeitet), und du bekommst dein Essen (Response).</p>
<p><b>Was ist ein Endpoint?</b> Ein Endpoint ist eine bestimmte URL (Internet-Adresse), unter der man auf eine ganz bestimmte Ressource zugreift. Eine <b>Ressource</b> ist dabei einfach ein "Ding", mit dem die API arbeitet, zum Beispiel ein Film, ein Benutzer oder ein Quiz. Beispiel für einen Endpoint: <code>GET https://the-trivia-api.com/v2/quizzes</code>. Hier ist <code>https://the-trivia-api.com</code> der Server, <code>/v2/quizzes</code> der Pfad zur Ressource (alle Quizfragen), und <code>GET</code> die gewünschte Aktion (hole/lies).</p>
<p><b>Protokolle und Datenformate.</b> Damit Client und Server sich verstehen, brauchen sie eine gemeinsame Sprache. Diese Sprache besteht aus zwei Teilen: einem <b>Protokoll</b> (den Regeln, wie eine Nachricht aufgebaut ist und übertragen wird) und einem <b>Datenformat</b> (wie die eigentlichen Daten strukturiert sind). Bei Web-APIs ist das Protokoll fast immer <b>HTTP</b> bzw. <b>HTTPS</b> (die verschlüsselte Variante), und das Datenformat ist meistens <b>JSON</b> (manchmal auch XML). Beide schauen wir uns in den nächsten Abschnitten genau an.</p>
<p><b>Was ist REST?</b> <b>REST</b> steht für <i>Representational State Transfer</i> und ist der heute verbreitetste Stil, um Web-APIs zu bauen. REST ist kein Programm und keine Technik, sondern ein <b>Architekturstil</b>, also eine Sammlung von Empfehlungen, wie man eine Web-API sinnvoll gestaltet. Eine API, die sich an diese Regeln hält, nennt man "RESTful". Die wichtigsten Ideen von REST sind:</p>
<ul>
<li><b>Ressourcen-orientiert:</b> Alles dreht sich um Ressourcen (Filme, Benutzer, ...), die über URLs ansprechbar sind. Auf eine Ressource wendet man dann HTTP-Methoden an (z.B. GET zum Lesen, POST zum Anlegen).</li>
<li><b>Stateless (zustandslos):</b> Das ist sehr wichtig. Jeder einzelne Request enthält alle Informationen, die der Server braucht, um ihn zu bearbeiten. Der Server merkt sich <i>zwischen</i> zwei Requests nichts über den Client. Analogie: Stell dir ein Restaurant vor, in dem der Kellner nach jeder Bestellung sein Gedächtnis verliert. Deshalb musst du bei jeder Bestellung erneut alles sagen, was nötig ist (z.B. wer du bist, deine Tischnummer). Das klingt umständlich, hat aber einen riesigen Vorteil: Der Server muss keine Sitzungsdaten verwalten, was ihn einfacher, robuster und leicht skalierbar macht (man kann problemlos viele Server-Kopien parallel betreiben).</li>
<li><b>Standardisiert:</b> REST nutzt die ohnehin vorhandenen HTTP-Methoden und Statuscodes, statt eigene zu erfinden.</li>
</ul>
<p><b>Warum ist das wichtig?</b> Weil APIs es erlauben, dass völlig verschiedene Technologien zusammenarbeiten. Eine C#-Anwendung kann mit einer Java-Anwendung reden, ohne irgendetwas voneinander zu wissen. Der Trick: Beide einigen sich nur auf das neutrale Protokoll (HTTP) und das neutrale Datenformat (JSON). Die C#-App schickt einen HTTP-Request mit JSON-Daten, die Java-App liest das JSON, arbeitet damit und antwortet wieder mit JSON. Weil weder HTTP noch JSON an eine bestimmte Programmiersprache gebunden sind, funktioniert das über alle Sprachgrenzen hinweg.</p>
<p><b>Arten von APIs.</b> Man kann APIs grob einteilen. Nach dem <b>Einsatzzweck</b>: SDK-APIs (Bibliotheken einer Sprache), Hardware-APIs (z.B. OpenGL, DirectX, Android), und Web-APIs (REST, GraphQL, gRPC). Nach der <b>Verfügbarkeit</b>: <i>offene</i> APIs (öffentlich nutzbar, z.B. Google Maps), <i>interne</i> APIs (nur innerhalb einer Firma) und <i>Partner</i>-APIs (geteilt mit Geschäftspartnern, B2B).</p>
<p><b>Nützliche Werkzeuge.</b> Rund um APIs gibt es Hilfsmittel: zur <b>Dokumentation</b> (z.B. Swagger, beschreibt Endpoints, Parameter, Formate), zum <b>Testen</b> (z.B. Postman oder das Kommandozeilen-Tool curl, mit denen man von Hand Requests verschickt) und zum <b>Monitoring</b> (z.B. New Relic, Datadog, überwachen Leistung und Fehler).</p>
<p><b>Merke:</b> Web-API = Maschinen reden über HTTP, tauschen JSON aus, im Client-Server-/Request-Response-Modell. REST ist der gängige Architekturstil dafür; sein Kernmerkmal ist <i>stateless</i>: jeder Request steht für sich allein.</p>`,
    code: `// Ein Web-API-Aufruf, sprachunabhängig gedacht.

// Client (egal ob Java, C#, Python ...) schickt:
GET https://the-trivia-api.com/v2/quizzes

// Server antwortet (vereinfacht) mit JSON:
[
  { "id": "abc", "question": "Hauptstadt von Frankreich?", "answer": "Paris" }
]

// Wichtig:
// - HTTP ist sprachneutral  -> jede Sprache kann Requests schicken
// - JSON ist sprachneutral   -> jede Sprache kann es lesen
// Deshalb kann eine C#-App mit einer Java-App "reden".`
  },
  {
    heading: `3. Aufbau von HTTP-Request und -Response`,
    body: `<p>Wir haben gesagt: Web-APIs reden über das Protokoll <b>HTTP</b> (Hypertext Transfer Protocol). Schauen wir uns nun ganz genau an, wie eine HTTP-Nachricht aufgebaut ist. Es gibt zwei Sorten: den <b>Request</b> (die Anfrage des Clients) und die <b>Response</b> (die Antwort des Servers).</p>
<p><b>Aufbau eines Requests.</b> Ein typischer API-Request besteht aus folgenden Bestandteilen:</p>
<ul>
<li><b>Endpoint (URL):</b> die Adresse der gewünschten Ressource, z.B. <code>https://api.kino.at/movies/42</code>.</li>
<li><b>Method (HTTP-Methode):</b> sagt, welche <i>Art von Operation</i> man auf der Ressource ausführen will. Mehr dazu gleich.</li>
<li><b>Parameters (Parameter):</b> Variablen, die der API zusätzliche Anweisungen geben. Sie können Teil der URL sein, im sogenannten <i>Query-String</i> stehen (das ist der Teil nach dem Fragezeichen, z.B. <code>?genre=action&amp;year=2020</code>) oder im Request-Body übergeben werden.</li>
<li><b>Request Headers (Kopfzeilen):</b> Schlüssel-Wert-Paare mit Zusatzinfos über den Request, z.B. <code>Content-Type: application/json</code> (welches Datenformat im Body steckt) oder <code>Authorization: Bearer ...</code> (Anmelde-/Zugangsdaten).</li>
<li><b>Request Body (Rumpf):</b> der Hauptinhalt des Requests, also die eigentlichen Daten, die man senden will, etwa um eine Ressource zu erstellen oder zu ändern. Bei einem GET (reines Lesen) ist der Body meist leer; bei einem POST steckt hier z.B. der neue Film als JSON.</li>
</ul>
<p><b>Die wichtigsten HTTP-Methoden.</b> Die Methode (auch "Verb" genannt) sagt, was man tun will. Eine schöne Eselsbrücke ist das Stichwort <b>CRUD</b> (Create, Read, Update, Delete), also die vier Grundoperationen auf Daten:</p>
<ul>
<li><b>GET</b> - eine Ressource <i>lesen</i> / abrufen (Read). Ändert nichts auf dem Server. Beispiel: alle Filme holen.</li>
<li><b>POST</b> - eine neue Ressource <i>anlegen</i> (Create). Die Daten stehen im Body. Beispiel: neuen Film hinzufügen.</li>
<li><b>PUT</b> - eine bestehende Ressource <i>aktualisieren</i> / ersetzen (Update). Beispiel: Filmdaten ändern.</li>
<li><b>DELETE</b> - eine Ressource <i>löschen</i> (Delete). Beispiel: einen Film entfernen.</li>
</ul>
<p><b>Aufbau einer Response.</b> Eine typische API-Response besteht aus:</p>
<ul>
<li><b>Status Code (Statuscode):</b> eine dreistellige Zahl, die das Ergebnis der Anfrage anzeigt. Sie sagt sofort, ob es geklappt hat oder nicht.</li>
<li><b>Response Headers:</b> wie die Request-Header, nur vom Server. Liefern Zusatzinfos zur Antwort, z.B. den Content-Type der zurückgegebenen Daten.</li>
<li><b>Response Body:</b> der eigentliche Inhalt, also die angeforderten Daten (meist als JSON) oder eine Fehlermeldung, falls etwas schiefging.</li>
</ul>
<p><b>HTTP-Statuscodes verstehen.</b> Die erste Ziffer des dreistelligen Codes verrät schon die grobe Kategorie: 2xx = Erfolg, 4xx = Fehler beim Client (du hast etwas falsch gemacht), 5xx = Fehler beim Server (der Server hat ein Problem). Hier die wichtigsten Codes mit Beispielen, wann man sie einsetzt:</p>
<ul>
<li><b>200 OK</b> - Erfolg. Der Standard-Erfolgscode. Beispiel: ein GET hat die Daten geliefert. Man setzt ihn ein, wenn die Anfrage erfolgreich war und es nichts Spezielleres zu melden gibt.</li>
<li><b>201 Created</b> - Erfolg, und es wurde etwas Neues erstellt. Beispiel: nach einem erfolgreichen POST, der einen neuen Film angelegt hat. Man wählt ihn statt 200, um klarzumachen "eine neue Ressource ist entstanden".</li>
<li><b>400 Bad Request</b> - der Client hat eine fehlerhafte Anfrage geschickt. Beispiel: das gesendete JSON ist kaputt oder ein Pflichtfeld fehlt. Einsatz: wenn die Anfrage selbst ungültig ist und der Server sie gar nicht verarbeiten kann.</li>
<li><b>404 Not Found</b> - die gewünschte Ressource existiert nicht. Beispiel: <code>GET /movies/9999</code>, aber Film 9999 gibt es nicht. Einsatz: wenn der angefragte Pfad oder das Objekt nicht gefunden wird.</li>
<li><b>500 Internal Server Error</b> - im Server ist beim Verarbeiten etwas schiefgegangen. Beispiel: ein unerwarteter Programmfehler oder die Datenbank ist nicht erreichbar. Einsatz: bei Problemen, die nicht der Client verursacht hat, sondern der Server selbst.</li>
</ul>
<p>Ein weiterer häufiger Code aus den Folien: <b>405 Method Not Allowed</b> - die Methode ist für diesen Endpoint nicht erlaubt (z.B. ein DELETE auf einen Endpoint, der nur GET kann).</p>
<p><b>Warum ist das wichtig?</b> Statuscodes sind die universelle, sprachunabhängige Art, das Ergebnis mitzuteilen. Der Client kann allein anhand der Zahl entscheiden, was zu tun ist (Daten anzeigen, Fehlermeldung zeigen, erneut versuchen), ohne den Antworttext interpretieren zu müssen.</p>
<p><b>Merke:</b> Request = Endpoint + Methode + Parameter + Header + Body. Response = Statuscode + Header + Body. Methoden folgen CRUD (GET/POST/PUT/DELETE). Statuscodes: 2xx Erfolg, 4xx Client-Fehler, 5xx Server-Fehler.</p>`,
    code: `// --- Beispiel-Request (neuen Film anlegen) ---
POST /api/movies/add HTTP/1.1          // Methode + Endpoint
Host: api.kino.at
Content-Type: application/json         // Header: Format des Body
Authorization: Bearer abc123           // Header: Zugangsdaten

{                                      // Request Body (JSON):
  "title": "Inception",
  "year": 2010
}

// --- Beispiel-Response (Server antwortet) ---
HTTP/1.1 201 Created                   // Statuscode: neu angelegt
Content-Type: application/json         // Header: Format des Body

{                                      // Response Body (JSON):
  "id": 42,
  "title": "Inception",
  "year": 2010
}

// Kurzüberblick Statuscodes:
// 200 OK                    -> Erfolg (z.B. GET geklappt)
// 201 Created               -> Erfolg, neue Ressource erstellt (POST)
// 400 Bad Request           -> Client-Fehler (kaputtes JSON)
// 404 Not Found             -> Ressource existiert nicht
// 405 Method Not Allowed    -> Methode hier nicht erlaubt
// 500 Internal Server Error -> Fehler im Server`
  }
);

sections201.push(
  {
    heading: `4. JSON - das Datenformat des Webs`,
    body: `<p><b>JSON</b> steht für <b>JavaScript Object Notation</b>. Es ist ein <b>Textformat</b>, um strukturierte Daten aufzuschreiben, sodass sowohl Menschen es lesen können als auch Maschinen es leicht verarbeiten können. JSON ist heute das Standard-Datenformat für Web-APIs. Obwohl der Name "JavaScript" enthält, hat JSON nichts mehr mit einer bestimmten Programmiersprache zu tun, es ist nur als Text gespeichert und damit völlig sprachunabhängig.</p>
<p><b>Wie ist JSON aufgebaut?</b> JSON kennt nur eine Handvoll Bausteine, und genau das macht es so einfach:</p>
<ul>
<li><b>Objekte</b> stehen in geschweiften Klammern <code>{ }</code> und bestehen aus <b>Schlüssel-Wert-Paaren</b> (key-value pairs). Der Schlüssel ist immer ein Text in doppelten Anführungszeichen, dann folgt ein Doppelpunkt, dann der Wert, z.B. <code>"title": "Inception"</code>. Mehrere Paare werden mit Komma getrennt.</li>
<li><b>Arrays</b> (Listen) stehen in eckigen Klammern <code>[ ]</code> und enthalten mehrere Werte hintereinander, durch Komma getrennt, z.B. <code>[1, 2, 3]</code> oder eine Liste von Objekten.</li>
<li><b>Werte</b> können sein: ein Text (String, in Anführungszeichen), eine Zahl (ohne Anführungszeichen), ein Wahrheitswert (<code>true</code> oder <code>false</code>), <code>null</code> (kein Wert), wieder ein Objekt oder wieder ein Array. Dadurch lassen sich Objekte beliebig tief verschachteln.</li>
</ul>
<p>Beachte den Unterschied zu Java: In JSON werden Texte und Schlüssel immer mit doppelten Anführungszeichen geschrieben, Zahlen und Wahrheitswerte ohne. Es gibt am Ende keinen Strichpunkt, und nach dem letzten Element in einem Objekt oder Array darf <i>kein</i> Komma stehen.</p>
<p><b>Warum ist JSON sprachunabhängig (und warum ist das so wichtig)?</b> JSON ist am Ende nur eine Zeichenkette, also ganz normaler Text. Jede Programmiersprache kann Text einlesen und Text schreiben. Damit kann jede Sprache JSON erzeugen und jede Sprache JSON wieder auseinandernehmen. Genau das macht es zur idealen "Brückensprache" zwischen Systemen: Eine Java-Anwendung verwandelt ein Java-Objekt in einen JSON-Text, schickt ihn über HTTP, und eine C#- oder Python-Anwendung auf der anderen Seite verwandelt denselben Text wieder in ihr eigenes Objekt. Keiner der beiden muss die interne Datenstruktur des anderen kennen, sie einigen sich nur auf das gemeinsame JSON-Format.</p>
<p><b>Was ist JSON-Parsing und wozu braucht eine API es?</b> Ein Programm kann mit einem reinen Text-String nur wenig anfangen. Wenn der Server JSON schickt, ist das für den Client zunächst nur eine lange Zeichenkette. <b>Parsing</b> bedeutet "zerlegen und in eine verwendbare Struktur umwandeln". Beim JSON-Parsing wird der Text analysiert und in Objekte der jeweiligen Programmiersprache umgewandelt, auf die man dann mit normalem Code zugreifen kann. Der umgekehrte Weg, also aus einem Objekt wieder einen JSON-Text zu machen, heißt <b>Serialisierung</b> (englisch <i>serialization</i>); das Parsen heißt auch <b>Deserialisierung</b>.</p>
<p>Eine API braucht JSON-Parsing aus zwei Richtungen: Der <b>Server</b> muss eingehende JSON-Bodys parsen, um zu verstehen, was der Client will (z.B. die Daten eines neuen Films aus einem POST-Body herauslesen). Und der <b>Client</b> muss die JSON-Antwort des Servers parsen, um sie weiterzuverarbeiten oder anzuzeigen. In Java erledigt das meist eine Bibliothek wie <b>Jackson</b> oder <b>Gson</b>, die automatisch zwischen Java-Objekten und JSON hin- und herwandelt. Man muss also nicht von Hand jeden Buchstaben durchsuchen.</p>
<p><b>Merke:</b> JSON = einfaches Textformat aus Objekten <code>{ }</code> mit Schlüssel-Wert-Paaren und Arrays <code>[ ]</code>. Weil es nur Text ist, ist es sprachunabhängig. Parsing = den JSON-Text in echte Programmobjekte umwandeln (und Serialisierung = der umgekehrte Weg).</p>`,
    code: `// Ein JSON-Objekt (so käme es z.B. von einer Film-API):
{
  "id": 42,
  "title": "Inception",
  "year": 2010,
  "available": true,
  "genres": ["Sci-Fi", "Thriller"],
  "director": {
    "firstName": "Christopher",
    "lastName": "Nolan"
  },
  "rating": null
}
// { } = Objekt, "title": ... = Schlüssel-Wert-Paar,
// [ ] = Array, verschachteltes Objekt bei "director".

// --- Parsing in Java (mit der Jackson-Bibliothek) ---
// JSON-Text -> Java-Objekt (Parsing / Deserialisierung):
ObjectMapper mapper = new ObjectMapper();
Movie film = mapper.readValue(jsonText, Movie.class);
System.out.println(film.getTitle());   // "Inception"

// Java-Objekt -> JSON-Text (Serialisierung):
String json = mapper.writeValueAsString(film);`
  },
  {
    heading: `5. Das MVC-Pattern (Model - View - Controller)`,
    body: `<p>Wenn ein Programm wächst, wird es schnell unübersichtlich, falls alles in einer einzigen großen Datei steht: die Berechnungen, die Darstellung am Bildschirm und die Steuerung des Ablaufs, alles vermischt. Ein <b>Entwurfsmuster</b> (englisch <i>design pattern</i>) ist eine bewährte, immer wieder verwendbare Lösungsidee für ein häufiges Problem. Das <b>MVC-Pattern</b> ist so ein Muster für die Frage: "Wie strukturiere ich meine Anwendung sinnvoll?"</p>
<p>MVC teilt die Anwendung in drei Teile mit klar getrennten Verantwortlichkeiten auf. Diese Idee nennt man <b>Separation of Concerns</b> (Trennung der Zuständigkeiten): Jeder Teil kümmert sich nur um eine Sache.</p>
<ul>
<li><b>Model (Modell):</b> Das sind die <b>Daten und die Geschäftslogik</b>. Das Model weiß, wie die Daten aussehen (z.B. ein <code>Movie</code> mit Titel und Jahr) und enthält die Regeln und Berechnungen, die darauf arbeiten. Das Model weiß nichts davon, wie es angezeigt wird. Analogie: die Küche und die Vorratskammer eines Restaurants, dort sind die Zutaten und das Kochwissen.</li>
<li><b>View (Ansicht):</b> Das ist die <b>Darstellung</b> für den Nutzer, also alles, was sichtbar ist: eine Webseite, eine grafische Oberfläche oder, bei einer reinen API, die JSON-Antwort. Die View zeigt die Daten des Models an, enthält aber selbst keine Logik. Analogie: der angerichtete Teller, so wie das Essen präsentiert wird.</li>
<li><b>Controller (Steuerung):</b> Das ist der <b>Vermittler</b>. Der Controller nimmt die Eingaben des Nutzers entgegen (z.B. einen HTTP-Request), entscheidet, was zu tun ist, ruft das Model auf, um die Arbeit erledigen zu lassen, und wählt dann die passende View, um das Ergebnis darzustellen. Analogie: der Kellner, er nimmt deine Bestellung entgegen, gibt sie an die Küche (Model) weiter und bringt dir den fertigen Teller (View).</li>
</ul>
<p><b>Wie läuft die Kommunikation ab?</b> Stell dir einen typischen Ablauf vor: Ein Nutzer schickt einen Request ("Zeig mir Film Nr. 42"). Dieser Request landet beim <b>Controller</b>. Der Controller versteht den Wunsch und fragt das <b>Model</b> nach den Daten ("Gib mir Film 42"). Das Model holt die Daten (z.B. aus einer Datenbank) und gibt sie zurück. Der Controller übergibt diese Daten an die <b>View</b>. Die View formt daraus die Darstellung (bei einer Web-API: einen JSON-Text), und diese geht als Response zurück an den Nutzer. Der Controller ist also die zentrale Schaltstelle, während Model und View sich um ihre eigenen Spezialaufgaben kümmern und idealerweise nicht direkt voneinander abhängen.</p>
<p><b>Warum setzt man MVC ein?</b> Die Trennung bringt handfeste Vorteile:</p>
<ul>
<li><b>Wartbarkeit:</b> Wenn man die Darstellung ändern will (z.B. ein neues Design), fasst man nur die View an, die Logik im Model bleibt unberührt.</li>
<li><b>Wiederverwendbarkeit:</b> Dasselbe Model kann von verschiedenen Views genutzt werden (z.B. einmal als Webseite, einmal als JSON-API).</li>
<li><b>Testbarkeit:</b> Die Logik im Model lässt sich getrennt von der Oberfläche testen.</li>
<li><b>Teamarbeit:</b> Verschiedene Personen können parallel an View und Model arbeiten, ohne sich ständig in die Quere zu kommen.</li>
</ul>
<p><b>MVC und Backend-Architektur.</b> In modernen Backend-Frameworks (z.B. Spring Boot, Laravel, Django) findest du dieselbe Grundidee in einer etwas erweiterten Form wieder, dem <i>Service-Controller-Repository</i>-Aufbau: <b>Routes</b> sind die Endpoints (Eingangstore), <b>Controllers</b> nehmen Requests entgegen und senden Responses, <b>Services</b> enthalten die Geschäftslogik (Regeln, Berechnungen) und arbeiten auf den Model-Klassen, und <b>Repositories</b> sind die Datenzugriffsschicht (sie speichern und laden die Model-Objekte, z.B. aus der Datenbank). Du erkennst hier MVC wieder: Der Controller bleibt der Vermittler, das Model wird zu den Daten- und Logikschichten (Model-Klassen, Service, Repository), und die View ist bei einer reinen API die JSON-Antwort.</p>
<p><b>Merke:</b> MVC trennt drei Zuständigkeiten: <b>Model</b> (Daten + Logik), <b>View</b> (Darstellung) und <b>Controller</b> (Vermittler, der Eingaben annimmt, das Model nutzt und die View wählt). Ziel: Separation of Concerns für wartbaren, testbaren, wiederverwendbaren Code.</p>`,
    code: `// MVC am Beispiel einer kleinen Film-API.

// --- MODEL: Daten + Logik (kennt keine Darstellung) ---
public class Movie {
    private int id;
    private String title;
    private int year;
    // Konstruktor, Getter, Setter ...
    public boolean isClassic() {      // ein Stück Geschäftslogik
        return year < 1980;
    }
}

// --- CONTROLLER: nimmt Request an, ruft Model, wählt View ---
public class MovieController implements HttpHandler {
    public void handle(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();
        if (method.equals("GET")) {
            Movie film = movieService.findById(42);   // Model/Logik nutzen
            String json = MovieView.toJson(film);      // View erzeugen
            ApiUtils.sendResponse(exchange, 200, json);// Response senden
        }
    }
}

// --- VIEW: nur Darstellung (hier: JSON-Text aus dem Model) ---
public class MovieView {
    public static String toJson(Movie m) {
        return new ObjectMapper().writeValueAsString(m);
    }
}`
  }
);

sections201.push(
  {
    heading: `6. Lambda Expressions (anonyme Funktionen)`,
    body: `<p><b>Lambda Expressions</b> (Lambda-Ausdrücke) wurden in <b>Java 8</b> eingeführt. Eine Lambda Expression ist eine <b>anonyme Funktion</b>, also eine Funktion <i>ohne Namen</i> und ohne eigene Klasse, zu der sie gehört. Kurz gesagt: eine Methode ohne Deklaration, die man direkt dort hinschreibt, wo man sie braucht.</p>
<p><b>Vergleich mit einer normalen Methode.</b> Eine normale Java-Methode hat vier Bestandteile: (1) einen Namen, (2) eine Parameterliste, (3) einen Body (den Code), und (4) einen Rückgabetyp. Eine Lambda Expression behält nur zwei davon ganz offensichtlich: die <b>Parameterliste</b> und den <b>Body</b>. Sie hat <i>keinen Namen</i> und man schreibt <i>keinen Rückgabetyp</i> hin, denn der Compiler kann den Rückgabetyp aus dem Code selbst ableiten (das nennt man <i>Typ-Inferenz</i>).</p>
<p><b>Was braucht man, damit Lambdas funktionieren? Das Functional Interface.</b> Eine Lambda muss zu irgendetwas "passen". In Java ist dieses Etwas ein <b>Functional Interface</b> (funktionales Interface). Das ist ein Interface mit <b>genau einer abstrakten Methode</b> (englisch: <i>single abstract method</i>, SAM). Genau diese eine Methode beschreibt die Lambda. Man kann ein solches Interface mit der Annotation <code>@FunctionalInterface</code> markieren; dann prüft der Compiler, dass es wirklich nur eine abstrakte Methode hat. Du kannst entweder ein <b>eigenes</b> Functional Interface schreiben oder eines der vielen <b>vorgefertigten</b> aus Java nutzen, z.B. <code>Runnable</code>, <code>ActionListener</code> oder <code>Comparator</code>.</p>
<p><b>Warum ist das so?</b> Java ist eine objektorientierte Sprache, in der alles in Objekten und Methoden lebt. Eine Lambda ist im Grunde nur eine sehr kurze Schreibweise für ein Objekt, das die eine Methode des Functional Interface implementiert. Früher (vor Java 8) musste man dafür eine umständliche <b>anonyme innere Klasse</b> schreiben, also eine namenlose Klasse direkt an Ort und Stelle. Die Lambda ist die viel kürzere, lesbarere Variante desselben Gedankens.</p>
<p><b>Der Aufbau einer Lambda: Parameter -> Body.</b> Das Herzstück ist der Pfeil <code>-&gt;</code> (auf Deutsch oft "Pfeiloperator"). Links vom Pfeil stehen die <b>Parameter</b>, rechts der <b>Body</b>. Schauen wir die Fälle durch:</p>
<ul>
<li><b>Kein Parameter:</b> leere Klammern, z.B. <code>() -&gt; System.out.println("hallo")</code>.</li>
<li><b>Ein Parameter:</b> z.B. <code>e -&gt; System.out.println(e)</code>. Bei genau einem Parameter darf man die Klammern weglassen; <code>(e) -&gt; ...</code> ist aber auch erlaubt.</li>
<li><b>Mehrere Parameter:</b> in Klammern und durch Komma getrennt, z.B. <code>(a, b) -&gt; a + b</code>.</li>
</ul>
<p><b>Der Body und der Rückgabewert.</b> Besteht der Body aus nur einer einzigen Anweisung, schreibt man ihn ohne geschweifte Klammern, und der Wert dieser Anweisung wird automatisch als Rückgabe verwendet, ganz ohne <code>return</code> (z.B. <code>(a, b) -&gt; a &gt; b</code> gibt einen Wahrheitswert zurück). Besteht der Body aus mehreren Zeilen, muss man geschweifte Klammern setzen, und dann braucht man, falls etwas zurückgegeben werden soll, ein ausdrückliches <code>return</code> (z.B. <code>(a, b) -&gt; { return a &gt; b; }</code>). Beide Schreibweisen sind gleichwertig.</p>
<p><b>Lambdas sind Objekte.</b> Ein wichtiger Punkt: Eine Lambda ist ein ganz normales Objekt. Man kann sie in einer Variablen speichern und sie an andere Methoden übergeben, genau wie jeden anderen Wert. Dadurch kann man <i>Verhalten</i> herumreichen, also Code als Parameter übergeben, nicht nur Daten. Das ist die Kernidee der <b>funktionalen Programmierung</b>.</p>
<p><b>Wozu Lambdas? (Zweck und Anwendungsfälle.)</b> Lambdas reduzieren Schreibarbeit (Boilerplate) und machen Code lesbarer, besonders wenn man kurzes, einmaliges Verhalten braucht. Typische Anwendungsfälle: <b>Event-Handler</b> (z.B. "was passiert beim Klick auf einen Button"), <b>Callback-Funktionen</b> (eine Funktion ruft eine andere auf, ohne deren konkrete Implementierung zu kennen), das <b>Sortieren</b> von Listen mit einem <code>Comparator</code>, das <b>Runnable</b>-Interface für Threads, und ganz besonders die <b>Stream API</b>, die wir gleich behandeln.</p>
<p><b>Merke:</b> Eine Lambda <code>(params) -&gt; body</code> ist eine anonyme Funktion. Sie braucht ein <b>Functional Interface</b> (Interface mit genau einer abstrakten Methode), das sie implementiert. Einzeiler ohne <code>{ }</code> und ohne <code>return</code>; mehrzeilig mit <code>{ }</code> und explizitem <code>return</code>.</p>`,
    code: `// 1) Eigenes Functional Interface (genau EINE abstrakte Methode)
@FunctionalInterface
public interface MyComparator {
    boolean compare(int a, int b);
}

// 2) Lambda, die dieses Interface implementiert:
MyComparator groesser = (a, b) -> a > b;     // Einzeiler, kein return nötig
MyComparator kleiner  = (a, b) -> { return a < b; }; // mit {} und return
System.out.println(groesser.compare(5, 3));  // true

// --- Aufbau-Varianten der Parameterliste ---
Runnable r        = () -> System.out.println("kein Parameter");
// 1 Parameter (Klammern optional):
button.addActionListener(e -> System.out.println("Klick: " + e));
// mehrere Parameter:
MyComparator c    = (a, b) -> a == b;

// --- Lambda ist ein Objekt: man kann sie übergeben ---
static boolean nutze(int a, int b, MyComparator cmp) {
    return cmp.compare(a, b);
}
boolean ergebnis = nutze(3, 5, groesser);    // Verhalten als Parameter!

// --- Früher (vor Java 8) vs. heute (Sortieren) ---
List<String> namen = Arrays.asList("John", "Jane", "Bob");
// Vorher: umständliche anonyme innere Klasse:
Collections.sort(namen, new Comparator<String>() {
    @Override public int compare(String a, String b) { return a.compareTo(b); }
});
// Heute mit Lambda (viel kürzer, gleiche Wirkung):
Collections.sort(namen, (a, b) -> a.compareTo(b));`
  },
  {
    heading: `7. Java Streams (Daten deklarativ verarbeiten)`,
    body: `<p>Die <b>Stream API</b> kam ebenfalls mit <b>Java 8</b> und erlaubt es, Daten <b>deklarativ</b> zu verarbeiten. "Deklarativ" heißt: Du beschreibst <i>was</i> mit den Daten passieren soll (filtern, umwandeln, zusammenfassen), und nicht Schritt für Schritt, <i>wie</i> die Schleife genau läuft. Das ist das Gegenteil zum klassischen <b>imperativen</b> Stil mit <code>for</code>-Schleifen, wo du jeden Iterationsschritt selbst ausschreibst.</p>
<p><b>Was ist ein Stream?</b> Ein <b>Stream</b> ist ein "Datenstrom", eine Folge von Elementen eines bestimmten Typs, die nacheinander durch eine Verarbeitungskette fließen. Wichtig: Ein Stream ist <b>keine neue Datenstruktur</b>, er <b>speichert die Elemente nicht selbst</b> und verändert die zugrunde liegende Quelle <b>nicht</b>. Man kann sich einen Stream wie ein Fließband in einer Fabrik vorstellen: Die Werkstücke (Daten) laufen durch, an verschiedenen Stationen wird mit ihnen etwas gemacht, und am Ende kommt ein Ergebnis heraus, aber das Lager (die Originalquelle) bleibt unverändert.</p>
<p><b>Der Aufbau einer Stream-Pipeline.</b> Ein Stream besteht immer aus drei Teilen:</p>
<ul>
<li><b>1. Datenquelle (source):</b> woher die Elemente kommen. Das kann eine Collection (z.B. eine <code>List</code>), ein Array oder eine I/O-Quelle sein. Aus einer Liste erzeugt man einen Stream mit <code>.stream()</code>.</li>
<li><b>2. Intermediate Operations (Zwischenoperationen):</b> beliebig viele Verarbeitungsschritte. Jede dieser Operationen gibt <i>wieder einen Stream</i> zurück, sodass man sie aneinanderhängen kann (das nennt man <b>Pipelining</b> oder Verkettung). Beispiele: <code>filter</code>, <code>map</code>, <code>sorted</code>, <code>limit</code>, <code>peek</code>.</li>
<li><b>3. Terminal Operation (Endoperation):</b> genau eine abschließende Operation, die den Stream "verbraucht" und ein Endergebnis liefert (eine Zahl, eine Liste, oder gar nichts, falls sie nur etwas ausgibt). Nach einer Terminaloperation ist der Stream verbraucht und kann nicht wiederverwendet werden. Beispiele: <code>forEach</code>, <code>collect</code>, <code>reduce</code>, <code>count</code>, <code>findFirst</code>, <code>toArray</code>.</li>
</ul>
<p><b>Die wichtigsten Operationen im Detail.</b></p>
<ul>
<li><b>filter</b> (intermediate): behält nur die Elemente, die eine Bedingung erfüllen. Die Bedingung gibt man als Lambda an, die <code>true</code> oder <code>false</code> liefert. Beispiel: nur Mitarbeiter mit Gehalt &gt; 300.</li>
<li><b>map</b> (intermediate): wandelt jedes Element in etwas anderes um. Aus jedem Eingangselement entsteht genau ein Ausgangselement. Beispiel: aus jedem <code>Employee</code> seinen Namen (String) machen.</li>
<li><b>reduce</b> (terminal): fasst alle Elemente schrittweise zu <i>einem</i> Ergebnis zusammen, z.B. die Summe aller Gehälter. Man gibt einen Startwert und eine Verknüpfungsregel an.</li>
<li><b>collect</b> (terminal): sammelt die Elemente des Streams in einer Datenstruktur, typischerweise mit <code>Collectors.toList()</code> in eine neue Liste. So bekommt man aus dem "Fließband" wieder eine handfeste Collection.</li>
<li><b>forEach</b> (terminal): führt für jedes Element eine Aktion aus, z.B. es ausgeben.</li>
</ul>
<p><b>Eigenschaften von Streams.</b> Diese Merkmale solltest du dir gut merken:</p>
<ul>
<li><b>Folge von Elementen:</b> ein Stream liefert Elemente eines bestimmten Typs, speichert sie aber nicht.</li>
<li><b>Nicht-mutierend:</b> die Originalquelle wird nie verändert; Operationen erzeugen neue Streams/Werte.</li>
<li><b>Lazy (faul / bedarfsgesteuert):</b> intermediate Operationen werden nicht sofort ausgeführt, sondern erst, wenn die terminal Operation kommt. Erst dann fließen die Daten durch die ganze Kette. Das spart Arbeit, denn überflüssige Berechnungen werden vermieden.</li>
<li><b>Pipelining:</b> weil intermediate Operationen wieder Streams liefern, kann man sie elegant verketten.</li>
<li><b>Interne Iteration:</b> man schreibt die Schleife nicht selbst; der Stream iteriert intern über die Elemente. Bei Collections muss man dagegen explizit selbst iterieren.</li>
<li><b>Einmal verbrauchbar:</b> nach der terminal Operation ist der Stream "konsumiert".</li>
</ul>
<p><b>Vergleich zu klassischen Schleifen, warum Streams?</b> Mit einer <code>for</code>-Schleife musst du eine Hilfsliste anlegen, manuell durchlaufen, jedes Element prüfen und passende selbst einsammeln, das sind viele Zeilen, in denen sich leicht Fehler einschleichen, und der eigentliche Sinn geht in den Mechanik-Details unter. Ein Stream drückt dieselbe Absicht in wenigen, gut lesbaren Schritten aus: "nimm die Liste, filtere nach Bedingung, wandle um, sammle ein". Der Code beschreibt das <i>Ziel</i> statt den <i>Mechanismus</i>. Streams sind daher oft kürzer, besser lesbar und weniger fehleranfällig. Außerdem lassen sie sich leicht parallelisieren (mit <code>parallelStream()</code>). Schleifen behalten ihre Berechtigung bei sehr einfachen Fällen oder wenn man während des Durchlaufs aus der Schleife ausbrechen oder komplexe Seiteneffekte steuern will.</p>
<p><b>Merke:</b> Stream-Pipeline = Quelle -&gt; (mehrere) intermediate Operationen -&gt; eine terminal Operation. Streams sind <i>lazy</i>, <i>nicht-mutierend</i>, iterieren intern und sind nach der Terminaloperation verbraucht. Sie machen Datenverarbeitung deklarativ und lesbar.</p>`,
    code: `import java.util.*;
import java.util.stream.*;

List<Employee> mitarbeiter = List.of(
    new Employee(1, "Bart",  100.10),
    new Employee(2, "Lisa",  9999.99),
    new Employee(3, "Homer", 2030.20)
);

// --- Eine typische Pipeline: filter -> map -> collect ---
List<String> gutVerdiener = mitarbeiter.stream()  // 1) Quelle
    .filter(e -> e.getSalary() > 300.00)          // 2) intermediate: filtern
    .map(e -> e.getName())                        // 2) intermediate: umwandeln
    .collect(Collectors.toList());                // 3) terminal: einsammeln
// Ergebnis: ["Lisa", "Homer"] ; Originalliste bleibt unverändert!

// --- forEach als Terminaloperation (nur ausgeben) ---
mitarbeiter.stream()
    .filter(e -> e.getSalary() > 300.00)
    .forEach(e -> System.out.println(e.getName()));

// --- reduce: Summe aller Gehälter ---
double summe = mitarbeiter.stream()
    .map(Employee::getSalary)        // jeweils das Gehalt
    .reduce(0.0, (a, b) -> a + b);   // Startwert 0.0, dann aufaddieren

// --- Vergleich: dasselbe Filtern mit klassischer for-Schleife ---
List<String> ergebnis = new ArrayList<>();
for (Employee e : mitarbeiter) {           // explizite Iteration
    if (e.getSalary() > 300.00) {          // manuelle Bedingung
        ergebnis.add(e.getName());         // manuelles Einsammeln
    }
}
// Funktioniert auch, aber mehr Zeilen und mehr "Mechanik".`
  },
  {
    heading: `8. Der Zusammenhang: Streams + Lambdas + APIs`,
    body: `<p>Zum Abschluss verbinden wir die drei großen Themen dieses Blocks, denn sie greifen in der Praxis eng ineinander.</p>
<p><b>Streams brauchen Lambdas.</b> Schau dir die Stream-Operationen aus dem letzten Abschnitt an: <code>filter(e -&gt; e.getSalary() &gt; 300)</code> oder <code>map(e -&gt; e.getName())</code>. Was steht in den Klammern? Genau, eine <b>Lambda Expression</b>. Stream-Operationen erwarten als Argument ein Functional Interface (z.B. <code>Predicate</code> bei <code>filter</code>, <code>Function</code> bei <code>map</code>), und genau das liefert man bequem als Lambda. Ohne Lambdas wären Streams kaum benutzbar, man müsste für jeden Filter und jede Umwandlung eine umständliche anonyme innere Klasse schreiben. Lambdas sind also der "Treibstoff", mit dem man einer Stream-Pipeline das gewünschte Verhalten mitgibt. Beide kamen nicht zufällig zusammen in Java 8: Sie wurden bewusst als Paar eingeführt, um funktionale Programmierung in Java zu ermöglichen.</p>
<p><b>APIs liefern die Daten, die man mit Streams verarbeitet.</b> Denk an den typischen Ablauf einer modernen Anwendung: Eine <b>Web-API</b> liefert über HTTP eine JSON-Antwort, zum Beispiel eine Liste von Filmen oder Mitarbeitern. Dieses JSON wird <b>geparst</b> und in eine Java-Collection (z.B. eine <code>List&lt;Movie&gt;</code>) umgewandelt. Und was macht man dann mit dieser Liste? Sehr oft genau das: man legt einen <b>Stream</b> darüber, <b>filtert</b> die interessanten Einträge heraus, <b>mappt</b> sie auf das benötigte Format und <b>sammelt</b> das Ergebnis ein. So entsteht eine durchgängige Kette: API -&gt; JSON -&gt; geparste Objektliste -&gt; Stream-Verarbeitung -&gt; Ergebnis.</p>
<p><b>Und auch im Backend selbst.</b> Erinnere dich an das MVC-/Service-Pattern: Der Controller nimmt einen API-Request entgegen, der Service holt die Daten (Model) und verarbeitet sie, oft mit Streams (etwa "gib mir alle Filme ab 2010, sortiert nach Titel"), und das Ergebnis wird als JSON über die View zurückgeschickt. Lambdas wiederum tauchen nicht nur in Streams auf, sondern auch als Event-Handler oder Callbacks, also genau dort, wo eine API ein Stück Verhalten von dir entgegennimmt.</p>
<p><b>Das große Bild.</b> APIs regeln die <b>Kommunikation</b> zwischen Systemen (was wird wie ausgetauscht). JSON ist das gemeinsame, sprachunabhängige <b>Datenformat</b>. MVC bringt <b>Struktur</b> in die Anwendung. Lambdas erlauben es, <b>Verhalten</b> kompakt als Wert zu übergeben. Und Streams nutzen dieses Verhalten, um <b>Daten</b> deklarativ und lesbar zu <b>verarbeiten</b>. Zusammen ergeben sie das Werkzeug-Set, mit dem man heute typische Backend- und Datenverarbeitungs-Aufgaben löst.</p>
<p><b>Merke:</b> Lambdas sind die Bausteine, die Streams ihr Verhalten geben (filter/map/reduce bekommen jeweils eine Lambda). APIs liefern via JSON die Daten, die man dann oft direkt per Stream verarbeitet. Die drei Themen sind kein Zufall nebeneinander, sie bilden zusammen einen durchgängigen Arbeitsablauf.</p>`,
    code: `// Durchgängiges Beispiel: von der API bis zur Stream-Verarbeitung.

// 1) Daten von einer Web-API holen (HTTP-Request)
HttpResponse<String> response = httpClient.send(request,
        HttpResponse.BodyHandlers.ofString());
String json = response.body();                  // JSON-Text als Antwort

// 2) JSON parsen -> Java-Liste (Deserialisierung)
ObjectMapper mapper = new ObjectMapper();
List<Movie> filme = mapper.readValue(json,
        new TypeReference<List<Movie>>() {});

// 3) Mit Stream + Lambdas verarbeiten:
List<String> titelAb2010 = filme.stream()       // Quelle: die geparste Liste
    .filter(m -> m.getYear() >= 2010)            // Lambda als Filter-Bedingung
    .map(m -> m.getTitle())                      // Lambda zum Umwandeln
    .sorted()                                    // sortieren
    .collect(Collectors.toList());               // Ergebnis einsammeln

// Kette: API  ->  JSON  ->  List<Movie>  ->  Stream(+Lambdas)  ->  Ergebnis`
  }
);
