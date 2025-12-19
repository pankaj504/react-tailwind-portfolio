import React, { useCallback, useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const randomNumbers = (min, max) => Math.random() * (max - min) + min;

  const generateStars = useCallback(() => {
    const screenArea = window.innerWidth * window.innerHeight;
    const numberOfStars = Math.floor(screenArea / 10000);
    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: randomNumbers(1, 4),
      x: randomNumbers(0, 100),
      y: randomNumbers(0, 100),
      opacity: randomNumbers(0.5, 1),
      duration: randomNumbers(2, 6),
    }));
    setStars(newStars);
  }, []);

  // Generate meteors
  const generateMeteors = useCallback(() => {
    const numberOfMeteors = 4;
    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: randomNumbers(1, 3),
      x: randomNumbers(0, 100),
      y: randomNumbers(0, 20),
      delay: randomNumbers(0, 12),
      duration: randomNumbers(2, 6),
    }));
    setMeteors(newMeteors);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      generateStars();
      generateMeteors();
    }, 0);

    let resizeFrame;
    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(generateStars);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(resizeFrame);
      clearTimeout(timer);
    };
  }, [generateStars, generateMeteors]);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
