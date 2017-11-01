import React from "react";
import { PageLayout } from "PageLayout";

export const About = () => (
    <PageLayout>
        <div className="textbox">
            <h2>Om mig</h2>

            <p>
                Jag heter Anders Nygren och har sysslat med programmering i varierande omfattning
                sedan tonåren. Jag har naturligtvis gjort mycket annat också, som att träna
                kampsport, terränglöpning, skaffa familj, jobbat som programmerare, sedan som
                tandläkare, samt på sista tiden räddat mänskligheten i augmented reality-spelet
                Ingress.
            </p>

            <p>
                Våren 2015 bestämde jag mig för att att börja plugga programmering och sökte ett
                kurspaket inom webbutveckling på Blekinge Tekniska Högskola. Det gick bra och var
                riktigt, riktigt kul. Sedan har jag fortsatt med Webprogrammering 120 p och från
                hösten 2018 kommer jag att syssla enbart med programmering, dels som amanuens och
                dels med fortsatta studier.
            </p>

            <h2>Om kursen</h2>

            <p>
                Kursen ramverk2 är ny på dbwebb. Jag hoppas fortfarande att vi ska titta mer på TDD.
            </p>

            <h2>Om sidan</h2>

            <p>
                Sidan är byggd med Express och React. Sidan finns på{" "}
                <a href="https://github.com/litemerafrukt/ramverk2">github</a>.
            </p>
        </div>
    </PageLayout>
);
