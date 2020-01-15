// Zeichenkontext erstellen
const leinwand = document.getElementById('leinwand');
const context = leinwand.getContext('2d');

// Farben definieren
const fuellFarbe = 'red';
const linienFarbe = 'blue';

context.fillStyle = fuellFarbe;
context.strokeStyle = linienFarbe;

// Rechteck zeichnen
context.fillRect(0, 0, 50, 50);
context.strokeRect(0, 0, 50, 50);