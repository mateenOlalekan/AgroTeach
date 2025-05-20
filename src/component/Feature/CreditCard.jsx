const CreditCard = () => {
  return (
    <div className="w-full max-w-xs bg-gradient-to-b from-teal to-teal-light text-white p-5 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs">DEBIT CARD</div>
        <div className="bg-yellow-500 h-6 w-10 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <span className="text-xs opacity-80">Balance</span>
        <span className="text-2xl font-bold">$2,617.14</span>
        <span className="text-sm text-green-300">+$204.35</span>
      </div>
      <div className="flex justify-between text-xs opacity-80 mb-1">
        <span>**** **** **** 3456</span>
        <span>12/22</span>
      </div>
    </div>
  );
};

export default CreditCard;
