import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen py-24 px-6 bg-white text-primary overflow-hidden">
            <div className="absolute top-10 left-5 w-32 h-32 bg-gradient-to-r from-accent to-primary opacity-20 rounded-full animate-slow-float"></div>
            <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-r from-primary to-accent opacity-15 rounded-full animate-slow-float"></div>
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-r from-accent to-primary opacity-10 rounded-full animate-slow-float"></div>

            <h2 className="text-3xl font-bold mb-12 text-center relative z-10">Get in Touch</h2>

            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-8">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <p>Email: info@leo9studio.com</p>
                    <p>Phone: +91 12345-*****</p>
                    <p>Address: Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                        Borivali (W), Mumbai: 400 092.</p>
                </motion.div>

                <motion.form
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 hover:from-accent hover:to-primary transition-transform duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
