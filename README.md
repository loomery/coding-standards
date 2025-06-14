# Word Chain Kata

Eine einfache Programmierkata in TypeScript, die die Validierung von Wortketten implementiert.

## Setup

```bash
# Installiere Abhängigkeiten
npm install

# Starte Tests
npm test

# Starte Tests im Watch-Modus
npm run dev
```

## Aufgaben

1. Implementiere die `isValidChain` Funktion, die prüft, ob eine Kette von Wörtern gültig ist
2. Implementiere die `findNextWord` Funktion, die mögliche nächste Wörter in der Kette findet

Eine Kette ist gültig, wenn:
- Jedes Wort genau einen Buchstaben Unterschied zum vorherigen Wort hat
- Die Wörter die gleiche Länge haben
- Die Wörter nur aus Kleinbuchstaben bestehen

## Beispiele

```typescript
isValidChain(['cat', 'cot', 'dot', 'dog']) // true
isValidChain(['cat', 'cot', 'dog']) // false
isValidChain(['cat', 'cot', 'dots']) // false
```