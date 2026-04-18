"use client";
import { useEffect } from "react";

const TariffCharts = () => {
  useEffect(() => {
    // Dynamically import ApexCharts (browser-only)
    import("apexcharts").then(({ default: ApexCharts }) => {
      /* ── 1. Sector Bar Chart ── */
      const sectorEl = document.getElementById("apex-sector-chart");
      if (sectorEl && !sectorEl.hasChildNodes()) {
        const sectorChart = new ApexCharts(sectorEl, {
          chart: {
            type: "bar",
            height: 380,
            toolbar: { show: false },
            animations: { enabled: true, speed: 600 },
            background: "transparent",
            fontFamily: "Inter, sans-serif",
          },
          series: [
            {
              name: "MTD Return (%)",
              data: [4.1, 2.3, 1.8, -1.2, -4.8, -8.1, -9.4],
            },
          ],
          xaxis: {
            categories: [
              "Utilities",
              "Healthcare",
              "Energy",
              "Industrials",
              "S&P 500",
              "Tech HW",
              "Consumer Disc.",
            ],
            labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
            axisBorder: { show: false },
            axisTicks: { show: false },
          },
          yaxis: {
            labels: {
              formatter: (v: number) => `${v > 0 ? "+" : ""}${v}%`,
              style: { colors: "#94a3b8", fontSize: "12px" },
            },
          },
          colors: [
            "#22c55e", "#22c55e", "#4ade80",
            "#fbbf24", "#6366f1", "#f87171", "#ef4444",
          ],
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 6,
              columnWidth: "60%",
              dataLabels: { position: "top" },
            },
          },
          dataLabels: {
            enabled: true,
            formatter: (v: number) => `${v > 0 ? "+" : ""}${v}%`,
            style: { fontSize: "11px", fontWeight: "bold", colors: ["#fff"] },
            offsetY: -22,
          },
          legend: { show: false },
          grid: {
            borderColor: "#334155",
            strokeDashArray: 4,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: false } },
          },
          tooltip: {
            theme: "dark",
            y: { formatter: (v: number) => `${v > 0 ? "+" : ""}${v}%` },
          },
          title: {
            text: "S&P 500 Sector Returns — April 2026 (Month-to-Date %)",
            align: "left",
            style: { fontSize: "13px", fontWeight: "600", color: "#64748b" },
          },
          subtitle: {
            text: "Source: WealthPilot Analysis | Data as of April 19, 2026",
            align: "left",
            style: { fontSize: "11px", color: "#94a3b8" },
          },
          annotations: {
            yaxis: [
              {
                y: 0,
                borderColor: "#64748b",
                borderWidth: 2,
                strokeDashArray: 0,
              },
            ],
          },
        });
        sectorChart.render();
      }

      /* ── 2. Recovery Line Chart ── */
      const recoveryEl = document.getElementById("apex-recovery-chart");
      if (recoveryEl && !recoveryEl.hasChildNodes()) {
        const recoveryChart = new ApexCharts(recoveryEl, {
          chart: {
            type: "line",
            height: 340,
            toolbar: { show: false },
            animations: { enabled: true, speed: 800 },
            background: "transparent",
            fontFamily: "Inter, sans-serif",
          },
          series: [
            {
              name: "2018 Trade War Recovery",
              data: [100, 93, 88, 91, 97, 102, 107, 111, 115, 118, 122],
            },
            {
              name: "2026 Current Trajectory",
              data: [100, 94, 90, 92, null, null, null, null, null, null, null],
            },
          ],
          xaxis: {
            categories: [
              "T+0", "T+15d", "T+30d", "T+45d", "T+60d",
              "T+75d", "T+90d", "T+105d", "T+120d", "T+150d", "T+180d",
            ],
            labels: { style: { colors: "#94a3b8", fontSize: "11px" } },
            axisBorder: { show: false },
            axisTicks: { show: false },
          },
          yaxis: {
            min: 84,
            max: 125,
            labels: {
              formatter: (v: number) => v.toFixed(0),
              style: { colors: "#94a3b8", fontSize: "12px" },
            },
            title: {
              text: "Index (100 = Shock Date)",
              style: { color: "#94a3b8", fontSize: "11px" },
            },
          },
          colors: ["#f97316", "#006bff"],
          stroke: {
            width: [3, 3],
            curve: "smooth",
            dashArray: [0, 6],
          },
          markers: {
            size: [0, 5],
            colors: ["#f97316", "#006bff"],
            strokeColors: "#fff",
            strokeWidth: 2,
          },
          grid: {
            borderColor: "#334155",
            strokeDashArray: 4,
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            labels: { colors: "#94a3b8" },
          },
          tooltip: {
            theme: "dark",
            shared: true,
            y: { formatter: (v: number | null) => v !== null ? v.toFixed(1) : "—" },
          },
          title: {
            text: "S&P 500 Tariff Shock Recovery Cycle (Indexed to 100)",
            align: "left",
            style: { fontSize: "13px", fontWeight: "600", color: "#64748b" },
          },
          subtitle: {
            text: "Illustrative pattern — not predictive. Past performance ≠ future results.",
            align: "left",
            style: { fontSize: "11px", color: "#94a3b8" },
          },
          annotations: {
            yaxis: [
              {
                y: 100,
                borderColor: "#64748b",
                borderWidth: 1,
                strokeDashArray: 4,
                label: {
                  text: "Baseline (100)",
                  style: { color: "#94a3b8", background: "transparent", fontSize: "10px" },
                },
              },
            ],
            xaxis: [
              {
                x: "T+45d",
                borderColor: "#006bff",
                borderWidth: 1,
                strokeDashArray: 4,
                label: {
                  text: "Today",
                  style: { color: "#006bff", background: "transparent", fontSize: "10px" },
                },
              },
            ],
          },
        });
        recoveryChart.render();
      }
    });
  }, []);

  return null; // Renders nothing — ApexCharts injects directly into the blog HTML divs
};

export default TariffCharts;
