// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import VehicleCard from "../components/UI/CarTypes";
// import carData from "../assets/data/carData";
// import vehicles from "../assets/data/carData";

// const CarListing = () => {
//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Car Listing" />

//       <section>
//         <Container>
//           <Row>
//             {/* <Col lg="12">
//               <div className=" d-flex align-items-center gap-3 mb-5"> */}
//                 {/* <span className=" d-flex align-items-center gap-2">
//                   <i class="ri-sort-asc"></i> Sort By
//                 </span> */}

//                 {/* <select>
//                   <option>Select</option>
//                   <option value="low">Low to High</option>
//                   <option value="high">High to Low</option>
//                 </select> */}
//               {/* </div>
//             </Col> */}

//             {carData.map((item) => (
//               <CarItem item={item} key={item.id} />
//             ))}

//             {/* Render VehicleCard for each vehicle */}
//             {/* {vehicles.map((item) => (
//               <VehicleCard item={item} key={item.id} />
//             ))} */}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;




// import React, { useState, useEffect } from "react";
// import { Container, Row } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import axios from "axios"; // Import axios to make API calls

// const CarListing = () => {
//   const [cars, setCars] = useState([]); // State to hold car data
//   const [loading, setLoading] = useState(true);

//   // Fetch car data from backend API
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/cars/cars/'); // Change URL based on your setup
//         setCars(response.data); // Update state with car data
//         setLoading(false); // Stop loading
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) {
//     return <p>Loading cars...</p>; // Show loading state
//   }

//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Car Listing" />

//       <section>
//         <Container>
//           <Row>
//             {/* Render car items dynamically */}
//             {cars.map((item) => (
//               <CarItem item={item} key={item.car_id} />
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;



// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import CarForm from "../components/Admin/CarForm"; // Ensure this path is correct

// const CarListing = () => {
//     const [cars, setCars] = useState([]);

//     // Function to fetch car data from API
//     const fetchCars = () => {
//         axios.get('http://127.0.0.1:8000/cars/cars/')
//             .then(response => {
//                 setCars(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the car data!', error);
//             });
//     };

//     // Fetch cars when the component mounts
//     useEffect(() => {
//         fetchCars();
//     }, []);

//     return (
//         <Helmet title="Cars">
//             <CommonSection title="Car Listing" />

//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="12">
//                             <div className="d-flex align-items-center gap-3 mb-5">
//                                 {/* <CarForm refreshCars={fetchCars} /> */}
//                             </div>
//                         </Col>

//                         {/* Render CarItem components for each car */}
//                         {cars.length > 0 ? (
//                             cars.map(car => (
//                                 <CarItem item={car} key={car.id} />
//                             ))
//                         ) : (
//                             <p>No cars available</p>
//                         )}
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default CarListing;



// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import CarForm from "../pages/CarForm"; // Ensure this path is correct

// const CarListing = () => {
//     const [cars, setCars] = useState([]);

//     // Function to fetch car data from API
//     const fetchCars = () => {
//         axios.get('http://127.0.0.1:8000/api/cars/')
//             .then(response => {
//                 setCars(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the car data!', error);
//             });
//     };

//     // Fetch cars when the component mounts
//     useEffect(() => {
//         fetchCars();
//     }, []);



// const CarListing = () => {
//     const [cars, setCars] = useState([]);
//     const [error, setError] = useState(null);

//     // Function to fetch car data from API
//     const fetchCars = async () => {
//         try {
//             const token = localStorage.getItem('access'); // Retrieve token from localStorage
//             const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
//                 // headers: {
//                 //     'Authorization': `Bearer ${token}` // Include token in the request header
//                 // }
//             });
//             setCars(response.data);
//         } catch (error) {
//             console.error('There was an error fetching the car data!', error);
//             setError('There was an error fetching the car data.');
//         }
//     };

//     const userids = async () => {
//         try {
//             const token = localStorage.getItem('access'); // Retrieve token from localStorage
//             const response = await axios.get('http://127.0.0.1:8000/', {
//                 headers: {
//                     'Authorization': `Bearer ${token}` // Include token in the request header
//                 }
//             });
//             setCars(response.data);
//         } catch (error) {
//             console.error('There was an error fetching the car data!', error);
//             setError('There was an error fetching the car data.');
//         }
//     };

//     // Fetch cars when the component mounts
//     useEffect(() => {
//         fetchCars();
//     }, []);

//     return (
//         <Helmet title="Cars">
//             <CommonSection title="Car Listing" />

//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="12">
//                             <div className="d-flex align-items-center gap-3 mb-5">
//                                 {/* <CarForm refreshCars={fetchCars} /> */}
//                             </div>
//                         </Col>

//                         {/* Render CarItem components for each car */}
//                         {cars.length > 0 ? (
//                             cars.map(car => (
//                                 <CarItem item={car} key={car.id} />
//                             ))
//                         ) : (
//                             <p>No cars available</p>
//                         )}
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default CarListing;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import CarItem from '../components/UI/CarItem'; // Make sure CarItem is imported correctly
import CommonSection from '../components/UI/CommonSection'; // Assuming this is your section header component
import  Helmet  from '../components/Helmet/Helmet'; // Assuming Helmet is used for setting page title

const CarListing = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch car data from API
  const fetchCars = async () => {
    try {
      const token = localStorage.getItem('access'); // Retrieve token from localStorage
      const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in the request header
        },
      });
      setCars(response.data); // Assuming `response.data` contains the list of cars
    } catch (error) {
      console.error('There was an error fetching the car data!', error);
      setError('There was an error fetching the car data.');
    }
  };

  // Fetch cars when the component mounts
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                {/* Placeholder for CarForm (if needed in the future) */}
                {/* <CarForm refreshCars={fetchCars} /> */}
              </div>
            </Col>

            {/* Render CarItem components for each car */}
            {cars.length > 0 ? (
              cars.map((car) => (
                <Col lg="4" key={car.id}>
                  <CarItem item={car} />
                </Col>
              ))
            ) : (
              <Col lg="12">
                <p>No cars available</p>
              </Col>
            )}
          </Row>

          {/* Render error message if error exists */}
          {error && (
            <Row>
              <Col lg="12">
                <div className="alert alert-danger">{error}</div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
