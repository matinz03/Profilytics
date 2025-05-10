// File: src/components/ExcelUploader.jsx
import * as XLSX from "xlsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";

const regionNameFixes = {
  LOMBARDY: "LOMBARDIA",
  "EMILIA-ROMAGNA": "EMILIA ROMAGNA",
  "FRIULI-VENEZIA-GIULIA": "FRIULI VENEZIA GIULIA",
  "TRENTINO-ALTO-ADIGE": "TRENTINO ALTO ADIGE",
  "VALLE D'AOSTA": "VALLE D'AOSTA",
  SARDINIA: "SARDEGNA",
  APULIA: "PUGLIA",
};

const parseDateUTC = (val) => {
  if (val instanceof Date && !isNaN(val)) {
    return new Date(Date.UTC(val.getFullYear(), val.getMonth(), val.getDate()));
  }
  if (typeof val === "string" && val.includes("/")) {
    const [dRaw, mRaw, yRaw] = val.split("/");
    const d = Number(dRaw);
    const m = Number(mRaw);
    const y = yRaw.length === 2 ? 2000 + Number(yRaw) : Number(yRaw);
    const parsed = new Date(Date.UTC(y, m - 1, d));
    return isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
};

const normalizeDateUTC = (d) => {
  if (!d) return null;
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
};

export default function ExcelUploader({ onDataParsed, startDate, endDate }) {
  const [processedCount, setProcessedCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [fileData, setFileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array", cellDates: true });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setFileData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleProcess = () => {
    if (!fileData) return;
    setIsLoading(true);

    const regionStats = {};
    const startUTC = startDate ? normalizeDateUTC(new Date(startDate)) : null;
    const endUTC = endDate ? normalizeDateUTC(new Date(endDate)) : null;

    let processed = 0;
    let skipped = 0;

    fileData.forEach((row) => {
      const rawRegion = (row.CLAIM_REGION || "").trim().toUpperCase();
      const region = regionNameFixes[rawRegion] || rawRegion;
      const claimPaid = parseFloat(row.CLAIM_AMOUNT_PAID) || 0;
      const premiumPaid = parseFloat(row.PREMIUM_AMOUNT_PAID) || 0;

      const claimDateUTC = parseDateUTC(row.CLAIM_DATE);

      if (
        ((startUTC || endUTC) && !claimDateUTC) || 
        (startUTC && claimDateUTC && claimDateUTC < startUTC) ||
        (endUTC && claimDateUTC && claimDateUTC > endUTC)
      ) {
        skipped++;
        return;
      }

      if (!region || (!row.CLAIM_REGION && !row.CLAIM_DATE)) {
        skipped++;
        return;
      }

      if (!regionStats[region]) {
        regionStats[region] = {
          count: 0,
          totalPaid: 0,
          totalPremium: 0,
        };
      }

      regionStats[region].count += 1;
      regionStats[region].totalPaid += claimPaid;
      regionStats[region].totalPremium += premiumPaid;
      processed++;
    });

    setTimeout(() => {
      setProcessedCount(processed);
      setSkippedCount(skipped);
      setIsLoading(false);
      onDataParsed(regionStats);
    }, 500);
  };

  return (
    <div className="p-4">
      <label className="block mb-2 font-semibold text-slate-200 ">
        Upload Excel File:
      </label>
      <input
        className="text-slate-300 bg-slate-700 rounded-3xl w-fit py-1.5 cursor-pointer "
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />

      <div className="mt-2 text-sm flex flex-col gap-1 text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-400 w-4 h-4" />
          <span>Processed Rows: {processedCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-yellow-400 w-4 h-4" />
          <span>Skipped Rows: {skippedCount}</span>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleProcess}
        disabled={!fileData || isLoading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Send Data"}
      </motion.button>
    </div>
  );
}
