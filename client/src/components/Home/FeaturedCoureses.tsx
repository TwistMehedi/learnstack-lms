import { motion } from "framer-motion";
import { Star, Users, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Mastering React & Next.js 14",
    instructor: "Jhankar Mahbub",
    price: "$49.99",
    oldPrice: "$89.99",
    rating: 4.9,
    students: "2.5k",
    duration: "24h 30m",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Full Stack MERN Bootcamp",
    instructor: "Sumit Saha",
    price: "$59.99",
    oldPrice: "$99.99",
    rating: 4.8,
    students: "1.8k",
    duration: "45h 15m",
    image:
      "https://img.freepik.com/free-vector/web-development-programmer-engineering-and-coding-website-concept-vector-illustration_107791-17030.jpg",
    badge: "New",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black italic">Featured Courses</h2>
          <p className="text-base-content/60">
            Hand-picked courses to level up your stack.
          </p>
        </div>
        <button className="btn btn-primary btn-outline rounded-full px-8">
          See All Courses <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <figure className="relative h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`badge border-none font-bold py-3 px-4 ${
                    course.badge === "Bestseller"
                      ? "bg-orange-500 text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {course.badge}
                </span>
              </div>
            </figure>

            <div className="card-body p-6">
              <div className="flex justify-between items-center text-sm opacity-70 mb-2">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {course.duration}
                </span>
                <span className="flex items-center gap-1 text-orange-500 font-bold">
                  <Star size={14} fill="currentColor" /> {course.rating}
                </span>
              </div>

              <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-sm opacity-60">By {course.instructor}</p>

              <div className="flex items-center gap-4 mt-4 mb-6">
                <span className="flex items-center gap-1 text-sm opacity-70">
                  <Users size={16} /> {course.students} Students
                </span>
              </div>

              <div className="divider m-0"></div>

              <div className="card-actions justify-between items-center mt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-primary">
                    {course.price}
                  </span>
                  <span className="text-sm line-through opacity-40">
                    {course.oldPrice}
                  </span>
                </div>
                <button className="btn btn-primary rounded-xl px-6">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
