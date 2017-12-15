## Kmom05

### Hur gick det att komma igång med databasen MongoDB?

Det var problem i början när jag skulle jobba igenom artikeln. Exemplet ville inte snurra igång på min windows-maskin. Efter alltför många timmar kom jag fram till att mongodb i docker-kontainern inte ville spara någonting på windows filsystem, NTFS, och att det inte finns någon enkel plattformsoberoende lösning på detta. En lösning verkar vara att köra en dockerkontainer med windowsservercore men detta fungerar i så fall bara på Windows 10 Pro. En annan lösning hade varit att skaffa en Ext4 partition men det var inget alternativ på min nuvarande maskin plus att det hade förmodligen gett en maskinspecifik docker-compose.yml.

Jag kom fram till att inom ramen för kursmomentet spelar det ingen roll om jag har data som persisterar efter mongo-kontainern stängts och kör utan persisterande data.

I övrigt var det inga större problem att komma igång med mongodb.

### Vilken syn har du på databaser inom konceptet NoSQL? Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.

Min uppfattning av NoSQL-databaser är att de i grunden har ett ganska snävt användningsområde, att spara enskilda dokument/poster. Enskilda i meningen att de är "self contained" dvs de har inga relationer till något annat dokument.

Det är blir ett ganska smalt användningsområde men om du till exempel ska samla massor med information kan nog en NoSQL databas vara ett bra alternativ. Speciellt om du dessutom kanske inte vet hur den är strukturerad. Då är det bara att slänga in data som dokument i databasen.

När det börjar bli krav på relationer mellan dokument/poster haltar en modell där dokumenten bör vara sig själv nog. Ska du duplicera data eller ska du börja spara referenser till andra dokument i dokumentet (och därigenom på ett sätt skapar en ad hoc relationsdatabas)? Wikipedia-artikeln tar kortfattat upp relationsproblemen. En annan intressant artikel är berättelsen om hur det gick när facebook-alternativet [Diaspora](https://diasporafoundation.org/) ursprungligen valde MongoDB: (Why You Should Never Use MongoDB)[http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/comment-page-1/].

Jag är inte negativ till NoSQL-databaser generellt. Ser till exempel hur Redis skulle kunna lösa en hel del saker med sin enkla nyckel-värde databas. Jag har även tittat en del på CouchDB som ser intressant ut med ett REST-api och som programmeras i javascript.

Kanske är det min syn på vad en databas är, och ska erbjuda, som har blivit vinklad efter drygt två år på dbwebb men NoSQL känns mer som ett alternativ till att lagra sin data i filer än som ett alternativ till en klassisk relationsdatabas.

I CRUD-uppgiften upplevde jag ingen skillnad med att använda mongodb istället för sqlite eller mysql. Jag behövde förvisso inte göra ett schema för min data men samtidigt finns där ett implicit schema och ett schema kan vara en bra dokumentation för vilken data man kan förvänta sig.

### Vilka är dina tankar om asynkron programmering med JavaScript?

Asynkron programmering i Javascript är helt nödvändig. Eftersom vi bara har en enda tråd kan vi inte blockera denna hur som helst med operationer som tar tid.

Vad gäller gäller callbacks, promises och async/await tycker jag helt klart att promises och async/await har klara fördelar över callbacks i att tydliggöra ett programs flöde.

Personligen föredrar jag att arbeta med `then`-kedjor snarare än att använda async/await. Jag tycker det ger den klaraste strukturen över vad som händer i koden. Å andra sidan, när jag ska göra en större mängd operationer i kontexten av ett promise kan async/await passa utmärkt.

En sak som är lite synd med javascripts promises är att man struntade i "separation of concerns" och tryckte ihop `map`, `bimap` samt `bind`/`chain` i en enda metod, `then`. Detta gav en struktur som är nästan är som en monad men ändå inte riktigt. En monad hade varit flexiblare och förmodligen ännu enklare att resonera kring med färre "gotchas".

### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?

Min intuition för hur jag ska använda docker vaknar mer och mer. I detta kursmomentet tyckte jag det var riktigt trevligt att inte behöva installera mongodb utan bara spinna upp en kontainer och köra mot den. Lite synd att mongodb i kontainern inte trivs med mitt filsystem men i kursmomentet kändes det som om det inte spelar någon roll (windows lär försvinna från min dator så snart jag har några dagar över för att byta över till Linux).

Det kändes också väldigt smidigt när jag skulle sätta kursmomentet i produktion. Då jag inte tror heroku:s gratisalternativ vill köra en mongodb-kontainer tillsammans med min app valde jag att spinna upp en ny digitalocean droplet med ubuntu. Där installerade jag docker och drog ner mitt github-repo. Med två npm-kommandon, `npm run docker-build` och `npm run docker-produktion`, så snurrade allting igång.

Github-repo:
[https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)

Me-sidan på DigitalOcean:
[http://178.62.242.169](http://178.62.242.169)

Studentservern:
[http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)
