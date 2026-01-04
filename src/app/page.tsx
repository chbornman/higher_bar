"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background-blur.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header - keeping similar style */}
          <header className="px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border-2 border-[#1a3329] bg-[#1a3329] flex items-center justify-center">
                <span className="text-3xl font-[family-name:var(--font-playfair)] text-white">H</span>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#1a3329] to-transparent"></div>
              <h1 className="text-xl tracking-[0.4em] font-light text-white/90">HIGHER BAR</h1>
            </div>
          </header>

          {/* Hero Section */}
          <section className="px-6 pt-8 pb-20">
            <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">

              {/* Left: Image Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#1a3329] rounded-2xl transform rotate-2"></div>
                <div className="relative bg-[#1a3329] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/hero-optimized.jpg"
                    alt="Higher Bar"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a3329] via-[#1a3329]/90 to-transparent p-6 pt-16">
                    <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic">Higher Bar</h2>
                    <p className="text-sm uppercase tracking-[0.2em] mt-1 text-white/70">Lecture Series</p>
                  </div>
                </div>
              </div>

              {/* Right: Info */}
              <div className="py-4">
                <p className="text-[#7ab89a] uppercase tracking-[0.2em] text-sm mb-4">Lancaster, PA</p>
                <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] leading-tight mb-6">
                  Ideas worth<br />
                  <span className="italic text-[#7ab89a]">discussing</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
                  Local academics share their research in a relaxed setting.
                  90 minutes of substance, followed by real conversation.
                </p>

                <div className="flex gap-6">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-6 py-4">
                    <p className="text-3xl font-[family-name:var(--font-playfair)]">45</p>
                    <p className="text-sm text-white/50 mt-1">min talk</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-6 py-4">
                    <p className="text-3xl font-[family-name:var(--font-playfair)]">45</p>
                    <p className="text-sm text-white/50 mt-1">min dialogue</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-6 py-4">
                    <p className="text-3xl font-[family-name:var(--font-playfair)]">∞</p>
                    <p className="text-sm text-white/50 mt-1">beers after</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="px-6 py-20 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] mb-6">The Vision</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Higher Bar brings expertise to the public sphere—not as lectures delivered
                  from on high, but as conversations among equals who happen to know different things.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  We believe the best ideas emerge when smart people share what excites them,
                  then open the floor to genuine dialogue. No jargon-slinging. No retreating to bunkers.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] mb-6">The Format</h3>
                <ul className="space-y-4">
                  {[
                    "Accessible but substantive presentations",
                    "Jargon explained, not avoided",
                    "Room for questions throughout",
                    "Curated panel kicks off Q&A",
                    "Open dialogue with the audience",
                  ].map((item) => (
                    <li key={item} className="flex gap-4 text-white/70">
                      <span className="text-[#7ab89a] mt-1">○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Topics Section */}
          <section className="px-6 py-20 border-t border-white/10">
            <h3 className="text-3xl font-[family-name:var(--font-playfair)] mb-4 text-center">
              Topics We're Exploring
            </h3>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              From philosophy to ecology, political science to astronomy—wherever
              local experts have something worth sharing.
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "Pragmatism",
                "AI & Ethics",
                "Political Trends",
                "Susquehanna Watershed",
                "Regenerative Agriculture",
                "Philosophy of Mind",
                "Astronomy",
                "Affect Theory",
                "Race & Identity",
                "Gender Studies",
                "Consciousness",
                "Local Ecology"
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-[#1a3329]/50 hover:border-[#1a3329] transition-all cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* Email Signup Section */}
          <section className="px-6 py-24">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#1a3329] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h3 className="text-4xl font-[family-name:var(--font-playfair)] mb-4">
                    Interested?
                  </h3>
                  <p className="text-lg text-white/80 mb-8">
                    Get notified when we announce our first event.<br />
                    No spam—just lectures and libations.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      required
                      className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-8 py-4 bg-white text-[#1a3329] rounded-xl font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "..." : "Count Me In"}
                    </button>
                  </form>

                  {message && (
                    <p className={`mt-6 ${status === "success" ? "text-white" : "text-white/70"}`}>
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 py-12 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">Higher Bar Lecture Series · Lancaster, PA</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
