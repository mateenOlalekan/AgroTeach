import { motion } from "framer-motion";

const RotatedCardsGrid = () => {
  const cards = [
    {
      id: 1,
      cardRotation: -8,
      customer: "Sarah M.",
      rating: 4,
      review: "Solid banking app. Tracks my spending well and the budgeting tools are actually useful. Occasionally slow when loading, but overall recommended.",
      avatar: "SM",
      color: "green"
    },
    {
      id: 2,
      cardRotation: -4,
      customer: "Emma R.",
      rating: 3,
      review: "Fees are too high for what you get. Interface is clean, but premium features are expensive. Might look for something cheaper.",
      avatar: "ER",
      color: "green"
    },
    {
      id: 3,
      cardRotation: 0,
      customer: "Jake T.",
      rating: 5,
      review: "Love the automatic savings feature! Helped me put aside money without thinking. Customer support was super helpful when I had questions.",
      avatar: "JT",
      color: "emerald"
    },
    {
      id: 4,
      cardRotation: 4,
      customer: "Michael K.",
      rating: 2,
      review: "Syncing with my bank account was a nightmare. Took weeks to get everything connected properly. Frustrating user experience.",
      avatar: "MK",
      color: "orange"
    },
    {
      id: 5,
      cardRotation: 8,
      customer: "Lisa W.",
      rating: 4,
      review: "Great for tracking investments. The portfolio breakdown is really clear and easy to understand. Wish they had more cryptocurrency options.",
      avatar: "LW",
      color: "pink"
    }
  ];

  const colorClasses = {
    green: "bg-green-500",
    green: "bg-green-500", 
    emerald: "bg-emerald-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500"
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What our
            <span className="block text-green-600">customers say</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 500+ verified reviews from real users who trust our platform
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.2</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-500">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ rotate: card.cardRotation, opacity: 0.8 }}
              whileHover={{ 
                rotate: 0,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-200 cursor-pointer group"
              style={{ 
                transform: `rotate(${card.cardRotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${colorClasses[card.color]} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                  {card.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{card.customer}</h3>
                  <div className="flex gap-1">
                    {renderStars(card.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 text-sm leading-relaxed">
                "{card.review}"
              </blockquote>

              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Purchase
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers</h3>
            <p className="text-green-100 mb-6 max-w-md mx-auto">
              Start your financial journey today and see why our users love us
            </p>
            <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-200">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatedCardsGrid;