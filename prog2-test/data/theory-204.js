window.DATA = window.DATA || {};
window.DATA.theory = window.DATA.theory || [];
window.DATA.theory = window.DATA.theory.filter(u => u.topicId !== '204'); // alte knappe Einheit ersetzen
var sections204 = [];
window.DATA.theory.push({ topicId: '204', title: 'Design Patterns, SOLID & DI', sections: sections204 });

sections204.push(
  {
    heading: `1. Was sind Design Patterns?`,
    body: `<p>Beim Programmieren begegnen dir immer wieder dieselben Arten von Problemen: "Wie stelle ich sicher, dass es von einer Klasse nur ein einziges Objekt gibt?" oder "Wie kann ein Objekt mehrere andere benachrichtigen, wenn sich etwas ändert?" Über die Jahre haben erfahrene Entwickler für solche wiederkehrenden Probleme bewährte Lösungen gefunden. Diese erprobten Lösungsschablonen nennt man <b>Design Patterns</b> (Entwurfsmuster).</p>
<p>Ein Design Pattern ist <b>kein fertiger Code</b>, den man kopiert, sondern eine <b>allgemeine Vorlage</b> – ein bewährter Bauplan, den man an die eigene Situation anpasst. <b>Analogie:</b> Ein Kochrezept ist ein Muster. Es sagt dir die Idee und die Schritte ("Soße andicken durch Einkochen"), aber du passt es an deine Zutaten an. Ähnlich beschreibt ein Pattern das <i>Problem</i>, die <i>Lösungsidee</i> und die <i>Konsequenzen</i>.</p>
<p>Die berühmtesten Muster stammen aus dem Buch der sogenannten <b>Gang of Four</b> (GoF) – vier Autoren, die 1994 23 klassische Muster gesammelt und beschrieben haben. Wenn man von "den Design Patterns" spricht, meint man meist diese.</p>
<p><b>Vorteile von Design Patterns:</b></p>
<ul>
<li><b>Bewährte Lösungen:</b> Man erfindet das Rad nicht neu, sondern nutzt Lösungen, die sich in der Praxis bewährt haben.</li>
<li><b>Gemeinsame Sprache:</b> Sagt ein Entwickler "lass uns hier ein Observer-Pattern nehmen", verstehen alle sofort die ganze Struktur. Muster sind ein Vokabular für Teams.</li>
<li><b>Bessere Struktur:</b> Sie führen meist zu flexiblerem, leichter erweiterbarem und wartbarem Code.</li>
<li><b>Schnellere Kommunikation und Einarbeitung.</b></li>
</ul>
<p><b>Merke:</b> Ein Pattern ist eine wiederverwendbare, benannte Lösungsidee für ein wiederkehrendes Entwurfsproblem – kein Code zum Kopieren, sondern ein Bauplan.</p>`,
    code: null
  },
  {
    heading: `2. Die drei GoF-Kategorien`,
    body: `<p>Die 23 GoF-Muster werden in drei Kategorien eingeteilt, je nachdem, womit sie sich beschäftigen:</p>
<ul>
<li><b>Creational Patterns (Erzeugungsmuster):</b> Sie beschäftigen sich mit dem <b>Erstellen von Objekten</b>. Statt überall einfach <code>new</code> aufzurufen, kapseln sie die Erzeugung und machen sie flexibler. Beispiele: <b>Singleton</b>, <b>Builder</b>, <b>Factory Method</b>, Abstract Factory, Prototype.</li>
<li><b>Structural Patterns (Strukturmuster):</b> Sie beschäftigen sich damit, wie man <b>Klassen und Objekte zu größeren Strukturen zusammensetzt</b>, ohne dass alles starr verklebt ist. Beispiele: <b>Adapter</b> (macht inkompatible Schnittstellen kompatibel), <b>Decorator</b> (fügt Verhalten zur Laufzeit hinzu), Facade, Proxy, Composite.</li>
<li><b>Behavioural Patterns (Verhaltensmuster):</b> Sie beschäftigen sich mit der <b>Kommunikation und Verantwortungsverteilung zwischen Objekten</b> – wie Objekte zusammenarbeiten und Aufgaben verteilen. Beispiele: <b>State</b>, <b>Observer</b>, <b>Strategy</b>, Command, Iterator, Template Method.</li>
</ul>
<p><b>Merktrick:</b> Creational = "wie entsteht ein Objekt?", Structural = "wie sind Objekte zusammengebaut?", Behavioural = "wie reden Objekte miteinander und wer macht was?".</p>`,
    code: null
  },
  {
    heading: `3. Coupling, Kohäsion und die Rolle von Interfaces`,
    body: `<p>Um zu verstehen, <i>warum</i> Patterns helfen, brauchst du zwei zentrale Begriffe der Softwarequalität: <b>Coupling</b> und <b>Cohesion</b>.</p>
<p><b>Coupling (Kopplung)</b> beschreibt, wie stark zwei Klassen voneinander abhängen. <b>Hohe Kopplung</b> ist schlecht: Ändert man eine Klasse, muss man auch die andere ändern – alles hängt zusammen wie ein Kartenhaus. <b>Lose Kopplung</b> (low coupling) ist das Ziel: Klassen wissen möglichst wenig voneinander und lassen sich unabhängig ändern und testen.</p>
<p><b>Cohesion (Kohäsion)</b> beschreibt, wie gut die Aufgaben <i>innerhalb</i> einer Klasse zusammenpassen. <b>Hohe Kohäsion</b> ist gut: Eine Klasse macht genau eine zusammenhängende Sache. Das Ziel lautet daher: <i>lose Kopplung, hohe Kohäsion</i>.</p>
<p><b>Wie helfen Interfaces?</b> Ein <b>Interface</b> ist ein Vertrag, der nur sagt, <i>welche</i> Methoden es gibt, nicht <i>wie</i> sie umgesetzt sind. Wenn eine Klasse von einem <i>Interface</i> abhängt statt von einer konkreten Klasse, kann man die konkrete Umsetzung jederzeit austauschen, ohne die abhängige Klasse zu ändern. Das entkoppelt. <b>Analogie:</b> Eine Steckdose ist ein Interface. Dein Laptop-Ladegerät, eine Lampe, ein Toaster – alle passen, weil sie sich an denselben Vertrag (Steckerform) halten. Die Steckdose muss nichts über das konkrete Gerät wissen.</p>
<p>Fast alle Design Patterns nutzen daher Kern-Konzepte der objektorientierten Programmierung: <b>Abstraktion</b>, <b>Vererbung</b>, <b>Polymorphie</b> und vor allem <b>Programmieren gegen Interfaces statt gegen konkrete Klassen</b>.</p>
<p><b>Over-Engineering – die Warnung.</b> Patterns sind mächtig, aber kein Selbstzweck. <b>Over-Engineering</b> bedeutet, ein Muster einzusetzen, wo das Problem es gar nicht verlangt. Folge: unnötig komplexer Code, viele zusätzliche Klassen, schwerer zu lesen und zu warten – obwohl eine einfache Lösung gereicht hätte. <b>Merke:</b> Setze ein Pattern nur ein, wenn es ein echtes Problem löst (KISS – "Keep It Simple", und YAGNI – "You Aren't Gonna Need It").</p>`,
    code: null
  },
  {
    heading: `4. Singleton (Creational)`,
    body: `<p><b>Problem:</b> Von manchen Dingen soll es im ganzen Programm <b>genau ein einziges</b> Objekt geben – etwa eine zentrale Konfiguration, ein Logger oder ein Verbindungspool. Hätte man mehrere, gäbe es Widersprüche oder Verschwendung.</p>
<p><b>Lösungsidee:</b> Das <b>Singleton</b>-Muster stellt sicher, dass von einer Klasse nur eine Instanz existiert, und bietet einen globalen Zugriffspunkt darauf. Der Trick: Man macht den Konstruktor <code>private</code> (niemand außerhalb kann <code>new</code> aufrufen), speichert die eine Instanz in einem statischen Feld und gibt sie über eine statische Methode <code>getInstance()</code> heraus.</p>
<p><b>Vorsicht:</b> Singletons sind bequem, gelten aber bei Übernutzung als problematisch (sie wirken wie globale Variablen, erschweren Tests und erhöhen Kopplung). Sparsam einsetzen.</p>`,
    code: `public class Config {
    // 1) die eine Instanz, statisch gespeichert
    private static Config instance;

    // 2) privater Konstruktor: niemand sonst kann new aufrufen
    private Config() { }

    // 3) globaler Zugriffspunkt
    public static Config getInstance() {
        if (instance == null) {
            instance = new Config();   // nur beim ersten Mal erzeugen
        }
        return instance;
    }
}

// Verwendung: immer dasselbe Objekt
Config c = Config.getInstance();`
  },
  {
    heading: `5. Builder (Creational)`,
    body: `<p><b>Problem:</b> Ein Objekt hat viele Felder, manche optional. Ein Konstruktor mit 8 Parametern (<code>new Pizza(true, false, true, ...)</code>) ist unleserlich und fehleranfällig – wer weiß schon, was das vierte <code>true</code> bedeutet?</p>
<p><b>Lösungsidee:</b> Das <b>Builder</b>-Muster baut ein komplexes Objekt Schritt für Schritt über gut benannte Methoden auf, die man verketten kann (fluent interface). Am Ende erzeugt <code>build()</code> das fertige Objekt. Das macht die Erzeugung lesbar und erlaubt, nur die gewünschten Teile zu setzen.</p>`,
    code: `Pizza p = new Pizza.Builder()
        .groesse("gross")
        .mitKaese(true)
        .belag("Salami")
        .belag("Pilze")
        .build();
// Lesbar: man sieht sofort, was gesetzt wird.

// Skizze des Builders:
class Pizza {
    private Pizza() { }
    static class Builder {
        // ... Felder + Setter, die "this" zurueckgeben ...
        Builder groesse(String g) { /* set */ return this; }
        Pizza build() { return new Pizza(/* uebernimm Felder */); }
    }
}`
  },
  {
    heading: `6. Factory (Creational)`,
    body: `<p><b>Problem:</b> Welche konkrete Klasse erzeugt werden soll, hängt von einer Bedingung ab (z. B. einem Typ-String). Wenn man überall im Code <code>new KreisShape()</code>, <code>new RechteckShape()</code> usw. direkt aufruft, ist die Erzeugungslogik verstreut und der Code stark an konkrete Klassen gekoppelt.</p>
<p><b>Lösungsidee:</b> Eine <b>Factory</b> (Fabrik) kapselt die Objekterzeugung an einer Stelle. Der aufrufende Code fragt die Factory nach einem Objekt eines bestimmten Typs und bekommt es zurück – als <i>Interface-Typ</i>, ohne die konkrete Klasse zu kennen. Das entkoppelt: neue Typen fügt man nur in der Factory hinzu.</p>`,
    code: `interface Shape { void draw(); }

class ShapeFactory {
    public Shape create(String typ) {
        switch (typ) {
            case "kreis":    return new Circle();
            case "rechteck": return new Rectangle();
            default: throw new IllegalArgumentException("unbekannt: " + typ);
        }
    }
}

// Aufrufer kennt nur das Interface Shape, nicht die konkreten Klassen:
Shape s = new ShapeFactory().create("kreis");
s.draw();`
  },
  {
    heading: `7. State (Behavioural)`,
    body: `<p><b>Problem:</b> Ein Objekt soll sich je nach innerem <b>Zustand</b> unterschiedlich verhalten. Naiv löst man das mit vielen <code>if</code>/<code>switch</code>-Abfragen auf eine Zustandsvariable (<code>if (state.equals("RED")) ... else if (...)</code>). Das wird schnell unübersichtlich und schwer erweiterbar.</p>
<p><b>Lösungsidee:</b> Das <b>State</b>-Muster macht aus jedem Zustand eine <b>eigene Klasse</b>, die ein gemeinsames State-Interface umsetzt. Das Hauptobjekt (der "Context") delegiert sein Verhalten an das aktuelle State-Objekt. Ein Zustandswechsel bedeutet einfach, das State-Objekt auszutauschen. Neue Zustände fügt man als neue Klassen hinzu, ohne bestehende if-Ketten anzufassen.</p>
<p><b>Beispiel Ampel:</b> ROT → GELB → GRÜN → ... Jeder Zustand weiß selbst, welcher als nächstes kommt.</p>`,
    code: `interface TrafficLightState {
    void next(TrafficLight light);
    String getName();
}
class RedState implements TrafficLightState {
    public void next(TrafficLight light) { light.setState(new YellowState()); }
    public String getName() { return "RED"; }
}
class YellowState implements TrafficLightState {
    public void next(TrafficLight light) { light.setState(new GreenState()); }
    public String getName() { return "YELLOW"; }
}
// Context delegiert an den aktuellen Zustand:
class TrafficLight {
    private TrafficLightState state = new RedState();
    public void next() { state.next(this); }
    public void setState(TrafficLightState s) { this.state = s; }
    public String getState() { return state.getName(); }
}`
  },
  {
    heading: `8. Observer (Behavioural)`,
    body: `<p><b>Problem:</b> Wenn sich ein Objekt ändert, sollen mehrere andere Objekte automatisch benachrichtigt werden – ohne dass das geänderte Objekt jeden Empfänger fest kennt. Beispiel: Ein YouTube-Kanal lädt ein Video hoch, alle Abonnenten sollen eine Benachrichtigung bekommen.</p>
<p><b>Lösungsidee:</b> Beim <b>Observer</b>-Muster gibt es ein <b>Subject</b> (Beobachtetes, z. B. der Kanal), das eine Liste von <b>Observern</b> (Beobachtern, z. B. Abonnenten) führt. Observer können sich an- und abmelden. Ändert sich das Subject, ruft es bei allen registrierten Observern eine <code>update()</code>-Methode auf. Subject und Observer kommunizieren nur über ein Interface – lose gekoppelt.</p>`,
    code: `interface Observer { void update(String video); }

class Channel {                       // Subject
    private List<Observer> abonnenten = new ArrayList<>();
    public void subscribe(Observer o)   { abonnenten.add(o); }
    public void unsubscribe(Observer o) { abonnenten.remove(o); }
    public void upload(String video) {
        for (Observer o : abonnenten) o.update(video);  // alle benachrichtigen
    }
}
class User implements Observer {
    private String name;
    public User(String name) { this.name = name; }
    public void update(String video) {
        System.out.println(name + " sieht neues Video: " + video);
    }
}`
  },
  {
    heading: `9. Die SOLID-Prinzipien`,
    body: `<p><b>SOLID</b> ist ein Merkwort für fünf Prinzipien für gutes objektorientiertes Design. Ihr gemeinsames Ziel: Code, der <b>wartbar, verständlich, flexibel und erweiterbar</b> ist – mit loser Kopplung und hoher Kohäsion. Die fünf Buchstaben:</p>
<ul>
<li><b>S – Single Responsibility Principle (SRP):</b> Eine Klasse soll nur <b>eine einzige Verantwortung</b> haben, also nur einen Grund, sich zu ändern. Beispiel: Eine Klasse, die Daten <i>berechnet</i> UND sie <i>als Datei speichert</i> UND sie <i>per E-Mail verschickt</i>, macht zu viel. Besser: drei getrennte Klassen.</li>
<li><b>O – Open/Closed Principle (OCP):</b> Klassen sollen <b>offen für Erweiterung, aber geschlossen für Änderung</b> sein. Neues Verhalten fügt man hinzu, indem man neuen Code schreibt (z. B. eine neue Unterklasse), nicht indem man bestehenden, getesteten Code umbaut. Beispiel: neue Form zeichnen → neue Shape-Klasse, nicht die alte if-Kette erweitern.</li>
<li><b>L – Liskov Substitution Principle (LSP):</b> Ein Objekt einer Unterklasse muss überall dort einsetzbar sein, wo die Oberklasse erwartet wird, <b>ohne dass etwas kaputtgeht</b>. Klassisches Gegenbeispiel: Ein <code>Square</code> erbt von <code>Rectangle</code>, aber das Setzen von Breite/Höhe verhält sich anders – das verletzt LSP.</li>
<li><b>I – Interface Segregation Principle (ISP):</b> <b>Viele kleine, spezifische Interfaces</b> sind besser als ein großes, das alles kann. Keine Klasse sollte gezwungen sein, Methoden zu implementieren, die sie nicht braucht. Beispiel: Ein <code>Roboter</code> sollte nicht <code>essen()</code> aus einem riesigen <code>Worker</code>-Interface implementieren müssen.</li>
<li><b>D – Dependency Inversion Principle (DIP):</b> Module sollen von <b>Abstraktionen (Interfaces) abhängen, nicht von konkreten Klassen</b>. High-Level-Code soll nicht direkt von Low-Level-Details abhängen, sondern beide von einem Interface. Das führt direkt zum nächsten Thema: Dependency Injection.</li>
</ul>
<p><b>Merke:</b> SOLID = Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion.</p>`,
    code: `// SRP-Verstoss (zu viele Aufgaben):
class Report {
    String berechne() { ... }
    void speichereAlsPdf() { ... }   // andere Verantwortung!
    void sendeEmail() { ... }        // noch eine!
}

// Besser getrennt:
class Report        { String berechne() { ... } }
class PdfWriter     { void speichere(Report r) { ... } }
class EmailSender   { void sende(Report r) { ... } }`
  },
  {
    heading: `10. Dependency Injection (DI)`,
    body: `<p>Eine <b>Dependency</b> (Abhängigkeit) ist ein Objekt, das eine Klasse braucht, um zu arbeiten. Beispiel: Ein <code>OrderService</code> braucht eine <code>Database</code>, um Bestellungen zu speichern – die Database ist eine Dependency des OrderService.</p>
<p><b>Das Problem:</b> Wenn der OrderService seine Database <i>selbst</i> erzeugt (<code>this.db = new MySqlDatabase();</code>), ist er fest daran gekettet. Man kann ihn nicht mehr mit einer anderen Datenbank nutzen und im Test nicht durch eine Fake-Datenbank ersetzen. Hohe Kopplung.</p>
<p><b>Die Idee von Dependency Injection:</b> Statt seine Abhängigkeiten selbst zu erzeugen, bekommt das Objekt sie <b>von außen hineingereicht</b> ("injiziert"). Es sagt nur, <i>was</i> es braucht (am besten als Interface), und jemand anderes liefert das konkrete Objekt. Das ist die praktische Umsetzung des Dependency Inversion Principle.</p>
<p><b>Ziele von DI:</b> lose Kopplung, leichte Austauschbarkeit der Implementierung, sehr gute Testbarkeit (man injiziert im Test ein Mock-/Fake-Objekt), klare Verantwortlichkeiten.</p>
<p><b>Die drei Arten der Injection:</b></p>
<ul>
<li><b>Constructor Injection:</b> Die Abhängigkeit wird über den Konstruktor übergeben. <i>Vorteil:</i> Das Objekt ist nach der Erzeugung sofort vollständig und kann <code>final</code> (unveränderlich) sein – pflichtweise Abhängigkeiten. Gilt als beste/empfohlene Variante. <i>Nachteil:</i> bei sehr vielen Abhängigkeiten wird der Konstruktor lang.</li>
<li><b>Setter Injection:</b> Die Abhängigkeit wird über eine Setter-Methode gesetzt. <i>Vorteil:</i> gut für optionale Abhängigkeiten, kann nachträglich geändert werden. <i>Nachteil:</i> Objekt kann unvollständig existieren (Setter vergessen → null).</li>
<li><b>Field Injection:</b> Die Abhängigkeit wird direkt in ein Feld gesetzt (oft per Framework/Annotation). <i>Vorteil:</i> wenig Code. <i>Nachteil:</i> schlecht testbar ohne Framework, versteckt Abhängigkeiten, Feld kann nicht final sein – gilt als am wenigsten empfehlenswert.</li>
</ul>`,
    code: `// OHNE DI: fest verdrahtet, schlecht testbar
class OrderService {
    private Database db = new MySqlDatabase();  // selbst erzeugt -> gekoppelt
}

// MIT Constructor Injection: Abhaengigkeit kommt von aussen, als Interface
class OrderService {
    private final Database db;
    public OrderService(Database db) {   // wird injiziert
        this.db = db;
    }
}

// Produktion:
OrderService s = new OrderService(new MySqlDatabase());
// Test: einfach ein Fake injizieren
OrderService t = new OrderService(new FakeDatabase());`
  }
);
