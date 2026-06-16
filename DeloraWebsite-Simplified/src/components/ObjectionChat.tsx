"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ShoppingCart, ClipboardList, Mail } from "lucide-react";
import "./ObjectionChat.css";

/**
 * Rules-based objection-intercept widget. Proactively surfaces the top
 * objections (price / suitability / doubts) with quick replies that route to
 * the quiz or buy box. Pure front-end, no backend.
 */

const SUPPORT_EMAIL = "support@delora.com";

type Action =
  | { kind: "scroll"; target: string; label: string; icon: "cart" | "quiz" }
  | { kind: "mail"; label: string; icon: "mail" };

type Topic = {
  id: string;
  chip: string;
  answer: string;
  actions: Action[];
};

const TOPICS: Topic[] = [
  {
    id: "price",
    chip: "Защо €189? Скъпо ли е?",
    answer:
      "Защото е изградена като Ulike (€300+), но е €189.\n\nСрещу салонен лазер (€2,000–€3,000/година):\n• 10 години салон = €20,000–€30,000\n• Delora еднократно = €189\n• Спестяваш: €19,811–€29,811\n\nПлюс Klarna: 3 × €63/месец (без лихва).",
    actions: [
      { kind: "scroll", target: "product-hero", label: "Добави в количката", icon: "cart" },
    ],
  },
  {
    id: "suitability",
    chip: "Ще работи ли за мен?",
    answer:
      "Зависи от твоя тен на кожата и цвят на косата.\n\n17 от 18 потребители с подходящ профил съобщават видими резултати. Искаш ли да проверим твоя? Отнема 2 минути.",
    actions: [
      { kind: "scroll", target: "consultation", label: "Начни викторината", icon: "quiz" },
    ],
  },
  {
    id: "doubts",
    chip: "Имам съмнения",
    answer:
      "Ето най-честите:\n• „Ще боли ли?“ — Не. Сапфирено охлаждане до 15°C.\n• „Кога ще видя резултати?“ — 4–8 седмици, често към края на седмица 2.\n• „Какво ако не работи?“ — 90-дневна гаранция. Без въпроси.",
    actions: [
      { kind: "scroll", target: "product-hero", label: "Добави в количката", icon: "cart" },
      { kind: "mail", label: "Пиши ни", icon: "mail" },
    ],
  },
];

type Message = { from: "bot" | "user"; text: string; actions?: Action[] };

const ActionIcon = ({ icon }: { icon: Action["icon"] }) => {
  if (icon === "cart") return <ShoppingCart size={16} aria-hidden="true" />;
  if (icon === "quiz") return <ClipboardList size={16} aria-hidden="true" />;
  return <Mail size={16} aria-hidden="true" />;
};

const GREETING = "Здравей! Въпроси за Delora? Избери тема по-долу.";

const ObjectionChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usedTopics, setUsedTopics] = useState<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Seed greeting the first time the panel opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [isOpen, messages.length]);

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
      { from: "user", text: topic.chip },
      { from: "bot", text: topic.answer, actions: topic.actions },
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
            Съмнения? Тук сме.
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="objChat-panel"
            role="dialog"
            aria-label="Чат с Delora"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="objChat-header">
              <span className="objChat-headerTitle">Delora</span>
              <button className="objChat-close" onClick={close} aria-label="Затвори чат">
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
                          {a.label}
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
                    {t.chip}
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
        aria-label={isOpen ? "Затвори чат" : "Отвори чат"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} aria-hidden="true" /> : <MessageCircle size={26} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default ObjectionChat;
