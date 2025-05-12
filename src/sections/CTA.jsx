import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

export default function CTA() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Get Started
        </h2>

        <p className="text-xl text-slate-400 mb-8 max-w-xl">
          Experience the future of data-driven insurance today
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#1e46b4] via-[#0f6efc] to-[#0f172a] text-white font-semibold shadow-xl hover:brightness-110 flex flex-col items-center gap-6 cursor-pointer"
        >
          <div className="flex gap-8">
            <img
              src="/output_brand.png"
              alt="Brand Output"
              className="w-40 h-auto rounded shadow-md"
            />
            <img
              src="/output_region.png"
              alt="Region Output"
              className="w-40 h-auto rounded shadow-md"
            />
          </div>
          <span className="text-2xl mt-4">🚀 Request a Demo</span>
        </motion.button>
      </div>
    </PageWrapper>
  );
}
