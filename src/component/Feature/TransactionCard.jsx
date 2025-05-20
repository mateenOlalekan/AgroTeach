import ChartBar from './ChartBar';
import DashboardCard from './DashboardCard';

const TransactionCard = () => {
  return (
    <DashboardCard title="Transactions">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-xs text-gray-500">Total</div>
          <div className="text-xl font-bold">$583.23</div>
        </div>
        <div className="flex gap-2">
          <button className="text-xs bg-teal text-white px-3 py-1 rounded-full">Day</button>
          <button className="text-xs text-gray-500 px-3 py-1">Week</button>
          <button className="text-xs text-gray-500 px-3 py-1">Month</button>
        </div>
      </div>
      <div className="flex justify-between items-end h-24">
        <ChartBar value={40} day="Mon" />
        <ChartBar value={60} day="Tue" />
        <ChartBar value={30} day="Wed" isActive={true} />
        <ChartBar value={70} day="Thu" />
        <ChartBar value={50} day="Fri" />
        <ChartBar value={20} day="Sat" />
        <ChartBar value={40} day="Sun" />
      </div>
    </DashboardCard>
  );
};

export default TransactionCard;
