import { motion } from "framer-motion";

export default function TransformationCore() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="overflow-visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#4F46E5"
          strokeWidth="5"
          fill="transparent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M60,100 Q100,40 140,100"
          stroke="#9333EA"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M60,100 Q100,160 140,100"
          stroke="#9333EA"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>

      <motion.h2
        className="mt-4 text-xl font-semibold text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        AI transforming data into insights
      </motion.h2>
    </div>
  );
}
