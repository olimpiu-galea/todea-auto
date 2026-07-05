"use client";

import { useEffect, useState } from "react";
import { FACEBOOK_REVIEWS, FACEBOOK_REVIEWS_STATS, type FacebookReview } from "@/lib/content-data";
import { siteConfig } from "@/lib/site-config";
import styles from "./hero-facebook-reviews.module.css";

const INTERVAL_MS = 5500;
const DEFAULT_PAIRS = toPairs(FACEBOOK_REVIEWS);

function shuffle<T>(items: T[]): T[] {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function toPairs(reviews: FacebookReview[]): [FacebookReview, FacebookReview][] {
  const pairs: [FacebookReview, FacebookReview][] = [];
  for (let i = 0; i < reviews.length; i += 2) {
    if (reviews[i + 1]) {
      pairs.push([reviews[i], reviews[i + 1]]);
    }
  }
  return pairs;
}

function FacebookIcon() {
  return (
    <svg className={styles.fbIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

export default function HeroFacebookReviews() {
  const [pairs, setPairs] = useState(DEFAULT_PAIRS);
  const [pairIndex, setPairIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const shuffled = shuffle(toPairs(shuffle(FACEBOOK_REVIEWS)));
    setPairs(shuffled);
    setPairIndex(Math.floor(Math.random() * shuffled.length));
  }, []);

  useEffect(() => {
    if (paused || pairs.length <= 1) return;
    const id = window.setInterval(() => {
      setPairIndex((i) => {
        if (pairs.length <= 1) return i;
        let next = i;
        while (next === i) {
          next = Math.floor(Math.random() * pairs.length);
        }
        return next;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, pairs.length]);

  const currentPair = pairs[pairIndex] ?? pairs[0];
  const reviewsUrl = `${siteConfig.facebook}/reviews`;

  if (!currentPair) return null;

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <a
        href={reviewsUrl}
        className={styles.meta}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
        <span>
          {FACEBOOK_REVIEWS_STATS.recommend} recomandă · {FACEBOOK_REVIEWS_STATS.count} recenzii
        </span>
      </a>

      <div className={styles.grid} key={`${pairIndex}-${currentPair[0].author}`}>
        {currentPair.map((review) => (
          <a
            key={`${review.author}-${review.text.slice(0, 32)}`}
            href={reviewsUrl}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.badge}>
              <FacebookIcon />
              Recomandă
            </span>
            <strong>{review.author}</strong>
            <p>{review.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
