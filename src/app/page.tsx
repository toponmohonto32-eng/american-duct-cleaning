"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronUp,
  Menu,
  X,
  AlertTriangle,
  Shield,
  FlaskConical,
  Truck,
  Leaf,
  Flame,
  Droplets,
  HardHat,
} from "lucide-react";

const LOGO_URL = "https://i.ibb.co/LDkBq16F/Untitled-design.png";

const SECTIONS = [
  { id: "sec1", num: "1", title: "Identification", short: "Identification" },
  { id: "sec2", num: "2", title: "Hazards identification", short: "Hazards" },
  { id: "sec3", num: "3", title: "Composition", short: "Composition" },
  { id: "sec4", num: "4", title: "First aid measures", short: "First Aid" },
  { id: "sec5", num: "5", title: "Firefighting", short: "Firefighting" },
  { id: "sec6", num: "6", title: "Accidental release", short: "Accidental" },
  { id: "sec7", num: "7", title: "Handling & Storage", short: "Handling" },
  { id: "sec8", num: "8", title: "Exposure controls", short: "Exposure" },
  { id: "sec9", num: "9", title: "Physical properties", short: "Physical" },
  { id: "sec10", num: "10", title: "Stability", short: "Stability" },
  { id: "sec11", num: "11", title: "Toxicological", short: "Toxicological" },
  { id: "sec12", num: "12", title: "Ecological", short: "Ecological" },
  { id: "sec13", num: "13", title: "Disposal", short: "Disposal" },
  { id: "sec14", num: "14", title: "Transport", short: "Transport" },
  { id: "sec15", num: "15", title: "Regulatory", short: "Regulatory" },
  { id: "sec16", num: "16", title: "Other information", short: "Other" },
];

const sectionIcons: Record<string, React.ReactNode> = {
  "1": <Shield className="w-4 h-4" />,
  "2": <AlertTriangle className="w-4 h-4" />,
  "3": <FlaskConical className="w-4 h-4" />,
  "4": <HardHat className="w-4 h-4" />,
  "5": <Flame className="w-4 h-4" />,
  "6": <Droplets className="w-4 h-4" />,
  "7": <HardHat className="w-4 h-4" />,
  "8": <Shield className="w-4 h-4" />,
  "9": <FlaskConical className="w-4 h-4" />,
  "10": <AlertTriangle className="w-4 h-4" />,
  "11": <AlertTriangle className="w-4 h-4" />,
  "12": <Leaf className="w-4 h-4" />,
  "13": <Leaf className="w-4 h-4" />,
  "14": <Truck className="w-4 h-4" />,
  "15": <Shield className="w-4 h-4" />,
  "16": <Shield className="w-4 h-4" />,
};

function SectionHeader({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center gap-4 mb-6 group">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-2 bg-gradient-to-br from-slate-800 to-slate-900 text-white px-3.5 py-1.5 rounded-full shadow-lg shadow-slate-900/20">
          <span className="text-xs font-mono">{sectionIcons[num]}</span>
          <span className="text-xs font-bold tracking-wide">SECTION {num}</span>
        </div>
        <h2 className="text-base font-bold text-slate-800 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
          {title}
        </h2>
      </div>
    </div>
  );
}

function SubSection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
      <div className="w-1 h-4 rounded-full bg-emerald-500" />
      {children}
    </h3>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <tr className="border-b border-slate-100 transition-all duration-200 hover:bg-emerald-50/30 hover:border-l-2 hover:border-l-emerald-400">
      <td className="py-2.5 pr-4 text-sm font-medium text-slate-600 w-[240px] align-top bg-slate-50/80 border-r-2 border-r-slate-200">
        {label}
      </td>
      <td className="py-2.5 text-sm text-slate-800 pl-4">{value}</td>
    </tr>
  );
}

function ParaBlock({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-slate-700 leading-relaxed mb-2">{children}</p>
  );
}

function SdsTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <Table>
        {children}
      </Table>
    </div>
  );
}

function TableHeadStyled({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TableHead
      className={`text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-l-2 border-l-emerald-400 ${className || ""}`}
    >
      {children}
    </TableHead>
  );
}

function DataCell({
  children,
  className,
  highlight,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <TableCell
      className={`text-xs text-slate-700 px-3 py-2 ${highlight ? "font-semibold bg-slate-50" : ""} ${className || ""}`}
    >
      {children}
    </TableCell>
  );
}

function KVRow({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status?: "determined" | "applicable" | "relevant" | "available";
}) {
  const needsWarning = status && ["determined", "applicable", "relevant", "available"].includes(status);
  return (
    <TableRow className="border-b border-slate-100 transition-all duration-200 hover:bg-slate-50/50 hover:border-l-2 hover:border-l-emerald-300">
      <DataCell highlight>{label}</DataCell>
      <DataCell>
        <span className="flex items-center gap-1.5">
          {needsWarning && (
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
          )}
          {value}
        </span>
      </DataCell>
    </TableRow>
  );
}

