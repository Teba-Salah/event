import React from "react";
import "./Aboutnum.css";

function EventStatistics() {
  const stats = [
    { label: "Events Held", target: 25843 },
    { label: "Upcoming Events", target: 9600 },
    { label: "Speakers", target: 12563 },
    { label: "Partners", target: 300 },
  ];

  return (
    <section className="EventStatistics" id="EventStatistics">
      {stats.map((stat, index) => (
        <div className="SingleStat" key={index}>
          <h3 className="stabout">{stat.target}</h3> {/* Displaying the number directly */}
          <p className="stabout">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default EventStatistics;
