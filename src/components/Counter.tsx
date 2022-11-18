import { IonButton, IonText } from "@ionic/react";
import { useState } from "react";

import "./style.css";

function Counter() {
  // State to store count value
  const [count, setCount] = useState(1);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  // we could add a button to decrement count by 1
  // const decrementCount = () => {
  //   // Update state with incremented value
  //   setCount(count - 1);
  // };
  return (
    <>
      {/* <IonButton className="ionBtn" onClick={decrementCount}>
          Decrease Value
        </IonButton> */}
      <IonText
        style={
          count > 5
            ? {
                color: "#FF0000",
              }
            : {
                color: "#fff",
              }
        }
        className="counText"
      >
        {count}
      </IonText>
      <IonButton size={"large"} className="ionBtn" onClick={incrementCount}>
        Increase Value
      </IonButton>
    </>
  );
}

export default Counter;
