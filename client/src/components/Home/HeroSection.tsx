import { motion } from "framer-motion";
import { Variants } from "framer-motion"

const HeroSection = () => {
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-10 md:py-16 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.div
            variants={itemVariants}
            className="badge badge-secondary badge-outline mb-4 px-4 py-3 font-semibold"
          >
            🚀 Admissions Open for New Batch!
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Master the Stack, <br />
            <span className="text-primary italic">Build Your Future.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="py-6 text-base-content/70 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Take your technical skills to the next level with interactive
            projects and expert mentorship. Start your learning journey today!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
              Explore Courses
            </button>
            <button className="btn btn-outline btn-lg hover:bg-primary hover:text-white transition-all">
              Free Seminar
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-4 justify-center md:justify-start opacity-80"
          >
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="avatar border-2 border-base-100">
                  <div className="w-10">
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="student"
                    />
                  </div>
                </div>
              ))}
              <div className="avatar border-2 border-base-100 placeholder">
                <div className="bg-neutral text-neutral-content w-10 text-xs">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium italic">
              Joined by 5000+ students worldwide
            </p>
          </motion.div>
        </div>
        v{" "}
        <motion.div
          className="flex-1 flex justify-center items-center relative order-1 md:order-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          v{" "}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
          <div className="relative group">
            <motion.img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
              className="w-full max-w-[320px] md:max-w-md rounded-3xl shadow-2xl"
              alt="LMS Learning"
              whileHover={{ rotate: 2, scale: 1.02 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-2xl border border-base-200 hidden lg:block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 text-success rounded-xl font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-sm">Successful Graduates</p>
                  <p className="text-xs opacity-60">100% Quality Education</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
