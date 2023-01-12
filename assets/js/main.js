const parallaxCount = 4;

const parallaxController = () => {
  const backgrounds = [];

  const parallaxControll = () => {
    addEventListener("scroll", () => {
      const distanceScrolled = window.scrollY;
      const modifier = 10;

      // applying a calculation so the most far moves less than the most front layer
      backgrounds.forEach((backgroundDOM, index) => {
        const newPosition = (distanceScrolled / modifier) * index;

        backgroundDOM.style.backgroundPositionY = `-${newPosition}px`;
      });
    });
  };

  const startBackgrounds = () => {
    // store each background dom on an array
    for (let i = 1; i <= parallaxCount; i++) {
      const backgroundDOM = document.getElementById(`parallax-${i}`);
      if (backgroundDOM) backgrounds.push(backgroundDOM);
    }

    // this is important to correct order layers
    backgrounds.reverse();
  };

  const run = () => {
    startBackgrounds();
    parallaxControll();

    // Scroll down a bit so user know there is more content
    setTimeout(() => {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    }, 2000);
  };

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return {
    run,
  };
};

var parallax = parallaxController();

window.addEventListener("load", () => {
  parallax.run();
});
