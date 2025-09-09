import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function FloatingBlob({
  size = 200,
  color = "from-primary to-accent",
  position = "top-10 left-10",
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });
  
  const x = useTransform(springX, (val) => val / 25);
  const y = useTransform(springY, (val) => val / 25);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`absolute ${position} bg-gradient-to-r ${color} opacity-20 rounded-full pointer-events-none`}
      style={{
        x,
        y,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
