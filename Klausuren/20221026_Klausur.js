console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz: ist die sicherung von persöhlichen Daten wie z.B. Geburtstag, Alter, Wohnort.
// Das Ziel ist es, diese Daten vor missbrauch zu schützen.
//
// Datensicherheit: umfasst die Sicherung von analogen Daten unbefugter. Das Ziel ist es vor Manipulation
// und Missbrauch zu schützen. 
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Vorteile symmetrisch: Es ist nur ein Schlüssel definiert, Schnell zu berechnen
// 
//
// Vorteile asymmetrisch: Hohe Sicherheit, Problem des Schlüsselaustausches wird behoben 
//
// Eigenschaften public Key: Der public Key ist öffentlich und von jedem einsehbar, dass heißt wenn eine Email
// abgefangen werden würde, bringt der Key nichts mehr.
//
//
// Eigenschaften private Key: Der private Key wird individuell für den Nutzer über verschiedene Wege festgelegt.
// Er kann über ein Verschlüsselungsprogramm nur für eine Person freigegeben werden, die nur diesen Key hat.
//
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Man könnte eine symmetrische Nachricht asymetrisch verschlüsseln. 
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Die Deklaration ist die Festlegung der Eigenschaften der Objekte.
// mit der Instanziierung wird einem Objekt eine Eigenschaft hinzugefügt, die vorher festgelegt wurde. Bei der Initialisierung wird 
// gesagt welche Eigenschaft zu welchem Objekt gehört und kann somit in der console ausgeschrieben werden. 
//
//
//
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!


class Zeugnis{
    constructor(){
        this.Notendurchschnitt
        this.Fehltage
        this.Vorname
        this.Nachname 
        this.BesondereLeistung
        this.Leistungskurs
        this.Leistungskurs2
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//
//
//
//
let zeugnis = new Zeugnis()

zeugnis.Notendurchschnitt = "Notendurchschnitt: 1,5"
zeugnis.Fehltage = "Pit Kiff´s Fehltage: 40"
zeugnis.Vorname = "Vorname des Schülers:Pit"
zeugnis.Nachnahme = "Nachnahme des Schülers: Kiff"
zeugnis.BesondereLeistung = "Besondere Leistung: Pit Kiff hat mit Erfolg am Technikkurs Teingenommen"
zeugnis.Leistungskurs= "Leistungskurs: Englisch"
zeugnis.Leistungskurs2 = "Zweiter Leistungskurs: BWL"


// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log(zeugnis.Notendurchschnitt)
console.log(zeugnis.Fehltage)
console.log(zeugnis.Vorname)
console.log(zeugnis.Nachnahme)
console.log(zeugnis.BesondereLeistung)
console.log(zeugnis.Leistungskurs)
console.log(zeugnis.Leistungskurs2)




// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

console.log

let Pit = 30 
let Git = 33
let Fächer = 4 

if(Pit/Fächer){
    console.log(Pit/Fächer)}

if (Git/Fächer){
    console.log(Git/Fächer)
}

let DurchschnittspunktzahlPit = 7.5 
let DurchschnittspunktzahlGit = 8.25


if(DurchschnittspunktzahlPit>DurchschnittspunktzahlGit){
    console.log("Pit hat das bessere Zeugnis")
}else{
    console.log("Git hat das bessere Zeugnis")
}








