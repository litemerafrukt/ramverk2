## Kmom02
Kursmomentet gick ganska snabbt att jobba igenom. Upplever att det gav en bra balans med kmom01 där jag lade mer tid.

Mest tid i detta kursmoment lade jag på att få grepp om vad docker är, gör och kan användas till. Samt om docker  gör livet enklare eller besvärligare för mig. Mina initiala tankar efter 2 dagar som dockeranvändare är att det behöver inte vara speciellt besvärligt och docker kan möjligen hjälpa till ordentligt vad gäller att harmoniera utvecklingsmiljö och produktionsmiljö. Nu har jag inte undersökt saken vidare men jag funderar på om inte docker kan vara lösningen på att snabbt få upp en utvecklingsmiljö på i stort sett vilken dator som helst? Kanske bör docker introduceras som en del av labbmiljön redan i introveckan på dbwebb?

Tekniken känns användbar och spännande och jag borde jobba in den i mitt arbetsflöde. Det  jag har sett så här långt verkar bara vara en del av vad docker kan hjälpa mig med.
 
### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Jag har inte jobbat med docker tidigare. Det jag har använt i virtualliseringsform är framförallt Parallells Desktop på MacOS för att köra windows eller linux.

### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Det känns väldigt smidigt att enkelt kunna testa med med en annan version av plattformen. Det blir inte lika kritiskt att sätta upp exakt samma miljö på min utvecklingsdator som på produktionsservern när jag kan förpacka min miljö i en docker-image och köra en docker-container.

Just att kunna köra sin docker-image även i produktion känns klockrent. Uppfyller det arbetsflödet förväntningarna borde det kunna vara riktigt smidigt.

Att samtidigt kunna dra igång flera versioner av plattformen, som vi gör med me-sidan i kursmomentet, kan vara praktiskt men är målmiljön för en app känd behöver den ju inte testas mot andra versioner av plattformen. Utvecklar man däremot en modul som ska kunna ingå i flera projekt med divergerande målmiljöer är det potentiellt mycket användbart.

Ännu har jag inte satt upp att tester automatiskt körs i containrar utan `docker-compose` drar bara igång tre servrar. Riktigt spännande blir det när enhetstester och integrationstester kommer till och ett kommando drar igång allt på multipla versioner av plattformen.

### Gick allt smidigt eller stötte du på problem?
Det mesta gick smidigt. Jag uppgraderade min windows-version från Home till Education och kör senaste versionen av docker. Förutom lite småsaker, som berodde på ovana, har allt rullat på fint.

### Skapade du din egen image, berätta om den?
Jag skapade ingen egen image. Jag behöver lite tid att smälta det nya jag lärt mig under de första två kmom:en. Docker verkar som sagt vara en väldigt användbar teknik så en image kommer tids nog.

Github-repo: [https://github.com/litemerafrukt/ramverk2](https://github.com/litemerafrukt/ramverk2)
Me-sidan på Heroku: [https://whispering-falls-30453.herokuapp.com/](https://whispering-falls-30453.herokuapp.com/)
Studentservern: [http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/](http://www.student.bth.se/~anng15/dbwebb-kurser/ramverk2/me/)