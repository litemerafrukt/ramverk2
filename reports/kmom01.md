## Kmom01
Kul att komma igång med javascript igen!

Spännande att få bestämma så mycket själv. Det blev en del läsande av manualer för olika verktyg för att få ihop en bra struktur med npm-scripts, tester och linters. Sedan ville jag köra React som klien.  Känns som om jag fått ihop en bra struktur för utveckling med alla ingående delar och lärt mig en hel del i processen. 

### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.
Express känns litet, mer som ett bibliotek än ett ramverk. På det finns sedan en hel uppsjö av middleware som kan läggas till. Att inte ens en json-parser för request-bodyn ingår i express tycker jag talar för hur litet express är och förmodligen har som mål att vara. Kanske är express ett lyckat exempel på "en ramverkslös värld?"

Jag har inte använt pug i me-sidan men jag har använt pug en del tidigare och jag tycker väldigt bra om det. Personligen tycker jag bra om "significant white space" och kort och koncis (terse) syntax. Standard html tycker jag har en tendens att bli mångordig (verbose) och lägger man till php som template språk kan det bli nästan outhärdligt mångordigt. Pugs struktur finner jag snygg och lättläst.

Pug verkar ha det mesta som min tidigare favorit, jinja2, har och nästa gång det ska vara serverserverad html blir det pug eller någon av dess kusiner i andra miljöer.

Istället för pug har jag valt att använda React som SPA. På en sida med statiskt innehåll som me-sidan är det ju egentligen oförsvarbart att skicka upp en javascript-app på 367kb för att användaren skall kunna se något alls. För React finns lösningar att rendera sidorna på serversidan och bara skicka resultatet men då React är nästan helt nytt för mig valde jag att hålla det enkelt.

React hade jag blandade känslor inför. Jag kan inte sätta fingret exakt på vad det var som skavde. Kanske är det alla klasser, kanske är det jsx, kanske är det bara att React inte känns lika elegant som Elm. När jag däremot började skriva me-sidan kändes React riktigt tajt. Jag lade till React-router för klientsidsnavigering och React-router passade in som en perfekt liten legobit. Vidare gick det bra att göra rena funktioner för de flesta vyer. Jag tittade även på redux och recompose för att hantera state i den komponent som behövde hålla reda på state. Valde dock att inte införa någon av dessa i detta kmom.

### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
För några dagar sedan gick jag tillbaka till mitt oophp-projekt för att göra några justeringar inför att kunna avsluta den kursen. Jag hade varit borta från projektet i två månader men kände att jag hittade ändå riktigt bra i koden. Detta stämde inte riktigt med min känsla från tidigare då jag tyckt att oophp-projektet var ganska rörigt och tungt att hitta i.

Utifrån denna upptäckt, att oophp strukturen kanske inte är så illa, tänkte jag lägga upp en liknande struktur i servern på denna me-sida. Olika routes samlas i en katalog där var subroute får en egen fil. Koden i en route är tänkt att hållas kort och när det blir mer som ska hanteras på serversidan får det komma till en src-katalog.

Generellt tänker jag bygga katalogstrukturen med inspiration från de anaxkurser vi läst.

React klinten ligger som en subkatalog, `client`, under serverkatalogen för att samla allt i samma träd. Möjligen skulle jag gjort annorlunda och istället lagt denna på samma nivå som serverkatalogen. Det känns eventuellt som en snyggare variant. Tål att grunna på till det är tid för projektet.

För tester tänker jag följa konventionen att lägga testfilen i tillsammans med den fil som sak testas snarare än en separat testkatalog med en katalogstruktur som speglar strukturen hos katalogerna som innehåller det som ska testas.

### Använde du någon form av scaffolding som Express erbjuder?
När jag tidigare använt Express har jag oftast bara startat med en index.js byggt upp min app därifrån. Till me-sidan valde jag att använda Express-generator. Det känns dock som om scaffolden inte tillförde speciellt mycket och jag plockade bort en del paket som scaffolden installerat, inklusive pug. Skulle jag göra kmom01 igen skulle jag inte välja att använda scaffolden.

För React klienten använde jag "create-react-app". Denna scaffold tyckte jag dock var riktigt värdefull. Den innehåller allt som behövs för att direkt sätta igång med React inklusive webpack. Dessutom innehåller den testramverket jest och en option för att använda serviceworker för att klienten ska fungera utan nätverk.

### Jobbar du med Markdown för innehållet, eller annat liknande?
De delar som förmodligen inte kommer att ändras speciellt mycket under kursens, första sidan och om sidan, får vara hårdkodad jsx i React komponenter. Rapporterna däremot skrivs i markdown. Dessa hämtas från servern via en api route och renderas med en React-komponent på klient-sidan.

### Övrigt
Jag har valt att använda npm scripts istället för en make fil, `npm install`, `npm test` och `npm start` skall fungera som motsvarande make kommandon. `npm run start-dev` startar upp backend med nodemon och klientens utvecklingsserver med hot reloading. Ett litet verktyg från npm, `concurrently`, startar upp det i två processer och det finns en proxy från utvecklingsservern till den riktiga backenden. 

Jag har satt upp jest tillsammans med supertest som testramverk.

Github-repo: [https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)
Me-sidan på Heroku: [https://whispering-falls-30453.herokuapp.com/](https://whispering-falls-30453.herokuapp.com/)
Studentservern: [http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)