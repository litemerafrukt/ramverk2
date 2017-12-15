# Me-sida för ramverk2

[![Build Status](https://travis-ci.org/litemerafrukt/ramverk2.svg?branch=master)](https://travis-ci.org/litemerafrukt/ramverk2)
[![Maintainability](https://api.codeclimate.com/v1/badges/01d16a17f25957ec7f4e/maintainability)](https://codeclimate.com/github/litemerafrukt/ramverk2/maintainability)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/litemerafrukt/ramverk2/build-status/master)

[Demo](https://whispering-falls-30453.herokuapp.com/)

Detta är min me-sida för kursen [ramverk2](https://dbwebb.se/kurser/ramverk2) på [dbwebb](https://dbwebb.se)

### Tekniker

I me-sidan testar jag många tekniker och javascript-bibliotek vilket är skälet till att installation och byggande tar en ganska lång stund.

De viktigaste tekniker som jag valt att är:

* Express
* React
* React-Router
* Jest
* Supertest
* MongoDB
* Socket.io
* Ramda

Men det finns fler dependencies, se package.json för en komplett lista.

### Användning

### Docker (rekomenderas)

Meningen är att du bara ska behöva klona repot och köra `npm run docker-start`
för att få igång sidan på port 3000 eller en port angiven i DBWEBB_PORT.

1. Klona: repot
2. cd in

Bygg:

3. `npm run docker-build`

Dra igång servern:

4. `npm run docker-start`
5. Servern lyssnar på port `3000`. (För att ändra port behöver du ändra i `docker-compose.yml` under `server` -> `ports`.)
6. Öppna webläsaren mot `localhost:3000`.

Kör tester:

4. `npm rum docker-build-test`
5. `npm run docker-test`

### Installera och kör utan docker

1. Klona repot
2. cd in
3. `npm install`
4. Passa på att hämta kaffe
5. `npm run install-client`
6. Här kommer en potentiellt ännu längre kaffe paus
7. `npm run build-client`
8. Det tar tid...
9. `npm start`
10. Servern lyssnar på port angiven i `DBWEBB_PORT`, `PORT`, `LOCAL_DEV_PORT`
    eller `3000` i den ordningen.

### Kör tester utan docker

Efter `npm install` kör `npm test` för att köra tester och linters för server
och client. Vill du köra tester i node 8, 7 eller 6 kan du använda docker med
kommandon `npm test1`, `npm test2` respektive `npm test3`.

Licens MIT
