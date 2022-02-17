// Übungen zu Klasse und Objekt

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

class Spieler{
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    }
}

let spielerMueller = new Spieler()
spielerMueller.Name = " Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB"
spielerMueller.Alter = 18 

if(spielerMueller.Alter >= 18){
        spielerMueller.Volljaehrig = true 
        console.log("Der Spieler" + spielerMueller.Name + " ist volljährig.")

}

console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler" + spielerMueller.Name + " hat die Nummer " + spielerMueller.Nummer + ".")





// Übung 2
// In einem Schulverwaltungsprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das "Zeugnis" ist das Objekt der realen Welt. 

// zu b) 
class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum
        this.Gesamtnote
        this.Fehlstunden
        this.faecher
    }
}

// zu c) 
let zuegnisPit = new Zeugnis()
let zeugnusMax = new Zeugnis()

// zu d) 
zuegnisPit.SchuelerName = "Pit Kiff"
zuegnisPit.Fehlstunden = 100
zuegnisPit.Gesamtnote= 1 

zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10 
zeugnusMax.Gesamtnote = 2 

if(zeugnisMax.Fehlstunden > zuegnisPit.Fehlstunden){
    console.log("Max Muster hat mehr Fehlstunden")
}else{
    console.log("Pit hat mehr Fehlstunden")
}


// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten






// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
















