window.DATA = window.DATA || {};
window.DATA.flashcards = window.DATA.flashcards || [];
window.DATA.theory = window.DATA.theory || [];
window.DATA.quiz = window.DATA.quiz || [];
window.DATA.flashcards.push(
  /* 26 Karten 204-01 .. 204-26 */
  { id: "204-01", topicId: "204",
    question: `Was sind Design Patterns?`,
    answerVerbose: `<p><b>Problem:</b> In der Softwareentwicklung treten immer wieder dieselben Entwurfsprobleme auf (z.B. "nur eine Instanz erlauben" oder "Objekte über Zustandsänderungen informieren"). Jeder löst sie neu, oft schlecht.</p><p><b>Lösung:</b> Ein <b>Design Pattern</b> ist eine erprobte, wiederverwendbare Standardlösung (Blueprint) für ein häufig wiederkehrendes Entwurfsproblem. Es ist kein fertiger Code, sondern eine Schablone, die man an die eigene Situation anpasst.</p><p><b>Warum:</b> Patterns dokumentieren bewährte Design-Erfahrungen und liefern eine <b>gemeinsame Sprache</b> ("Das ist ein Observer") unter Entwicklern. Wichtig laut Slides: <i>Patterns are found, not invented</i> - sie wurden aus realer Praxis abgeleitet, nicht erfunden.</p>`,
    answerExam: `<p>Erprobte, wiederverwendbare Standardlösungen für häufig wiederkehrende Entwurfsprobleme. Kein fertiger Code, sondern anpassbare Blueprints. Liefern eine gemeinsame Vokabel unter Entwicklern. "Found, not invented".</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-02", topicId: "204",
    question: `In welche Kategorien lassen sich die Gang-of-Four-Patterns unterteilen? Erkläre die einzelnen Kategorien.`,
    answerVerbose: `<p>Die GoF-Patterns werden nach ihrer <b>Absicht (Intent)</b> in drei Kategorien unterteilt:</p><ul><li><b>Creational (erzeugend):</b> regeln die <b>Objekterzeugung</b>, um Flexibilität und Wiederverwendung zu erhöhen. Beispiele: Singleton, Builder, Factory, Prototype.</li><li><b>Structural (strukturell):</b> beschreiben, wie man Objekte/Klassen zu <b>größeren Strukturen</b> zusammensetzt und dabei flexibel bleibt. Beispiele: Adapter, Bridge, Composite, Facade.</li><li><b>Behavioural (verhaltensbezogen):</b> regeln die <b>effektive Kommunikation</b> und die Verteilung von Verantwortlichkeiten zwischen Objekten. Beispiele: Observer, State, Strategy, Chain of Responsibility.</li></ul>`,
    answerExam: `<p><b>Creational:</b> Objekterzeugung (Singleton, Builder, Factory). <b>Structural:</b> Zusammensetzen von Objekten zu größeren Strukturen (Adapter, Facade, Composite). <b>Behavioural:</b> Kommunikation/Verantwortung zwischen Objekten (Observer, State, Strategy).</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-03", topicId: "204",
    question: `Nenne Vorteile von Design Patterns.`,
    answerVerbose: `<p>Design Patterns bringen mehrere Vorteile:</p><ul><li><b>Erprobte Lösungen:</b> dokumentieren gut getestete Design-Erfahrungen - man muss das Rad nicht neu erfinden.</li><li><b>Gemeinsames Vokabular:</b> erleichtern Kommunikation im Team ("Nimm hier einen Observer").</li><li><b>Wartbarkeit & Erweiterbarkeit:</b> entkoppeln Komponenten, neue Features lassen sich mit minimalen Änderungen ergänzen (Skalierbarkeit).</li><li><b>Testbarkeit:</b> lose Kopplung und Interfaces ermöglichen Mocking in Unit-Tests.</li><li><b>Pflege komplexer Systeme:</b> helfen bei Aufbau und Wartung komplexer, heterogener Systeme.</li></ul>`,
    answerExam: `<p>Erprobte Lösungen, gemeinsames Vokabular im Team, bessere Wartbarkeit/Erweiterbarkeit durch Entkopplung, bessere Testbarkeit (Mocking via Interfaces), Hilfe beim Aufbau komplexer Systeme.</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-04", topicId: "204",
    question: `Was versteht man unter "Coupling" von Klassen?`,
    answerVerbose: `<p><b>Coupling (Kopplung)</b> beschreibt, wie stark Klassen voneinander abhängen.</p><ul><li><b>Tight Coupling (enge Kopplung):</b> Eine Klasse kennt und erzeugt konkrete andere Klassen direkt (z.B. mit <code>new</code>). Änderungen an einer Klasse erzwingen Änderungen an vielen anderen - schlecht wartbar (vgl. Code Smell "Change Preventers").</li><li><b>Loose Coupling (lose Kopplung):</b> Klassen kommunizieren über <b>Abstraktionen (Interfaces)</b> statt konkreter Typen. Implementierungen lassen sich austauschen, ohne abhängigen Code zu ändern.</li></ul><p><b>Warum:</b> Ziel guten Designs ist <b>geringe Kopplung</b> (loose coupling) bei <b>hoher Kohäsion</b> - das macht Code austauschbar, testbar (Mocking) und erweiterbar.</p>`,
    answerExam: `<p>Coupling = Stärke der Abhängigkeit zwischen Klassen. Tight Coupling (direkte Abhängigkeit von konkreten Klassen) ist schlecht: Änderungen ziehen sich durch. Ziel: loose Coupling über Interfaces -> austauschbar und testbar.</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-05", topicId: "204",
    question: `Welche OOP-Konzepte werden in Design Patterns genutzt?`,
    answerVerbose: `<p>Design Patterns bauen auf den klassischen OOP-Konzepten auf:</p><ul><li><b>Abstraktion / Interfaces:</b> Programmieren gegen Schnittstellen statt konkrete Klassen (Basis vieler Patterns wie Strategy, Observer, State).</li><li><b>Polymorphie:</b> derselbe Aufruf verhält sich je nach konkretem Objekt unterschiedlich (z.B. <code>state.next()</code>).</li><li><b>Vererbung:</b> gemeinsames Verhalten in Oberklassen, Spezialisierung in Unterklassen.</li><li><b>Komposition / Delegation:</b> ein Objekt hält Referenzen auf andere und delegiert Arbeit (oft besser als Vererbung - "favor composition over inheritance").</li><li><b>Kapselung:</b> Verbergen von Implementierungsdetails (z.B. privater Konstruktor beim Singleton).</li></ul>`,
    answerExam: `<p>Abstraktion/Interfaces, Polymorphie, Vererbung, Komposition & Delegation, Kapselung. Besonders zentral: gegen Interfaces programmieren und Komposition gegenüber Vererbung bevorzugen.</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-06", topicId: "204",
    question: `Wie können Interfaces dabei helfen, Klassen unabhängiger zu gestalten?`,
    answerVerbose: `<p><b>Problem:</b> Hängt eine Klasse direkt von einer konkreten Klasse ab (z.B. <code>new SMTPEmailService()</code>), ist sie eng gekoppelt und schwer austauschbar oder testbar.</p><p><b>Lösung:</b> Ein Interface definiert nur das <b>Was</b> (Methodensignaturen), nicht das <b>Wie</b>. Die Klasse arbeitet gegen das Interface; die konkrete Implementierung wird von außen hereingegeben (Dependency Injection).</p><p><b>Warum:</b> So lassen sich Implementierungen austauschen (SMTP -> SendGrid), ohne den abhängigen Code zu ändern (Open/Closed). In Tests kann ein <code>MockEmailService</code> eingesetzt werden. Interfaces sind also der Schlüssel zu loser Kopplung.</p>`,
    answerExam: `<p>Klassen arbeiten gegen Interfaces (das "Was") statt gegen konkrete Klassen (das "Wie"). Die Implementierung wird von außen injiziert. -> Austauschbar, erweiterbar (Open/Closed) und testbar (Mocks). Ergebnis: lose Kopplung.</p>`,
    code: `public interface EmailService { void sendEmail(String message); }

public class NotificationManager {
  private final EmailService emailService; // Abstraktion statt konkreter Klasse
  public NotificationManager(EmailService emailService) {
    this.emailService = emailService;
  }
}`,
    source: "204 / Slides 04" },
  { id: "204-07", topicId: "204",
    question: `Was ist Over-Engineering in Bezug auf Design Patterns? Nenne Auswirkungen.`,
    answerVerbose: `<p><b>Over-Engineering</b> bedeutet, eine Lösung komplexer zu machen als nötig - etwa Design Patterns einzusetzen, wo ein einfacher Ansatz genügt hätte. Verwandt mit dem Code Smell <i>Speculative Generality</i> ("Code auf Vorrat" für nie eintretende Zukunftsfälle) und verletzt das Prinzip <b>KISS</b>.</p><p><b>Auswirkungen:</b></p><ul><li>Code wird unnötig schwer verständlich und schwerer zu warten.</li><li>Mehr Klassen/Abstraktionen als sinnvoll -> höhere kognitive Last.</li><li>Längere Entwicklungszeit ohne realen Nutzen.</li><li>Höhere Fehleranfälligkeit durch unnötige Komplexität.</li></ul><p><b>Faustregel:</b> Pattern nur einsetzen, wenn das Problem wirklich vorliegt (vgl. "Rule of Three" beim Refactoring).</p>`,
    answerExam: `<p>Over-Engineering = unnötig komplexe Lösung, z.B. Pattern einsetzen, wo Einfaches reicht (verletzt KISS, vgl. Speculative Generality). Folgen: schwer verständlicher/wartbarer Code, mehr Klassen, längere Entwicklung, mehr Fehler.</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-08", topicId: "204",
    question: `Erkläre das State Pattern. Welches Problem wird damit gelöst? Wie könnte ein Lösungsansatz aussehen?`,
    answerVerbose: `<p><b>Typ:</b> Behavioural Pattern. <b>Intent:</b> Ein Objekt ändert sein Verhalten, wenn sich sein interner Zustand ändert - es wirkt, als hätte es seine Klasse gewechselt. Eng verwandt mit der <b>Finite-State-Machine</b>.</p><p><b>Problem:</b> Zustandsabhängiges Verhalten wird oft mit vielen <code>if</code>/<code>switch</code>-Verzweigungen über den Zustand implementiert. Diese Bedingungen sind über viele Methoden verstreut; jede Änderung der Übergangslogik erfordert Anpassungen überall - schwer wartbar.</p><p><b>Lösung:</b> Für jeden Zustand eine eigene Klasse anlegen, die ein gemeinsames <code>State</code>-Interface implementiert und das zustandsspezifische Verhalten kapselt. Das Hauptobjekt (<b>Context</b>) hält eine Referenz auf das aktuelle State-Objekt und <b>delegiert</b> die Arbeit dorthin. Zustandsübergänge bedeuten: Context auf ein anderes State-Objekt umsetzen.</p>`,
    answerExam: `<p>Behavioural Pattern: Objekt ändert Verhalten bei Zustandswechsel (Finite-State-Machine). Problem: zustandsabhängige Logik als verstreute if/switch ist unwartbar. Lösung: je Zustand eine Klasse mit gemeinsamem State-Interface; Context delegiert ans aktuelle State-Objekt und wechselt es.</p>`,
    code: `interface State { State next(); String name(); }

class Red implements State {
  public State next() { return new Green(); }
  public String name() { return "RED"; }
}
class Green implements State {
  public State next() { return new Yellow(); }
  public String name() { return "GREEN"; }
}

class TrafficLight {                 // Context
  private State state = new Red();
  void tick() { state = state.next(); }   // delegiert + wechselt
  String color() { return state.name(); }
}`,
    source: "204 / Slides 04" },
  { id: "204-09", topicId: "204",
    question: `Erkläre das Observer Pattern. Welches Problem wird damit gelöst? Wie könnte ein Lösungsansatz aussehen?`,
    answerVerbose: `<p><b>Typ:</b> Behavioural Pattern. <b>Intent:</b> definiert einen Abo-Mechanismus, mit dem mehrere Objekte über Ereignisse eines beobachteten Objekts benachrichtigt werden.</p><p><b>Problem:</b> Ein Kunde will benachrichtigt werden, wenn ein Produkt verfügbar ist. Schlechte Alternativen: ständiges Nachfragen (Polling) oder der Store schickt Mails an alle Kunden (verschwendet Ressourcen / nervt Uninteressierte).</p><p><b>Lösung:</b> Das Objekt mit dem interessanten Zustand heißt <b>Publisher (Subject)</b>; die interessierten Objekte sind <b>Subscriber</b>. Der Publisher bietet <code>subscribe</code>/<code>unsubscribe</code> und benachrichtigt bei Zustandsänderung alle Subscriber über deren <code>update()</code>-Methode. Der Publisher kennt nur das Subscriber-<b>Interface</b>, nicht die konkreten Subscriber -> lose Kopplung.</p>`,
    answerExam: `<p>Behavioural Pattern: Abo-Mechanismus, Publisher benachrichtigt mehrere Subscriber über Zustandsänderungen. Problem: Polling oder Massen-Benachrichtigungen sind ineffizient. Lösung: Publisher mit subscribe/unsubscribe/notify; Subscriber implementieren update(). Publisher kennt nur das Interface -> lose gekoppelt.</p>`,
    code: `public interface Subscriber { void update(String news); }

public interface Publisher {
  void subscribe(Subscriber s);
  void unsubscribe(Subscriber s);
  void notifySubscribers();
}

public class NewsAgency implements Publisher {
  private String news;
  private final List<Subscriber> subs = new ArrayList<>();
  public void subscribe(Subscriber s) { subs.add(s); }
  public void unsubscribe(Subscriber s) { subs.remove(s); }
  public void notifySubscribers() {
    for (Subscriber s : subs) s.update(news);
  }
  public void setNews(String news) { this.news = news; notifySubscribers(); }
}`,
    source: "204 / Slides 04" },
  { id: "204-10", topicId: "204",
    question: `Erkläre das Singleton Pattern. Welches Problem wird damit gelöst? Wie könnte ein Lösungsansatz aussehen?`,
    answerVerbose: `<p><b>Typ:</b> Creational Pattern. <b>Intent:</b> stellt sicher, dass eine Klasse nur <b>eine einzige Instanz</b> besitzt, und bietet einen globalen Zugriffspunkt darauf.</p><p><b>Problem:</b> Manche Ressourcen sollen es nur einmal geben (z.B. ein Logger, eine DB-Verbindung, eine Config). Würde man frei Objekte erzeugen, hätte man mehrere konkurrierende Instanzen.</p><p><b>Lösung:</b></p><ul><li>Konstruktor <b>privat</b> machen, damit niemand von außen <code>new</code> aufrufen kann.</li><li>Ein <b>statisches Feld</b> hält die einzige Instanz.</li><li>Eine <b>statische Methode</b> (<code>getInstance()</code>) erzeugt die Instanz beim ersten Aufruf und gibt danach immer dieselbe zurück.</li></ul><p><b>Hinweis:</b> Singleton wird gerne kritisiert (globaler Zustand, erschwert Tests) - sparsam einsetzen.</p>`,
    answerExam: `<p>Creational Pattern: genau eine Instanz + globaler Zugriffspunkt. Problem: einmalige Ressourcen (Logger, Config). Lösung: privater Konstruktor, statisches Instanz-Feld, statische getInstance(), die beim ersten Aufruf erzeugt und sonst dieselbe Instanz liefert.</p>`,
    code: `public class Logger {
  private static Logger instance;          // 1. statisches Feld
  private Logger() {}                       // 2. privater Konstruktor
  public static Logger getInstance() {      // 3. statische Creation-Methode
    if (instance == null) instance = new Logger();
    return instance;
  }
  public void log(String msg) { System.out.println("LOG: " + msg); }
}`,
    source: "204 / Slides 04" },
  { id: "204-11", topicId: "204",
    question: `Erkläre das Builder Pattern. Welches Problem wird damit gelöst? Wie könnte ein Lösungsansatz aussehen?`,
    answerVerbose: `<p><b>Typ:</b> Creational Pattern. <b>Intent:</b> erlaubt, komplexe Objekte <b>Schritt für Schritt</b> aufzubauen, und kann mit demselben Konstruktionscode verschiedene Repräsentationen erzeugen.</p><p><b>Problem:</b> Ein Objekt braucht viele Felder/optionale Parameter. Das endet in einem "monströsen" Konstruktor mit langer Parameterliste, bei dem viele Werte ungenutzt/<code>null</code> sind - unleserlich und fehleranfällig.</p><p><b>Lösung:</b> Den Konstruktionscode in eine eigene <b>Builder-Klasse</b> auslagern (oft als statische innere Klasse). Der Builder bietet pro Feld eine Methode, die jeweils <code>this</code> zurückgibt (Method Chaining), und am Ende ein <code>build()</code>, das das fertige Objekt erzeugt. Man muss nicht alle Schritte aufrufen.</p>`,
    answerExam: `<p>Creational Pattern: komplexe Objekte schrittweise bauen. Problem: monströser Konstruktor mit langer (teils ungenutzter) Parameterliste. Lösung: Builder-Klasse mit verketteten Setter-Methoden (return this) und build()-Methode; privater Konstruktor des Zielobjekts.</p>`,
    code: `public class User {
  private final String username;
  private final String email;
  private User(UserBuilder b) { this.username = b.username; this.email = b.email; }

  public static class UserBuilder {
    private String username;
    private String email;
    public UserBuilder(String username) { this.username = username; }
    public UserBuilder email(String email) { this.email = email; return this; }
    public User build() { return new User(this); }
  }
}

// Verwendung:
User u = new User.UserBuilder("alice").email("alice@example.com").build();`,
    source: "204 / Slides 04" },
  { id: "204-12", topicId: "204",
    question: `Erkläre das Factory Pattern. Welches Problem wird damit gelöst? Wie könnte ein Lösungsansatz aussehen?`,
    answerVerbose: `<p><b>Typ:</b> Creational Pattern. <b>Intent:</b> kapselt die Objekterzeugung. Statt überall direkt mit <code>new ConcreteClass()</code> zu instanziieren, übernimmt eine <b>Factory</b> die Entscheidung, welche konkrete Klasse erzeugt wird, und liefert sie über ein gemeinsames Interface zurück.</p><p><b>Problem:</b> Verteilt man <code>new</code>-Aufrufe konkreter Klassen über den ganzen Code, entsteht enge Kopplung. Soll ein neuer Typ unterstützt werden, muss man viele Stellen ändern (verletzt Open/Closed).</p><p><b>Lösung:</b> Die Erzeugung an einer Stelle (Factory-Methode) bündeln. Der Client kennt nur das Interface/den Produkttyp; die konkrete Klasse wird in der Factory ausgewählt. Neue Produkte erfordern nur Änderung der Factory, nicht des Client-Codes -> lose Kopplung.</p>`,
    answerExam: `<p>Creational Pattern: kapselt die Objekterzeugung. Problem: verstreute new-Aufrufe -> enge Kopplung, schwer erweiterbar. Lösung: Factory-Methode entscheidet, welche konkrete Klasse erzeugt wird, und liefert sie über ein gemeinsames Interface. Client kennt nur das Interface.</p>`,
    code: `interface Shape { void draw(); }
class Circle implements Shape { public void draw() {} }
class Square implements Shape { public void draw() {} }

class ShapeFactory {
  public Shape create(String type) {
    switch (type) {
      case "circle": return new Circle();
      case "square": return new Square();
      default: throw new IllegalArgumentException(type);
    }
  }
}`,
    source: "204 / Slides 04" },
  { id: "204-13", topicId: "204",
    question: `Beschreibe ein Creational Pattern deiner Wahl im Detail. Nenne das Problem und einen Lösungsansatz.`,
    answerVerbose: `<p>Beispiel: <b>Singleton</b> (Creational).</p><p><b>Problem:</b> Eine bestimmte Ressource soll im gesamten Programm nur <b>einmal</b> existieren (z.B. ein zentraler Logger oder eine Config). Würde jeder frei Objekte erzeugen, gäbe es mehrere konkurrierende Instanzen mit eventuell widersprüchlichem Zustand.</p><p><b>Lösungsansatz:</b></p><ul><li>Konstruktor <b>privat</b> -> kein <code>new</code> von außen.</li><li>Statisches Feld speichert die einzige Instanz.</li><li>Statische <code>getInstance()</code> erzeugt sie lazy beim ersten Aufruf und gibt danach immer dieselbe Instanz zurück (globaler Zugriffspunkt).</li></ul><p><b>Warum:</b> garantiert Einmaligkeit und kontrollierten, globalen Zugriff. (Alternativ wäre auch Builder oder Factory eine gültige Antwort.)</p>`,
    answerExam: `<p>Singleton (Creational): genau eine Instanz + globaler Zugriff. Lösung: privater Konstruktor, statisches Feld, statische getInstance() mit Lazy-Init. Alternativen für diese Frage: Builder oder Factory.</p>`,
    code: `public class Config {
  private static Config instance;
  private Config() {}
  public static Config getInstance() {
    if (instance == null) instance = new Config();
    return instance;
  }
}`,
    source: "204 / Slides 04" },
  { id: "204-14", topicId: "204",
    question: `Beschreibe ein Structural Pattern deiner Wahl im Detail. Nenne das Problem und einen Lösungsansatz.`,
    answerVerbose: `<p>Beispiel: <b>Adapter</b> (Structural).</p><p><b>Intent:</b> lässt Objekte mit inkompatiblen Schnittstellen zusammenarbeiten.</p><p><b>Problem:</b> Eine App lädt Börsendaten im <b>XML</b>-Format. Man will eine 3rd-Party-Analyse-Bibliothek integrieren, die aber nur <b>JSON</b> versteht. Die Schnittstellen passen nicht zusammen, und die fremde Library kann man nicht ändern.</p><p><b>Lösungsansatz:</b> Ein <b>Adapter</b> wird zwischengeschaltet, der das Client-Interface implementiert und das fremde Service-Objekt <b>umhüllt (wraps)</b>. Er übersetzt die Aufrufe/Daten (XML -> JSON), sodass der Client den Service nutzen kann. Das gewrappte Objekt weiß nichts vom Adapter.</p><p><b>Warum:</b> bestehende, nicht änderbare Komponenten lassen sich integrieren, ohne Client- oder Service-Code anzufassen.</p>`,
    answerExam: `<p>Adapter (Structural): verbindet inkompatible Schnittstellen. Problem: App liefert XML, fremde Library braucht JSON, beides nicht änderbar. Lösung: Adapter implementiert das Client-Interface, wrappt den Service und übersetzt die Aufrufe/Daten.</p>`,
    code: `interface JsonAnalytics { void analyze(String json); }       // Client-Interface
class XmlStockData { String getXml() { return "<xml/>"; } }    // Service

class XmlToJsonAdapter implements JsonAnalytics {
  private final XmlStockData service;
  XmlToJsonAdapter(XmlStockData service) { this.service = service; }
  public void analyze(String ignored) {
    String json = convert(service.getXml());  // XML -> JSON
    // ... an Analytics weiterreichen
  }
  private String convert(String xml) { return "{}"; }
}`,
    source: "204 / Slides 04" },
  { id: "204-15", topicId: "204",
    question: `Beschreibe ein Behavioural Pattern deiner Wahl im Detail. Nenne das Problem und einen Lösungsansatz.`,
    answerVerbose: `<p>Beispiel: <b>State</b> (Behavioural).</p><p><b>Intent:</b> ein Objekt ändert sein Verhalten, wenn sich sein interner Zustand ändert (Finite-State-Machine).</p><p><b>Problem:</b> Zustandsabhängiges Verhalten (z.B. Ampel oder Dokument-Workflow draft/moderation/published) wird mit verschachtelten <code>switch</code>/<code>if</code> realisiert. Die Übergangslogik ist über viele Methoden verstreut; jede Änderung wird riskant und das Problem wächst mit dem Projekt.</p><p><b>Lösungsansatz:</b> Jeden Zustand als eigene Klasse modellieren, die ein gemeinsames <code>State</code>-Interface implementiert. Der <b>Context</b> hält das aktuelle State-Objekt und delegiert Aufrufe dorthin; ein Übergang setzt den Context auf ein anderes State-Objekt.</p><p><b>Warum:</b> Verhalten und Übergänge sind pro Zustand gekapselt -> wartbar und erweiterbar (neuer Zustand = neue Klasse, Open/Closed). (Alternativen: Observer, Strategy.)</p>`,
    answerExam: `<p>State (Behavioural): Verhalten ändert sich mit dem Zustand. Problem: verstreute switch/if-Übergangslogik ist unwartbar. Lösung: je Zustand eine Klasse (gemeinsames State-Interface), Context delegiert und wechselt das State-Objekt. Alternativen: Observer, Strategy.</p>`,
    code: `interface State { State next(); String name(); }
class Red implements State { public State next(){ return new Green(); } public String name(){ return "RED"; } }
class Green implements State { public State next(){ return new Red(); } public String name(){ return "GREEN"; } }

class TrafficLight {              // Context
  private State state = new Red();
  void tick() { state = state.next(); }
  String color() { return state.name(); }
}`,
    source: "204 / Slides 04" },
  { id: "204-16", topicId: "204",
    question: `Aus welchen Teilen bestehen die SOLID-Prinzipien? Was sind Ziele von SOLID?`,
    answerVerbose: `<p><b>SOLID</b> ist ein Akronym für 5 objektorientierte Design-Prinzipien:</p><ul><li><b>S</b> - Single Responsibility Principle: eine Klasse hat nur einen Grund zur Änderung.</li><li><b>O</b> - Open/Closed Principle: offen für Erweiterung, geschlossen für Modifikation.</li><li><b>L</b> - Liskov Substitution Principle: Subtypen müssen für ihre Basistypen einsetzbar sein.</li><li><b>I</b> - Interface Segregation Principle: kleine, fokussierte Interfaces.</li><li><b>D</b> - Dependency Inversion Principle: von Abstraktionen abhängen, nicht von konkreten Klassen.</li></ul><p><b>Ziele:</b> bessere <b>Modularität</b>, geringere Kopplung, weniger Bugs durch Designfehler, bessere Wartbarkeit, Erweiterbarkeit und Testbarkeit.</p>`,
    answerExam: `<p>S = Single Responsibility, O = Open/Closed, L = Liskov Substitution, I = Interface Segregation, D = Dependency Inversion. Ziele: höhere Modularität, weniger Kopplung, weniger Bugs durch Designfehler, bessere Wartbarkeit & Testbarkeit.</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-17", topicId: "204",
    question: `Erkläre das Single Responsibility Principle anhand eines konkreten Beispiels.`,
    answerVerbose: `<p><b>Prinzip:</b> Eine Klasse soll nur <b>einen Grund zur Änderung</b> haben, also nur eine Verantwortung. Alle Elemente einer Klasse sollen funktional zusammengehören (hohe Kohäsion).</p><p><b>Beispiel (Verletzung):</b> Eine <code>UserManager</code>-Klasse speichert User in der DB <b>und</b> validiert E-Mails. Ändert sich die Validierungslogik, kann das den DB-Code beeinträchtigen - zwei Gründe zur Änderung in einer Klasse.</p><p><b>Lösung:</b> Aufteilen in <code>UserRepository</code> (DB-Zugriff) und <code>UserValidator</code> (Validierung). Jede Klasse hat nun genau eine Verantwortung.</p>`,
    answerExam: `<p>Eine Klasse = ein Grund zur Änderung = eine Verantwortung. Beispiel: UserManager macht DB-Speichern UND E-Mail-Validierung -> aufteilen in UserRepository und UserValidator.</p>`,
    code: `// schlecht: zwei Verantwortungen
class UserManager {
  void saveUser(User u) { /* DB */ }
  boolean validateEmail(String e) { return e.contains("@"); }
}

// gut: getrennt
class UserRepository { void saveUser(User u) { /* DB */ } }
class UserValidator { boolean validateEmail(String e) { return e.contains("@"); } }`,
    source: "204 / Slides 04" },
  { id: "204-18", topicId: "204",
    question: `Erkläre das Open-Closed Principle anhand eines konkreten Beispiels.`,
    answerVerbose: `<p><b>Prinzip:</b> Klassen sollen <b>offen für Erweiterung, aber geschlossen für Modifikation</b> sein. Neue Funktionalität soll man hinzufügen können, ohne bestehenden Code zu ändern.</p><p><b>Beispiel (Verletzung):</b> Ein <code>PaymentProcessor</code> entscheidet per <code>if/else</code> über die Zahlungsart (credit, paypal, ...). Jede neue Zahlungsart erzwingt eine Änderung dieser Methode und immer größere Verzweigungen.</p><p><b>Lösung:</b> Ein Interface <code>PaymentMethod</code> mit <code>pay(amount)</code>. Jede Zahlungsart ist eine eigene Klasse. Eine neue Methode (z.B. GooglePay) bedeutet nur eine <b>neue Klasse</b> - der bestehende Code bleibt unverändert.</p>`,
    answerExam: `<p>Offen für Erweiterung, geschlossen für Modifikation. Beispiel: PaymentProcessor mit if/else je Zahlungsart -> stattdessen Interface PaymentMethod, jede Art eine Klasse. Neue Zahlungsart = neue Klasse, kein Eingriff in bestehenden Code.</p>`,
    code: `interface PaymentMethod { void pay(double amount); }
class CreditCard implements PaymentMethod { public void pay(double a) {} }
class PayPal implements PaymentMethod { public void pay(double a) {} }

class PaymentProcessor {
  private final PaymentMethod method;
  PaymentProcessor(PaymentMethod method) { this.method = method; }
  void process(double amount) { method.pay(amount); }
}`,
    source: "204 / Slides 04" },
  { id: "204-19", topicId: "204",
    question: `Erkläre das Liskov Substitution Principle anhand eines konkreten Beispiels.`,
    answerVerbose: `<p><b>Prinzip:</b> Jede Unterklasse muss für ihren Basistyp <b>einsetzbar</b> sein, ohne die Korrektheit des Programms zu verändern. Ein Subtyp darf zugesicherte Verhaltensweisen nicht brechen.</p><p><b>Beispiel (Verletzung):</b> <code>Bird</code> hat eine Methode <code>fly()</code>. <code>Ostrich extends Bird</code> kann nicht fliegen und wirft in <code>fly()</code> eine <code>UnsupportedOperationException</code>. Code, der annimmt, dass alle Birds fliegen können, bricht beim Einsetzen eines Ostrich.</p><p><b>Lösung:</b> Die Fähigkeit "fliegen" in ein eigenes Interface <code>FlyingBird</code> auslagern. <code>Sparrow implements FlyingBird</code>, <code>Ostrich implements Bird</code> (ohne fly). So sagt der Typ nie ein Verhalten zu, das nicht erfüllt wird.</p>`,
    answerExam: `<p>Subtypen müssen ihren Basistyp ersetzen können, ohne Korrektheit zu brechen. Beispiel: Ostrich extends Bird, dessen fly() eine Exception wirft -> LSP-Verletzung. Lösung: fly() in eigenes Interface FlyingBird trennen; Ostrich implementiert nur Bird.</p>`,
    code: `interface Bird { }
interface FlyingBird extends Bird { void fly(); }

class Sparrow implements FlyingBird { public void fly() { /* ... */ } }
class Ostrich implements Bird { /* fliegt nicht - LSP bleibt erfuellt */ }`,
    source: "204 / Slides 04" },
  { id: "204-20", topicId: "204",
    question: `Erkläre das Interface Segregation Principle anhand eines konkreten Beispiels.`,
    answerVerbose: `<p><b>Prinzip:</b> Clients sollen <b>nicht gezwungen</b> sein, von Methoden abzuhängen, die sie nicht nutzen. Interfaces klein und fokussiert halten; große Interfaces in spezifischere aufteilen.</p><p><b>Beispiel (Verletzung):</b> Ein Interface <code>Worker</code> verlangt <code>work()</code> und <code>eat()</code>. Eine Klasse <code>Robot implements Worker</code> muss <code>eat()</code> implementieren, obwohl ein Roboter nicht isst - typischerweise mit einer <code>UnsupportedOperationException</code>.</p><p><b>Lösung:</b> Das Interface aufteilen in <code>Workable</code> (work) und <code>Eatable</code> (eat). <code>Human</code> implementiert beide, <code>Robot</code> nur <code>Workable</code>. Niemand muss mehr ungenutzte Methoden tragen.</p>`,
    answerExam: `<p>Clients nicht zu ungenutzten Methoden zwingen; Interfaces klein/fokussiert halten. Beispiel: Worker mit work()+eat() zwingt Robot zu eat() -> aufteilen in Workable und Eatable. Robot implementiert nur Workable.</p>`,
    code: `interface Workable { void work(); }
interface Eatable { void eat(); }

class Human implements Workable, Eatable { public void work() {} public void eat() {} }
class Robot implements Workable { public void work() {} }`,
    source: "204 / Slides 04" },
  { id: "204-21", topicId: "204",
    question: `Erkläre das Dependency Inversion Principle anhand eines konkreten Beispiels.`,
    answerVerbose: `<p><b>Prinzip:</b> High-Level-Module sollen nicht von Low-Level-Modulen abhängen, sondern beide von <b>Abstraktionen (Interfaces)</b>. Man hängt also von Abstraktionen ab, nicht von konkreten Klassen. Wird oft mit DI kombiniert.</p><p><b>Beispiel (Verletzung):</b> <code>NotificationManager</code> erzeugt intern <code>new SMTPEmailService()</code> - er hängt direkt von einer konkreten Klasse ab. Ein Wechsel auf <code>SendGridEmailService</code> erfordert eine Änderung des NotificationManager.</p><p><b>Lösung:</b> Ein Interface <code>EmailService</code> einführen. Der <code>NotificationManager</code> hängt nur noch vom Interface ab und bekommt die konkrete Implementierung von außen injiziert. Jetzt ist er von der konkreten Implementierung entkoppelt.</p>`,
    answerExam: `<p>Von Abstraktionen abhängen, nicht von konkreten Klassen. Beispiel: NotificationManager mit new SMTPEmailService() ist eng gekoppelt -> Interface EmailService einführen und per DI injizieren. Implementierung austauschbar.</p>`,
    code: `public interface EmailService { void sendEmail(String message); }
public class SMTPEmailService implements EmailService { public void sendEmail(String m) {} }

public class NotificationManager {
  private final EmailService emailService;     // Abstraktion
  public NotificationManager(EmailService emailService) {
    this.emailService = emailService;          // von aussen injiziert
  }
}`,
    source: "204 / Slides 04" },
  { id: "204-22", topicId: "204",
    question: `Was ist Dependency Injection? Was bedeutet "Dependency" in diesem Kontext?`,
    answerVerbose: `<p><b>Dependency Injection (DI)</b> ist eine Programmiertechnik, die eine Klasse <b>unabhängig von ihren Abhängigkeiten</b> macht, indem die <b>Nutzung</b> eines Objekts von dessen <b>Erzeugung</b> entkoppelt wird. In einfachen Worten: Man gibt einer Klasse die benötigten Objekte von außen herein, statt sie intern mit <code>new</code> zu erzeugen.</p><p><b>Dependency:</b> Eine "Dependency" ist ein anderes Objekt, das eine Klasse zum Arbeiten braucht (z.B. ein <code>ReportDAO</code>, das ein <code>ReportService</code> benötigt). Würde der Service das DAO selbst mit <code>new</code> erzeugen, wäre er eng gekoppelt; per DI wird das DAO hereingereicht.</p><p><b>Warum:</b> unterstützt SOLID (Single Responsibility, Dependency Inversion) und ermöglicht einfaches Testen mit gemockten Objekten.</p>`,
    answerExam: `<p>DI macht eine Klasse unabhängig von ihren Abhängigkeiten, indem Nutzung von Erzeugung getrennt wird: benötigte Objekte werden von außen hereingegeben statt mit new erzeugt. Dependency = ein Objekt, das die Klasse zum Arbeiten braucht. Fördert SRP/DIP und Testbarkeit.</p>`,
    code: `// ohne DI (eng gekoppelt)
class ReportService { private ReportDAO dao = new MySQLReportDAO(); }

// mit DI (injiziert)
class ReportService {
  private final ReportDAO dao;
  ReportService(ReportDAO dao) { this.dao = dao; }
}`,
    source: "204 / Slides 04" },
  { id: "204-23", topicId: "204",
    question: `Nenne Ziele von Dependency Injection.`,
    answerVerbose: `<p>Ziele von DI:</p><ul><li><b>Lose Kopplung:</b> Klassen hängen von Abstraktionen ab, nicht von konkreten Implementierungen.</li><li><b>Trennung von Nutzung und Erzeugung:</b> eine Klasse kümmert sich nicht mehr darum, wie ihre Abhängigkeiten erzeugt werden (unterstützt Single Responsibility).</li><li><b>Bessere Testbarkeit:</b> in Tests können gemockte Objekte injiziert werden (z.B. <code>MockEmailService</code>).</li><li><b>Austauschbarkeit / Flexibilität:</b> Implementierungen lassen sich ohne Codeänderung tauschen (unterstützt Dependency Inversion und Open/Closed).</li></ul>`,
    answerExam: `<p>Lose Kopplung, Trennung von Nutzung und Erzeugung (fördert SRP), bessere Testbarkeit durch Mocks, Austauschbarkeit der Implementierungen (fördert DIP/Open-Closed).</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-24", topicId: "204",
    question: `Welche Arten von Dependency Injection gibt es? Wie unterscheiden sie sich? Vor- und Nachteile?`,
    answerVerbose: `<p>Es gibt drei gängige Arten, eine Abhängigkeit hereinzugeben:</p><ul><li><b>Constructor Injection:</b> die Abhängigkeit wird über den Konstruktor übergeben. <i>Vorteil:</i> Objekt ist nach Erzeugung sofort vollständig und gültig; Felder können <code>final</code> sein (unveränderlich). <i>Nachteil:</i> viele Abhängigkeiten -> lange Konstruktoren; schwieriger bei optionalen Abhängigkeiten. Gilt als bevorzugte Variante.</li><li><b>Setter Injection:</b> die Abhängigkeit wird über eine Setter-Methode gesetzt. <i>Vorteil:</i> flexibel, gut für optionale oder nachträglich änderbare Abhängigkeiten. <i>Nachteil:</i> Objekt kann unvollständig existieren (Setter evtl. nicht aufgerufen -> <code>null</code>/NPE); nicht <code>final</code>.</li><li><b>Field Injection:</b> die Abhängigkeit wird direkt ins Feld gesetzt (z.B. per Framework/Annotation). <i>Vorteil:</i> wenig Boilerplate. <i>Nachteil:</i> schlecht testbar ohne Framework, versteckt Abhängigkeiten, kein <code>final</code> - gilt allgemein als am wenigsten empfehlenswert.</li></ul>`,
    answerExam: `<p>Constructor Injection: über Konstruktor, Objekt sofort gültig, final möglich (bevorzugt). Setter Injection: über Setter, flexibel/optional, aber Objekt evtl. unvollständig. Field Injection: direkt ins Feld, wenig Code, aber schlecht testbar und versteckt Abhängigkeiten (am wenigsten empfohlen).</p>`,
    code: `// Constructor Injection (bevorzugt)
class Service { private final Repo repo; Service(Repo repo) { this.repo = repo; } }

// Setter Injection
class Service { private Repo repo; void setRepo(Repo repo) { this.repo = repo; } }

// Field Injection (per Framework/Annotation)
class Service { @Inject private Repo repo; }`,
    source: "204 / Slides 04" },
  { id: "204-25", topicId: "204",
    question: `Was sind Code Smells und welche Kategorien gibt es (mit Beispielen)?`,
    answerVerbose: `<p>Ein <b>Code Smell</b> ist ein Hinweis (kein Bug) auf ein tieferliegendes Designproblem, das das Refactoring nahelegt. Die Slides (refactoring.guru) gruppieren sie u.a. so:</p><ul><li><b>Bloaters:</b> zu groß gewordener Code - lange Methoden, große Klassen, lange Parameterlisten, Primitive Obsession, Data Clumps.</li><li><b>Object-Orientation Abusers:</b> falsche/unvollständige OOP-Nutzung - z.B. Vererbung nur zur Code-Wiederverwendung, obwohl keine "is-a"-Beziehung besteht (Lösung: Komposition statt Vererbung).</li><li><b>Change Preventers:</b> eine Änderung erzwingt viele Änderungen an anderen Stellen (z.B. verstreute Verantwortlichkeit, Parallel Inheritance Hierarchies).</li><li><b>Dispensables:</b> Überflüssiges - unnötige Kommentare, Duplicate Code, Dead Code, Speculative Generality.</li></ul><p><b>Bezug:</b> Code Smells motivieren den Einsatz von Prinzipien (DRY, SRP) und Patterns.</p>`,
    answerExam: `<p>Code Smell = Hinweis auf Designproblem (kein Bug), Anlass zum Refactoring. Kategorien: Bloaters (lange Methoden/Klassen, lange Parameterlisten), OO-Abusers (Vererbung statt Komposition), Change Preventers (eine Änderung erzwingt viele), Dispensables (Kommentare, Duplicate/Dead Code, Speculative Generality).</p>`,
    code: null,
    source: "204 / Slides 04" },
  { id: "204-26", topicId: "204",
    question: `Was bedeuten die Prinzipien KISS und DRY?`,
    answerVerbose: `<p>Beides sind grundlegende Design-Prinzipien für sauberen Code:</p><ul><li><b>KISS - Keep It Simple, Stupid:</b> Ein System soll so einfach wie möglich gehalten werden. Kleine Methoden (Richtwert 40-50 Zeilen), jede Methode löst nur ein Problem. Vorteil: Bugs schneller finden, leichtere Änderung und Erweiterung. Gegenteil ist u.a. Over-Engineering.</li><li><b>DRY - Don't Repeat Yourself:</b> Wiederholungen vermeiden, nicht Copy-Paste. Wissen/Logik soll nur an <b>einer</b> Stelle stehen. Vorteil: Änderungen müssen nur an einer Stelle gemacht werden -> leichtere Wartung und Erweiterung; weniger Inkonsistenzen.</li></ul><p><b>Warum:</b> beide reduzieren Komplexität und Fehlerquellen und ergänzen SOLID und DI.</p>`,
    answerExam: `<p>KISS (Keep It Simple, Stupid): so einfach wie möglich, kleine Methoden, eine Aufgabe je Methode. DRY (Don't Repeat Yourself): keine Duplikate, Logik nur an einer Stelle -> Änderung nur einmal nötig. Beide reduzieren Komplexität und Fehler.</p>`,
    code: null,
    source: "204 / Slides 04" }
);

window.DATA.theory.push(
  { topicId: "204", title: "Design Patterns, SOLID & DI", sections: [
    { heading: "Was sind Design Patterns?",
      body: `<p><b>Design Principles</b> sind High-Level-Richtlinien für sauberen, verständlichen und wartbaren Code (die "Regeln des guten Designs"). <b>Design Patterns</b> sind erprobte, wiederverwendbare Standardlösungen für häufig wiederkehrende Entwurfsprobleme (das "Werkzeug"). Ein Pattern ist kein fertiger Code, sondern ein anpassbarer Blueprint.</p><p>Sie liefern ein <b>gemeinsames Vokabular</b>, dokumentieren bewährte Erfahrungen und werden gefunden, nicht erfunden. Warum sie wichtig sind: bessere <b>Maintainability</b> (Änderungen brechen keine fremden Teile), <b>Scalability</b> (neue Features mit minimalen Änderungen) und <b>Testability</b> (lose Kopplung + Interfaces ermöglichen Mocking).</p>`,
      code: null },
    { heading: "GoF-Kategorien: Creational / Structural / Behavioural",
      body: `<p>Die Gang-of-Four-Patterns werden nach ihrer Absicht (Intent) gruppiert:</p><ul><li><b>Creational</b> (erzeugend): Objekterzeugung flexibilisieren - Singleton, Builder, Factory, Prototype.</li><li><b>Structural</b> (strukturell): Objekte/Klassen zu größeren Strukturen zusammensetzen - Adapter, Bridge, Composite, Facade.</li><li><b>Behavioural</b> (verhaltensbezogen): Kommunikation und Verantwortung zwischen Objekten - Observer, State, Strategy, Chain of Responsibility.</li></ul>`,
      code: null },
    { heading: "Clean Code, Code Smells & Refactoring",
      body: `<p><b>Clean Code</b> ist für andere offensichtlich lesbar. Prinzipien: <b>KISS</b> (so einfach wie möglich, kleine Methoden, eine Aufgabe je Methode) und <b>DRY</b> (keine Duplikate, Logik nur an einer Stelle). <b>Code Smells</b> sind Hinweise auf Designprobleme: <i>Bloaters</i> (lange Methoden/Klassen, lange Parameterlisten, Primitive Obsession), <i>OO-Abusers</i> (Vererbung statt Komposition), <i>Change Preventers</i> (eine Änderung erzwingt viele), <i>Dispensables</i> (Kommentare, Duplicate/Dead Code, Speculative Generality). <b>Refactoring "Rule of Three":</b> beim dritten Mal anfangen zu refactoren; keine neue Funktionalität dabei, alle Tests müssen weiter grün sein.</p>`,
      code: null },
    { heading: "Coupling & Kohäsion",
      body: `<p><b>Coupling</b> = Stärke der Abhängigkeit zwischen Klassen. <b>Tight Coupling</b> (direkte Abhängigkeit von konkreten Klassen, z.B. via <code>new</code>) macht Änderungen teuer. <b>Loose Coupling</b> über Interfaces macht Implementierungen austauschbar und testbar. <b>Kohäsion</b> = wie gut die Elemente einer Klasse funktional zusammengehören. Ziel guten Designs: <b>geringe Kopplung, hohe Kohäsion</b>. Interfaces sind der zentrale Hebel: sie definieren das "Was" und entkoppeln vom "Wie".</p>`,
      code: null },
    { heading: "State Pattern (Behavioural)",
      body: `<p>Ein Objekt ändert sein Verhalten, wenn sich sein interner Zustand ändert (Finite-State-Machine). Problem: zustandsabhängige Logik als verstreute <code>if</code>/<code>switch</code> ist unwartbar. Lösung: je Zustand eine Klasse mit gemeinsamem State-Interface; der <b>Context</b> hält das aktuelle State-Objekt und delegiert die Arbeit dorthin, ein Übergang wechselt das Objekt.</p>`,
      code: `interface State { State next(); String name(); }
class Red implements State { public State next(){ return new Green(); } public String name(){ return "RED"; } }
class Green implements State { public State next(){ return new Red(); } public String name(){ return "GREEN"; } }

class TrafficLight {                 // Context
  private State state = new Red();
  void tick() { state = state.next(); }
  String color() { return state.name(); }
}` },
    { heading: "Observer Pattern (Behavioural)",
      body: `<p>Abo-Mechanismus: ein <b>Publisher (Subject)</b> benachrichtigt mehrere <b>Subscriber</b> über Zustandsänderungen. Problem: Polling oder Massen-Benachrichtigungen sind ineffizient. Lösung: Publisher bietet <code>subscribe</code>/<code>unsubscribe</code>/<code>notify</code>; Subscriber implementieren <code>update()</code>. Der Publisher kennt nur das Subscriber-Interface -> lose gekoppelt.</p>`,
      code: `public interface Subscriber { void update(String news); }
public interface Publisher {
  void subscribe(Subscriber s); void unsubscribe(Subscriber s); void notifySubscribers();
}
public class NewsAgency implements Publisher {
  private String news;
  private final List<Subscriber> subs = new ArrayList<>();
  public void subscribe(Subscriber s) { subs.add(s); }
  public void unsubscribe(Subscriber s) { subs.remove(s); }
  public void notifySubscribers() { for (Subscriber s : subs) s.update(news); }
  public void setNews(String news) { this.news = news; notifySubscribers(); }
}` },
    { heading: "Singleton Pattern (Creational)",
      body: `<p>Stellt sicher, dass eine Klasse genau <b>eine Instanz</b> hat, und bietet einen globalen Zugriffspunkt. Umsetzung: privater Konstruktor, statisches Instanz-Feld, statische <code>getInstance()</code> mit Lazy-Init. Geeignet für einmalige Ressourcen (Logger, Config). Kritik: globaler Zustand, erschwert Tests - sparsam nutzen.</p>`,
      code: `public class Logger {
  private static Logger instance;
  private Logger() {}
  public static Logger getInstance() {
    if (instance == null) instance = new Logger();
    return instance;
  }
}` },
    { heading: "Builder Pattern (Creational)",
      body: `<p>Baut komplexe Objekte Schritt für Schritt auf. Problem: monströser Konstruktor mit langer, teils ungenutzter Parameterliste. Lösung: Builder-Klasse (oft als statische innere Klasse) mit verketteten Methoden (<code>return this</code>) und <code>build()</code>; der Konstruktor des Zielobjekts ist privat.</p>`,
      code: `public class User {
  private final String username; private final String email;
  private User(UserBuilder b) { this.username = b.username; this.email = b.email; }
  public static class UserBuilder {
    private String username; private String email;
    public UserBuilder(String username) { this.username = username; }
    public UserBuilder email(String email) { this.email = email; return this; }
    public User build() { return new User(this); }
  }
}
User u = new User.UserBuilder("alice").email("alice@example.com").build();` },
    { heading: "Factory Pattern (Creational)",
      body: `<p>Kapselt die Objekterzeugung an einer Stelle. Problem: verstreute <code>new</code>-Aufrufe konkreter Klassen erzeugen enge Kopplung und verletzen Open/Closed. Lösung: eine Factory entscheidet, welche konkrete Klasse erzeugt wird, und liefert sie über ein gemeinsames Interface. Der Client kennt nur das Interface; neue Produkte erfordern nur Änderungen in der Factory.</p>`,
      code: `interface Shape { void draw(); }
class Circle implements Shape { public void draw() {} }
class Square implements Shape { public void draw() {} }
class ShapeFactory {
  public Shape create(String type) {
    switch (type) {
      case "circle": return new Circle();
      case "square": return new Square();
      default: throw new IllegalArgumentException(type);
    }
  }
}` },
    { heading: "SOLID - die 5 Prinzipien",
      body: `<p><b>S</b> Single Responsibility: eine Klasse = ein Grund zur Änderung (UserManager aufteilen in UserRepository + UserValidator). <b>O</b> Open/Closed: offen für Erweiterung, geschlossen für Modifikation (PaymentMethod-Interface statt if/else je Zahlungsart). <b>L</b> Liskov Substitution: Subtypen müssen ihren Basistyp ersetzen können (Ostrich darf nicht fly() mit Exception erben). <b>I</b> Interface Segregation: kleine, fokussierte Interfaces (Workable + Eatable statt einem Worker). <b>D</b> Dependency Inversion: von Abstraktionen abhängen, nicht von konkreten Klassen. Ziel: Modularität, weniger Kopplung, weniger Designfehler.</p>`,
      code: `// Open/Closed: erweitern statt aendern
interface PaymentMethod { void pay(double amount); }
class CreditCard implements PaymentMethod { public void pay(double a) {} }
class PayPal implements PaymentMethod { public void pay(double a) {} }
class PaymentProcessor {
  private final PaymentMethod method;
  PaymentProcessor(PaymentMethod method) { this.method = method; }
  void process(double amount) { method.pay(amount); }
}` },
    { heading: "Dependency Injection (Constructor / Setter / Field)",
      body: `<p>DI macht eine Klasse unabhängig von ihren Abhängigkeiten, indem Nutzung von Erzeugung getrennt wird: benötigte Objekte werden von außen hereingegeben statt mit <code>new</code> erzeugt. Fördert SRP und Dependency Inversion und ermöglicht Mocking in Tests. Drei Arten:</p><ul><li><b>Constructor Injection</b> (bevorzugt): über den Konstruktor; Objekt sofort vollständig, Felder <code>final</code> möglich.</li><li><b>Setter Injection</b>: über Setter; flexibel/optional, aber Objekt kann unvollständig sein.</li><li><b>Field Injection</b>: direkt ins Feld (per Framework); wenig Code, aber schlecht testbar und versteckt Abhängigkeiten.</li></ul>`,
      code: `// Constructor Injection (bevorzugt)
class Service { private final Repo repo; Service(Repo repo) { this.repo = repo; } }
// Setter Injection
class Service2 { private Repo repo; void setRepo(Repo repo) { this.repo = repo; } }
// Field Injection
class Service3 { @Inject private Repo repo; }` }
  ] }
);

