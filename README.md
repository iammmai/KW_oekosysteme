# Einführung in die Programmierung mit p5.js

## Was bedeutet es zu programmieren?

- Wir schreiben Anweisungen in Form von Programmcode, den der Computer verstehen kann und ihn dementsprechend ausführt

## Was benötige ich um zu programmieren?

- Wir werden Code in der Programmiersprache Javascript schreiben
- Wir benötigen daher nur einen Texteditor wie z.B. Notepad oder Visual Studio Code (kein Word!)
- Der Code wird dann im Browser ausgeführt (z.B. Chrome, Firefox)

---

# Die Basics

## Das Setup

Wir zeichnen mit Hilfe von Programmcode. Wenn das Programm startet wird die Funktion `setup` einmal ausgefuehrt. Im Anschluss durchlaeuft es staendig eine Schleife. Was in dieser Schleife passiert definieren wir in der draw-Funktion.

- setup()
- draw()

## Variablen

Was ist eine Variable
Untschied Deklaration und Zuweisung
const, let, var

## Arrays/Listen

Was ist das und wie greife ich darauf zu (Index)

    const myArray = [1,2,3,4]
    console.log(myArray[0]) // 1
    console.log(myArray[1]) // 2

## Funktionen

Was ist eine Funktion
Funktionsname, Parameter, Rueckgabewert
z.B.

    function addOne(a) {
      return a + 1;
    }

    const b = 1;
    let a = addOne(b);
    console.log(b); // 1
    console.log(a); // 2

    addOne(a);
    console.log(a); // 2

    a = addOne(a);
    console.log(a); // 3

## Schleifen

Aufbau einer for - Schleife

## If-Anweisungen

boolsche Logik

    if( bool ) {
        // something
    } else {
        // something else
    }

Logische operatoren:

    a && b
    a || b
    !a
