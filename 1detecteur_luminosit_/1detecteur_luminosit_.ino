#include <LiquidCrystal.h>
LiquidCrystal lcd (7, 9, 10, 11, 12, 13);
// RS, E, D4, D5, D6, D7


// (change according to the density of light)

int sensorValue; // Variable pour stocker la valeur lue par le capteur(photoresistance)

int buzzerSoundPin = 2;

const int ledPinRed = 8;

const int ledPinYellow = 5;       // Pin pour la LED intégrée


void setup() {

  Serial.begin(9600);
  
  //pinMode(buzzerSoundPin, OUTPUT);
  pinMode(ledPinRed, OUTPUT);   // Définir la LED comme sortie ET la led S'ALLUMERA LORSQUE TU BRANCHE L'arduino c'est pour savoir si la led fonctionne
  //digitalWrite(ledPin, HIGH);// Allumer la LED pendant la calibration
  pinMode(ledPinYellow, OUTPUT);
}


void loop() {

  
  sensorValue = analogRead(A1);  // Lire la valeur du capteur

  if (sensorValue < 100) {  // IF THERE IS NO LIGHT(IF THE BRIGHTNESS OF THE LIGH IS UNDER 100)
    digitalWrite(ledPinYellow, HIGH); // THE LED TURN ON
    digitalWrite(ledPinRed, LOW);
    noTone(buzzerSoundPin); // NO BUZZER SOUND

    lcd.begin(20, 2);
    lcd.print("OFF");
  } 

  if (sensorValue > 200)
  {   // IF THERE IS A LIGHT (ABOVE 200 OF BRIGHTNESS)
    digitalWrite(ledPinRed, HIGH);
    digitalWrite(ledPinYellow, LOW);
    
    tone(2, 300);  // Jouer une tonalité sur le pin 2 avec la fréquence calculée

    lcd.begin(20, 2);
    lcd.print("ON");
  }

  Serial.println(sensorValue);



  delay(5);  // Petite pause pour stabiliser le son
}


