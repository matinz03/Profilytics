// File: src/pages/Process.jsx
import ExcelUploader from "../components/ExcelUploader";
import DensityMapLeaflet from "../components/DensityMapLeaflet";
import { motion } from "framer-motion";
import PageWrapper from "../sections/PageWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const regionCoordinates = {
  LOMBARDIA: { lat: 45.5856, lng: 9.9306 },
  TOSCANA: { lat: 43.7711, lng: 11.2486 },
  SICILIA: { lat: 37.5999938, lng: 14.0153557 },
  PIEMONTE: { lat: 45.0703, lng: 7.6869 },
  "EMILIA ROMAGNA": { lat: 44.4949, lng: 11.3426 },
  LAZIO: { lat: 41.9028, lng: 12.4964 },
  VENETO: { lat: 45.4343, lng: 12.3388 },
  PUGLIA: { lat: 41.1254, lng: 16.8674 },
  CAMPANIA: { lat: 40.8399, lng: 14.2525 },
  CALABRIA: { lat: 38.905, lng: 16.5944 },
  MARCHE: { lat: 43.6167, lng: 13.5167 },
  UMBRIA: { lat: 43.1122, lng: 12.3888 },
  SARDEGNA: { lat: 39.2306, lng: 9.1192 },
  "TRENTINO ALTO ADIGE": { lat: 46.07, lng: 11.1193 },
  ABRUZZO: { lat: 42.3512, lng: 13.3984 },
  BASILICATA: { lat: 40.6395, lng: 16.5219 },
  MOLISE: { lat: 41.5577, lng: 14.6688 },
  "VALLE D'AOSTA": { lat: 45.7341, lng: 7.3201 },
  "FRIULI VENEZIA GIULIA": { lat: 45.6944, lng: 13.1958 },
  LIGURIA: { lat: 44.4056, lng: 8.9463 },
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function Process() {
  const navigate = useNavigate();
  const [regionStats, setRegionStats] = useState({});
  const [filter, setFilter] = useState("count");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const regionData = Object.entries(regionStats)
    .map(([region, stats]) => {
      const coords = regionCoordinates[region];
      if (!coords) return null;
      const payoutRatio = stats.totalPremium
        ? stats.totalPaid / stats.totalPremium
        : 0;
      return {
        region,
        lat: coords.lat,
        lng: coords.lng,
        count: stats.count,
        totalPaid: stats.totalPaid,
        totalPremium: stats.totalPremium,
        payoutRatio,
        formattedPaid: formatCurrency(stats.totalPaid),
        formattedPremium: formatCurrency(stats.totalPremium),
      };
    })
    .filter(Boolean);

  return (
    <PageWrapper>
      <div className="p-6 rounded-xl shadow-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-[#0a192f]/80 via-[#0f2b4c]/70 to-[#111827]/80">
        <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          AI-Powered Insurance Insights
        </h2>
        <motion.ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-200">
          {[
            "By providing your current data, find out how is your current situation",
          ].map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              {step}
            </motion.li>
          ))}
        </motion.ul>

        <div className="grid md:grid-cols-2 gap-6 items-end">
          <div>
            <label className="block mb-1 font-semibold text-gray-300">
              Start Date:
            </label>
            <input
              type="date"
              className="border p-2 rounded w-full text-slate-400 bg-slate-600"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-300 ">
              End Date:
            </label>
            <input
              type="date"
              className="border p-2 rounded w-full text-slate-400 bg-slate-600"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <ExcelUploader
            onDataParsed={setRegionStats}
            startDate={startDate}
            endDate={endDate}
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-6 items-center">
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === "count"
                  ? "bg-sky-600 border-0 text-white shadow-lg"
                  : "bg-slate-500 text-slate-200 rounded border-0 hover:brightness-200 "
              }`}
              onClick={() => setFilter("count")}
            >
              📊 Claim Count
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === "payoutRatio"
                  ? "bg-indigo-600 text-white shadow-lg border-0"
                  : "bg-slate-600 text-slate-200 rounded border-0 hover:bg-sky-500"
              }`}
              onClick={() => setFilter("payoutRatio")}
            >
              💰 Payout Ratio
            </motion.button>
          </div>

          <motion.button
            onClick={() => navigate("/solution")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-4 px-6 py-4 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-700 text-white font-semibold shadow-lg hover:brightness-110"
          >
            <div className="text-center">
              <div className="text-lg font-semibold">
                More efficiency? More capital?
              </div>
              <div className="text-sm opacity-80">We will show you how</div>
            </div>
          </motion.button>
        </div>

        {regionData.length > 0 && (
          <div className="mt-10">
            <DensityMapLeaflet regionData={regionData} filter={filter} />
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
