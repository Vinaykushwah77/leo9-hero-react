import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 bg-white text-primary overflow-hidden"
    >
      {/* Floating circles */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary to-accent opacity-10 rounded-full animate-pulse -translate-x-36 -translate-y-36"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 0.1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-accent to-primary opacity-10 rounded-full animate-pulse translate-x-48 translate-y-48"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 0.1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-4 z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Leo9 Studio
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl mb-6 max-w-2xl z-10 text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Creative direction • UI/UX • Frontend development • Branding
      </motion.p>

      <motion.div
        className="flex gap-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#work"
          className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:from-accent hover:to-primary transition-transform duration-300"
        >
          See our work
        </a>
        <a
          href="#about"
          className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-accent hover:text-white hover:scale-105 transition-transform duration-300"
        >
          Who we are
        </a>
      </motion.div>
    </section>
  );
}
