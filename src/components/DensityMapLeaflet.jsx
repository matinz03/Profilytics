// File: src/components/DensityMapLeaflet.jsx
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function getColor(value, maxValue) {
  const ratio = value / maxValue;
  if (ratio < 0.25) return "#ffcccc";
  if (ratio < 0.5) return "#ff4d4d";
  if (ratio < 0.75) return "#9900cc";
  return "#000000";
}

export default function DensityMapLeaflet({
  regionData = [],
  filter = "count",
}) {
  const maxMetric = Math.max(
    ...regionData.map((d) => {
      if (filter === "count") return d.count;
      if (filter === "payoutRatio") return d.payoutRatio;
      return 0;
    })
  );

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-md bg-gradient-to-br from-[#0a192f]/90 via-[#1e3a8a]/80 to-[#0f172a]/90">
      <MapContainer
        center={[41.8719, 12.5674]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
        className="rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {regionData.map(
          ({
            region,
            lat,
            lng,
            count,
            totalPaid,
            totalPremium,
            payoutRatio,
          }) => {
            let metric = filter === "count" ? count : payoutRatio;
            if (!isFinite(metric)) {
              console.warn("Invalid metric for", region, "→", metric);
              return null;
            }
            return (
              <CircleMarker
                key={region + filter}
                center={[lat, lng]}
                radius={Math.min(25, 5 + Math.log(metric + 1) * 5)}
                pathOptions={{
                  color: getColor(metric, maxMetric),
                  fillColor: getColor(metric, maxMetric),
                  fillOpacity: 0.6,
                }}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  opacity={0.9}
                  className="bg-white/90 text-sm rounded p-1"
                >
                  <div>
                    <div>
                      <strong>{region}</strong>
                    </div>
                    <div>Claims: {count}</div>
                    <div>Paid: €{totalPaid.toFixed(2)}</div>
                    <div>Premiums: €{totalPremium.toFixed(2)}</div>
                    <div>Payout Ratio: {payoutRatio.toFixed(2)}</div>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          }
        )}
      </MapContainer>
    </div>
  );
}
