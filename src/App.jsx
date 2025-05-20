import { useState, useEffect } from 'react';
import "./App.css";
import { 
  Search, Menu, ChevronDown, ArrowRight, CheckCircle, 
  CreditCard, Wallet, Globe, DollarSign, Bell, 
  User, BarChart3, PieChart, TrendingUp, Calendar 
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RiVisaLine } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { FaApplePay } from "react-icons/fa6";
import Footer from "./component/Footer";
import Testimonial from './component/Testimonial';
import Features from "./component/Features";
import MobileApp from './component/MobileApp';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Partners from './component/Partners';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(3742.58);
  const [currency, setCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse text-emerald-800 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 bg-slate-50">



    <Navbar/>
    <Hero/>
    <Partners/>
    <MobileApp/>
    <Features/>       
    <Testimonial/>
    <Footer/>
    </div>
  );
}


export default App;
// // import { useState } from 'react';

// // function ProductList() {
// //   const [name, setName] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [products, setProducts] = useState([
// //     { id: 1, name: 'Laptop', price: 1200 },
// //     { id: 2, name: 'Phone', price: 800 },
// //     { id: 3, name: 'Tablet', price: 600 },
// //     { id: 4, name: 'Smart Watch', price: 300 },
// //     { id: 5, name: 'Headphones', price: 150 },
// //     { id: 6, name: 'Bluetooth Speaker', price: 200 },
// //     { id: 7, name: 'Wireless Mouse', price: 50 },
// //     { id: 8, name: 'Mechanical Keyboard', price: 120 },
// //     { id: 9, name: 'Monitor', price: 400 },
// //     { id: 10, name: 'USB-C Charger', price: 40 },
// //     { id: 11, name: 'Webcam', price: 90 },
// //     { id: 12, name: 'External SSD', price: 250 },
// //     { id: 13, name: 'Gaming Chair', price: 350 },
// //     { id: 14, name: 'VR Headset', price: 700 },
// //     { id: 15, name: 'Graphics Card', price: 1500 }
// //   ]);

// //   const addProduct = () => {
// //     if (!name || !price) return alert('Please enter product name and price');

// //     const newProduct = {
// //       id: products.length + 1,
// //       name,
// //       price: Number(price)
// //     };

// //     setProducts(prevProducts => [...prevProducts, newProduct]);
// //     setName('');
// //     setPrice('');
// //   };

// //   return (
// //     <div>
// //       <h2>Product List</h2>

// //       <input
// //         type="text"
// //         placeholder="Product name"
// //         value={name}
// //         onChange={e => setName(e.target.value)}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Product price"
// //         value={price}
// //         onChange={e => setPrice(e.target.value)}
// //       />

// //       <button onClick={addProduct}>Add Product</button>

// //       <ul>
// //         {products.map(p => (
// //           <li key={p.id}>
// //             {p.name} - ${p.price}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default ProductList;

// import { useState } from "react";

// function Student() {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'John Doe', age: 16 },
//     { id: 2, name: 'Jane Smith', age: 17 }
//   ]);

//   const [people, setPeople] = useState([
//     { id: 1, name: 'John Doe', age: 16 },
//     { id: 2, name: 'Jane Smith', age: 17 },
//     { id: 3, name: 'Samuel Johnson', age: 15 },
//     { id: 4, name: 'Emily Davis', age: 16 },
//     { id: 5, name: 'Michael Brown', age: 17 },
//     { id: 6, name: 'Olivia Taylor', age: 15 },
//     { id: 7, name: 'Daniel Wilson', age: 16 },
//     { id: 8, name: 'Sophia Martinez', age: 17 },
//     { id: 9, name: 'James Anderson', age: 15 },
//     { id: 10, name: 'Isabella Thomas', age: 16 },
//     { id: 11, name: 'Ethan Harris', age: 17 },
//     { id: 12, name: 'Ava Jackson', age: 16 },
//     { id: 13, name: 'Logan White', age: 15 },
//     { id: 14, name: 'Mia Lewis', age: 17 },
//     { id: 15, name: 'Lucas Clark', age: 16 }
//   ]);

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
// const [world, setWorld] = useState([
//   { id: 1, name: 'John Doe', age: 16, region: 'USA', religion: 'Christianity', culture: 'Western' },
//   { id: 2, name: 'Fatima Yusuf', age: 17, region: 'Nigeria', religion: 'Islam', culture: 'Hausa' },
//   { id: 3, name: 'Ravi Patel', age: 15, region: 'India', religion: 'Hinduism', culture: 'Gujarati' },
//   { id: 4, name: 'Mei Lin', age: 16, region: 'China', religion: 'Atheist', culture: 'Han Chinese' },
//   { id: 5, name: 'Carlos Garcia', age: 18, region: 'Mexico', religion: 'Christianity', culture: 'Latino' },
//   { id: 6, name: 'Aisha Mohammed', age: 14, region: 'Egypt', religion: 'Islam', culture: 'Arab' },
//   { id: 7, name: 'Tomoko Sato', age: 17, region: 'Japan', religion: 'Shinto', culture: 'Japanese' },
//   { id: 8, name: 'Jean Dupont', age: 16, region: 'France', religion: 'Christianity', culture: 'French' },
//   { id: 9, name: 'Zanele Ndlovu', age: 15, region: 'South Africa', religion: 'Christianity', culture: 'Zulu' },
//   { id: 10, name: 'Santiago Alvarez', age: 18, region: 'Argentina', religion: 'Christianity', culture: 'Latino' },
//   { id: 11, name: 'Liam O\'Connor', age: 17, region: 'Ireland', religion: 'Christianity', culture: 'Irish' },
//   { id: 12, name: 'Chen Wei', age: 16, region: 'Taiwan', religion: 'Buddhism', culture: 'Hokkien' },
//   { id: 13, name: 'Leila Rahimi', age: 15, region: 'Iran', religion: 'Islam', culture: 'Persian' },
//   { id: 14, name: 'Ayan Khan', age: 14, region: 'Pakistan', religion: 'Islam', culture: 'Punjabi' },
//   { id: 15, name: 'Emily Smith', age: 17, region: 'UK', religion: 'Christianity', culture: 'British' },
//   { id: 16, name: 'Ivan Petrov', age: 18, region: 'Russia', religion: 'Orthodox', culture: 'Slavic' },
//   { id: 17, name: 'Jamal Washington', age: 16, region: 'USA', religion: 'Christianity', culture: 'African American' },
//   { id: 18, name: 'Noura Al Thani', age: 15, region: 'Qatar', religion: 'Islam', culture: 'Arab' },
//   { id: 19, name: 'Amara Okafor', age: 17, region: 'Nigeria', religion: 'Christianity', culture: 'Igbo' },
//   { id: 20, name: 'Chloe Martin', age: 16, region: 'Canada', religion: 'Christianity', culture: 'French Canadian' },
//   { id: 21, name: 'Nguyen An', age: 15, region: 'Vietnam', religion: 'Buddhism', culture: 'Vietnamese' },
//   { id: 22, name: 'Tariro Moyo', age: 16, region: 'Zimbabwe', religion: 'Christianity', culture: 'Shona' },
//   { id: 23, name: 'Ahmed Saeed', age: 18, region: 'Jordan', religion: 'Islam', culture: 'Levantine Arab' },
//   { id: 24, name: 'Davi Silva', age: 17, region: 'Brazil', religion: 'Christianity', culture: 'Brazilian' },
//   { id: 25, name: 'Svetlana Ivanova', age: 15, region: 'Ukraine', religion: 'Orthodox', culture: 'Eastern European' },
//   { id: 26, name: 'Nina Singh', age: 14, region: 'India', religion: 'Sikhism', culture: 'Punjabi' },
//   { id: 27, name: 'Josefa Santos', age: 16, region: 'Philippines', religion: 'Christianity', culture: 'Filipino' },
//   { id: 28, name: 'Abdullahi Bello', age: 17, region: 'Nigeria', religion: 'Islam', culture: 'Fulani' },
//   { id: 29, name: 'Elena Georgiou', age: 15, region: 'Greece', religion: 'Orthodox', culture: 'Greek' },
//   { id: 30, name: 'Kai Johnson', age: 16, region: 'New Zealand', religion: 'Christianity', culture: 'Maori' }
// ]);

