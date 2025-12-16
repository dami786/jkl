"use client";

import { useState, useEffect } from "react";
import { useToast } from "./ToastContext";

export default function ProductReviews({ productSlug }) {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  // Load reviews from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`reviews_${productSlug}`);
    if (stored) {
      setReviews(JSON.parse(stored));
    } else {
      // Default reviews for demo
      const defaultReviews = [
        {
          id: 1,
          name: "Ahmed Khan",
          rating: 5,
          comment: "Excellent quality! The light is very bright and energy efficient. Perfect for my living room.",
          date: "2 days ago"
        },
        {
          id: 2,
          name: "Sara Ali",
          rating: 4,
          comment: "Good product, easy installation. The design is modern and fits well with my interior.",
          date: "1 week ago"
        },
        {
          id: 3,
          name: "Hassan Malik",
          rating: 5,
          comment: "Amazing lighting! Worth every rupee. Highly recommended for anyone looking for quality LED lights.",
          date: "2 weeks ago"
        }
      ];
      setReviews(defaultReviews);
      localStorage.setItem(`reviews_${productSlug}`, JSON.stringify(defaultReviews));
    }
  }, [productSlug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      showToast({
        title: "Missing details",
        message: "Please fill in your name and comment."
      });
      return;
    }

    setSubmitting(true);

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: "Just now"
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${productSlug}`, JSON.stringify(updatedReviews));

    setName("");
    setComment("");
    setRating(5);
    setSubmitting(false);

    showToast({
      title: "Review added",
      message: "Thank you for your review!"
    });
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-slate-50">Customer Reviews</h2>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-emerald-300">{averageRating}</span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= averageRating ? "text-emerald-400" : "text-slate-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-400">({reviews.length} reviews)</span>
            </div>
          )}
        </div>
      </div>

      {/* Review Form */}
      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-50">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-400">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl transition-colors ${
                    star <= rating ? "text-emerald-400" : "text-slate-600"
                  } hover:text-emerald-400`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <textarea
              rows={3}
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-sm text-slate-400">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-slate-50">{review.name}</p>
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
                <span className="text-[11px] text-slate-500">{review.date}</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}


