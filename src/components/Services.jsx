import { motion } from "framer-motion";
import FloatingBlob from "./FloatingBlob";

export default function Services() {
    const services = [
        {
            title: "UI/UX Design",
            desc: "We design intuitive and visually appealing interfaces that focus on user experience. From wireframes to prototypes, we make sure every design feels smooth and user-friendly."
        },
        {
            title: "Frontend Development",
            desc: "We develop fast, responsive, and scalable web applications using modern frameworks. Our clean code ensures performance, accessibility, and a seamless user experience."
        },
        {
            title: "Branding",
            desc: "We build unique brand identities that stand out. From logos to complete design systems, we help your business establish a strong and consistent visual presence."
        }
    ];

    return (
        <section
            id="work"
            className="relative min-h-screen py-24 px-6 bg-white text-primary text-center overflow-hidden scroll-mt-20"
        >
            <FloatingBlob size={160} color="from-primary to-accent" position="top-5 right-3" />
            <FloatingBlob size={180} color="from-accent to-primary" position="bottom-5 left-3" />

            <motion.h2
                className="text-4xl font-bold mb-12 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Services
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
