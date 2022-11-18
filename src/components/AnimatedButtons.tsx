import { IonButton, IonIcon, createAnimation } from "@ionic/react";
import React, { useRef } from "react";
import { heart, closeOutline, pulseSharp } from "ionicons/icons";
import "./AnimatedButtons.css";

const AnimatedButtons: React.FC = () => {
  const pulseKeyframes = [
    { offset: 0, transform: "scale(0)" },
    { offset: 0.5, transform: "scale(1.2)" },
    { offset: 0.7, transform: "scale(0.65)" },
    { offset: 1, transform: "scale(1)" },
  ];
  const buttonRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const playButtonAnimation = () => {
    if (buttonRef.current !== null) {
      const animation = createAnimation()
        .addElement(buttonRef.current)
        .duration(1000)
        .iterations(Infinity)
        .keyframes(pulseKeyframes);
      animation.play();
    }
  };
  const playBtnAnimation = () => {
    if (btnRef.current !== null) {
      const animation = createAnimation()
        .addElement(btnRef.current)
        .duration(1000)
        .iterations(Infinity)
        .keyframes(pulseKeyframes);
      animation.play();
    }
  };
  return (
    <div className="action-buttons-container">
      <div ref={buttonRef}>
        <IonButton
          shape="round"
          size="large"
          onClick={playButtonAnimation}
          mode="ios"
          className="buttonAnimation"
          fill="solid"
        >
          Animate
          <IonIcon icon={pulseSharp}></IonIcon>
        </IonButton>
      </div>
      <div ref={btnRef}>
        <IonButton
          shape="round"
          size="large"
          onClick={playBtnAnimation}
          mode="ios"
          className="buttonAnimation"
          fill="solid"
        >
          Animate
          <IonIcon icon={pulseSharp}></IonIcon>
        </IonButton>
      </div>
    </div>
  );
};
export default AnimatedButtons;
