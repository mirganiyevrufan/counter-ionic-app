import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./LOL.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-tab2" fullscreen>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>LOL 1</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                League of Legends (LoL), commonly referred to as League, is a
                2009 multiplayer online battle arena video game developed and
                published by Riot Games. Inspired by Defense of the Ancients, a
                custom map for Warcraft III, Riot's founders sought to develop a
                stand-alone game in the same genre.{" "}
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>LOL 2</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                In the game, two teams of five players battle in
                player-versus-player combat, each team occupying and defending
                their half of the map. Each of the ten players controls a
                character, known as a "champion", with unique abilities and
                differing styles of play.{" "}
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel>LOL 3</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                League of Legends has received generally positive reviews;
                critics highlighted its accessibility, character designs, and
                production value. The game's long lifespan has resulted in a
                critical reappraisal, with reviews trending positively; the
                negative and abusive in-game behavior of its players, criticized
                since early in the game's lifetime, persists despite Riot's
                attempts to fix the problem. In 2019, League regularly peaked at
                eight million concurrent players, and its popularity has led to
                tie-ins such as music videos, comic books, short stories, and an
                animated series, Arcane.{" "}
              </p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <a
          className="play-me"
          href="https://signup.leagueoflegends.com/en-us/signup/index?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dBBTwcGGUFckVwov9zpB6kt-oEIXAlevCemH2gfpbfS9_gVRut1daBoCjRoQAvD_BwE&gclsrc=aw.ds#/"
        >
          <span>PLAY ME</span>
        </a>
        <IonCard>
          <IonCardHeader className="card-header">
            <IonCardTitle>Ezreal</IonCardTitle>
            <IonCardSubtitle>
              Name’s Ezreal. E-Z-… oh, you’re dead.
            </IonCardSubtitle>
            <img
              width={200}
              src="https://leaguefeed.net/wp-content/uploads/2021/10/most-popular-lol-champions-ezreal-750x443.jpg.webp"
              alt=""
            />
          </IonCardHeader>

          <IonCardContent>
            Alias(es) The Nine-Tailed Fox The Gatekeeper (The Spirit in Ionian
            mythology that may have been partly influenced by Ahri)
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
