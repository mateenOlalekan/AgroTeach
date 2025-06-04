import "./App.css";
import Footer from "./component/Footer";
import Testimonial from './component/Testimonial';
import Features from "./component/Features";
import MobileApp from './component/MobileApp';
import Navbar from "./component/Navbar";
import Partners from './component/Partners';


function App() {


  return (
    <div className="min-h-screen text-gray-800 bg-slate-50">
    <Navbar/>
    <Partners/>
    <MobileApp/>
    <Features/>       
    <Testimonial/>
    <Footer/>
    </div>
  );
}


export default App;

