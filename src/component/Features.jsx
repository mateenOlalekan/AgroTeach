import FeatureCard from './Feature/FeatureCard';
import CreditCard from './Feature/CreditCard';
import TransactionCard from './Feature/TransactionCard';
import DashboardCard from './Feature/DashboardCard';

const Features = () => {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Feel the best experience<br />with our features
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <FeatureCard 
          number="1"
          title="Custom and design your card, make it unique"
          description="Choose a color and customize your credit card and customize. Choose a range of colors available."
        >
          <CreditCard />
        </FeatureCard>
        
        <FeatureCard 
          number="2"
          title="Personalized your financial habits and goals"
          description="Track your spending habits, it helps you see expenses made, the fastest spending recommendations to cut costs."
        >
          <TransactionCard />
        </FeatureCard>
        
        <FeatureCard 
          number="3"
          title="Free transfer anywhere around the world"
          description="Eliminate the hassle of banks fees, insurance fees. We provide mobile banking experience designed for daily transactions."
        >
          <DashboardCard title="Pickup Tips" className="max-w-md">
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Location</div>
                <div className="font-bold mb-2">Canada</div>
                <div className="flex items-center gap-1">
                  <img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt="Canada" className="w-5 h-3 object-cover" />
                  <span className="text-xs">CAD</span>
                </div>
              </div>
              <div className="flex items-center h-full">
                <img src="https://www.mappr.co/wp-content/uploads/2021/01/canada-1024x1024.jpg" alt="Canada map" className="h-20 w-20 object-contain" />
              </div>
            </div>
          </DashboardCard>
        </FeatureCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
        <div className="bg-teal p-6 rounded-lg text-white">
          <div className="mb-4">
            <div className="bg-teal-light rounded-full w-8 h-8 flex items-center justify-center mb-2">4</div>
            <h3 className="text-xl font-bold">Hold money in 30+ currencies</h3>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="USD" className="w-8 h-8 rounded-full object-cover" />
            <img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt="CAD" className="w-8 h-8 rounded-full object-cover" />
            <img src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg" alt="GBP" className="w-8 h-8 rounded-full object-cover" />
            <img src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg" alt="EUR" className="w-8 h-8 rounded-full object-cover" />
          </div>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg">
          <div className="mb-4">
            <div className="bg-teal-light rounded-full w-8 h-8 flex items-center justify-center mb-2 text-white">5</div>
            <h3 className="text-xl font-bold">Subscriptions you control in place</h3>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" alt="Spotify" className="h-6 w-auto mt-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YouTube" className="h-5 w-auto mt-1" />
          </div>
        </div>
        <div className="bg-teal p-6 rounded-lg text-white">
          <div className="mb-4">
            <div className="bg-teal-light rounded-full w-8 h-8 flex items-center justify-center mb-2">6</div>
            <h3 className="text-xl font-bold">Check our other product features</h3>
          </div>
          <button className="bg-secondary text-teal px-4 py-2 rounded-md font-medium mt-6 hover:bg-secondary/90">Check now</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
