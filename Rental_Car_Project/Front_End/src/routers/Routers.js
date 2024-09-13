// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarTypes from "../pages/CarTypes";
// import CarsList from "../pages/CarsList";
// import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import SlidingAuth from "../pages/SignIn";
// import BecomeDriverForm from "../components/UI/BecomeDriverForm";
// import CarListing from "../pages/CarTypes";
// import CarForm from "../components/Admin/CarForm";
// import CarCard from "../pages/carcards";
// import Userdash from "../pages/userdashboard";
// import DriverTable from "../components/Admin/DriverTable";
// import UserTable from "../components/Admin/UserTable";
// import BookingTable from "../components/Admin/BookingTable";
// import ContactTable from "../components/Admin/ContactTable";
// import BookedCarPage from "../components/UI/BookedCarPage";
// import CancelBookingPage from "../components/UI/CancelBookingPage";
// import UserDashboard from "../pages/UserDashboard ";
// import AdminPanel from "../pages/AdminPanel";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/DriverForm" element={<BecomeDriverForm />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/cars" element={<CarListing />} />
//       <Route path="/cars/:id" element={<CarDetails />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/user" element={<Userdash />} />
//       <Route path="/blogs/:slug" element={<BlogDetails />} />
//       <Route path="/Signin" element={<SlidingAuth />} />
//       {/* Admin Panel Nested Routes */}
      
//       <Route path="/UserDashboard" element={<UserDashboard />}>
//           {/* Nested routes */}
//           <Route path="booked-car/:id" element={<BookedCarPage />} />
//           <Route path="cars-list" element={<CarsList />} />
//           <Route path="cancel-booking/:id" element={<DriverTable />} />
//         </Route>

//       <Route path="/AdminPanel" element={<AdminPanel />}>
//         <Route path="" element={<BookingTable />} />
//         <Route path="booking-table" element={<BookingTable />} />
//         <Route path="contact-table" element={<ContactTable />} />
//         <Route path="driver-table" element={<DriverTable />} />
//         <Route path="users" element={<UserTable />} />
//         <Route path="Car-Form" element={<CarForm />} />
//       </Route>

//       <Route path="/cancel-booking/:id" element={<CancelBookingPage />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Routers;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarTypes from "../pages/CarTypes";
import CarsList from "../pages/CarsList";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SlidingAuth from "../pages/SignIn";
import BecomeDriverForm from "../components/UI/BecomeDriverForm";
import CarListing from "../pages/CarTypes";
// import CarForm from "../components/Admin/CarForm";
import CarForm from "../pages/CarForm";
import CarCard from "../pages/carcards";  // Ensure the correct path and filename
// import Userdash from "../pages/UserDashboard";  // Ensure correct naming and path
import DriverTable from "../components/Admin/DriverTable";
import UserTable from "../components/Admin/UserTable";
import BookingTable from "../components/Admin/BookingTable";
import ContactTable from "../components/Admin/ContactTable";
import BookedCarPage from "../components/UI/BookedCarPage";
import CancelBookingPage from "../components/UI/CancelBookingPage";
import AdminPanel from "../pages/AdminPanel";
import UserPanel from "../pages/UserPanel";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/DriverForm" element={<BecomeDriverForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/Signin" element={<SlidingAuth />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* <Route path="carslist" element={<CarsList />} /> */}

      <Route path="/UserPanel" element={<UserPanel />}>
  <Route path="cars/:id" element={<CarDetails />} />
  <Route path="booked-car/:booking_id" element={<BookedCarPage />} />
  <Route path="carslist" element={<CarsList />} />
  <Route path="contact" element={<Contact />} />
  <Route path="cancel-booking/:id" element={<CancelBookingPage />} />
</Route>



      {/* Admin Panel Nested Routes */}
      <Route path="/AdminPanel" element={<AdminPanel />}>
        <Route path="" element={<BookingTable />} />
        <Route path="booking-table" element={<BookingTable />} />
        <Route path="contact-table" element={<ContactTable />} />
        <Route path="driver-table" element={<DriverTable />} />
        <Route path="users" element={<UserTable />} />
        <Route path="car-form" element={<CarForm />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
