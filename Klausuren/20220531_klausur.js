// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
//let prozentpunkteSPD = 47
//let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:

let prozentpunkteSPD = 47
let prozentpunkteCDU = 53

if (prozentpunkteCDU< prozentpunkteSPD){
    console.log("CDU hat gewonnen")
}else{
    console.log("SPD hat gewonnen")
}
    




console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let Ausgaben = 900000
let Einnahmen = 1000000

if (Ausgaben-Einnahmen){
    console.log("Wir haben Gewinn gemacht")
}else{
    console.log("Wir haben Verlust gemacht")
}





console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handy{
    constructor(){
        this.Preis
        this.Akkulaufzeit
        this.Speicher
        this.Bildwiederholrate
    }
}

// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:

let apple= new Handy()

let samsung= new Handy()


// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

apple.Preis="800€"
apple.Akkulaufzeit="24h"
apple.Speicher="128gb"
apple.Bildwiederholrate="120hz"

samsung.Preis="750€"
samsung.Akkulaufzeit="20h"
samsung.Speicher="128gb"
samsung.Bildwiederholrate="120hz"


// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:

let appleAkkulaufzeit= 24
let samsungAkkulaufzeit= 20

if(appleAkkulaufzeit>samsungAkkulaufzeit){
    console.log("Samsung ist Besser")
}else{
    console.log("Apple ist Besser")
}




console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.
console.log("Aufgabe 5")
// In Ihrer Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks