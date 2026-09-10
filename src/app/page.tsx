import { ColossusTimeline } from "@/components/ColossusTimeline";
import { CAREER_MILESTONES, CAREER_START_DATE } from "@/data/career-milestones";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] bg-grid-pattern px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-5xl">
        <ColossusTimeline
          milestones={CAREER_MILESTONES}
          startDate={CAREER_START_DATE}
        />
      </div>
    </main>
  );
}
