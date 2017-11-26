## Kmom03

I javascripts anda har jag gjort kmom03 och kmom04 asynkront snarare än
sekventiellt varför det kan finnas referenser i de två redovisningstexterna som
refererar till uppgifter i det andra kursmomentet. Exempelvis implementerade jag
chatten från kmom04 och kämpade med att införa tester för denna i kmom03.

Utöver några tester för hemsidan gjorde jag en egen tdd-övning som ligger i
kmom03-katalogen.

### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?

Jag använder jest och supertest. Jest eftersom jag använt det tidigare, det
ingår i create-react-app och har kodtäckning inbyggt, supertest därför det
kändes som ett enkelt sätt att införa lite funktionstester. Jag tycker även bra
om dokumentationen för jest vilket bidrar till att jag väljer det.

### Berätta om cin CI-kedja och reflektera över de valen du gjorde?

Jag trodde att jag hade hela CI-kedjan klar redan i kmom01 men vid närmare
granskning såg jag att jag inte tänkt på att jag hade separat kodtäckning för
servern och klienten. Till råga på allt fick jag bara kodtäckning på de filer
som hade tester, inte på de som saknade tester.

Tillbaka till ritbordet. En halvdag senare hade jag ett testpaket med jest,
babel och react som kunde testa och rapportera kodtäckning för hela projektet.

Sedan gjorde jag samma sak för mitt projekt i vardande.

I min CI-kedja ingår Travis, Scrutinizer och Codeclimate. Travis kollar bara att
mitt projekt byggs utan fel, vilket även Scrutinizer gör så det är väl
egentligen redundant men jag tycker Travis ger en snygg översikt över
byggprocessen plus att det ger en extra badge.

Scrutinizer valde jag eftersom vi använde den i ramverk1 och jag börjar få lite
kontroll över informationen som jag får ut därifrån. Det är även enkelt att få
en kodtäckningsrapport från verktyget.

Codeclimate lade jag till för att testa något nytt och för den snygga badgen.

### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.

I stort sett var det bara att ändra kommandot som körs i docker-compose från
`npm start` till `npm test`. Dock kör jag windows så det är aldrig så enkelt som
det borde vara.

På min windowsburk använder jag oftast bash for windows när jag utvecklar.
Mycket fungerar fint men docker verkar ha problem att köra där. Därför har jag
docker installerat i windows. Jest fungerar dock inte likadant i windows som på
en unix-maskin och min klient vill inte bygga under windows. Detta är bara ett
problem om jag vill använda docker. Jag har fixat så att enhetstesterna genom
docker ska fungera på både linux och windows men jag vet inte hur stabilt det
är.

Vad gäller nyttan av att köra enhetstester mot olika versioner av node kan jag
tycka att det är onödigt merarbete när man gör en app. Vet man hur målsystemet
ser ut kan man sätta upp en docker-kontainer för detta.

Däremot om man kodar ett kodbibliotek är kan det vara lysande att testa mot
flera olika målmiljöer.

### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?

Jag tycker det är svårt att koda enligt TDD när jag samtidigt ska lära mig att
använda ett verktyg. Exempelvis CodeMirror-komponenten som jag experementerade
med i appen. Till en början blir det mest utforskande kod och det känns svårt
att skriva några tester redan innan jag vet hur en komponent fungerar. (Detta är
ett av de främsta skälen till att jag är tveksam till att fortsätta på min
nuvarande projektide.)

Initialt skrev jag några få tester till min me-sida. Jag beslutade mig dock för
att införa chatten från kmom04 och försöka testa denna. Det var naturligtvis
inte riktigt så enkelt som jag föreställde mig och jag brände timmar på att inte
få det att fungera. Efter att jag låtit det ligga några dagar kom jag tillbaka
till min testkod och gjorde en liten förändring i hur jag satte upp socket.io
klienten. Detta fick testerna att fungera. Dock har jag inte skrivit några
tester med mockad server för klientdelen av chatten då tiden börjat rinna ut.
Liten seger blev det i alla fall.

### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.

Jag tycker det känns klurigt att fundera ut ett projekt innan vi har fått kraven
för kmom10.

Med det sagt har jag trots allt svårt att inte låta tankarna löpa och komma fram
med idéer där den ena varianten ambitiösare än den andra. Jag bestämde att jag
skulle undersöka möjligheten att göra en sajt för att kollaborativt lösande av
kodklur.

I ett sådant projekt skulle det ingå en editor där flera deltagare kan editera
kod samtidigt, deltagarna skulle behöva en chatt och den användarskrivna koden
skulle behöva kunna köras vilket kanske kan lösas med docker. Till detta kommer
en databas som håller kodklur och naturligtvis tester som som ska köras för att
kontrollera att användaren/användarna har löst uppgiften.

På ett metaplan ser mitt uttänkta projekt att passa bra in på de punkter som
kursen tar upp enligt kursmomentsrubrikerna. När jag börjat peta i det praktiska
ser jag dock flera problem. Det är många saker i det tänkta projektet som är
okända för mig. Detta tror jag, tex, försvårar möjligheten att öva på test
driven design.

Att få två eller fler editorer att stämma med varandra, utan att det laggar
eller blir en suboptimal användarupplevelse, verkar kräva en hel del klurande.
Atom-utvecklarnas beskrivning av utvecklingen av deras nya kollaborativa
funktion är intressant läsning och beskriver mycket av svårigheter och
överväganden (läs om detta i deras blog och repon.) Också att ta ett system i
drift som eventuellt bygger på att spinna upp docker-containrar från en
node-server kan visa sig besvärligt. Sammantaget känns det som att det tänkta
projektet skulle kunna göra att jag lägger tid på fel saker. Dessutom gick
luften ur min entusiasm efter att just Atom kommit med sin
kollaborationsfunktion. Det är nu väldigt lätt att använda Exercism tillsammans
med Atom för att göra precis det som jag tänkte bygga, fast tajtare och
smidigare.

Det jag gjorde på appen i kmom03 var i alla fall att sätta upp projektet
inklusive CI-kedja. Sedan experimenterade jag med en CodeMirror-komponent för
react och skrev några tester för detta.

Det är dock tveksamt om jag kommer att fortsätta med detta projekt. Förmodligen
får det ligga på is till kraven för kmom10 kommer. Kanske ska jag börja på en
kortspelsapp istället, som mos verkar vara inne på, det låter också potentiellt
kul!

Några tekniker är dock givna att jag ska använda i den framtida appen, react,
react-router, socket.io och jest.

Github-repo:
[https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)

App-repo:
[https://github.com/litemerafrukt/dojo](https://github.com/litemerafrukt/dojo)

Me-sidan på Heroku:
[https://whispering-falls-30453.herokuapp.com/](https://whispering-falls-30453.herokuapp.com/)

Studentservern:
[http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)
