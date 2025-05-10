import TransformationCore from "../components/animations/TransformationCore";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import {
  Lightbulb,
  BarChart3,
  Users,
  LineChart,
  DollarSign,
  PieChart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const contentList = [
  {
    icon: <BarChart3 className="text-blue-400 w-6 h-6" />,
    title: "Insurance Modeling System: Functional Summary",
    description:
      "This project consists of six core components, each designed to process and analyze insurance data for forecasting, segmentation, and customer modeling.",
  },
  {
    icon: <LineChart className="text-purple-400 w-6 h-6" />,
    title: "Part 1: Data Preprocessing & Aggregation",
    description:
      "Cleans raw insurance data fields. Aggregates monthly claim payouts and premiums by region. Prepares structured datasets for model input.",
  },
  {
    icon: <LineChart className="text-indigo-400 w-6 h-6" />,
    title: "Part 2: Forecasting Payout Ratio per Region",
    description:
      "Builds time series models to forecast payout ratios for each region. Produces monthly payout ratio projections for future periods.",
  },
  {
    icon: <Lightbulb className="text-amber-400 w-6 h-6" />,
    title: "Part 3: Strategic Recommendations per Region",
    description:
      "Identifies regions with high and low projected payout ratios. Tags regions for marketing focus or premium adjustments based on forecasted ratios.",
  },
  {
    icon: <DollarSign className="text-green-400 w-6 h-6" />,
    title: "Part 4: Profitability Analysis by Vehicle Brand and Model",
    description:
      "Groups and analyzes claim and premium totals by vehicle brand and model. Calculates profit and loss ratio for each vehicle group. Flags brands and models based on financial performance.",
  },
  {
    icon: <Users className="text-fuchsia-400 w-6 h-6" />,
    title: "Part 5: Customer Retention / Churn Prediction",
    description:
      "Creates a churn prediction dataset using customer demographics and activity. Trains a machine learning model to classify likely churned customers. Outputs churn probabilities for each customer profile.",
  },
  {
    icon: <PieChart className="text-cyan-400 w-6 h-6" />,
    title: "Part 6: Customer Lifetime Value (CLTV) Modeling",
    description:
      "Computes average monthly profit per customer. Projects customer value over a defined time horizon. Ranks customers by estimated lifetime value.",
  },
];

export default function Solution() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        The AI Solution
      </h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6"
      >
        <div className="p-4 border border-indigo-600 rounded-xl bg-indigo-100/5 text-slate-200">
          Our AI engine parses documents, understands language, and outputs
          clean data structures.
        </div>
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
        {contentList.map((item, i) => (
          <motion.div
            key={i}
            className="p-4 border border-slate-600 rounded-xl bg-slate-800/40 text-slate-200 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        onClick={() => navigate("/impact")}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-6 top-1/3 z-50 px-8 py-5 rounded-xl bg-gradient-to-br from-sky-600 to-purple-700 text-white text-lg font-semibold shadow-xl hover:brightness-110"
      >
        Want to see the impact?
      </motion.button>
    </PageWrapper>
  );
}
