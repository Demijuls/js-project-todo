import Lottie from "lottie-react";
import emptystate from "../assets/animations/emptystate.json";

export const AnimationEmpty = () => {
  const style = { height: 380 };
  return <Lottie animationData={emptystate} style={style} />;
};
