const FeatureCard = ({ number, title, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
      <div className="bg-slate-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
        <div className="bg-teal-light w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 max-w-md">{description}</p>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
