## Kmom03

Jag trodde att jag hade hela CI-kedjan klar sedan kmom01 men vid närmare granskning såg jag att jag
inte tänkt på att jag hade separate codecoverage rapporter för servern och klienten. Till råga på
allt fick jag bara codecoverage på de filer som hade tester, inte på de som saknade tester.

Tillbaka till ritbordet och en halvdag senare hade jag fått ihop ett testpaket med jest, babel och
react som kunde testa och rapportera codecoverage för hela projektet.

Sedan gjorde jag samma sak för mitt projekt i vardande.

Det är lätt att se var "javascript fatigue" kommer ifrån. Att bara sätta upp testmiljön att fungera
med kraven har tagit en massa tid.

Allt eftersom jag testat har jag mer och mer fått uppfattningen att det kan vara lämpligt att köra front-end och back-end i separata repon. Tex för att få CI att fungera med codecoverage har jag installerat alla paket för front-end två gånger, en gång för fronten och en gång som en dev-dependency i rooten för att det ska finnas med vid testkörning.
