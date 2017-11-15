import React from "react";
import { PageLayout } from "./../PageLayout";
import selfie from "./../img/selfie.jpg";

export const Home = () => (
    <PageLayout>
        <div className="full-height vertical-center">
            <img className="selfie" src={selfie} alt="selfie" />

            <div>
                <h2 className="center-text">Hej!</h2>

                <p>
                    Jag är en aspirerande webbutvecklare med en förkärlek för backend och
                    funktionell programmering.
                </p>
                <p>
                    Jag studerar{" "}
                    <a href="https://www.bth.se/distansutbildningar/webbprogrammering/">
                        Webbprogrammering 120 hp
                    </a>{" "}
                    på Blekinge Tekniska Högskola. Där läser vi PHP, Javascript och Python. På
                    fritiden blir det även en del Elm och Haskell.
                </p>
            </div>
        </div>
    </PageLayout>
);
