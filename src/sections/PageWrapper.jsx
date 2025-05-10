import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-8 bg-gradient-to-br from-[#0a192f] via-[#112e4e] to-[#0f172a]"
    >
      {children}
    </motion.div>
  );
}
