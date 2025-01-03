import React, { useEffect, useState } from "react";
import "./Aboutnum.css";

function EventStatistics() {
  const stats = [
    { label: "Events Held", target: 25843 },
    { label: "Upcoming Events", target: 9600 },
    { label: "Speakers", target: 12563 },
    { label: "Partners", target: 300 },
  ];

  const [displayedStats, setDisplayedStats] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const statSection = document.getElementById("EventStatistics");
      const statSectionTop = statSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;

      if (statSectionTop < screenPosition) {
        stats.forEach((stat, index) => {
          let current = 0;
          const increment = Math.ceil(stat.target / 100);

          const interval = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
              current = stat.target;
              clearInterval(interval);
            }
            setDisplayedStats((prev) => {
              const newStats = [...prev];
              newStats[index] = current;
              return newStats;
            });
          }, 20);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stats]);

  return (
    <section className="EventStatistics" id="EventStatistics">
      {stats.map((stat, index) => (
        <div className="SingleStat" key={index}>
          <h3 className="stabout">{displayedStats[index]}</h3>
          <p className="stabout">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default EventStatistics;
