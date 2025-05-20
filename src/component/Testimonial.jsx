import { motion } from "framer-motion";

const RotatedCardsGrid = () => {
  const cards = [
    {
      id: 1,
      cardRotation: -10,
      customer: "Sarah M.",
      rating: "⭐⭐⭐⭐",
      review: "Solid banking app. Tracks my spending well and the budgeting tools are actually useful. Occasionally slow when loading, but overall recommended."
    },
    {
      id: 2,
      cardRotation: -5,
      customer: "Emma R.",
      rating: "⭐⭐⭐",
      review: "Fees are too high for what you get. Interface is clean, but premium features are expensive. Might look for something cheaper."
    },
    {
      id: 3,
      cardRotation: 0,
      customer: "Jake T.",
      rating: "⭐⭐⭐⭐⭐",
      review: "Love the automatic savings feature! Helped me put aside money without thinking. Customer support was super helpful when I had questions."
    },
    {
      id: 4,
      cardRotation: 5,
      customer: "Michael K.",
      rating: "⭐⭐",
      review: "Syncing with my bank account was a nightmare. Took weeks to get everything connected properly. Frustrating user experience."
    },
    {
      id: 5,
      cardRotation: 10,
      customer: "Lisa W.",
      rating: "⭐⭐⭐⭐",
      review: "Great for tracking investments. The portfolio breakdown is really clear and easy to understand. Wish they had more cryptocurrency options."
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12">Over 500+ reviews <br></br> from our clients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ rotate: card.cardRotation }}
              whileHover={{ 
                rotate: 0,
                // backgroundColor: "#065f46", // bg-emerald-800
                // color: "white",
                scale: 0.95
              }}
              transition={{ type: "spring",  }}
              className="bg-white p-6 text-gray-800 rounded-xl shadow-lg group-hover:text-white border border-gray-200  transform origin-center"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-gray-800 font-bold">{card.customer}</h3>
                <span className="text-yellow-400 text-lg">{card.rating}</span>
              </div>
              
              <p className="text-gray-600 mb-4  cursor-pointer">
                {card.review}
              </p>
              

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatedCardsGrid;