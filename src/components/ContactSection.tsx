"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", unit: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Get In Touch
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark-100 sm:text-5xl">
            Connect With BOSS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-400">
            Have questions, want to join, or need to reach out? We&apos;re here
            for you.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Location Card */}
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-dark-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  Our Location
                </h3>
                <p className="text-dark-300">
                  3401 Santiago Ave, Room 333
                  <br />
                  Fort Wainwright, Alaska 99703
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-dark-700">
                  <iframe
                    title="Fort Wainwright BOSS Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1694.6!2d-147.6434!3d64.8378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDUwJzE2LjEiTiAxNDfCsDM4JzM2LjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:fortwainwrightboss@army.mil"
                  className="glass group rounded-xl p-5 transition-all hover:gold-glow hover:border-gold-500/30"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-dark-300">Email</p>
                  <p className="text-sm text-gold-400/80 transition-colors group-hover:text-gold-400">
                    fortwainwrightboss
                    <wbr />
                    @army.mil
                  </p>
                </a>
                <a
                  href="tel:9073537648"
                  className="glass group rounded-xl p-5 transition-all hover:gold-glow hover:border-gold-500/30"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                    <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-dark-300">Phone</p>
                  <p className="text-sm text-gold-400/80 transition-colors group-hover:text-gold-400">
                    (907) 353-7648
                  </p>
                </a>
              </div>

              {/* Social links */}
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 text-lg font-semibold text-dark-100">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/fortwainwrightboss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400/60 transition-all hover:bg-gold-500/20 hover:text-gold-400 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/FortWainwrightBOSS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400/60 transition-all hover:bg-gold-500/20 hover:text-gold-400 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.fwaboss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400/60 transition-all hover:bg-gold-500/20 hover:text-gold-400 hover:scale-110"
                    aria-label="Discord"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="glass rounded-2xl p-8">
              <h3 className="mb-6 text-xl font-semibold text-dark-100">
                Send Us a Message
              </h3>

              {submitted && (
                <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-dark-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-dark-700 bg-dark-800/50 px-4 py-3 text-dark-100 placeholder-dark-500 outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-dark-300"
                  >
                    Email (mil or personal)
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-dark-700 bg-dark-800/50 px-4 py-3 text-dark-100 placeholder-dark-500 outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
                    placeholder="your.email@army.mil"
                  />
                </div>
                <div>
                  <label
                    htmlFor="unit"
                    className="mb-1.5 block text-sm font-medium text-dark-300"
                  >
                    Unit (optional)
                  </label>
                  <input
                    id="unit"
                    type="text"
                    value={formData.unit}
                    onChange={(e) =>
                      setFormData({ ...formData, unit: e.target.value })
                    }
                    className="w-full rounded-lg border border-dark-700 bg-dark-800/50 px-4 py-3 text-dark-100 placeholder-dark-500 outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
                    placeholder="e.g., 1-25 SBCT"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-dark-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-dark-700 bg-dark-800/50 px-4 py-3 text-dark-100 placeholder-dark-500 outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold-500 py-3.5 font-semibold text-dark-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
