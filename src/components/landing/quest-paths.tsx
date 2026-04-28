"use client";

import { Syne } from "next/font/google";
import { 
  Clock, 
  BarChart, 
  Target,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

interface Quest {
  title: string;
  description: string;
  reward: string;
  difficulty: string;
  time: string;
  status: "Active" | "Locked" | "Completed";
  color?: string;
}

const quests: Quest[] = [
  {
    title: "NFT Marketplace",
    description: "Build a fully functional NFT marketplace on Stellar where users can mint, buy, and sell digital assets.",
    reward: "250 XLM",
    difficulty: "Intermediate",
    time: "2 hours",
    status: "Active",
    color: "#F5B841",
  },
  {
    title: "Cross-border Payments",
    description: "Create a payment system that handles multiple currencies using Stellar's path payment features.",
    reward: "300 XLM",
    difficulty: "Advanced",
    time: "3 hours",
    status: "Active",
    color: "#14B8A6",
  },
  {
    title: "DeFi Protocol",
    description: "Build a decentralized finance application with Soroban smart contracts for lending and borrowing.",
    reward: "500 XLM",
    difficulty: "Expert",
    time: "5 hours",
    status: "Locked",
    color: "#6366F1",
  },
];

const QuestCard = ({ quest }: { quest: Quest }) => {
  const isLocked = quest.status === "Locked";

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative flex flex-col h-full rounded-[24px] border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:shadow-md ${isLocked ? "opacity-75" : ""}`}
    >
      {/* Status Badge */}
      <div className="mb-6 flex items-center justify-between">
        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
          isLocked ? "bg-[#F1F5F9] text-[#64748B]" : "bg-[#FFF7ED] text-[#F97316]"
        }`}>
          <div className={`h-1.5 w-1.5 rounded-full ${isLocked ? "bg-[#64748B]" : "bg-[#F97316]"}`} />
          {quest.status}
        </div>
        <div className="text-sm font-bold text-[#1E1F24]">
          {quest.reward}
        </div>
      </div>

      {/* Content */}
      <h3 className={`${syne.className} mb-4 text-2xl font-bold text-[#1E1F24]`}>
        {quest.title}
      </h3>
      <p className="mb-8 text-sm leading-relaxed text-[#64748B]">
        {quest.description}
      </p>

      {/* Meta Info Grid */}
      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#F1F5F9] pt-6">
        <div className="flex items-center gap-2 text-sm text-[#64748B]">
          <BarChart size={16} className="text-[#94A3B8]" />
          <span>{quest.difficulty}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#64748B]">
          <Clock size={16} className="text-[#94A3B8]" />
          <span>{quest.time}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        disabled={isLocked}
        className={`mt-8 flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all ${
          isLocked 
            ? "bg-[#F8FAFC] text-[#94A3B8] cursor-not-allowed border border-[#E2E8F0]"
            : "bg-[#1E1F24] text-white hover:bg-black"
        }`}
      >
        {isLocked ? "Locked" : "Start Quest"}
        {!isLocked && <ArrowRight size={18} />}
      </button>
    </motion.div>
  );
};

const QuestPaths = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-[#E2E8F0]">
            <Target size={14} className="text-[#F5B841]" />
            <span className="text-xs font-bold text-[#1E1F24]">Quest Paths</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[640px]">
              <h2 className={`${syne.className} mb-6 text-4xl font-bold leading-tight text-[#1E1F24] sm:text-5xl lg:text-6xl`}>
                Build real things. Earn XLM rewards.
              </h2>
              <p className="text-lg leading-relaxed text-[#64748B]">
                Move from theory to practice by building real applications on Stellar. 
                Each quest challenges your skills and rewards your success.
              </p>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-center lg:self-end">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E2E8F0] shadow-sm hover:bg-gray-50 transition-all">
                <ArrowRight size={20} className="rotate-180 text-[#1E1F24]" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E2E8F0] shadow-sm hover:bg-gray-50 transition-all">
                <ArrowRight size={20} className="text-[#1E1F24]" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quests.map((quest, index) => (
            <QuestCard key={index} quest={quest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestPaths;
