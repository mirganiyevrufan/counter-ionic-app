import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Counter-page.css";
import Counter from "../components/Counter";
import AnimatedButtons from "../components/AnimatedButtons";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>COUNTER APP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content" fullscreen>
        <div className="content-counter">
          <Counter />
        </div>
        <div className="animated">
          <AnimatedButtons />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
