import DashboardCard from './Feature/DashboardCard';
import CreditCard from './Feature/CreditCard';

const MobileApp = () => {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Get the finsy mobile app.</h2>
          <p className="text-gray-600 mb-6">
            Download the app to view and manage finances from the palm of your hands.
          </p>
          <div className="flex gap-4">
            <div className="bg-black text-white flex items-center gap-2 hover:bg-black/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M3 9h18" />
                <circle cx="17" cy="17" r="3" />
                <path d="M17 14v3h3" />
              </svg>
              App Store
            </div>
            <div  className="flex items-center gap-2 border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              Google Play
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <div className="flex flex-col gap-4">
            <DashboardCard title="Currency" className="w-56">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs rounded-full bg-blue-100 p-1">GB</span>
                    <span>GBP</span>
                  </div>
                  <div className="font-bold">$ 300.00 USD</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-red-500 h-1 w-16 rounded"></div>
                  <div className="bg-green-500 h-1 w-10 rounded"></div>
                </div>
              </div>
            </DashboardCard>
            <div className="flex items-center justify-center bg-gray-300 w-44 h-8 rounded-lg mx-auto">
              <div className="w-16 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="mt-8">
            <CreditCard />
          </div>
          <div className="flex flex-col gap-4">
            <DashboardCard title="Balance" className="w-56">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-teal rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">VISA</span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-1 rounded">•••• 7654</span>
                  </div>
                </div>
                <div className="font-bold text-xl">$35,700.40</div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
