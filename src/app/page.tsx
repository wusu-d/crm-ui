"use client";

import InsightsCard from "./components/InsightCard";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ChartsView from "./components/ChartsView";
import LeadsTable from "./components/LeadsTable";

export default function Home() {
  const [showCharts, setShowCharts] = useState(false);
  return (
    <div>
      <div className="p-3 pb-0">
        <NavBar
          onToggleCharts={() => setShowCharts(!showCharts)}
          showCharts={showCharts}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          showCharts ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="p-3">
          <InsightsCard />
        </div>
        <div className="p-3 pt-0">
          <LeadsTable />
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          showCharts ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <ChartsView />
      </div>
    </div>
  );
}
