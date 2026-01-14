import Lottie from "lottie-react";
import emptystate from "../assets/animations/emptystate.json";

export const AnimationEmpty = () => {
  const options = {
    animationData: emptystate,
    style: { height: 380 },
    loop: true,
    autoplay: true,
    /* loopComplete: () => console.log("Looped animation once"), */
  };
  /*   const style = { height: 380 };
   */ return (
    <>
      <h3>You've done it all, good job! You deserve a break</h3>
      <Lottie
        animationData={options.animationData}
        style={options.style}
        loop={options.loop}
        autoplay={options.autoplay}
        /* onLoopComplete={options.loopComplete} */
      />
    </>
  );
};
