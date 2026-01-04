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
        setMessage("You're on the list! We'll be in touch.");
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
    <div className="min-h-screen bg-[#111] text-white">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] min-h-screen shadow-2xl">
      {/* Header */}
      <header className="border-b-4 border-[#c41e3a]">
        <div className="px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-[#c41e3a] flex items-center justify-center">
              <span className="text-2xl font-serif text-[#c41e3a]">H</span>
            </div>
            <div className="flex-1 h-2 bg-[#c41e3a]"></div>
            <h1 className="text-2xl tracking-[0.3em] font-light">HIGHER BAR</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#8b7b7b] py-12">
        <div className="px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Event Card */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="bg-[#c41e3a] rounded-lg p-6 aspect-[3/4] flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-serif italic mb-4">Higher</h2>
                <h2 className="text-4xl font-serif italic mb-6">Bar</h2>
                <div className="text-6xl mb-4">🍺</div>
                <p className="text-sm uppercase tracking-wider">Lecture Series</p>
              </div>
            </div>

            {/* Right: Event Info */}
            <div className="flex-1">
              <h2 className="text-4xl font-serif text-[#c41e3a] mb-2">Higher Bar</h2>
              <p className="text-gray-300 mb-6">90 min | Local Experts | Real Conversation</p>

              <div className="bg-[#3a3a3a] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">The Format</h3>
                <p className="text-gray-300 mb-4">
                  Local academics sharing research in a relaxed setting. Beer optional, dialogue required.
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#2a2a2a] rounded px-4 py-3">
                    <span className="text-gray-400">Part 1</span>
                    <p className="font-medium">45 min Presentation</p>
                  </div>
                  <div className="bg-[#2a2a2a] rounded px-4 py-3">
                    <span className="text-gray-400">Part 2</span>
                    <p className="font-medium">45 min Discussion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div>
          <p className="text-xl leading-relaxed mb-8">
            <span className="text-[#c41e3a] font-semibold">Higher Bar</span> is a lecture series
            bringing local academics out of the ivory tower and into the pub. Think TED talks,
            but with better beer and actual conversation.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Each session features a 45-minute presentation—accessible but substantive—followed by
            45 minutes of genuine dialogue. No jargon-slinging. No retreating to bunkers. Just
            experts sharing what excites them, and a community engaging with ideas that matter.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-[#c41e3a] font-semibold text-lg mb-4">Why We're Doing This</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Bring expertise to the public sphere
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Promote dialogue over debate
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Model productive disagreement
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Inspire thinking beyond labels
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Have fun
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#c41e3a] font-semibold text-lg mb-4">Presentation Guidelines</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Casual tone, serious depth
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Jargon explained, not avoided
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Visual and interactive elements
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c41e3a]">→</span>
                  Room for questions throughout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-8 bg-[#222]">
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Topics We're Exploring</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Pragmatism & Political Philosophy",
              "AI Ethics & Society",
              "Regional Political Trends",
              "Susquehanna Watershed Research",
              "Regenerative Agriculture",
              "Philosophy of Mind",
              "Astronomy",
              "Affect Theory",
              "Race & Identity",
              "Gender Studies",
              "Environmental Science",
              "Consciousness"
            ].map((topic) => (
              <div
                key={topic}
                className="bg-[#2a2a2a] rounded px-4 py-3 text-sm text-gray-300 hover:bg-[#3a3a3a] transition-colors"
              >
                {topic}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Got expertise to share? We want to hear from you.
          </p>
        </div>
      </section>

      {/* Discussion Format Section */}
      <section className="py-16 px-8">
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">The Discussion</h2>

          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            The trickiest part: creating space for meaningful conversation without devolving
            into strawman arguments and ideological bunkers.
          </p>

          <div className="bg-[#3a3a3a] rounded-lg p-8">
            <h3 className="text-[#c41e3a] font-semibold mb-4">Our Approach: The Guest Panel</h3>
            <p className="text-gray-300 mb-4">
              Each session features a panel of 3 community members with relevant experience
              or demonstrated capacity for thoughtful discussion. They kick off the Q&A,
              modeling the kind of engagement we're after, before opening to the audience.
            </p>
            <p className="text-gray-400 text-sm italic">
              Then we get beers.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 px-8 bg-[#c41e3a]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Interested?</h2>
          <p className="text-lg mb-8 text-white/90">
            Sign up to hear about upcoming events. No spam, just lectures and libations.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3 bg-[#1a1a1a] text-white rounded font-medium hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "..." : "Count Me In"}
            </button>
          </form>

          {message && (
            <p className={`mt-4 ${status === "success" ? "text-white" : "text-white/90"}`}>
              {message}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-[#111] text-center text-gray-400 text-sm">
        <p>Higher Bar Lecture Series</p>
        <p className="mt-1">Lancaster, PA</p>
      </footer>
      </div>
    </div>
  );
}
