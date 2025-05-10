import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
export default function CTA() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold  text-slate-200">Get Started</h2>
      <p className="mt-4  text-slate-400">
        Experience the future of data-driven insurance today.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-gradient-to-br from-[#1e46b4] via-[#0f6efc] to-[#0f172a] text-slate-200 rounded"
      >
        Request a Demo
      </motion.button>
    </PageWrapper>
  );
}
