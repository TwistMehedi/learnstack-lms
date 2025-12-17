import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-primary p-8 md:p-16 rounded-[3rem] text-primary-content text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-10 -translate-y-10 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-full translate-x-10 translate-y-10 blur-3xl"></div>

        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Ready to become a <br /> Full-Stack Pro?
        </h2>
        <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
          Join 15,000+ students already learning and building the future. Your
          journey starts today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn btn-secondary btn-lg rounded-full px-10 shadow-xl">
            Get Started Now
          </button>
          <button className="btn btn-outline btn-lg text-white rounded-full px-10 border-white hover:bg-white hover:text-primary">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
