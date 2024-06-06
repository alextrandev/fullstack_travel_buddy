import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        move: {
          enable: true,
          speed: { min: 1, max: 6 },
        },
        number: {
          value: 2,
          max: 5
        },
        opacity: {
          value: 0.5
        },
        rotate: {
          path: true,
          value: 45,
        },
        shape: {
          options: {
            image: {
              gif: false,
              height: 50,
              src: "https://cdn-icons-png.flaticon.com/512/8259/8259394.png",
              width: 50
            }
          },
          type: "image"
        },
        size: {
          value: {
            min: 32,
            max: 64
          }
        }
      }
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="particles"
      />
    );
  }

  return <></>;
};

export default Background