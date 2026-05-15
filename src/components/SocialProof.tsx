"use client";

import React from "react";
import { ShieldCheck, RotateCcw, Truck, Star } from "lucide-react";
import "./SocialProof.css";

const ugcItems = [
  { user: "@maria_v", comment: "Finally painless hair removal!", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514-2.png" },
  { user: "@elena_skin", comment: "Results after 4 sessions are insane.", image: "/delora-photos/pomelli_photoshoot-1.png" },
  { user: "@beauty_daily", comment: "The cooling tech is a game changer.", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514-3.png" },
  { user: "@sofia_m", comment: "Better than salon treatments.", image: "/delora-photos/pomelli_photoshoot-2.png" },
  { user: "@nina_t", comment: "Smooth skin ready for summer!", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514.png" },
  { user: "@desi_love", comment: "Best investment this year.", image: "/delora-photos/pomelli_photoshoot-4.png" },
  { user: "@maria_v", comment: "Finally painless hair removal!", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514-2.png" },
  { user: "@elena_skin", comment: "Results after 4 sessions are insane.", image: "/delora-photos/pomelli_photoshoot-1.png" },
  { user: "@beauty_daily", comment: "The cooling tech is a game changer.", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514-3.png" },
  { user: "@sofia_m", comment: "Better than salon treatments.", image: "/delora-photos/pomelli_photoshoot-2.png" },
  { user: "@nina_t", comment: "Smooth skin ready for summer!", image: "/delora-photos/pomelli_photoshoot_image_9_16_0514.png" },
  { user: "@desi_love", comment: "Best investment this year.", image: "/delora-photos/pomelli_photoshoot-4.png" },
];

const SocialProof = () => {
  return (
    <section className="socialProofSection">
      <div className="ugcHeader">
        <span style={{ color: 'var(--color-amethyst)', fontWeight: '600', letterSpacing: '0.1em' }}>JOIN THE DELORA COMMUNITY</span>
        <h2>Loved by Real Women</h2>
      </div>

      <div className="ugcContainer">
        <div className="ugcMarquee">
          {ugcItems.map((item, index) => (
            <div key={index} className="ugcCard cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <div className="ugcCardPlaceholder" style={{ background: `url(${item.image}) center/cover` }}></div>
              <div className="ugcOverlay">
                <span className="ugcUser">{item.user}</span>
                <span className="ugcComment">{item.comment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="trustBar">
          <div className="trustBadge">
            <span className="badgeIcon"><ShieldCheck size={28} /></span>
            <span className="badgeText">FDA Cleared</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><RotateCcw size={28} /></span>
            <span className="badgeText">90-Day Guarantee</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><Truck size={28} /></span>
            <span className="badgeText">Free Express Shipping</span>
          </div>
          <div className="trustBadge">
            <span className="badgeIcon"><Star size={28} /></span>
            <span className="badgeText">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
