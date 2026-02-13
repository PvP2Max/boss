"use client";

import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Community & Recreation",
    description:
      "From ski trips to game nights, BOSS organizes events that help Soldiers build lasting friendships and make the most of life in Alaska.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Quality of Life",
    description:
      "We advocate for better barracks, dining, and facilities. When Soldiers have concerns, BOSS makes sure leadership hears them.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Community Service",
    description:
      "Give back through volunteer opportunities that make a real difference in the Fort Wainwright and Fairbanks communities.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Your Voice Matters",
    description:
      'As "The Voice of the Single Soldier," BOSS gives you a direct line to command leadership. Your input shapes real policy changes.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const stats = [
  { value: "#1", label: "Army BOSS Program 2025" },
  { value: "500+", label: "Soldiers Engaged" },
  { value: "50+", label: "Events Per Year" },
  { value: "100%", label: "Free for E1–E6" },
];

export default function WhyJoinSection() {
  return (
    <section id="why-join" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Decorative */}
      <div className="absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/[0.03] blur-3xl" />
      <div className="absolute -left-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Why BOSS
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-100 sm:text-5xl">
            The Army&apos;s Best BOSS Program
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-400">
            Recognized as the Army&apos;s #1 BOSS Program for 2025, Fort
            Wainwright BOSS is where community, adventure, and advocacy come
            together.
          </p>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal className="mb-20" delay={0.1}>
          <div className="glass-gold mx-auto grid max-w-4xl grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-gold-500/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-dark-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:gold-glow hover:border-gold-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 transition-all group-hover:bg-gold-500/20 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-dark-100 transition-colors group-hover:text-gold-300">
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-dark-400">
                    {pillar.description}
                  </p>
                </div>
                <div className="absolute inset-0 shimmer opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Award highlight */}
        <ScrollReveal className="mt-16" delay={0.3}>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl glass-gold p-8 text-center sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/[0.05] via-gold-500/[0.1] to-gold-500/[0.05]" />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20" style={{ animation: "pulse-gold 3s ease-in-out infinite" }}>
                <svg className="h-8 w-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gold-300 sm:text-3xl">
                Army&apos;s Best BOSS Program 2025
              </h3>
              <p className="mx-auto max-w-xl text-dark-300">
                Out of every installation across the Army, Fort Wainwright BOSS
                was recognized as the best. That&apos;s not just an award — it&apos;s
                proof that when Soldiers lead, real change happens.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
