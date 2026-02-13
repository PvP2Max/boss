"use client";

import ScrollReveal from "./ScrollReveal";

const pastEvents = [
  {
    title: "Northern Lights Snowmobile Trip",
    date: "January 2025",
    description:
      "Soldiers hit the trails under the aurora borealis for an unforgettable night ride through the Alaskan wilderness.",
    gradient: "from-blue-900/40 to-purple-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Super Bowl Watch Party",
    date: "February 2025",
    description:
      "Over 100 Soldiers gathered for food, prizes, and an epic game-day atmosphere at the BOSS lounge.",
    gradient: "from-green-900/40 to-emerald-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a9.004 9.004 0 01-4.27 1.522m4.27-1.522a9.003 9.003 0 00.681-1.556M12 11.25c-1.46 0-2.838-.372-4.04-1.022M12 11.25V13.5" />
      </svg>
    ),
  },
  {
    title: "Spring Break Ski Trip",
    date: "March 2025",
    description:
      "Soldiers shredded the slopes at Moose Mountain for a weekend of skiing, snowboarding, and camaraderie.",
    gradient: "from-sky-900/40 to-cyan-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Summer BBQ & Outdoor Games",
    date: "June 2025",
    description:
      "Midnight sun BBQ with volleyball, cornhole, and live music — celebrating the longest days of the year in Alaska.",
    gradient: "from-orange-900/40 to-amber-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Anchorage Weekend Getaway",
    date: "August 2025",
    description:
      "A road trip to Anchorage packed with wildlife tours, hiking, and city exploration — all expenses covered by BOSS.",
    gradient: "from-teal-900/40 to-green-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Fall Harvest Festival",
    date: "October 2025",
    description:
      "Pumpkin carving, costume contests, and a chili cook-off brought the BOSS community together for a spooky good time.",
    gradient: "from-red-900/40 to-orange-900/40",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Past Events
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-100 sm:text-5xl">
            Memories We&apos;ve Made
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-400">
            From adrenaline-packed adventures to laid-back hangouts, BOSS brings
            Soldiers together for experiences that go beyond the barracks.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass transition-all duration-500 hover:gold-glow hover:border-gold-500/30">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-500/20">
                      {event.icon}
                    </div>
                    <span className="rounded-full bg-dark-800/80 px-3 py-1 text-xs font-medium text-dark-300">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark-100 transition-colors group-hover:text-gold-300">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark-400">
                    {event.description}
                  </p>
                </div>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-16 text-center" delay={0.3}>
          <div className="glass-gold mx-auto inline-flex flex-col items-center gap-4 rounded-2xl p-8 sm:flex-row sm:gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gold-300">
                Want to see what&apos;s coming up?
              </h3>
              <p className="text-sm text-dark-400">
                Check out our calendar for upcoming BOSS events.
              </p>
            </div>
            <a
              href="https://timetreeapp.com/public_calendars/fwaboss"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-gold-500 px-6 py-3 font-semibold text-dark-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              View Calendar
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
