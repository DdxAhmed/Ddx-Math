import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { lessons } from "@/data/lessons";
import { resources } from "@/data/resources";

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export function StatsSection() {
  const totalLessons = lessons.length;
  const totalResources = resources.length;
  // Mock total hours calculation
  const totalHours = Math.floor(lessons.reduce((acc, l) => acc + parseInt(l.duration.split(":")[0]), 0) / 60) + 12;

  return (
    <section className="py-20 bg-muted/30 border-y border-border/50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-sm border border-border"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              <Counter from={0} to={totalLessons} />
            </div>
            <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Video Lessons</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-sm border border-border"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
              <Counter from={0} to={totalResources} />
            </div>
            <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Study Resources</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-sm border border-border"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-2">
              <Counter from={0} to={totalHours} />+
            </div>
            <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Hours of Content</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}