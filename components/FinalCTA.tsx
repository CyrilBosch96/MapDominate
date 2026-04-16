"use client";

interface FinalCTAProps {
  onContactClick: () => void;
}

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-white/7 flex-1 max-w-24"></div>
          <span className="text-accent-green text-sm font-bold uppercase tracking-widest">
            There&apos;s No Good Reason To Wait
          </span>
          <div className="h-px bg-white/7 flex-1 max-w-24"></div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-extrabold text-dark-text leading-tight mb-6">
          Every Week You&apos;re Not in the 3-Pack Is a Week Your{" "}
          <span className="text-accent-red">Competitor Gets the Call.</span>
        </h2>

        <p className="text-lg text-dark-muted leading-relaxed mb-4 max-w-2xl mx-auto">
          Your customers are searching right now. Some of them are in your city, on their phone, typing
          your exact service into Google. If you&apos;re not in the top 3, someone else is getting that
          call — and you will never know you missed it.
        </p>

        <p className="text-base text-dark-muted leading-relaxed mb-4 max-w-2xl mx-auto">
          No ads. No cold calling. No flyers. Just your business, at the top of Google, when someone is
          ready to hire.
        </p>

        <p className="text-base text-dark-text font-semibold mb-10">
          Before you pay us a single dollar, we show you exactly where you stand.
        </p>

        <button
          onClick={onContactClick}
          className="bg-accent-green hover:bg-yellow-300 text-dark-base font-black text-lg px-12 py-5 rounded-xl transition-colors shadow-2xl shadow-accent-green/20"
        >
          Get Your Free Ranking Diagnosis →
        </button>

        <p className="text-sm text-dark-muted mt-5 max-w-lg mx-auto">
          2 minutes. We record a personalised video showing your current Google ranking, your top
          competitor&apos;s position, and exactly what it would take to move you into the top 3. No pitch. Just the truth.
        </p>
      </div>
    </section>
  );
}
