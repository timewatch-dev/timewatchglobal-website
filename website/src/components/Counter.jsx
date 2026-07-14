"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Users2, ThumbsUp } from "lucide-react"; // Example icons

const stats = [
  {
    end: 10000,
    suffix: "+",
    label: "CUSTOMERS",
    icon: <Users className="h-8 w-8 text-secondary mb-2 mx-auto" />,
  },
  {
    end: 160,
    suffix: "+",
    label: "TEAM MEMBERS",
    icon: <Users2 className="h-8 w-8 text-secondary mb-2 mx-auto" />,
  },
  {
    end: 4.8,
    decimals: 1,
    suffix: "/5",
    label: "REVIEWS",
    icon: <ThumbsUp className="h-8 w-8 text-secondary mb-2 mx-auto" />,
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref} className="grid grid-cols-3 text-center gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* {stat.icon} */}
          <h2 className="text-2xl font-bold text-primary">
            {inView && (
              <span className="text-[1.2rem] md:text-4xl">
                <CountUp
                  end={stat.end}
                  duration={2}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </span>
            )}
          </h2>
          <p className="text-secondary text-[11px] md:text-lg font-bold mt-1 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
