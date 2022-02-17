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

// zu a) Die Objekte der realen Welt sind die Produkte 

// zu b) 
class Produkt{
    constructor(){
        this.BruttoPreis
        this.Bezeichnung
        this.MwStSatz
        this.Barcode
    }
}

// zu c)
// Deklaration und Instanziierung 
let produkt1 = new Produkt()

// zu d) 
produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 09012234123457
produkt1.BruttoPreis = 1.19 // im Quellcode steht anstelle des Kommas ein Punkt 
produkt1.MwStSatz = 19 // Prozent 

console.log("Das Produkt " + produkt1.Bezeichnung + " hat den  Bruttopreis " + produkt1.Bruttopreis + "€.")

produkt1.Nettopreis = produkt1.BruttoPreis / (100 + produkt1.MwStSatz) * 100  

console.log("Nettopreis: " + produkt1.Nettopreis + " €.")

if(produkt1.BruttoPreis > 1 ){
    console.log("Achtung Preis von" + produkt1.Bezeichnung )
}else{
    console.log(" Preis von" + produkt1.Bezeichnung + "ist o.k.")
}



// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten


class Stand{
    constructor(){
        this.Name
        this.Lage
        this.Oefnungszeiten
        this.Personenzahl 
    }

}

let standCafeteria = new Stand 

standCafeteria.Name = " Cafeteria"
standCafeteria.lage = "Turnhalle"

standCafeteria.Oefnungszeiten = "10 uhr bis 18 Uhr"
standCafeteria.Personenzahl = 3 
standCafeteria.Ausgaben = 500
standCafeteria.Einnahmen = 1000

if(standCafeteria.Einnahmen > standCafeteria.Ausgaben){
    console.log("Der Stand " + standCafeteria.Name + "macht Gewinn. ")
}else{
    console.log("Der Stand " + standCafeteria.Name + " macht keinen Gewinn.")
}














