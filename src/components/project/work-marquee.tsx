// components/project/work-marquee.tsx
"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const WorkMarquee = () => {
  return (
    <div
      style={{
        background: "#472943",
        padding: "22px 0",
        overflow: "hidden",
        marginBottom: "60px",
      }}
    >
      <Marquee speed={80} gradient={false} loop={0}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginRight: "60px",
              fontFamily: "inherit",
              lineHeight: 1,
            }}
          >
            Check Out Our Work ↓
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default WorkMarquee;