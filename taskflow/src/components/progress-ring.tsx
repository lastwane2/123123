"use client";

import { motion } from "framer-motion";

interface ProgressRingProps {
  completed: number;
  total: number;
}

export function ProgressRing({ completed, total }: ProgressRingProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            className="text-muted/60"
            strokeWidth="8"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {completed} of {total} tasks done
      </p>
    </div>
  );
}
