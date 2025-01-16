import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from './particle.module.css'

const ParticleBackground = () => {
  // Initialize tsparticles engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Loads the tsparticles package
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50, // Number of particles
          },
          size: {
            value: 3, // Particle size
          },
          move: {
            enable: true,
            speed: 2, // Movement speed
          },
          color: {
            value: "#ffffff", // Particle color
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#fffhfe",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Particles move away on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        background: {
          color: "blue", // Background color
        },
      }}
    />
  );
};

export default ParticleBackground;
