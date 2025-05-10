import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import { useNavigate } from "react-router-dom";

export default function Technology() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Technology Stack
      </h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
      >
        {[
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "Python NLP",
          "Cloud APIs",
        ].map((tech, i) => (
          <motion.div
            key={tech}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-6 text-lg font-semibold text-white bg-gradient-to-br from-[#1e3a8a]/60 to-[#0a192f]/80 shadow-lg border border-white/10 backdrop-blur-md"
          >
            {tech}
          </motion.div>
        ))}
        <motion.div
          key={"getStarted"}
          onClick={() => navigate("/CTA")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl p-6 text-lg font-semibold text-white bg-gradient-to-br from-[#8a1e8a]/60 to-[#0a192f]/80 shadow-lg border border-white/10 backdrop-blur-md"
        >
          Get Started
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
