"use client";

import { useState, useEffect } from "react";

export default function CustomerReviewsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Collect all reviews from all products
    const allReviews = [];
    const productSlugs = [
      "cob-light-5w",
      "smd-downlight-12w",
      "pk-moon-light-12w",
      "led-bulb-18w",
      "ice-panel-moon-light-24w"
    ];

    productSlugs.forEach((slug) => {
      const stored = localStorage.getItem(`reviews_${slug}`);
      if (stored) {
        const productReviews = JSON.parse(stored);
        allReviews.push(...productReviews);
      }
    });

    // If no reviews found, use default reviews
    if (allReviews.length === 0) {
      const defaultReviews = [
        {
          id: 1,
          name: "Ahmed Khan",
          rating: 5,
          comment: "Excellent quality! The lights are very bright and energy efficient. Perfect for my living room.",
          date: "2 days ago",
          product: "COB Light 5W"
        },
        {
          id: 2,
          name: "Sara Ali",
          rating: 5,
          comment: "Amazing lighting! Worth every rupee. Highly recommended for anyone looking for quality LED lights.",
          date: "1 week ago",
          product: "SMD Downlight 12W"
        },
        {
          id: 3,
          name: "Hassan Malik",
          rating: 5,
          comment: "Best purchase I've made! The installation was easy and the light quality is outstanding.",
          date: "2 weeks ago",
          product: "PK Moon Light 12W"
        },
        {
          id: 4,
          name: "Fatima Sheikh",
          rating: 5,
          comment: "Perfect for my bedroom. The warm light creates such a cozy atmosphere. Love it!",
          date: "3 weeks ago",
          product: "LED Bulb 18W"
        },
        {
          id: 5,
          name: "Ali Raza",
          rating: 4,
          comment: "Good product, easy installation. The design is modern and fits well with my interior.",
          date: "1 month ago",
          product: "Ice Panel Moon Light 24W"
        },
        {
          id: 6,
          name: "Zainab Ahmed",
          rating: 5,
          comment: "Energy efficient and beautiful design. My electricity bill has reduced significantly!",
          date: "1 month ago",
          product: "SMD Downlight 12W"
        }
      ];
      setReviews(defaultReviews);
    } else {
      // Sort by date (newest first) and take top 6
      const sortedReviews = allReviews
        .sort((a, b) => {
          // Simple date sorting - newer reviews first
          if (a.date === "Just now") return -1;
          if (b.date === "Just now") return 1;
          return 0;
        })
        .slice(0, 6);
      setReviews(sortedReviews);
    }
  }, []);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
              Customer Reviews
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-50 md:text-2xl">
              What our customers say
            </h2>
          </div>
          {reviews.length > 0 && (
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-semibold text-emerald-300">{averageRating}</span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-sm ${
                        star <= averageRating ? "text-emerald-400" : "text-slate-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-slate-400 mt-1">({reviews.length} reviews)</span>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.length === 0 ? (
          <p className="text-sm text-slate-400 col-span-full">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-50">{review.name}</p>
                  {review.product && (
                    <p className="text-[10px] text-slate-500 mt-0.5">{review.product}</p>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-xs ${
                          star <= review.rating ? "text-emerald-400" : "text-slate-600"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 ml-2">{review.date}</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 line-clamp-3">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

