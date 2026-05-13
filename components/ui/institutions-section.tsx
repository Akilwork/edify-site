"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Data ─── */
interface InstitutionCard {
  id: number;
  label: string;
  tag: string;
  gradient: string;
  videoUrl: string;
  /** Rotation offset for the fan spread */
  rotate: number;
  /** Vertical offset so cards fan naturally */
  translateY: number;
}

const cards: InstitutionCard[] = [
  {
    id: 1,
    label: "Campus Life",
    tag: "Student Experience",
    gradient: "linear-gradient(160deg, #1a2a1a 0%, #0F3D2E 60%, #0a1a10 100%)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rotate: -18,
    translateY: 28,
  },
  {
    id: 2,
    label: "Academic Programs",
    tag: "Curriculum Highlights",
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rotate: -9,
    translateY: 12,
  },
  {
    id: 3,
    label: "EDIFY World",
    tag: "Our Story",
    gradient: "linear-gradient(160deg, #2a1a0a 0%, #3d2a0f 60%, #1a0f00 100%)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rotate: 0,
    translateY: 0,
  },
  {
    id: 4,
    label: "Partner Network",
    tag: "Collaborations",
    gradient: "linear-gradient(160deg, #1a0a2a 0%, #2d1b4e 60%, #0f0a1a 100%)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rotate: 9,
    translateY: 12,
  },
  {
    id: 5,
    label: "Innovation Hub",
    tag: "STEM & Robotics",
    gradient: "linear-gradient(160deg, #0a1a2a 0%, #0f2d3d 60%, #001a1a 100%)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rotate: 18,
    translateY: 28,
  },
];

/* ─── Play Icon SVG ─── */
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── Close Icon SVG ─── */
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── Phone Card ─── */
function PhoneCard({
  card,
  index,
  isCenter,
  onPlay,
  inView,
}: {
  card: InstitutionCard;
  index: number;
  isCenter: boolean;
  onPlay: (card: InstitutionCard) => void;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        /* Fan spread: center card is index 2 */
        left: "50%",
        bottom: 0,
        transformOrigin: "50% 110%",
        zIndex: isCenter ? 10 : hovered ? 9 : 5 - Math.abs(index - 2),
      }}
      /* Entry: cards rotate in from flat (0deg) to their fan angle */
      initial={{
        rotate: 0,
        translateX: "-50%",
        translateY: 80,
        opacity: 0,
        scale: 0.85,
      }}
      animate={
        inView
          ? {
              rotate: card.rotate,
              translateX: "-50%",
              translateY: card.translateY,
              opacity: 1,
              scale: isCenter ? 1 : hovered ? 0.97 : 0.93,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + index * 0.08,
      }}
      whileHover={
        inView
          ? {
              scale: isCenter ? 1.04 : 0.98,
              translateY: card.translateY - 14,
              zIndex: 20,
            }
          : {}
      }
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onPlay(card)}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${card.label}`}
      onKeyDown={(e) => e.key === "Enter" && onPlay(card)}
    >
      {/* Phone shell */}
      <div
        className="relative rounded-[2rem] overflow-hidden shadow-2xl"
        style={{
          width: 160,
          height: 280,
          background: card.gradient,
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: isCenter
            ? "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,169,106,0.25)"
            : "0 20px 48px rgba(0,0,0,0.55)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-black/40 z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 pt-8">
          {/* Top badge */}
          <div className="flex items-center gap-1.5">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(200,169,106,0.2)", border: "1px solid rgba(200,169,106,0.4)" }}
            >
              {/* EDIFY mini logo mark */}
              <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                <circle cx="5" cy="5" r="4" stroke="#C8A96A" strokeWidth="1.2" />
                <path d="M3 5h4M5 3v4" stroke="#C8A96A" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-white/70 tracking-wide">@edify</span>
          </div>

          {/* Center play button */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(200,169,106,0.15)",
                border: "2px solid rgba(200,169,106,0.5)",
                backdropFilter: "blur(8px)",
                color: "#C8A96A",
              }}
              whileHover={{ scale: 1.12, background: "rgba(200,169,106,0.3)" }}
              transition={{ duration: 0.2 }}
            >
              <PlayIcon />
            </motion.div>
          </div>

          {/* Bottom label */}
          <div>
            <p
              className="text-[9px] font-semibold tracking-widest uppercase mb-0.5"
              style={{ color: "#C8A96A" }}
            >
              {card.tag}
            </p>
            <p className="text-xs font-bold text-white leading-tight">{card.label}</p>
          </div>
        </div>

        {/* Gloss overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Video Modal ─── */
function VideoModal({
  card,
  onClose,
}: {
  card: InstitutionCard;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Video: ${card.label}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal content */}
        <motion.div
          className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: "#0a0a14", border: "1px solid rgba(200,169,106,0.2)" }}
          initial={{ scale: 0.88, opacity: 0, y: 32 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 32 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#C8A96A" }}
              >
                {card.tag}
              </p>
              <h3 className="text-white font-bold text-base mt-0.5">{card.label}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              aria-label="Close video"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Video embed */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${card.videoUrl}?autoplay=1&rel=0`}
              title={card.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Section ─── */
export function InstitutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeCard, setActiveCard] = useState<InstitutionCard | null>(null);

  return (
    <section
      ref={sectionRef}
      id="institutions"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#050510" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,169,106,0.06) 0%, rgba(15,61,46,0.08) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-6">
          <motion.span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C8A96A" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Institutions & Beyond
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            See EDIFY in Action
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          >
            Explore our partner institutions, program highlights, and the communities
            we help shape — one story at a time.
          </motion.p>
        </div>

        {/* ── Tap hint ── */}
        <motion.p
          className="text-center text-xs font-medium mb-16"
          style={{ color: "rgba(200,169,106,0.55)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Tap any card to watch
        </motion.p>

        {/* ── Card fan ── */}
        <div
          className="relative mx-auto"
          style={{ height: 340, maxWidth: 600 }}
          aria-label="Institution video cards"
        >
          {cards.map((card, index) => (
            <PhoneCard
              key={card.id}
              card={card}
              index={index}
              isCenter={index === 2}
              onPlay={setActiveCard}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
            style={{
              background: "rgba(200,169,106,0.1)",
              color: "#C8A96A",
              border: "1px solid rgba(200,169,106,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,169,106,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,169,106,0.1)";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Partner with EDIFY
          </a>
        </motion.div>
      </div>

      {/* ── Video Modal ── */}
      {activeCard && (
        <VideoModal card={activeCard} onClose={() => setActiveCard(null)} />
      )}
    </section>
  );
}