//   const searchWorld = world.filter(indi =>
//      indi.name.toLocaleLowerCase().includes(world.toLowerCase()) ||
//      indi.religon.toLocaleLowerCase().includes(world.toLowerCase()) ||
//      indi.culture.toLocaleLowerCase().includes(world.toLowerCase()) ||
//      indi.region.toLocaleLowerCase().includes(world.toLowerCase()) 
//   )

//   const kan = people.filter(other => other.id >= 5);

//   const addStudent = () => {
//     if (!name || !age) {
//       alert("Please enter your detail");
//       return;
//     }

//     const newStudent = {
//       id: students.length + 1,
//       name,
//       age: Number(age)
//     };

//     setStudents(prev => [...prev, newStudent]);
//     setName('');
//     setAge('');
//   };

//   const deleteStudent = (id) => {
//     const filtered = students.filter(s => s.id !== id);
//     setStudents(filtered);
//   };

//   const deletePeople = (id) => {
//     const remainPeople = people.filter(f => f.id !== id);
//     setPeople(remainPeople);
//   };



//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-12 space-y-10">
//       <h2 className="text-3xl font-bold text-center text-blue-800">🎓 Student Management App</h2>

//       {/* Input Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
//         <h3 className="text-xl font-semibold text-gray-700">Add a New Student</h3>
//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <input
//             type="text"
//             placeholder="Student name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="number"
//             placeholder="Student age"
//             value={age}
//             onChange={e => setAge(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={addStudent}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-all"
//           >
//             Add Student
//           </button>
//         </div>
//       </div>

//       {/* Students List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">📋 Student List</h3>
//         <ul className="space-y-3">
//           {students.map((pupil) => (
//             <li key={pupil.id} className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition p-4 rounded-md shadow-sm">
//               <span className="text-gray-700 font-medium">
//                 <span className="text-blue-600">#{pupil.id}</span> - {pupil.name}, Age: {pupil.age}
//               </span>
//               <button
//                 onClick={() => deleteStudent(pupil.id)}
//                 className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition text-sm"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* People Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-semibold text-gray-700 mb-4">👥 People with ID ≥ 5</h3>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">{kan.length}</h3>
//         </div>

//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {kan.map((ban) => (
//             <li key={ban.id} className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 transition p-4 rounded-md shadow-sm">
//               <span className="text-blue-900 font-medium">
//                 {ban.name} (ID: {ban.id})
//               </span>
//               <button
//                 onClick={() => deletePeople(ban.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center">
//           <input type="text" className="outline-none border-2 rounded-full" value={search}/>
//                   <h3 className="text-xl font-semibold text-gray-700 mb-4">👥 People with ID ≥ 5</h3>
         
//         </div>

//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {kan.map((ban) => (
//             <li key={ban.id} className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 transition p-4 rounded-md shadow-sm">
//               <span className="text-blue-900 font-medium">
//                 {ban.name} (ID: {ban.id})
//               </span>
//               <button
//                 onClick={() => deletePeople(ban.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="mb-4">
//   <input
//     type="text"
//     value={searchTerm}
//     onChange={e => setSearchTerm(e.target.value)}
//     placeholder="Search by name, region, religion or culture..."
//     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// </div>
// <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
//   {filteredPeople.map((ban) => (
//     <div key={ban.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
//       <li className="bg-gray-100 p-2 rounded">
//         {ban.name} (ID: {ban.id}) - {ban.region}, {ban.religion}, {ban.culture}
//       </li>
//       <button
//         onClick={() => deletePeople(ban.id)}
//         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//       >
//         Delete
//       </button>
//     </div>
//   ))}
// </ul>

//     </div>
//   );
// }

// export default Student;
