tsParticles
  .load("tsparticles", {
    particles: {
      move: {
        enable: true,
        speed: 0
      },
      links: {
        enable: true
      },
      number: {
        value: 0
      }
    }
  })
  .then(function (container) {
    let angleX = Math.floor(Math.random() * 360);
    setInterval(function () {
      const angle = (angleX * Math.PI) / 180;
      angleX += 5;

      if (angleX > 360) angleX -= 360;

      const particleSin = container.particles.addParticle(
        { x: 0, y: Math.sin(angle) * 100 + 200 },
        {
          color: {
            value: "#f"
          },
          links: {
            id: "sin",
            enable: true,
            distance: 20,
            color: "random"
          },
          move: {
            enable: true,
            speed: 1,
            random: false,
            straight: true,
            direction: "right",
            outMode: "destroy"
          },
          size: {
            value: 1
          }
        }
      );

      const particleCos = container.particles.addParticle(
        { x: 0, y: Math.cos(angle) * 100 + 200 },
        {
          color: {
            value: "#fff"
          },
          links: {
            id: "cos",
            enable: true,
            distance: 20,
            color: "random"
          },
          move: {
            enable: true,
            speed: 1,
            straight: true,
            direction: "right",
            outMode: "destroy"
          },
          size: {
            value: 1
          }
        }
      );

      const particleTan = container.particles.addParticle(
        { x: 0, y: Math.tan(angle) * 100 + 200 },
        {
          color: {
            value: "#0f0"
          },
          links: {
            id: "tan",
            enable: true,
            distance: 35,
            color: "random"
          },
          move: {
            enable: true,
            speed: 1,
            straight: true,
            direction: "right",
            outMode: "destroy"
          },
          size: {
            value: 1
          }
        }
      );

      const particleAngle = container.particles.addParticle(
        { x: 0, y: Math.random() * angleX },
        {
          color: {
            value: "#00f",
            animation: {
              enable: true,
              speed: 50
            }
          },
          links: {
            enable: false
          },
          move: {
            enable: true,
            speed: 3,
            straight: true,
            direction: "right",
            outMode: "destroy"
          },
          size: {
            value: 5,
            random: true
          }
        }
      );
    }, 100);
  });
