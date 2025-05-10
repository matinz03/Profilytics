import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import {
  Sparkles,
  BarChart3,
  Lightbulb,
  DollarSign,
  Users,
  PieChart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const impactList = [
  {
    icon: <BarChart3 className="text-blue-400 w-6 h-6" />,
    description:
      "Provides a clean, structured foundation for analysis and modeling. Reduces manual errors and accelerates decision-making by standardizing data inputs.",
  },
  {
    icon: <BarChart3 className="text-indigo-400 w-6 h-6" />,
    description:
      "Anticipates future risk exposure across regions. Enables proactive financial planning and regional risk management.",
  },
  {
    icon: <Lightbulb className="text-amber-400 w-6 h-6" />,
    description:
      "Optimizes marketing spend by focusing on lower-risk, higher-margin areas. Prevents losses by identifying regions where premiums should be adjusted upward.",
  },
  {
    icon: <DollarSign className="text-green-400 w-6 h-6" />,
    description:
      "Helps refine underwriting guidelines by pinpointing profitable or loss-heavy vehicle types. Supports partnerships and marketing strategies focused on more profitable vehicle brands/models.",
  },
  {
    icon: <Users className="text-fuchsia-400 w-6 h-6" />,
    description:
      "Reduces customer loss by enabling targeted retention strategies. Improves customer engagement through timely interventions.",
  },
  {
    icon: <PieChart className="text-cyan-400 w-6 h-6" />,
    description:
      "Informs acquisition and retention strategies by identifying high- and low-value customers. Aligns marketing budgets with long-term customer profitability.",
  },
];

export default function Impact() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
        The Impact
      </h2>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        <p className="text-lg text-slate-300">
          Faster claims, better underwriting, and increased fraud detection
          accuracy.
        </p>
      </motion.div>

      <motion.div
        onClick={() => navigate("/tech")}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-4 cursor-pointer p-4 border border-sky-600 rounded-xl bg-gradient-to-br from-blue-900/60 to-slate-800/60 text-slate-200 shadow-lg backdrop-blur-md"
      >
        Proceed to get a view of our back-bone technologies
      </motion.div>

      <motion.div
        className="mt-10 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {impactList.map((item, i) => (
          <motion.div
            key={i}
            className="p-4 border border-slate-600 rounded-xl bg-slate-800/40 text-slate-200 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <div className="flex items-center gap-3 mb-2">{item.icon}</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  );
}
