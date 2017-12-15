## Kmom06

### Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.

Jag tror att det idag är väldigt viktigt att ett programmeringsspråk har en välfungerande struktur för moduler. Det är någonting som man snabbt vänjer sig vid och mer eller mindre förutsätter ska finnas på plats. Alternativen att kopiera filer eller kodstycken är omständligt i jämförelse med att dra ner en modul och bara inkludera denna i sitt projekt.

Även inom en organisation underlättar det om det redan finns en infrastruktur för paket. Sådant som används i projekt efter projekt kan läggas i moduler och enkelt återanvändas. Finns det redan en väl fungerande infrastruktur slipper man bygga en egen.

### Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?

Ett viktigt skäl är väl att javascript och javascripts ekosystem växer fort. Javascript kan köras snart sagt överallt och paket för detta kan publiceras på npm.

Jag har bara använt två pakethanterare för att publicera paket, npm och packagist, och även om båda är enkla att använda så tycker jag att npm slår packagist i enkelhet. Även att utveckla modulen och testa denna i ett annat projekt var enklare med npm än med composer. Det var bara att skapa en länk i modulkatalogen och länka dit från projektet.

Att det är väldigt enkelt att utveckla och publicera sin modul bidrar förmodligen också till att där finns många paket.

### Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera modulen i din applikation.

Projektet som jag började på under kmom03 känns inte helt rätt mot kraven för kmom10 som nu publicerats. Projektet lägger stor vikt på testning och dokumentation vilket gör att jag inte vill driva ett projekt med många, för mig, okända tekniker.

Därför tänker jag skrota det gamla projektet och göra ett multiplayer luffarschack. Tyvärr är chansen att detta blir nästa candy crush ganska liten och för att det inte ska vara alldeles tomt vill jag ha en ai som man kan spela mot.

Under linux-kursen modulariserade jag en enkel gomoku ai från ett projekt på github (frågade snällt innan jag slet ur den ur sitt sammanhang). Denna modul vidareutvecklade jag, rättade nån bugg, skrev enhetstester och publicerade på npm. Blir det tid över skulle det vara kul att skriva en egen gomoku ai men det känns inte alls som att jag ska lägga energi där inom ramen för kursen.

Då jag inte startat mitt nya luffarschaksprojekt valde jag att göra ett enkelt ai-demo på me-sidan. När jag gjort detta märkte jag att min klient inte kunde byggas längre. Detta beror på att create-react-app minifierar vid produktion-build och modulen gick inte igenom minifieringen pga ES6-syntax. Efter att jag ändrat npm-modulen till att bara innehålla ES5-syntax fungerade det fint.

### Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?

Det mesta var på plats. Jag lade till en liten inledning och en lista på de viktigaste ramverken som jag använder.

Dock tycker jag nästan att det är skrämmande hur saker inte riktigt fungerar som det ska på andra maskiner. Jag testar mitt repo och readme-instruktioner på en windowsmaskin, en mac och nu även på en ubuntu-droplet. Trots detta verkar mos få ständiga problem på sin debianmaskin. Som rättar har jag även sett samma sak hända fast från andra sidan, repon som fungerar hos en student fungerar inte alltid på min mac. Därför har jag gått baklänges i min automation allt eftersom kursen går, det blir fler steg för att dra igång me-sidan men förhoppningsvis kan det bli lättare att felsöka när det går fel.

Github-repo:
[https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)

npm-modul:
[https://www.npmjs.com/package/gomokuai](https://www.npmjs.com/package/gomokuai)

Me-sidan på DigitalOcean:
[http://178.62.242.169](http://178.62.242.169)

Studentservern:
[http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)
