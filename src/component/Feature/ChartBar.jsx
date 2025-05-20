const ChartBar = ({ value, day, isActive }) => {
  const height = `${value}%`;
  
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-6 h-20">
        <div 
          className={`absolute bottom-0 w-full rounded-sm ${isActive ? 'bg-teal' : 'bg-gray-200'}`} 
          style={{ height }}
        ></div>
      </div>
      <span className="text-xs text-gray-500">{day}</span>
    </div>
  );
};

export default ChartBar;