window.DATA.quiz.push(
  { id: "q-204-01", topicId: "204", type: "mc",
    prompt: `Zu welcher GoF-Kategorie gehört das Singleton Pattern?`,
    code: null,
    options: ["Creational", "Structural", "Behavioural", "Functional"],
    correct: [0],
    explanation: `Singleton regelt die Objekterzeugung (genau eine Instanz) und ist daher ein Creational Pattern.` },
  { id: "q-204-02", topicId: "204", type: "mc",
    prompt: `Zu welcher GoF-Kategorie gehört das Observer Pattern?`,
    code: null,
    options: ["Creational", "Structural", "Behavioural", "Concurrency"],
    correct: [2],
    explanation: `Observer regelt die Kommunikation zwischen Objekten (Benachrichtigung von Subscribern) und ist ein Behavioural Pattern.` },
  { id: "q-204-03", topicId: "204", type: "mc",
    prompt: `Zu welcher GoF-Kategorie gehört das Adapter Pattern?`,
    code: null,
    options: ["Creational", "Structural", "Behavioural", "Architectural"],
    correct: [1],
    explanation: `Adapter setzt Objekte mit inkompatiblen Schnittstellen zu einer Struktur zusammen und ist ein Structural Pattern.` },
  { id: "q-204-04", topicId: "204", type: "multi",
    prompt: `Welche der folgenden Patterns sind Creational Patterns? (Mehrfachauswahl)`,
    code: null,
    options: ["Singleton", "Builder", "Observer", "Factory", "State"],
    correct: [0, 1, 3],
    explanation: `Singleton, Builder und Factory regeln die Objekterzeugung (Creational). Observer und State sind Behavioural.` },
  { id: "q-204-05", topicId: "204", type: "mc",
    prompt: `Welches SOLID-Prinzip wird hier verletzt?`,
    code: `class UserManager {
  void saveUser(User u) { /* in DB speichern */ }
  boolean validateEmail(String e) { return e.contains("@"); }
}`,
    options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Open/Closed Principle"],
    correct: [0],
    explanation: `Die Klasse hat zwei Verantwortungen (DB-Zugriff und Validierung) und damit zwei Gründe zur Änderung -> Verletzung des Single Responsibility Principle.` },
  { id: "q-204-06", topicId: "204", type: "mc",
    prompt: `Welches SOLID-Prinzip wird hier verletzt?`,
    code: `class Bird { void fly() {} }
class Ostrich extends Bird {
  void fly() { throw new UnsupportedOperationException(); }
}`,
    options: ["Liskov Substitution Principle", "Single Responsibility Principle", "Dependency Inversion Principle", "Interface Segregation Principle"],
    correct: [0],
    explanation: `Ostrich kann seinen Basistyp Bird nicht korrekt ersetzen (fly() wirft eine Exception) -> Verletzung des Liskov Substitution Principle.` },
  { id: "q-204-07", topicId: "204", type: "mc",
    prompt: `Welches SOLID-Prinzip wird verletzt, wenn Robot ein Interface Worker mit work() UND eat() implementieren muss, obwohl ein Roboter nicht isst?`,
    code: null,
    options: ["Interface Segregation Principle", "Open/Closed Principle", "Single Responsibility Principle", "Liskov Substitution Principle"],
    correct: [0],
    explanation: `Der Client wird gezwungen, von einer Methode (eat()) abzuhängen, die er nicht nutzt -> Verletzung des Interface Segregation Principle. Lösung: Interface in Workable und Eatable aufteilen.` },
  { id: "q-204-08", topicId: "204", type: "mc",
    prompt: `Welche DI-Art zeigt dieses Code-Snippet?`,
    code: `class Service {
  private final Repo repo;
  Service(Repo repo) { this.repo = repo; }
}`,
    options: ["Constructor Injection", "Setter Injection", "Field Injection", "Service Locator"],
    correct: [0],
    explanation: `Die Abhängigkeit wird über den Konstruktor übergeben -> Constructor Injection. Vorteil: Objekt ist sofort gültig, Feld kann final sein.` },
  { id: "q-204-09", topicId: "204", type: "mc",
    prompt: `Welche DI-Art zeigt dieses Code-Snippet?`,
    code: `class Service {
  private Repo repo;
  void setRepo(Repo repo) { this.repo = repo; }
}`,
    options: ["Setter Injection", "Constructor Injection", "Field Injection", "Manual Injection"],
    correct: [0],
    explanation: `Die Abhängigkeit wird über eine Setter-Methode gesetzt -> Setter Injection. Flexibel/optional, aber das Objekt kann unvollständig existieren.` },
  { id: "q-204-10", topicId: "204", type: "mc",
    prompt: `Welche DI-Art zeigt dieses Code-Snippet?`,
    code: `class Service {
  @Inject private Repo repo;
}`,
    options: ["Field Injection", "Constructor Injection", "Setter Injection", "Lazy Injection"],
    correct: [0],
    explanation: `Die Abhängigkeit wird direkt in ein Feld injiziert (per Annotation/Framework) -> Field Injection. Wenig Code, aber schlecht testbar und versteckt Abhängigkeiten.` },
  { id: "q-204-11", topicId: "204", type: "mc",
    prompt: `Was ist der Hauptzweck des Singleton Patterns?`,
    code: null,
    options: ["Sicherstellen, dass eine Klasse nur eine Instanz hat, mit globalem Zugriffspunkt", "Komplexe Objekte Schritt für Schritt bauen", "Inkompatible Schnittstellen verbinden", "Mehrere Objekte über Änderungen benachrichtigen"],
    correct: [0],
    explanation: `Singleton garantiert genau eine Instanz und bietet einen globalen Zugriffspunkt darauf.` },
  { id: "q-204-12", topicId: "204", type: "mc",
    prompt: `Was ist der Hauptzweck des Observer Patterns?`,
    code: null,
    options: ["Mehrere Objekte über Ereignisse/Zustandsänderungen eines beobachteten Objekts benachrichtigen", "Genau eine Instanz garantieren", "Objekterzeugung kapseln", "Verhalten je nach internem Zustand ändern"],
    correct: [0],
    explanation: `Observer definiert einen Abo-Mechanismus, mit dem ein Publisher seine Subscriber über Zustandsänderungen benachrichtigt.` },
  { id: "q-204-13", topicId: "204", type: "mc",
    prompt: `Was ist der Hauptzweck des Factory Patterns?`,
    code: null,
    options: ["Die Objekterzeugung kapseln und die konkrete Klasse hinter einem Interface auswählen", "Eine Instanz global verfügbar machen", "Verhalten bei Zustandswechsel ändern", "Eine Liste von Subscribern verwalten"],
    correct: [0],
    explanation: `Factory kapselt das Erzeugen von Objekten und liefert die konkrete Klasse über ein gemeinsames Interface, sodass der Client von der konkreten Klasse entkoppelt bleibt.` },
  { id: "q-204-14", topicId: "204", type: "mc",
    prompt: `Ein Entwickler baut für eine kleine App mit zwei festen Werten eine generische Plugin-Architektur mit Factories, Builders und Strategy-Pattern "für die Zukunft". Wie nennt man das?`,
    code: null,
    options: ["Over-Engineering (Speculative Generality)", "Refactoring", "Dependency Injection", "Separation of Concerns"],
    correct: [0],
    explanation: `Unnötige Komplexität "auf Vorrat" für nie eintretende Zukunftsfälle ist Over-Engineering (Code Smell Speculative Generality) und verletzt KISS.` },
  { id: "q-204-15", topicId: "204", type: "mc",
    prompt: `Welches SOLID-Prinzip wird hier umgesetzt?`,
    code: `interface EmailService { void sendEmail(String m); }
class NotificationManager {
  private final EmailService service;
  NotificationManager(EmailService service) { this.service = service; }
}`,
    options: ["Dependency Inversion Principle", "Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle"],
    correct: [0],
    explanation: `NotificationManager hängt von der Abstraktion EmailService ab statt von einer konkreten Klasse -> Dependency Inversion Principle (umgesetzt per Constructor Injection).` },
  { id: "q-204-16", topicId: "204", type: "multi",
    prompt: `Welche Aussagen über Dependency Injection sind korrekt? (Mehrfachauswahl)`,
    code: null,
    options: ["Sie trennt die Nutzung eines Objekts von dessen Erzeugung", "Sie verbessert die Testbarkeit durch Mocking", "Sie unterstützt das Dependency Inversion Principle", "Sie erfordert immer, dass Klassen ihre Abhängigkeiten mit new erzeugen"],
    correct: [0, 1, 2],
    explanation: `DI trennt Nutzung von Erzeugung, ermöglicht Mocking und unterstützt DIP. Gerade das Erzeugen mit new in der Klasse vermeidet DI - die letzte Aussage ist falsch.` },
  { id: "q-204-17", topicId: "204", type: "mc",
    prompt: `Im State Pattern: wer hält die Referenz auf das aktuelle State-Objekt und delegiert die Arbeit an es?`,
    code: null,
    options: ["Der Context", "Das State-Interface", "Die Factory", "Der Publisher"],
    correct: [0],
    explanation: `Der Context speichert eine Referenz auf das aktuelle State-Objekt und delegiert alle zustandsbezogene Arbeit an dieses; ein Übergang wechselt das State-Objekt.` },
  { id: "q-204-18", topicId: "204", type: "mc",
    prompt: `Welches Prinzip wird durch Copy-Paste von identischem Code an mehreren Stellen am direktesten verletzt?`,
    code: null,
    options: ["DRY (Don't Repeat Yourself)", "KISS (Keep It Simple, Stupid)", "Liskov Substitution Principle", "Open/Closed Principle"],
    correct: [0],
    explanation: `Duplizierter Code verletzt DRY - Logik soll nur an einer Stelle stehen, damit Änderungen nur einmal nötig sind (vgl. Code Smell Duplicate Code).` },
  { id: "q-204-19", topicId: "204", type: "mc",
    prompt: `Warum gilt Constructor Injection meist als bevorzugte DI-Art gegenüber Field Injection?`,
    code: null,
    options: ["Das Objekt ist nach der Erzeugung sofort vollständig/gültig und Felder können final sein", "Sie benötigt zwingend ein DI-Framework", "Sie erlaubt es, Abhängigkeiten zu verstecken", "Sie ist die einzige Art, die optionale Abhängigkeiten erlaubt"],
    correct: [0],
    explanation: `Bei Constructor Injection ist das Objekt direkt nach Konstruktion gültig, die Abhängigkeiten sind explizit sichtbar und können final (unveränderlich) sein. Field Injection versteckt Abhängigkeiten und ist schlechter testbar.` }
);
