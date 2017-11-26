## Kmom04

### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?

Realtidsprogrammering är det väl egentligen inte fråga om. Realtidsprogrammering
handlar väl snarast om att ett system inte får blockera och har krav på sin
responstid. I den meningen kan det kanske hävdas att den mesta
javascript-programmering är realtid. Vi har en enda tråd som vi inte vill
blockera och detta löser vi med asynkrona tekniker.

Vad gäller websockets handlar det väl framför allt om att vi lägger till
möjligheten för tvåvägskommunikation mellan en websida och en server.

Hur som helst så har jag jobbat med sockets och tvåvägskommunikation tidigare.
Jag har bland annat skrivit programvara för en industriell cd-brännare som
styrdes via ett applikationsprotokoll över tcp/ip. I mitt individuella projekt
skrev jag ett antal servrar som slussar meddelanden till varandra eller till
hemsidor byggt på socket.io.

### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?

Det gick bra, det jag hade störst problem med var att skriva tester för mina
olika delar (se kmom03).

När man skriver, tex, en chat finns problemet med att det inte går manuellt att
testa servern innan man börjat på klienten. Tidigare har jag ofta helt enkelt
börjat att skriva servern och samtidigt skrivit en enkel cli-klient för att
testa manuellt. Min tanke var att försöka göra detta med funktionstester
istället för en enkel utvecklingsklient. Tyvärr lösta jag inte mina testproblem
i tid utan jag gav upp mina tdd-försök och skrev servern och klienten i ett
svep. Några dagar senare fick jag mina tester att fungera och tycker mig se att
det hade kunnat vara en trevlig väg att gå när det ska skrivas både en server
och klient.

### Berätta om din chatt som du integrerade i redovisa-sidan.

Min chatt är en enkel chatt som jag skrivit med socket.io. Vid uppkoppling
frågar servern efter nick och skickar ut meddelande till alla att någon har
kopplat upp sig. Den som kopplar upp sig får även chat-historik för de 10
senaste händelserna i chatten. Historiken sparas bara i ram vilket inte fungerar
på heroku då de stänger ner appen om den varit inaktiv under en period.

Vid meddelande brodcastast detta till alla klienter. När någon lämnar chatten
meddelas detta alla uppkopplade klienter.

Största svårigheten låg i min ovana med react och vilka "life-cycle hooks" jag
skulle koppla olika delar av chatten till. Då ett av mina egna mål med denna
kurs är att introducera mig till react kändes det som en nyttig övning!

### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.

Då jag är väldigt tveksam till min projektide har jag inte gjort mer än att
integrera chatten i applikationen. För att göra detta byggde jag ut den med
react-router, återigen kändes det som bra övning i react trots att jag
förmodligen tänker slänga bort allting senare.

Min chat är byggd som modul på serversidan och komponenter på klientsidan. Detta
gjorde att jag i princip bara behövde kopiera över två kataloger från me-sidan
till appen och sedan skriva ett par kodrader för att inkorporera modulen och
topp react-komponenten.

Github-repo:
[https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)
App-repo:
[https://github.com/litemerafrukt/dojo](https://github.com/litemerafrukt/dojo)
Me-sidan på Heroku:
[https://whispering-falls-30453.herokuapp.com/](https://whispering-falls-30453.herokuapp.com/)
Studentservern:
[http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)
