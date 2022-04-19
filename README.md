# Einführung in die Programmierung mit p5.js

## Was bedeutet es zu programmieren?

- Wir schreiben Anweisungen in Form von Programmcode, den der Computer verstehen kann und ihn dementsprechend ausführt

## Was benötige ich um zu programmieren?

- Wir werden Code in der Programmiersprache Javascript schreiben
- Wir benötigen daher nur einen Texteditor wie z.B. Notepad oder Visual Studio Code (kein Word!)
- Der Code wird dann im Browser ausgeführt (z.B. Chrome, Firefox)
- Wir verwenden die Bibliothek p5.js um graphische Darstellungen zu programmieren. Hier findet ihr die Dokumentation, die euch beim Programmieren viel helfen wird https://p5js.org/reference

---

# Die Basics

## Das Setup

Wir zeichnen mit Hilfe von Programmcode. Wenn das Programm startet wird die Funktion `setup` einmal ausgeführt. Im Anschluss durchläuft es ständig eine Schleife. Was in dieser Schleife passiert definieren wir in der draw-Funktion.

- setup()
- draw()

## Variablen

#### Was ist eine Variable?
Ihr kennt Variablen aus dem Mathe-Unterricht. Variablen sind wie Platzhalter. Anders als im Matheunterricht stehen Variablen im Programmcode nicht nur für Zahlen, sondern können auch für Buchstaben und Wörtern (auch Strings genannt), Formeln, Funktionen und viel mehr stehen.  

### Deklaration und Zuweisung
Wir deklarieren
```let x```
Dann weiß der Computer, dass Speicher bereitgestellt werden muss.

Nun machen wir eine Zuweisung
```x = 1```
Nun schreibt der Computer eine 1 in den zuvor bereitgestellten Speicher.

Das ganze kann auch in einer Zeile geschrieben werden.
``` const y = 2```
`const` zeigt an, dass dieser Wert nicht verändert werden darf nach der initialen Zuweisung.

## Arrays/Listen

Als Array oder Liste bezeichnen wir eine Liste von Daten (z.B. Zahlen, Strings). 
In Javascript erstelle ich einen Array z.b. wie folgt:

`const myArray = [1,2,3,4]`

Um auf einen Wert in dem Array zuzugreifen muss ich wissen, an welcher Stelle er in dem Array steht. Man nennt dies auch den Index. Beachte, in JS fangen wir mit der 0 an zu zählen.

    console.log(myArray[0]) // 1
    console.log(myArray[1]) // 2 

## Funktionen

#### Was ist eine Funktion?
Funktionen kennt ihr sicher wieder aus dem Mathe-Unterricht. Und beim Programmieren ist diese ähnlich. Nur wieder einmal haben wir es nicht nur mit Zahlen zu tun, sondern können alles mögliche damit anstellen.

Eine Funktion könnt ihr euch als eine "Blackbox" vorstellen, bei dem ihr etwas eingebt, die Funktion wird mit dieser Eingabe ausgeführt und dann erhaltet ihr ein Ergebnis zurück.
Zum Beispiel:

    function addOne(a) {
      return a + 1;
    }

Ist eine Funtion, die 1 auf eine beliebige Zahl addiert. 


    const b = 1;
    let a = addOne(b);
    console.log(b); // 1
    console.log(a); // 2

    addOne(a);
    console.log(a); // 2

    a = addOne(a);
    console.log(a); // 3


## Schleifen
Mit Hilfe von Schleifen können wir dem Computer sagen, dass er bestimme Opeerationen mehrmals ausführen soll.

So möchten wir beispielweise einen Array erstellen, der alle Zahlen von 1 bis 500 hat.
Wir könnten einfach ganz stupide alle Zahlen angeben:

`let a = [1,2,3,4, ..., 500]`

Viel schlauer wäre es, das ganze mitHilfe einer Schleife zu programmieren:

```
let a = []
for (let i = 0; i < 500; i++) {
    a.push(i+1);
}
```
`i` nennt man eine Zählvariable. Wir intialisieren sie mit 0 und zählen bis 500 hoch. So oft wird dann der Teil der innerhalb der geschweiften Klammern steht ausgeführt.

Das ist natürlich nicht die einzige Anwendungen von Schleifen. Ihr werdet schnell merken, wie wichtig und mächtig sie sind. 

## If-Anweisungen

Oftmals wollen wir, dass bestimmte Dinge nur ausgeführt werden, wenn eine Bedingung erfüllt ist. 
Wollen wir beispielsweise, dass etwas mit einer 50% Wahrscheinlichkeit passiert würden wir dies so bestimmen

    let x = Math.random() // gibt eine Zahl zwischen 0 und 1 zurück
    if( x < 0.5 ) {
        // führe etws us
    } else {
        // x >= 0.5 d.h. etws nderes wird ausgeführt
    }

Logische operatoren:

    a && b       // "und"
    a || b       // "oder"
    !a           // "nicht"
