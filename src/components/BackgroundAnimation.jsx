import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import "./BackgroundAnimation.css";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#f2efe4" } },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