export default function SafetyDataSheet() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("sec1");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const sectionEls = document.querySelectorAll("[data-section]");
      let current = "sec1";
      sectionEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          current = el.getAttribute("data-section") || "sec1";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
      {/* ===== READING PROGRESS BAR ===== */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* ===== TOP STICKY NAV ===== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-[pulseGlow_3s_ease-in-out_infinite]" />
              <img
                src={LOGO_URL}
                alt="ADDIMAX Logo"
                className="relative h-10 w-auto rounded-lg drop-shadow-lg"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-slate-800 leading-tight">
                Safety Data Sheet
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                ADDIMAX Lithium Hydroxide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Safety Data Sheet
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-40 blur-sm" />
                <img
                  src={LOGO_URL}
                  alt="ADDIMAX Logo"
                  className="relative h-11 w-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">ADDIMAX</p>
                <p className="text-xs text-slate-500">Lithium Hydroxide</p>
              </div>
            </div>
            <nav className="p-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors mb-0.5 ${
                    activeSection === s.id
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-200/60 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {s.num}
                  </span>
                  {s.short}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full flex gap-6">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-16">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-xl opacity-30 blur-md animate-[pulseGlow_3s_ease-in-out_infinite]" />
                    <div className="relative bg-white rounded-xl p-1.5 shadow-lg">
                      <img
                        src={LOGO_URL}
                        alt="ADDIMAX Logo"
                        className="h-14 w-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Table of Contents
                </p>
              </div>
              <nav className="p-2 max-h-[calc(100vh-220px)] overflow-y-auto">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-2 transition-all duration-200 mb-0.5 ${
                      activeSection === s.id
                        ? "bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-md shadow-slate-900/15"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
                        activeSection === s.id
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {s.num}
                    </span>
                    {s.short}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="flex-1 min-w-0">
          {/* Hero Banner */}
          <div className="relative rounded-2xl mb-8 p-[2px] bg-[length:300%_300%] animate-[gradientBorder_4s_ease_infinite] [background-image:linear-gradient(135deg,#10b981,#3b82f6,#8b5cf6,#10b981,#3b82f6,#8b5cf6,#10b981)]">
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 w-32 h-32 border border-white/5 rounded-full" />
              <div className="absolute bottom-8 right-20 w-20 h-20 border border-white/5 rounded-full" />

              {/* DANGER Stamp */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                <div className="relative border-[3px] border-red-500 rounded-lg px-3 py-1.5 transform rotate-[12deg] shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-[pulseGlow_2s_ease-in-out_infinite]">
                  <span className="text-red-500 font-black text-sm md:text-base tracking-[0.15em] leading-none block">DANGER</span>
                  <span className="text-red-500/70 text-[8px] md:text-[9px] tracking-[0.2em] font-bold leading-none block mt-0.5">HAZARDOUS</span>
                </div>
              </div>

              {/* GHS Pictograms */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-10">
                {/* GHS05 - Corrosion */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-md shadow-lg flex flex-col items-center justify-center border-2 border-red-300">
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <div className="w-4 h-3.5 border-2 border-gray-800 rounded-t-full relative">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-[1px]">
                        <div className="w-0 h-0 border-l-[2px] border-r-[2px] border-b-[3px] border-transparent border-b-gray-800" />
                        <div className="w-0 h-0 border-l-[2px] border-r-[2px] border-b-[3px] border-transparent border-b-gray-800" />
                      </div>
                    </div>
                  </div>
                  <span className="text-[6px] md:text-[7px] text-gray-600 font-bold mt-0.5">GHS05</span>
                </div>
                {/* GHS07 - Exclamation Mark */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-md shadow-lg flex flex-col items-center justify-center border-2 border-red-300">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-3 bg-gray-800 rounded-full" />
                    <div className="w-1 h-1 bg-gray-800 rounded-full mt-1" />
                  </div>
                  <span className="text-[6px] md:text-[7px] text-gray-600 font-bold mt-1">GHS07</span>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 rounded-3xl opacity-50 blur-lg animate-[pulseGlow_3s_ease-in-out_infinite]" />
                    <div className="relative bg-white rounded-2xl p-5 shadow-2xl shadow-emerald-500/10">
                      <img
                        src={LOGO_URL}
                        alt="ADDIMAX Logo"
                        className="h-20 md:h-24 w-auto drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0 pr-16 md:pr-40 pb-16 md:pb-20">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    Material Safety Data Sheet
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    ADDIMAX Lithium Hydroxide
                  </h1>
                  <p className="text-slate-400 text-sm mb-4">
                    According to Regulation (EC) No. 1907/2006 (REACH), Annex II
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 max-w-full">
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30 animate-[pulseGlow_3s_ease-in-out_infinite] text-[10px] sm:text-xs break-inside-avoid">
                      H302 - Harmful if swallowed
                    </Badge>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30 animate-[pulseGlow_3s_ease-in-out_infinite_1s] text-[10px] sm:text-xs break-inside-avoid">
                      H314 - Causes severe skin burns
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 animate-[pulseGlow_3s_ease-in-out_infinite_2s] text-[10px] sm:text-xs break-inside-avoid">
                      H318 - Serious eye damage
                    </Badge>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Supplier Quick Info */}
          <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-5 mb-6 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-30 blur-sm" />
                    <img
                      src={LOGO_URL}
                      alt="ADDIMAX"
                      className="relative h-8 w-auto rounded-lg"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Supplier
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-800">IPEC Addimax Petroleum Products FZE</p>
                <p className="text-xs text-slate-500 mt-1">
                  FZJOA10WS26, Jebel Ali Freezone, Dubai DU 16888, United Arab Emirates
                </p>
              </div>

            </div>
          </div>

          {/* Key Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-[floatUp_3s_ease-in-out_infinite]">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Physical State</span>
              </div>
              <p className="text-sm font-bold text-slate-800 pl-[42px]">Solid</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-slate-300 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-[floatUp_3s_ease-in-out_infinite_0.5s]">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-slate-400" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Colour</span>
              </div>
              <p className="text-sm font-bold text-slate-800 pl-[42px]">White</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-blue-300 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-[floatUp_3s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Odour</span>
              </div>
              <p className="text-sm font-bold text-slate-800 pl-[42px]">Odourless</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-orange-300 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-[floatUp_3s_ease-in-out_infinite_1.5s]">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Flammability</span>
              </div>
              <p className="text-sm font-bold text-slate-800 pl-[42px]">Non-combustible</p>
            </div>
          </div>

          {/* ======== SECTION 1 ======== */}
          <div data-section="sec1" id="sec1" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="1" title="Identification of the substance/mixture and of the company/undertaking" />

              <SubSection>1.1 Product identifier</SubSection>
              <table className="w-full mb-4">
                <tbody>
                  <InfoRow label="Identification of the substance" value="Lithium hydroxide" />
                  <InfoRow label="CAS number" value="1310-65-2" />
                  <InfoRow label="Alternative name(s)" value="lithium hydroxide" />
                  <InfoRow label="Article number" value="A0012009" />
                </tbody>
              </table>

              <SubSection>1.2 Relevant identified uses of the substance or mixture and uses advised against</SubSection>
              <table className="w-full mb-4">
                <tbody>
                  <InfoRow label="Relevant identified uses" value="General use" />
                  <InfoRow label="Uses advised against" value="Do not use for squirting or spraying. Do not use for products which come into direct contact with the skin." />
                </tbody>
              </table>

              <SubSection>1.3 Details of the supplier of the safety data sheet</SubSection>
              <div className="pl-4 text-sm text-slate-700 leading-relaxed mb-4">
                <p className="font-bold">IPEC Addimax Petroleum Products FZE</p>
                <p>FZJOA10WS26, Jebel Ali Freezone, Dubai DU 16888,</p>
                <p>United Arab Emirates.</p>
              </div>


            </div>
          </div>

          {/* ======== SECTION 2 ======== */}
          <div data-section="sec2" id="sec2" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="2" title="Hazards identification" />

              <SubSection>2.1 Classification of the substance or mixture</SubSection>
              <ParaBlock>Classification acc. to GHS</ParaBlock>

              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Section</TableHeadStyled>
                    <TableHeadStyled>Hazard class</TableHeadStyled>
                    <TableHeadStyled>Category</TableHeadStyled>
                    <TableHeadStyled>Hazard class &amp; category</TableHeadStyled>
                    <TableHeadStyled>Hazard statement</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>3.1O</DataCell>
                    <DataCell>acute toxicity (oral)</DataCell>
                    <DataCell>4</DataCell>
                    <DataCell>Acute Tox. 4</DataCell>
                    <DataCell><Badge variant="outline" className="border-red-200 bg-red-50 text-red-700 text-[10px]">H302</Badge></DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>3.2</DataCell>
                    <DataCell>skin corrosion/irritation</DataCell>
                    <DataCell>1B</DataCell>
                    <DataCell>Skin Corr. 1B</DataCell>
                    <DataCell><Badge variant="outline" className="border-orange-200 bg-orange-50 text-orange-700 text-[10px]">H314</Badge></DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>3.3</DataCell>
                    <DataCell>serious eye damage/eye irritation</DataCell>
                    <DataCell>1</DataCell>
                    <DataCell>Eye Dam. 1</DataCell>
                    <DataCell><Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700 text-[10px]">H318</Badge></DataCell>
                  </TableRow>
                </TableBody>
              </SdsTable>
              <ParaBlock>For full text of abbreviations: see SECTION 16.</ParaBlock>

              <SubSection>The most important adverse physicochemical, human health and environmental effects</SubSection>
              <ParaBlock>Skin corrosion produces an irreversible damage to the skin; namely, visible necrosis through the epidermis and into the dermis.</ParaBlock>

              <SubSection>2.2 Label elements</SubSection>
              <ParaBlock><span className="font-semibold">Labelling</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Signal word:</span> danger</li>
                <li>- <span className="font-semibold">Pictograms:</span> GHS05, GHS07</li>
              </ul>

              <ParaBlock>- <span className="font-semibold">Hazard statements</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-8">
                <li>H302 Harmful if swallowed.</li>
                <li>H314 Causes severe skin burns and eye damage.</li>
              </ul>

              <ParaBlock>- <span className="font-semibold">Precautionary statements</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-8">
                <li>P260 Do not breathe dust/fume/gas/mist/vapours/spray.</li>
                <li>P280 Wear protective gloves/protective clothing/eye protection/face protection/hearing protection/....</li>
                <li>P301+P330+P331 IF SWALLOWED: rinse mouth. Do NOT induce vomiting.</li>
                <li>P303+P361+P353 IF ON SKIN (or hair): Take off immediately all contaminated clothing. Rinse skin with water or shower.</li>
                <li>P305+P351+P338 IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing.</li>
                <li>P310 Immediately call a POISON CENTER/doctor.</li>
                <li>P501 Dispose of contents/container to industrial combustion plant.</li>
              </ul>

              <SubSection>2.3 Other hazards</SubSection>
              <ParaBlock>Results of PBT and vPvB assessment</ParaBlock>
              <ParaBlock>According to the results of its assessment, this substance is not a PBT or a vPvB.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 3 ======== */}
          <div data-section="sec3" id="sec3" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="3" title="Composition/information on ingredients" />
              <SubSection>3.1 Substances</SubSection>
              <table className="w-full mb-4">
                <tbody>
                  <InfoRow label="Name of substance" value="Lithium hydroxide" />
                </tbody>
              </table>
              <ParaBlock>Identifiers</ParaBlock>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled />
                    <TableHeadStyled />
                    <TableHeadStyled>Specific Conc. Limits</TableHeadStyled>
                    <TableHeadStyled>M-Factors</TableHeadStyled>
                    <TableHeadStyled>ATE</TableHeadStyled>
                    <TableHeadStyled>Exposure route</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell colSpan={2} highlight>CAS No</DataCell>
                    <DataCell>1310-65-2</DataCell><DataCell /><DataCell /><DataCell />
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell colSpan={2} highlight>EC No</DataCell>
                    <DataCell>215-183-4</DataCell><DataCell /><DataCell /><DataCell />
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell /><DataCell /><DataCell>-</DataCell><DataCell>-</DataCell><DataCell>500 mg/kg</DataCell><DataCell>oral</DataCell>
                  </TableRow>
                </TableBody>
              </SdsTable>
              <table className="w-full mb-4">
                <tbody>
                  <InfoRow label="Molecular formula" value="HLiO" />
                  <InfoRow label="Molar mass" value="23.95 g/mol" />
                </tbody>
              </table>
            </div>
          </div>

          {/* ======== SECTION 4 ======== */}
          <div data-section="sec4" id="sec4" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="4" title="First aid measures" />
              <SubSection>4.1 Description of first aid measures</SubSection>
              <ParaBlock><span className="font-semibold">General notes</span></ParaBlock>
              <ParaBlock>Do not leave affected person unattended. Remove victim out of the danger area. Keep affected person warm, still and covered. Take off immediately all contaminated clothing. In all cases of doubt, or when symptoms persist, seek medical advice. In case of unconsciousness place person in the recovery position. Never give anything by mouth.</ParaBlock>
              <ParaBlock><span className="font-semibold">Following inhalation</span></ParaBlock>
              <ParaBlock>If breathing is irregular or stopped, immediately seek medical assistance and start first aid actions. In case of respiratory tract irritation, consult a physician. Provide fresh air.</ParaBlock>
              <ParaBlock><span className="font-semibold">Following skin contact</span></ParaBlock>
              <ParaBlock>Rinse skin with water/shower.</ParaBlock>
              <ParaBlock><span className="font-semibold">Following eye contact</span></ParaBlock>
              <ParaBlock>Remove contact lenses, if present and easy to do. Continue rinsing. Irrigate copiously with clean, fresh water for at least 10 minutes, holding the eyelids apart.</ParaBlock>
              <ParaBlock><span className="font-semibold">Following ingestion</span></ParaBlock>
              <ParaBlock>Rinse mouth with water (only if the person is conscious). Do NOT induce vomiting.</ParaBlock>
              <SubSection>4.2 Most important symptoms and effects, both acute and delayed</SubSection>
              <ParaBlock>Symptoms and effects are not known to date.</ParaBlock>
              <SubSection>4.3 Indication of any immediate medical attention and special treatment needed</SubSection>
              <ParaBlock>none</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 5 ======== */}
          <div data-section="sec5" id="sec5" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="5" title="Firefighting measures" />
              <SubSection>5.1 Extinguishing media</SubSection>
              <ParaBlock><span className="font-semibold">Suitable extinguishing media</span></ParaBlock>
              <ParaBlock>Water, Foam, Alcohol resistant foam, ABC-powder</ParaBlock>
              <ParaBlock><span className="font-semibold">Unsuitable extinguishing media</span></ParaBlock>
              <ParaBlock>Water jet</ParaBlock>
              <SubSection>5.2 Special hazards arising from the substance or mixture</SubSection>
              <SubSection>5.3 Advice for firefighters</SubSection>
              <ParaBlock>In case of fire and/or explosion do not breathe fumes. Co-ordinate firefighting measures to the fire surroundings. Do not allow firefighting water to enter drains or water courses. Collect contaminated firefighting water separately. Fight fire with normal precautions from a reasonable distance.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 6 ======== */}
          <div data-section="sec6" id="sec6" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="6" title="Accidental release measures" />
              <SubSection>6.1 Personal precautions, protective equipment and emergency procedures</SubSection>
              <ParaBlock><span className="font-semibold">For non-emergency personnel</span></ParaBlock>
              <ParaBlock>Remove persons to safety.</ParaBlock>
              <ParaBlock><span className="font-semibold">For emergency responders</span></ParaBlock>
              <ParaBlock>Wear breathing apparatus if exposed to vapours/dust/spray/gases.</ParaBlock>
              <SubSection>6.2 Environmental precautions</SubSection>
              <ParaBlock>Keep away from drains, surface and ground water. Retain contaminated washing water and dispose of it.</ParaBlock>
              <SubSection>6.3 Methods and material for containment and cleaning up</SubSection>
              <ParaBlock><span className="font-semibold">Advice on how to contain a spill</span></ParaBlock>
              <ParaBlock>Covering of drains, Take up mechanically</ParaBlock>
              <ParaBlock><span className="font-semibold">Advice on how to clean up a spill</span></ParaBlock>
              <ParaBlock>Take up mechanically.</ParaBlock>
              <ParaBlock><span className="font-semibold">Other information relating to spills and releases</span></ParaBlock>
              <ParaBlock>Place in appropriate containers for disposal. Ventilate affected area.</ParaBlock>
              <SubSection>6.4 Reference to other sections</SubSection>
              <ParaBlock>Personal protective equipment: see section 8. Incompatible materials: see section 10. Disposal considerations: see section 13.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 7 ======== */}
          <div data-section="sec7" id="sec7" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="7" title="Handling and storage" />
              <SubSection>7.1 Precautions for safe handling</SubSection>
              <ParaBlock><span className="font-semibold">Recommendations</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Measures to prevent fire as well as aerosol and dust generation</span></li>
              </ul>
              <ParaBlock>Use local and general ventilation. Take precautionary measures against static discharge. Use only in well-ventilated areas. Ground/bond container and receiving equipment.</ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Specific notes/details</span></li>
              </ul>
              <ParaBlock>Dust deposits may accumulate on all deposition surfaces in a technical room.</ParaBlock>
              <ParaBlock><span className="font-semibold">Advice on general occupational hygiene</span></ParaBlock>
              <ParaBlock>Wash hands after use. Do not eat, drink and smoke in work areas. Remove contaminated clothing and protective equipment before entering eating areas. Never keep food or drink in the vicinity of chemicals. Never place chemicals in containers that are normally used for food or drink. Keep away from food, drink and animal feedingstuffs.</ParaBlock>
              <SubSection>7.2 Conditions for safe storage, including any incompatibilities</SubSection>
              <ParaBlock><span className="font-semibold">Managing of associated risks</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Explosive atmospheres</span></li>
              </ul>
              <ParaBlock>Removal of dust deposits.</ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Ventilation requirements</span></li>
              </ul>
              <ParaBlock>Use local and general ventilation.</ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Packaging compatibilities</span></li>
              </ul>
              <ParaBlock>Only packagings which are approved (e.g. acc. to ADR) may be used.</ParaBlock>
              <SubSection>7.3 Specific end use(s)</SubSection>
              <ParaBlock>See section 16 for a general overview.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 8 ======== */}
          <div data-section="sec8" id="sec8" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="8" title="Exposure controls/personal protection" />
              <SubSection>8.1 Control parameters</SubSection>
              <ParaBlock>Occupational exposure limit values (Workplace Exposure Limits)</ParaBlock>

              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Country</TableHeadStyled>
                    <TableHeadStyled>Name of agent</TableHeadStyled>
                    <TableHeadStyled>CAS No</TableHeadStyled>
                    <TableHeadStyled>Identifier</TableHeadStyled>
                    <TableHeadStyled>TWA [ppm]</TableHeadStyled>
                    <TableHeadStyled>TWA [mg/m&sup3;]</TableHeadStyled>
                    <TableHeadStyled>STEL [ppm]</TableHeadStyled>
                    <TableHeadStyled>STEL [mg/m&sup3;]</TableHeadStyled>
                    <TableHeadStyled>Ceiling-C [ppm]</TableHeadStyled>
                    <TableHeadStyled>Ceiling-C [mg/m&sup3;]</TableHeadStyled>
                    <TableHeadStyled>Notation</TableHeadStyled>
                    <TableHeadStyled>Source</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>GB</DataCell><DataCell>dust</DataCell><DataCell /><DataCell>WEL</DataCell><DataCell /><DataCell>10</DataCell><DataCell /><DataCell /><DataCell /><DataCell /><DataCell>i</DataCell><DataCell>EH40/2005</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>GB</DataCell><DataCell>dust</DataCell><DataCell /><DataCell>WEL</DataCell><DataCell /><DataCell>4</DataCell><DataCell /><DataCell /><DataCell /><DataCell /><DataCell>r</DataCell><DataCell>EH40/2005</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>GB</DataCell><DataCell>lithium hydroxide</DataCell><DataCell>1310-65-2</DataCell><DataCell>WEL</DataCell><DataCell /><DataCell /><DataCell /><DataCell>1</DataCell><DataCell /><DataCell /><DataCell /><DataCell>EH40/2005</DataCell>
                  </TableRow>
                </TableBody>
              </SdsTable>

              <ParaBlock><span className="font-semibold">Notation</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li><strong>Ceiling-C</strong> ceiling value is a limit value above which exposure should not occur</li>
                <li><strong>i</strong> inhalable fraction</li>
                <li><strong>r</strong> respirable fraction</li>
                <li><strong>STEL</strong> short-term exposure limit: a limit value above which exposure should not occur and which is related to a 15-minute period (unless otherwise specified)</li>
                <li><strong>TWA</strong> time-weighted average (long-term exposure limit): measured or calculated in relation to a reference period of 8 hours time-weighted average (unless otherwise specified)</li>
              </ul>

              <ParaBlock><span className="font-semibold">Human health values</span></ParaBlock>
              <ParaBlock>Relevant DNELs and other threshold levels</ParaBlock>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Endpoint</TableHeadStyled>
                    <TableHeadStyled>Threshold level</TableHeadStyled>
                    <TableHeadStyled>Protection goal, route of exposure</TableHeadStyled>
                    <TableHeadStyled>Used in</TableHeadStyled>
                    <TableHeadStyled>Exposure time</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>DNEL</DataCell><DataCell>10 mg/m&sup3;</DataCell><DataCell>human, inhalatory</DataCell><DataCell>worker (industry)</DataCell><DataCell>chronic - systemic effects</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>DNEL</DataCell><DataCell>30 mg/m&sup3;</DataCell><DataCell>human, inhalatory</DataCell><DataCell>worker (industry)</DataCell><DataCell>acute - systemic effects</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>DNEL</DataCell><DataCell>41.35 mg/kg bw/day</DataCell><DataCell>human, dermal</DataCell><DataCell>worker (industry)</DataCell><DataCell>chronic - systemic effects</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>DNEL</DataCell><DataCell>100 mg/kg bw/day</DataCell><DataCell>human, dermal</DataCell><DataCell>worker (industry)</DataCell><DataCell>acute - systemic effects</DataCell>
                  </TableRow>
                </TableBody>
              </SdsTable>

              <ParaBlock><span className="font-semibold">Environmental values</span></ParaBlock>
              <ParaBlock>Relevant PNECs and other threshold levels</ParaBlock>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Endpoint</TableHeadStyled>
                    <TableHeadStyled>Threshold level</TableHeadStyled>
                    <TableHeadStyled>Organism</TableHeadStyled>
                    <TableHeadStyled>Environmental compartment</TableHeadStyled>
                    <TableHeadStyled>Exposure time</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>2.3 mg/l</DataCell><DataCell>aquatic organisms</DataCell><DataCell>freshwater</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>0.23 mg/l</DataCell><DataCell>aquatic organisms</DataCell><DataCell>marine water</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>79.2 mg/l</DataCell><DataCell>aquatic organisms</DataCell><DataCell>sewage treatment plant (STP)</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>153 mg/kg</DataCell><DataCell>aquatic organisms</DataCell><DataCell>freshwater sediment</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>15.3 mg/kg</DataCell><DataCell>aquatic organisms</DataCell><DataCell>marine sediment</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 hover:bg-slate-50/50 bg-slate-50/50">
                    <DataCell>PNEC</DataCell><DataCell>28.22 mg/kg</DataCell><DataCell>terrestrial organisms</DataCell><DataCell>soil</DataCell><DataCell>short-term (single instance)</DataCell>
                  </TableRow>
                </TableBody>
              </SdsTable>

              <SubSection>8.2 Exposure controls</SubSection>
              <ParaBlock><span className="font-semibold">Appropriate engineering controls</span></ParaBlock>
              <ParaBlock>General ventilation.</ParaBlock>
              <ParaBlock><span className="font-semibold">Individual protection measures (personal protective equipment)</span></ParaBlock>
              <ParaBlock><span className="font-semibold">Eye/face protection</span></ParaBlock>
              <ParaBlock>Wear eye/face protection.</ParaBlock>
              <ParaBlock><span className="font-semibold">Skin protection</span></ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Hand protection</span></li>
              </ul>
              <ParaBlock>In the case of wanting to use the gloves again, clean them before taking off and air them well.</ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Other protection measures</span></li>
              </ul>
              <ParaBlock>Take recovery periods for skin regeneration. Preventive skin protection (barrier creams/ointments) is recommended. Wash hands thoroughly after handling.</ParaBlock>
              <ParaBlock><span className="font-semibold">Respiratory protection</span></ParaBlock>
              <ParaBlock>Particulate filter device (EN 143).</ParaBlock>
              <ParaBlock><span className="font-semibold">Environmental exposure controls</span></ParaBlock>
              <ParaBlock>Use appropriate container to avoid environmental contamination. Keep away from drains, surface and ground water.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 9 ======== */}
          <div data-section="sec9" id="sec9" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="9" title="Physical and chemical properties" />
              <SubSection>9.1 Information on basic physical and chemical properties</SubSection>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Property</TableHeadStyled>
                    <TableHeadStyled>Value</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-100 transition-all duration-200 hover:bg-slate-50/50 hover:border-l-2 hover:border-l-emerald-300">
                    <DataCell highlight>Physical state</DataCell>
                    <DataCell><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-emerald-500 shrink-0" /> solid</span></DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 transition-all duration-200 hover:bg-slate-50/50 hover:border-l-2 hover:border-l-emerald-300">
                    <DataCell highlight>Colour</DataCell>
                    <DataCell><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-300 border border-gray-400 shrink-0" /> white</span></DataCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-100 transition-all duration-200 hover:bg-slate-50/50 hover:border-l-2 hover:border-l-emerald-300">
                    <DataCell highlight>Odour</DataCell>
                    <DataCell><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" /> odourless</span></DataCell>
                  </TableRow>
                  <KVRow label="Melting point/freezing point" value="423.9 °C at 1,013 hPa" />
                  <KVRow label="Boiling point or initial boiling point and boiling range" value="not determined" status="determined" />
                  <TableRow className="border-b border-slate-100 transition-all duration-200 hover:bg-slate-50/50 hover:border-l-2 hover:border-l-emerald-300">
                    <DataCell highlight>Flammability</DataCell>
                    <DataCell><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-orange-400 shrink-0" /> non-combustible</span></DataCell>
                  </TableRow>
                  <KVRow label="Lower and upper explosion limit" value="not determined" status="determined" />
                  <KVRow label="Flash point" value="not applicable" status="applicable" />
                  <KVRow label="Auto-ignition temperature" value="not determined" status="determined" />
                  <KVRow label="Decomposition temperature" value="not relevant" status="relevant" />
                  <KVRow label="pH (value)" value="not applicable" status="applicable" />
                  <KVRow label="Kinematic viscosity" value="not relevant" status="relevant" />
                  <KVRow label="Water solubility" value="110 g/l at 20 °C" />
                  <KVRow label="Partition coefficient n-octanol/water (log value)" value="not relevant (inorganic)" status="relevant" />
                  <KVRow label="Vapour pressure" value="not determined" status="determined" />
                  <KVRow label="Density" value="not determined" status="determined" />
                  <KVRow label="Relative vapour density" value="information on this property is not available" status="available" />
                  <KVRow label="Particle size" value="150 µm" />
                </TableBody>
              </SdsTable>
              <SubSection>9.2 Other information</SubSection>
              <ParaBlock>Information with regard to physical hazard classes acc. to GHS (physical hazards): not relevant</ParaBlock>
              <table className="w-full mb-4"><tbody><InfoRow label="Solid content" value="100 %" /></tbody></table>
            </div>
          </div>

          {/* ======== SECTION 10 ======== */}
          <div data-section="sec10" id="sec10" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="10" title="Stability and reactivity" />
              <SubSection>10.1 Reactivity</SubSection>
              <ParaBlock>Concerning incompatibility: see below &quot;Conditions to avoid&quot; and &quot;Incompatible materials&quot;.</ParaBlock>
              <SubSection>10.2 Chemical stability</SubSection>
              <ParaBlock>See below &quot;Conditions to avoid&quot;.</ParaBlock>
              <SubSection>10.3 Possibility of hazardous reactions</SubSection>
              <ParaBlock>No known hazardous reactions.</ParaBlock>
              <SubSection>10.4 Conditions to avoid</SubSection>
              <ParaBlock>There are no specific conditions known which have to be avoided.</ParaBlock>
              <SubSection>10.5 Incompatible materials</SubSection>
              <ParaBlock>There is no additional information.</ParaBlock>
              <SubSection>10.6 Hazardous decomposition products</SubSection>
              <ParaBlock>Reasonably anticipated hazardous decomposition products produced as a result of use, storage, spill and heating are not known. Hazardous combustion products: see section 5.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 11 ======== */}
          <div data-section="sec11" id="sec11" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="11" title="Toxicological information" />
              <SubSection>11.1 Information on toxicological effects</SubSection>
              <ParaBlock>Classification acc. to GHS</ParaBlock>
              <ParaBlock><span className="font-semibold">Acute toxicity</span></ParaBlock>
              <ParaBlock>Harmful if swallowed.</ParaBlock>
              <ParaBlock>GHS of the United Nations, annex 4: May be harmful in contact with skin or if inhaled.</ParaBlock>
              <ul className="list-none text-sm text-slate-700 space-y-1 mb-2 pl-4">
                <li>- <span className="font-semibold">Acute toxicity estimate (ATE)</span></li>
              </ul>
              <table className="w-full mb-4"><tbody><InfoRow label="Oral" value="500 mg/kg" /></tbody></table>
              <ParaBlock><span className="font-semibold">Skin corrosion/irritation</span></ParaBlock>
              <ParaBlock>Causes severe skin burns and eye damage.</ParaBlock>
              <ParaBlock><span className="font-semibold">Serious eye damage/eye irritation</span></ParaBlock>
              <ParaBlock>Causes serious eye damage.</ParaBlock>
              <ParaBlock><span className="font-semibold">Respiratory or skin sensitisation</span></ParaBlock>
              <ParaBlock>Shall not be classified as a respiratory or skin sensitiser.</ParaBlock>
              <ParaBlock><span className="font-semibold">Germ cell mutagenicity</span></ParaBlock>
              <ParaBlock>Shall not be classified as germ cell mutagenic.</ParaBlock>
              <ParaBlock><span className="font-semibold">Carcinogenicity</span></ParaBlock>
              <ParaBlock>Shall not be classified as carcinogenic.</ParaBlock>
              <ParaBlock><span className="font-semibold">Reproductive toxicity</span></ParaBlock>
              <ParaBlock>Shall not be classified as a reproductive toxicant.</ParaBlock>
              <ParaBlock><span className="font-semibold">Specific target organ toxicity - single exposure</span></ParaBlock>
              <ParaBlock>Shall not be classified as a specific target organ toxicant (single exposure).</ParaBlock>
              <ParaBlock><span className="font-semibold">Specific target organ toxicity - repeated exposure</span></ParaBlock>
              <ParaBlock>Shall not be classified as a specific target organ toxicant (repeated exposure).</ParaBlock>
              <ParaBlock><span className="font-semibold">Aspiration hazard</span></ParaBlock>
              <ParaBlock>Shall not be classified as presenting an aspiration hazard.</ParaBlock>
              <SubSection>11.2 Information on other hazards</SubSection>
              <ParaBlock>There is no additional information.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 12 ======== */}
          <div data-section="sec12" id="sec12" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="12" title="Ecological information" />
              <SubSection>12.1 Toxicity</SubSection>
              <ParaBlock>Shall not be classified as hazardous to the aquatic environment.</ParaBlock>
              <SubSection>12.2 Persistence and degradability</SubSection>
              <ParaBlock>Data are not available.</ParaBlock>
              <SubSection>12.3 Bioaccumulative potential</SubSection>
              <ParaBlock>Data are not available.</ParaBlock>
              <SubSection>12.4 Mobility in soil</SubSection>
              <ParaBlock>Data are not available.</ParaBlock>
              <SubSection>12.5 Results of PBT and vPvB assessment</SubSection>
              <ParaBlock>Data are not available.</ParaBlock>
              <SubSection>12.6 Endocrine disrupting properties</SubSection>
              <ParaBlock>Information on this property is not available.</ParaBlock>
              <SubSection>12.7 Other adverse effects</SubSection>
              <ParaBlock>Data are not available.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 13 ======== */}
          <div data-section="sec13" id="sec13" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="13" title="Disposal considerations" />
              <SubSection>13.1 Waste treatment methods</SubSection>
              <ParaBlock><span className="font-semibold">Waste treatment-relevant information</span></ParaBlock>
              <ParaBlock>Recycling/reclamation of other inorganic materials.</ParaBlock>
              <ParaBlock><span className="font-semibold">Sewage disposal-relevant information</span></ParaBlock>
              <ParaBlock>Do not empty into drains. Avoid release to the environment. Refer to special instructions/safety data sheets.</ParaBlock>
              <ParaBlock><span className="font-semibold">Waste treatment of containers/packagings</span></ParaBlock>
              <ParaBlock>It is a dangerous waste; only packagings which are approved (e.g. acc. to ADR) may be used. Completely emptied packages can be recycled. Handle contaminated packages in the same way as the substance itself.</ParaBlock>
              <ParaBlock><span className="font-semibold">Remarks</span></ParaBlock>
              <ParaBlock>Please consider the relevant national or regional provisions. Waste shall be separated into the categories that can be handled separately by the local or national waste management facilities.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 14 ======== */}
          <div data-section="sec14" id="sec14" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="14" title="Transport information" />
              <SubSection>14.1 UN number or ID number</SubSection>
              <SdsTable>
                <TableBody>
                  <KVRow label="ADR/RID" value="UN 2680" />
                  <KVRow label="IMDG-Code" value="UN 2680" />
                  <KVRow label="ICAO-TI" value="UN 2680" />
                </TableBody>
              </SdsTable>
              <SubSection>14.2 UN proper shipping name</SubSection>
              <SdsTable>
                <TableBody>
                  <KVRow label="ADR/RID" value="LITHIUM HYDROXIDE" />
                  <KVRow label="IMDG-Code" value="LITHIUM HYDROXIDE" />
                  <KVRow label="ICAO-TI" value="Lithium hydroxide" />
                </TableBody>
              </SdsTable>
              <SubSection>14.3 Transport hazard class(es)</SubSection>
              <SdsTable>
                <TableBody>
                  <KVRow label="ADR/RID" value="8" />
                  <KVRow label="IMDG-Code" value="8" />
                  <KVRow label="ICAO-TI" value="8" />
                </TableBody>
              </SdsTable>
              <SubSection>14.4 Packing group</SubSection>
              <SdsTable>
                <TableBody>
                  <KVRow label="ADR/RID" value="II" />
                  <KVRow label="IMDG-Code" value="II" />
                  <KVRow label="ICAO-TI" value="II" />
                </TableBody>
              </SdsTable>
              <SubSection>14.5 Environmental hazards</SubSection>
              <ParaBlock>non-environmentally hazardous acc. to the dangerous goods regulations</ParaBlock>
              <SubSection>14.6 Special precautions for user</SubSection>
              <ParaBlock>Provisions for dangerous goods (ADR) should be complied within the premises.</ParaBlock>
              <SubSection>14.7 Maritime transport in bulk according to IMO instruments</SubSection>
              <ParaBlock>The cargo is not intended to be carried in bulk.</ParaBlock>
              <SubSection>Information for each of the UN Model Regulations</SubSection>
              <ParaBlock><span className="font-semibold">Agreement concerning the International Carriage of Dangerous Goods by Road (ADR) - Additional information</span></ParaBlock>
              <SdsTable>
                <TableBody>
                  <KVRow label="Classification code" value="C6" />
                  <KVRow label="Danger label(s)" value="8" />
                  <KVRow label="Excepted quantities (EQ)" value="E2" />
                  <KVRow label="Limited quantities (LQ)" value="1 kg" />
                  <KVRow label="Transport category (TC)" value="2" />
                  <KVRow label="Tunnel restriction code (TRC)" value="E" />
                  <KVRow label="Hazard identification No" value="80" />
                  <KVRow label="Emergency Action Code" value="2X" />
                </TableBody>
              </SdsTable>
              <ParaBlock><span className="font-semibold">Regulations concerning the International Carriage of Dangerous Goods by Rail (RID) - Additional information</span></ParaBlock>
              <SdsTable>
                <TableBody>
                  <KVRow label="Classification code" value="C6" />
                  <KVRow label="Danger label(s)" value="8" />
                  <KVRow label="Excepted quantities (EQ)" value="E2" />
                  <KVRow label="Limited quantities (LQ)" value="1 kg" />
                  <KVRow label="Transport category (TC)" value="2" />
                  <KVRow label="Hazard identification No" value="80" />
                </TableBody>
              </SdsTable>
              <ParaBlock><span className="font-semibold">International Maritime Dangerous Goods Code (IMDG) - Additional information</span></ParaBlock>
              <SdsTable>
                <TableBody>
                  <KVRow label="Marine pollutant" value="-" />
                  <KVRow label="Danger label(s)" value="8" />
                  <KVRow label="Special provisions (SP)" value="-" />
                  <KVRow label="Excepted quantities (EQ)" value="E2" />
                  <KVRow label="Limited quantities (LQ)" value="1 kg" />
                  <KVRow label="EmS" value="F-A, S-B" />
                  <KVRow label="Stowage category" value="A" />
                  <KVRow label="Segregation group" value="18 - Alkalis" />
                </TableBody>
              </SdsTable>
              <ParaBlock><span className="font-semibold">International Civil Aviation Organization (ICAO-IATA/DGR) - Additional information</span></ParaBlock>
              <SdsTable>
                <TableBody>
                  <KVRow label="Danger label(s)" value="8" />
                  <KVRow label="Excepted quantities (EQ)" value="E2" />
                  <KVRow label="Limited quantities (LQ)" value="5 kg" />
                </TableBody>
              </SdsTable>
            </div>
          </div>

          {/* ======== SECTION 15 ======== */}
          <div data-section="sec15" id="sec15" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="15" title="Regulatory information" />
              <SubSection>15.1 Safety, health and environmental regulations/legislation specific for the substance or mixture</SubSection>
              <ParaBlock><span className="font-semibold">Relevant provisions of the European Union (EU)</span></ParaBlock>
              <ParaBlock><span className="font-semibold">Deco-Paint Directive</span></ParaBlock>
              <table className="w-full mb-4"><tbody><InfoRow label="VOC content" value="0 %" /></tbody></table>
              <ParaBlock><span className="font-semibold">Industrial Emissions Directive (IED)</span></ParaBlock>
              <table className="w-full mb-4"><tbody><InfoRow label="VOC content" value="0 %" /></tbody></table>
              <ParaBlock><span className="font-semibold">National regulations (GB)</span></ParaBlock>
              <ParaBlock>List of substances subject to authorisation (GB REACH, Annex 14) / SVHC - candidate list: not listed</ParaBlock>
              <ParaBlock>Restrictions according to GB REACH, Annex 17: not listed</ParaBlock>
              <SubSection>National inventories</SubSection>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Country</TableHeadStyled>
                    <TableHeadStyled>Inventory</TableHeadStyled>
                    <TableHeadStyled>Status</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["AU", "AIIC"], ["CA", "DSL"], ["CN", "IECSC"], ["EU", "ECSI"],
                    ["EU", "REACH Reg."], ["JP", "CSCL-ENCS"], ["KR", "KECI"], ["MX", "INSQ"],
                    ["NZ", "NZIoC"], ["PH", "PICCS"], ["TR", "CICR"], ["TW", "TCSI"], ["US", "TSCA"],
                  ].map(([c, inv], i) => (
                    <TableRow key={`${c}-${inv}`} className={`border-b border-slate-100 hover:bg-slate-50/50 ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                      <DataCell>{c}</DataCell><DataCell>{inv}</DataCell><DataCell>substance is listed</DataCell>
                    </TableRow>
                  ))}
                </TableBody>
              </SdsTable>
              <SubSection>Legend</SubSection>
              <SdsTable>
                <TableBody>
                  {[
                    ["AIIC", "Australian Inventory of Industrial Chemicals"],
                    ["CICR", "Chemical Inventory and Control Regulation"],
                    ["CSCL-ENCS", "List of Existing and New Chemical Substances (CSCL-ENCS)"],
                    ["DSL", "Domestic Substances List (DSL)"],
                    ["ECSI", "EC Substance Inventory (EINECS, ELINCS, NLP)"],
                    ["IECSC", "Inventory of Existing Chemical Substances Produced or Imported in China"],
                    ["INSQ", "National Inventory of Chemical Substances"],
                    ["KECI", "Korea Existing Chemicals Inventory"],
                    ["NZIoC", "New Zealand Inventory of Chemicals"],
                    ["PICCS", "Philippine Inventory of Chemicals and Chemical Substances (PICCS)"],
                    ["REACH Reg.", "REACH registered substances"],
                    ["TCSI", "Taiwan Chemical Substance Inventory"],
                    ["TSCA", "Toxic Substance Control Act"],
                  ].map(([a, d], i) => (
                    <TableRow key={a} className={`border-b border-slate-100 hover:bg-slate-50/50 ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                      <DataCell highlight>{a}</DataCell><DataCell>{d}</DataCell>
                    </TableRow>
                  ))}
                </TableBody>
              </SdsTable>
              <SubSection>15.2 Chemical Safety Assessment</SubSection>
              <ParaBlock>No Chemical Safety Assessment has been carried out for this substance.</ParaBlock>
            </div>
          </div>

          {/* ======== SECTION 16 ======== */}
          <div data-section="sec16" id="sec16" className="scroll-mt-20">
            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-[3px] border-l-emerald-500 shadow-md hover:shadow-lg p-6 mb-6 transition-all duration-300 hover:-translate-y-0.5">
              <SectionHeader num="16" title="Other information" />
              <SubSection>Abbreviations and acronyms</SubSection>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Abbr.</TableHeadStyled>
                    <TableHeadStyled>Descriptions of used abbreviations</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["ADR", "Accord relatif au transport international des marchandises dangereuses par route (Agreement concerning the International Carriage of Dangerous Goods by Road)"],
                    ["ATE", "Acute Toxicity Estimate"],
                    ["CAS", "Chemical Abstracts Service (service that maintains the most comprehensive list of chemical substances)"],
                    ["Ceiling-C", "Ceiling value"],
                    ["DGR", "Dangerous Goods Regulations (see IATA/DGR)"],
                    ["DNEL", "Derived No-Effect Level"],
                    ["EC No", "The EC Inventory (EINECS, ELINCS and the NLP-list) is the source for the seven-digit EC number, an identifier of substances commercially available within the EU (European Union)"],
                    ["EH40/2005", "EH40/2005 Workplace exposure limits (http://www.nationalarchives.gov.uk/doc/open-government-licence/)"],
                    ["EINECS", "European Inventory of Existing Commercial Chemical Substances"],
                    ["ELINCS", "European List of Notified Chemical Substances"],
                    ["EmS", "Emergency Schedule"],
                    ["GB REACH", "The REACH etc. (Amendment etc.) (EU Exit) Regulations 2019, SI 2019/758 (as amended)"],
                    ["GHS", '"Globally Harmonized System of Classification and Labelling of Chemicals" developed by the United Nations'],
                    ["IATA", "International Air Transport Association"],
                    ["IATA/DGR", "Dangerous Goods Regulations (DGR) for the air transport (IATA)"],
                    ["ICAO", "International Civil Aviation Organization"],
                    ["ICAO-TI", "Technical instructions for the safe transport of dangerous goods by air"],
                    ["IMDG", "International Maritime Dangerous Goods Code"],
                    ["IMDG-Code", "International Maritime Dangerous Goods Code"],
                    ["NLP", "No-Longer Polymer"],
                    ["PBT", "Persistent, Bioaccumulative and Toxic"],
                    ["PNEC", "Predicted No-Effect Concentration"],
                    ["ppm", "Parts per million"],
                    ["REACH", "Registration, Evaluation, Authorisation and Restriction of Chemicals"],
                    ["RID", "Reglement concernant le transport International ferroviaire des marchandises Dangereuses (Regulations concerning the International carriage of Dangerous goods by Rail)"],
                    ["STEL", "Short-term exposure limit"],
                    ["TWA", "Time-weighted average"],
                    ["VOC", "Volatile Organic Compounds"],
                    ["vPvB", "Very Persistent and very Bioaccumulative"],
                    ["WEL", "Workplace exposure limit"],
                  ].map(([a, d], i) => (
                    <TableRow key={a} className={`border-b border-slate-100 hover:bg-slate-50/50 ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                      <DataCell highlight className="whitespace-nowrap">{a}</DataCell>
                      <DataCell>{d}</DataCell>
                    </TableRow>
                  ))}
                </TableBody>
              </SdsTable>
              <SubSection>Key literature references and sources for data</SubSection>
              <ParaBlock>Agreement concerning the International Carriage of Dangerous Goods by Road (ADR). Regulations concerning the International Carriage of Dangerous Goods by Rail (RID). International Maritime Dangerous Goods Code (IMDG). Dangerous Goods Regulations (DGR) for the air transport (IATA).</ParaBlock>
              <SubSection>List of relevant phrases (code and full text as stated in section 2 and 3)</SubSection>
              <SdsTable>
                <TableHeader>
                  <TableRow className="hover:bg-slate-800 border-none">
                    <TableHeadStyled>Code</TableHeadStyled>
                    <TableHeadStyled>Text</TableHeadStyled>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <KVRow label="H302" value="Harmful if swallowed." />
                  <KVRow label="H314" value="Causes severe skin burns and eye damage." />
                  <KVRow label="H318" value="Causes serious eye damage." />
                </TableBody>
              </SdsTable>

              <Separator className="my-6" />
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <SubSection>Disclaimer</SubSection>
                <ParaBlock>This information is based upon the present state of our knowledge. This SDS has been compiled and is solely intended for this product.</ParaBlock>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 bg-gradient-to-r from-slate-800 to-slate-900 mt-auto relative overflow-hidden">
        {/* Geometric decoration pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px),
                           repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px)`
        }} />
        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-xl opacity-40 blur-sm animate-[pulseGlow_3s_ease-in-out_infinite]" />
                <div className="relative bg-white rounded-xl p-1.5 shadow-lg">
                  <img
                    src={LOGO_URL}
                    alt="ADDIMAX Logo"
                    className="h-11 w-auto rounded-lg"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-white">ADDIMAX</p>
                <p className="text-xs text-slate-400">Lithium Hydroxide</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-slate-400">
                Safety Data Sheet &mdash; ADDIMAX Lithium Hydroxide
              </p>
              <p className="text-xs text-slate-500 mt-1">
                &copy; IPEC Addimax Petroleum Products FZE
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP ===== */}
      {showScrollTop && (
        <Button
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
