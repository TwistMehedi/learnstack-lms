import { motion } from "framer-motion";
import { Code2, PenTool, Database, Monitor, Cpu, Globe } from "lucide-react";

const categories = [
  {
    name: "Frontend Dev",
    icon: <Monitor className="w-8 h-8" />,
    count: "12 Courses",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "UI/UX Design",
    icon: <PenTool className="w-8 h-8" />,
    count: "08 Courses",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Backend Dev",
    icon: <Database className="w-8 h-8" />,
    count: "10 Courses",
    color: "from-indigo-500 to-purple-400",
  },
  {
    name: "Full Stack",
    icon: <Code2 className="w-8 h-8" />,
    count: "15 Courses",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "Data Science",
    icon: <Cpu className="w-8 h-8" />,
    count: "05 Courses",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Web 3.0",
    icon: <Globe className="w-8 h-8" />,
    count: "04 Courses",
    color: "from-violet-500 to-fuchsia-400",
  },
];

const HomeCategory = () => {
  return (
    <section className="py-20 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">
            Browse by <span className="text-primary">Categories</span>
          </h2>
          <p className="text-base-content/60 mt-2 max-w-xs">
            Find the perfect path to advance your career with our specialized
            tracks.
          </p>
        </div>
        <button className="btn btn-ghost btn-sm text-primary hover:bg-primary/10">
          View All Categories →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-3xl`}
            ></div>

            <div className="relative bg-base-100 border border-base-200 p-8 rounded-3xl shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg shadow-indigo-200/50`}
                >
                  {cat.icon}
                </div>
                <div className="text-base-content/20 group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex h-2 w-2 rounded-full bg-success"></span>
                  <p className="text-sm font-medium opacity-50 uppercase tracking-wider">
                    {cat.count}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategory;
