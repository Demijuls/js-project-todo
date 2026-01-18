import Lottie from "lottie-react";
import emptystate from "../assets/animations/emptystate.json";
import styled from "styled-components";

const AnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: auto;
  background-color: var(--white-color);
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: 700;
`;

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
    <AnimationWrapper>
      <h3>You've done it all, good job! You deserve a break</h3>
      <Lottie
        animationData={options.animationData}
        style={options.style}
        loop={options.loop}
        autoplay={options.autoplay}
        /* onLoopComplete={options.loopComplete} */
      />
    </AnimationWrapper>
  );
};
