import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

export default function CTA() {
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Get Started
      </h2>

      <p className="mt-4 text-lg text-slate-400">
        Experience the future of data-driven insurance today
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#1e46b4] via-[#0f6efc] to-[#0f172a] text-white font-semibold shadow-lg hover:brightness-110 text-center flex flex-col items-center gap-4"
      >
        <div className="flex gap-4">
          <img
            src="/output_brand.png"
            alt="Brand Output"
            className="w-32 h-auto rounded shadow-md"
          />
          <img
            src="/output_region.png"
            alt="Region Output"
            className="w-32 h-auto rounded shadow-md"
          />
        </div>
        <span className="mt-4 text-lg">Request a Demo</span>
      </motion.button>
    </PageWrapper>
  );
}
