import { motion } from "framer-motion";

const stats = [
  { label: "Active Students", value: "15,000+" },
  { label: "Total Courses", value: "120+" },
  { label: "Expert Mentors", value: "50+" },
  { label: "Job Placements", value: "1,200+" },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-primary/5 rounded-3xl my-10 border border-primary/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-3xl font-black text-primary">{stat.value}</h3>
            <p className="text-sm font-medium opacity-70 mt-1 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;