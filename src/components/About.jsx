import { motion } from "framer-motion";
import FloatingBlob from "./FloatingBlob";

export default function About() {
    const highlights = [
        { title: "Creative Design", desc: "We bring modern and user-friendly designs to life." },
        { title: "Trusted by Clients", desc: "Worked with startups & enterprises across industries." },
        { title: "Result Driven", desc: "Focused on delivering impactful business outcomes." },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen py-24 px-6 bg-white text-primary text-center overflow-hidden scroll-mt-20"
        >
            {/* Blobs */}
            <FloatingBlob size={180} color="from-primary to-accent" position="top-3 left-5" />
            <FloatingBlob size={200} color="from-accent to-primary" position="bottom-5 right-3" />

            {/* Heading */}
            <motion.h2
                className="text-4xl font-bold mb-6 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Us
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                We craft digital experiences that inspire. Our team specializes in UI/UX,
                branding, and frontend development to bring your vision to life.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                {highlights.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="p-6 rounded-xl shadow-md bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.a
                href="#work"
                className="inline-block mt-12 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform duration-300 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Explore Our Work 
            </motion.a>
        </section>
    );
}
