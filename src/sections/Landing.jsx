import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center text-center h-[80vh]">
        <h1 className="text-4xl font-bold text-slate-200">
          Welcome to AI-Powered Data Clarity
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-slate-400 text-lg"
        >
          Transforming unstructured insurance data into actionable insights.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-xl text-slate-300 max-w-xl"
        >
          At Profilytics we create the best paths for increasing the efficiency
          of your insurance institution
        </motion.p>

        <motion.button
          onClick={() => navigate("/process")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg hover:brightness-110"
        >
          Click here to see HOW
        </motion.button>
      </div>
    </PageWrapper>
  );
}
