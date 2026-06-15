"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ShoppingCart, ClipboardList, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./ObjectionChat.css";

/**
 * Rules-based objection-intercept widget (Addendum §2, Option A).
 * Proactively surfaces the top objections (price / suitability / doubts) while
 * the visitor is on the page, with quick replies that route to the quiz or buy box.
 * Not the paid AI option (Intercom/Gorgias) — pure front-end, no backend.
 */

const SUPPORT_EMAIL = "support@delora.com";

type Action =
  | { kind: "scroll"; target: string; labelEn: string; labelBg: string; icon: "cart" | "quiz" }
  | { kind: "mail"; labelEn: string; labelBg: string; icon: "mail" };

type Topic = {
  id: string;
  chipEn: string;
  chipBg: string;
  answerEn: string;
  answerBg: string;
  actions: Action[];
};

const TOPICS: Topic[] = [
  {
    id: "price",
    chipEn: "Why €189? Isn't it expensive?",
    chipBg: "Защо €189? Скъпо ли е?",
    answerEn:
      "Because it's built like Ulike (€300+) — but it's €189.\n\nVs a salon laser (€2,000–€3,000/year):\n• 10 years of salon = €20,000–€30,000\n• Delora, one-time = €189\n• You save: €19,811–€29,811\n\nPlus Klarna: 3 × €63/month (0% interest).",
    answerBg:
      "Защото е изградена като Ulike (€300+), но е €189.\n\nСрещу салонен лазер (€2,000–€3,000/година):\n• 10 години салон = €20,000–€30,000\n• Delora еднократно = €189\n• Спестяваш: €19,811–€29,811\n\nПлюс Klarna: 3 × €63/месец (без лихва).",
    actions: [
      { kind: "scroll", target: "product-hero", labelEn: "Add to cart", labelBg: "Добави в количката", icon: "cart" },
    ],
  },
  {
    id: "suitability",
    chipEn: "Will it work for me?",
    chipBg: "Ще работи ли за мен?",
    answerEn:
      "It depends on your skin tone and hair colour.\n\n17 of 18 users with a suitable profile report visible results. Want to check yours? It takes 2 minutes.",
    answerBg:
      "Зависи от твоя тен на кожата и цвят на косата.\n\n17 от 18 потребители с подходящ профил съобщават видими резултати. Искаш ли да проверим твоя? Отнема 2 минути.",
    actions: [
      { kind: "scroll", target: "consultation", labelEn: "Start the quiz", labelBg: "Начни викторината", icon: "quiz" },
    ],
  },
  {
    id: "doubts",
    chipEn: "I have doubts",
    chipBg: "Имам съмнения",
    answerEn:
      "Here are the most common ones:\n• “Will it hurt?” — No. Sapphire cooling down to 15°C.\n• “When will I see results?” — 4–8 weeks, often by the end of week 2.\n• “What if it doesn't work?” — 90-day guarantee. No questions.",
    answerBg:
      "Ето най-честите:\n• „Ще боли ли?“ — Не. Сапфирено охлаждане до 15°C.\n• „Кога ще видя резултати?“ — 4–8 седмици, често към края на седмица 2.\n• „Какво ако не работи?“ — 90-дневна гаранция. Без въпроси.",
    actions: [
      { kind: "scroll", target: "product-hero", labelEn: "Add to cart", labelBg: "Добави в количката", icon: "cart" },
      { kind: "mail", labelEn: "Talk to us", labelBg: "Пиши ни", icon: "mail" },
    ],
  },
];

type Message = { from: "bot" | "user"; text: string; actions?: Action[] };

const ActionIcon = ({ icon }: { icon: Action["icon"] }) => {
  if (icon === "cart") return <ShoppingCart size={16} aria-hidden="true" />;
  if (icon === "quiz") return <ClipboardList size={16} aria-hidden="true" />;
  return <Mail size={16} aria-hidden="true" />;
};

const ObjectionChat = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usedTopics, setUsedTopics] = useState<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  const greeting = isEn
    ? "Hi! Questions about Delora? Pick a topic below."
    : "Здравей! Въпроси за Delora? Избери тема по-долу.";

  // Seed greeting the first time the panel opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ from: "bot", text: greeting }]);
    }
  }, [isOpen, messages.length, greeting]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const triggerTeaser = useCallback(() => {
    setShowTeaser((prev) => {
      if (dismissed || isOpen) return prev;
      return true;
    });
  }, [dismissed, isOpen]);

  // Trigger 1: after 20s on page
  useEffect(() => {
    const timer = setTimeout(triggerTeaser, 20000);
    return () => clearTimeout(timer);
  }, [triggerTeaser]);

  // Trigger 2: scroll past the price / buy box
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("product-hero");
      if (hero && hero.getBoundingClientRect().bottom < 0) triggerTeaser();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerTeaser]);

  // Trigger 3: exit intent (pointer leaves the top of the viewport)
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) triggerTeaser();
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [triggerTeaser]);

  const open = () => {
    setIsOpen(true);
    setShowTeaser(false);
  };

  const close = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  const handleTopic = (topic: Topic) => {
    setUsedTopics((prev) => [...prev, topic.id]);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: isEn ? topic.chipEn : topic.chipBg },
      { from: "bot", text: isEn ? topic.answerEn : topic.answerBg, actions: topic.actions },
    ]);
  };

  const runAction = (action: Action) => {
    if (action.kind === "mail") {
      window.location.href = `mailto:${SUPPORT_EMAIL}`;
      return;
    }
    const el = document.getElementById(action.target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const remainingTopics = TOPICS.filter((t) => !usedTopics.includes(t.id));

  return (
    <div className="objChat">
      {/* Teaser bubble */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.button
            className="objChat-teaser"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            onClick={open}
          >
            {isEn ? "Questions? We're here." : "Съмнения? Тук сме."}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="objChat-panel"
            role="dialog"
            aria-label={isEn ? "Chat with Delora" : "Чат с Delora"}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="objChat-header">
              <span className="objChat-headerTitle">Delora</span>
              <button className="objChat-close" onClick={close} aria-label={isEn ? "Close chat" : "Затвори чат"}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="objChat-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`objChat-msg objChat-msg--${m.from}`}>
                  <p className="objChat-msgText">{m.text}</p>
                  {m.actions && m.actions.length > 0 && (
                    <div className="objChat-actions">
                      {m.actions.map((a, j) => (
                        <button key={j} className="objChat-actionBtn" onClick={() => runAction(a)}>
                          <ActionIcon icon={a.icon} />
                          {isEn ? a.labelEn : a.labelBg}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {remainingTopics.length > 0 && (
              <div className="objChat-chips">
                {remainingTopics.map((t) => (
                  <button key={t.id} className="objChat-chip" onClick={() => handleTopic(t)}>
                    {isEn ? t.chipEn : t.chipBg}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <button
        className="objChat-launcher"
        onClick={() => (isOpen ? close() : open())}
        aria-label={isOpen ? (isEn ? "Close chat" : "Затвори чат") : isEn ? "Open chat" : "Отвори чат"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} aria-hidden="true" /> : <MessageCircle size={26} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default ObjectionChat;
