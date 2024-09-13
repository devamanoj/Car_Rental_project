// // import React, { useState } from 'react';

// // const SlidingAuth = () => {
// //   const [isSignIn, setIsSignIn] = useState(true);

// //   // State for form data
// //   const [signUpData, setSignUpData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     address: '',
// //     phone: '',
// //   });

// //   const [signInData, setSignInData] = useState({
// //     email: '',
// //     password: '',
// //   });

// //   // State for validation errors
// //   const [errors, setErrors] = useState({
// //     signUp: {},
// //     signIn: {},
// //   });

// //   const toggleForm = () => {
// //     setIsSignIn(!isSignIn);
// //   };

// //   // Handle input changes
// //   const handleSignUpChange = (e) => {
// //     const { name, value } = e.target;
// //     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSignInChange = (e) => {
// //     const { name, value } = e.target;
// //     setSignInData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   // Validate Sign Up Form
// //   const validateSignUp = () => {
// //     const { name, email, password, address, phone } = signUpData;
// //     const newErrors = {};
// //     if (!name) newErrors.name = 'Name is required';
// //     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
// //     if (!password) newErrors.password = 'Password is required';
// //     if (!address) newErrors.address = 'Address is required';
// //     if (!phone || !/^\d+$/.test(phone)) newErrors.phone = 'Valid phone number is required';
// //     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Validate Sign In Form
// //   const validateSignIn = () => {
// //     const { email, password } = signInData;
// //     const newErrors = {};
// //     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
// //     if (!password) newErrors.password = 'Password is required';
// //     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Handle form submission
// //   const handleSignUpSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateSignUp()) {
// //       console.log('Sign Up Data:', signUpData);
// //     }
// //   };

// //   const handleSignInSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateSignIn()) {
// //       console.log('Sign In Data:', signInData);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         fontFamily: "'Montserrat', sans-serif",
// //         height: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         background: '#f6f5f7',
// //         margin: 0,
// //       }}
// //     >
// //       <div
// //         style={{
// //           backgroundColor: '#fff',
// //           borderRadius: '10px',
// //           boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
// //           position: 'relative',
// //           overflow: 'hidden',
// //           width: '768px',
// //           maxWidth: '100%',
// //           minHeight: '480px',
// //           transition: 'all 0.6s ease-in-out',
// //           display: 'flex',
// //         }}
// //         className={isSignIn ? '' : 'right-panel-active'}
// //       >
// //         {/* Sign Up Form */}
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: 0,
// //             left: 0,
// //             width: '50%',
// //             height: '100%',
// //             zIndex: isSignIn ? 1 : 2,
// //             opacity: isSignIn ? 0 : 1,
// //             pointerEvents: isSignIn ? 'none' : 'auto',
// //             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
// //             transition: 'all 0.6s ease-in-out',
// //             background: '#fff',
// //             padding: '20px',
// //           }}
// //         >
// //           <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
// //             <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
// //             <input
// //               type="text"
// //               name="name"
// //               value={signUpData.name}
// //               onChange={handleSignUpChange}
// //               placeholder="Name"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signUp.name && <p style={{ color: 'red' }}>{errors.signUp.name}</p>}
// //             <input
// //               type="email"
// //               name="email"
// //               value={signUpData.email}
// //               onChange={handleSignUpChange}
// //               placeholder="Email"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
           
// //             <input
// //               type="password"
// //               name="password"
// //               value={signUpData.password}
// //               onChange={handleSignUpChange}
// //               placeholder="Password"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
// //             <input
// //               type="text"
// //               name="address"
// //               value={signUpData.address}
// //               onChange={handleSignUpChange}
// //               placeholder="Address"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
// //             <input
// //               type="tel"
// //               name="phone"
// //               value={signUpData.phone}
// //               onChange={handleSignUpChange}
// //               placeholder="Phone Number"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signUp.phone && <p style={{ color: 'red' }}>{errors.signUp.phone}</p>}
// //             <button
// //               type="submit"
// //               style={{
// //                 borderRadius: '20px',
// //                 border: '1px solid #ff4b2b',
// //                 backgroundColor: '#ff4b2b',
// //                 color: '#ffffff',
// //                 fontSize: '12px',
// //                 fontWeight: 'bold',
// //                 padding: '12px 45px',
// //                 letterSpacing: '1px',
// //                 textTransform: 'uppercase',
// //                 transition: 'transform 80ms ease-in',
// //                 marginTop: '20px',
// //                 border: 'none', // Remove border to avoid double border effect
// //               }}
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //         </div>

// //         {/* Sign In Form */}
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: 0,
// //             left: 0,
// //             width: '50%',
// //             height: '100%',
// //             zIndex: 2,
// //             opacity: isSignIn ? 1 : 0,
// //             pointerEvents: isSignIn ? 'auto' : 'none',
// //             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
// //             transition: 'all 0.6s ease-in-out',
// //             background: '#fff',
// //             padding: '20px',
// //           }}
// //         >
// //           <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
// //             <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
// //             <input
// //               type="email"
// //               name="email"
// //               value={signInData.email}
// //               onChange={handleSignInChange}
// //               placeholder="Email"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
// //             <input
// //               type="password"
// //               name="password"
// //               value={signInData.password}
// //               onChange={handleSignInChange}
// //               placeholder="Password"
// //               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
// //             />
// //             {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
// //             <button
// //               type="submit"
// //               style={{
// //                 borderRadius: '20px',
// //                 border: '1px solid #ff4b2b',
// //                 backgroundColor: '#ff4b2b',
// //                 color: '#ffffff',
// //                 fontSize: '12px',
// //                 fontWeight: 'bold',
// //                 padding: '12px 45px',
// //                 letterSpacing: '1px',
// //                 textTransform: 'uppercase',
// //                 transition: 'transform 80ms ease-in',
// //                 marginTop: '20px',
// //                 border: 'none', // Remove border to avoid double border effect
// //               }}
// //             >
// //               Sign In
// //             </button>
// //           </form>
// //         </div>

// //         {/* Side Panels */}
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: 0,
// //             left: '50%',
// //             width: '50%',
// //             height: '100%',
// //             overflow: 'hidden',
// //             zIndex: 100,
// //             transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
// //             transition: 'transform 0.6s ease-in-out',
// //           }}
// //         >
// //           <div
// //             style={{
// //               background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
// //               backgroundRepeat: 'no-repeat',
// //               backgroundSize: 'cover',
// //               backgroundPosition: '0 0',
// //               color: '#ffffff',
// //               position: 'relative',
// //               left: '-100%',
// //               height: '100%',
// //               width: '200%',
// //               transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
// //               transition: 'transform 0.6s ease-in-out',
// //               display: 'flex',
// //               flexDirection: 'row',
// //             }}
// //           >
// //             <div
// //               style={{
// //                 position: 'absolute',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 flexDirection: 'column',
// //                 padding: '0 40px',
// //                 textAlign: 'center',
// //                 top: 0,
// //                 height: '100%',
// //                 width: '50%',
// //                 transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
// //                 transition: 'transform 0.6s ease-in-out',
// //               }}
// //             >
// //               <h1>Welcome Back!</h1>
// //               <p>To keep connected with us, please login with your personal info</p>
// //               <button
// //                 type="button"
// //                 onClick={toggleForm}
// //                 style={{
// //                   borderRadius: '20px',
// //                   border: '1px solid #ffffff',
// //                   backgroundColor: 'transparent',
// //                   color: '#ffffff',
// //                   fontSize: '12px',
// //                   fontWeight: 'bold',
// //                   padding: '12px 45px',
// //                   letterSpacing: '1px',
// //                   textTransform: 'uppercase',
// //                   transition: 'transform 80ms ease-in',
// //                 }}
// //               >
// //                 Sign In
// //               </button>
// //             </div>
// //             <div
// //               style={{
// //                 position: 'absolute',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 flexDirection: 'column',
// //                 padding: '0 40px',
// //                 textAlign: 'center',
// //                 top: 0,
// //                 height: '100%',
// //                 width: '50%',
// //                 right: 0,
// //                 transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
// //                 transition: 'transform 0.6s ease-in-out',
// //               }}
// //             >
// //               <h1>Hello, Friend!</h1>
// //               <p>Enter your details and start your journey with us</p>
// //               <button
// //                 type="button"
// //                 onClick={toggleForm}
// //                 style={{
// //                   borderRadius: '20px',
// //                   border: '1px solid #ffffff',
// //                   backgroundColor: 'transparent',
// //                   color: '#ffffff',
// //                   fontSize: '12px',
// //                   fontWeight: 'bold',
// //                   padding: '12px 45px',
// //                   letterSpacing: '1px',
// //                   textTransform: 'uppercase',
// //                   transition: 'transform 80ms ease-in',
// //                 }}
// //               >
// //                 Sign Up
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SlidingAuth;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   // State for form data
//   const [signUpData, setSignUpData] = useState({
//     username: '',  // Changed 'name' to 'username' to match Django model
//     email: '',
//     password: '',
//     address: '',
//     phone_number: '',  // Changed 'phone' to 'phone_number' to match Django model
//   });

//   const [signInData, setSignInData] = useState({
//     email: '',
//     password: '',
//   });

//   // State for validation errors
//   const [errors, setErrors] = useState({
//     signUp: {},
//     signIn: {},
//   });

//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   // Handle input changes
//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Validate Sign Up Form
//   const validateSignUp = () => {
//     const { username, email, password, address, phone_number } = signUpData;
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (!address) newErrors.address = 'Address is required';
//     if (!phone_number || !/^\d+$/.test(phone_number)) newErrors.phone_number = 'Valid phone number is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate Sign In Form
//   const validateSignIn = () => {
//     const { email, password } = signInData;
//     const newErrors = {};
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission for Sign Up
//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignUp()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/cars/users/', signUpData);
//         console.log('Sign Up Response:', response.data);
//         // Handle success (e.g., redirect to sign-in or show a success message)
//       } catch (error) {
//         console.error('Sign Up Error:', error.response.data);
//         // Handle error (e.g., show error messages)
//       }
//     }
//   };

//   // Handle form submission for Sign In
//   const handleSignInSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignIn()) {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/cars/users/', signInData);
//         console.log('Sign In Response:', response.data);
//         // Handle success (e.g., redirect to dashboard or show a success message)
      
//       navigate('/carslist'); // Redirect to CarList component
      
//       } catch (error) {
//         console.error('Sign In Error:', error.response.data);
//         // Handle error (e.g., show error messages)
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'Montserrat', sans-serif",
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: '#f6f5f7',
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: '#fff',
//           borderRadius: '10px',
//           boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
//           position: 'relative',
//           overflow: 'hidden',
//           width: '768px',
//           maxWidth: '100%',
//           minHeight: '480px',
//           transition: 'all 0.6s ease-in-out',
//           display: 'flex',
//         }}
//         className={isSignIn ? '' : 'right-panel-active'}
//       >
//         {/* Sign Up Form */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '50%',
//             height: '100%',
//             zIndex: isSignIn ? 1 : 2,
//             opacity: isSignIn ? 0 : 1,
//             pointerEvents: isSignIn ? 'none' : 'auto',
//             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
//             transition: 'all 0.6s ease-in-out',
//             background: '#fff',
//             padding: '20px',
//           }}
//         >
//           <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
//             <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
//             <input
//               type="text"
//               name="username"
//               value={signUpData.username}
//               onChange={handleSignUpChange}
//               placeholder="Username"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.username && <p style={{ color: 'red' }}>{errors.signUp.username}</p>}
//             <input
//               type="email"
//               name="email"
//               value={signUpData.email}
//               onChange={handleSignUpChange}
//               placeholder="Email"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
//             <input
//               type="password"
//               name="password"
//               value={signUpData.password}
//               onChange={handleSignUpChange}
//               placeholder="Password"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
//             <input
//               type="text"
//               name="address"
//               value={signUpData.address}
//               onChange={handleSignUpChange}
//               placeholder="Address"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
//             <input
//               type="tel"
//               name="phone_number"
//               value={signUpData.phone_number}
//               onChange={handleSignUpChange}
//               placeholder="Phone Number"
//               style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//             />
//             {errors.signUp.phone_number && <p style={{ color: 'red' }}>{errors.signUp.phone_number}</p>}
//             <button
//               type="submit"
//               style={{
//                 borderRadius: '20px',
//                 border: '1px solid #ff4b2b',
//                 backgroundColor: '#ff4b2b',
//                 color: '#ffffff',
//                 fontSize: '12px',
//                 fontWeight: 'bold',
//                 padding: '12px 45px',
//                 letterSpacing: '1px',
//                 textTransform: 'uppercase',
//                 transition: 'transform 80ms ease-in',
//                 marginTop: '20px',
//                 border: 'none', // Remove border to avoid double border effect
//               }}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '50%',
//             height: '100%',
//             zIndex: 2,
//             opacity: isSignIn ? 1 : 0,
//             pointerEvents: isSignIn ? 'auto' : 'none',
//             transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
//             transition: 'all 0.6s ease-in-out',
//             background: '#fff',
//             padding: '20px',
//           }}
//         >
//           <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
//             <h1 style={{ fontWeight : 'bold', margin: 0 }}>Sign In</h1>
//               <input
//                 type="email"
//                 name="email"
//                 value={signInData.email}
//                 onChange={handleSignInChange}
//                 placeholder="Email"
//                 style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//               />
//               {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
//               <input
//                 type="password"
//                 name="password"
//                 value={signInData.password}
//                 onChange={handleSignInChange}
//                 placeholder="Password"
//                 style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//               />
//               {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
//               <button
//                 type="submit"
//                 style={{
//                   borderRadius: '20px',
//                   border: '1px solid #ff4b2b',
//                   backgroundColor: '#ff4b2b',
//                   color: '#ffffff',
//                   fontSize: '12px',
//                   fontWeight: 'bold',
//                   padding: '12px 45px',
//                   letterSpacing: '1px',
//                   textTransform: 'uppercase',
//                   transition: 'transform 80ms ease-in',
//                   marginTop: '20px',
//                   border: 'none', // Remove border to avoid double border effect
//                 }}
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
  
//           {/* Side Panels */}
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: '50%',
//               width: '50%',
//               height: '100%',
//               overflow: 'hidden',
//               zIndex: 100,
//               transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
//               transition: 'transform 0.6s ease-in-out',
//             }}
//           >
//             <div
//               style={{
//                 background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 backgroundPosition: '0 0',
//                 color: '#ffffff',
//                 position: 'relative',
//                 left: '-100%',
//                 height: '100%',
//                 width: '200%',
//                 transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
//                 transition: 'transform 0.6s ease-in-out',
//                 display: 'flex',
//                 flexDirection: 'row',
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   flexDirection: 'column',
//                   padding: '0 40px',
//                   textAlign: 'center',
//                   top: 0,
//                   height: '100%',
//                   width: '50%',
//                   transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
//                   transition: 'transform 0.6s ease-in-out',
//                 }}
//               >
//                 <h1>Welcome Back!</h1>
//                 <p>To keep connected with us, please login with your personal info</p>
//                 <button
//                   type="button"
//                   onClick={toggleForm}
//                   style={{
//                     borderRadius: '20px',
//                     border: '1px solid #ffffff',
//                     backgroundColor: 'transparent',
//                     color: '#ffffff',
//                     fontSize: '12px',
//                     fontWeight: 'bold',
//                     padding: '12px 45px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase',
//                     transition: 'transform 80ms ease-in',
//                   }}
//                 >
//                   Sign In
//                 </button>
//               </div>
//               <div
//                 style={{
//                   position: 'absolute',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   flexDirection: 'column',
//                   padding: '0 40px',
//                   textAlign: 'center',
//                   top: 0,
//                   height: '100%',
//                   width: '50%',
//                   right: 0,
//                   transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
//                   transition: 'transform 0.6s ease-in-out',
//                 }}
//               >
//                 <h1>Hello, Friend!</h1>
//                 <p>Enter your details and start your journey with us</p>
//                 <button
//                   type="button"
//                   onClick={toggleForm}
//                   style={{
//                     borderRadius: '20px',
//                     border: '1px solid #ffffff',
//                     backgroundColor: 'transparent',
//                     color: '#ffffff',
//                     fontSize: '12px',
//                     fontWeight: 'bold',
//                     padding: '12px 45px',
//                     letterSpacing: '1px',
//                     textTransform: 'uppercase',
//                     transition: 'transform 80ms ease-in',
//                   }}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default SlidingAuth;
  



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from './authContext'; 
// // Import the auth context
// import { useNavigate, Link } from 'react-router-dom';
// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [signUpData, setSignUpData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     address: '',
//     phone_number: '',
//   });

//   const [signInData, setSignInData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     signUp: {},
//     signIn: {},
//   });

//   const { login, logout } = useAuth(); // Use authentication context
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const validateSignUp = () => {
//     const { username, email, password, address, phone_number } = signUpData;
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (!address) newErrors.address = 'Address is required';
//     if (!phone_number || !/^\d+$/.test(phone_number)) newErrors.phone_number = 'Valid phone number is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateSignIn = () => {
//     const { email, password } = signInData;
//     const newErrors = {};
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignUp()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/cars/users/', signUpData);
//         console.log('Sign Up Response:', response.data);
//         // Handle success (e.g., redirect to sign-in or show a success message)
//         setIsSignIn(true); // Switch to sign-in form after successful sign-up
//       } catch (error) {
//         console.error('Sign Up Error:', error.response.data);
//         // Handle error (e.g., show error messages)
//       }
//     }
//   };

//   const handleSignInSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignIn()) {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/cars/users/', signInData);
//         console.log('Sign In Response:', response.data);
//         navigate('/carslist'); 
//         const user = response.data;
//         login(user); // Set user in authentication context
//       } catch (error) {
//         console.error('Sign In Error:', error.response.data);
//         // Handle error (e.g., show error messages)
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'Montserrat', sans-serif",
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: '#f6f5f7',
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           width: '360px',
//           maxWidth: '100%',
//           background: '#fff',
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           padding: '20px',
//         }}
//       >
//         <h2 style={{ textAlign: 'center' }}>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
//         {isSignIn ? (
//           <form onSubmit={handleSignInSubmit}>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={signInData.email}
//                 onChange={handleSignInChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={signInData.password}
//                 onChange={handleSignInChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
//             </div>
//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 background: '#007bff',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//               }}
//             >
//               Sign In
//             </button>
//             <p style={{ textAlign: 'center', marginTop: '10px' }}>
//               Don't have an account? <button type="button" onClick={toggleForm} style={{ background: 'none', color: '#007bff', border: 'none', cursor: 'pointer' }}>Sign Up</button>
//             </p>
//           </form>
//         ) : (
//           <form onSubmit={handleSignUpSubmit}>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={signUpData.username}
//                 onChange={handleSignUpChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signUp.username && <p style={{ color: 'red' }}>{errors.signUp.username}</p>}
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={signUpData.email}
//                 onChange={handleSignUpChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={signUpData.password}
//                 onChange={handleSignUpChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={signUpData.address}
//                 onChange={handleSignUpChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
//               <input
//                 type="text"
//                 id="phone_number"
//                 name="phone_number"
//                 value={signUpData.phone_number}
//                 onChange={handleSignUpChange}
//                 style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
//               />
//               {errors.signUp.phone_number && <p style={{ color: 'red' }}>{errors.signUp.phone_number}</p>}
//             </div>
//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 background: '#007bff',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//               }}
//             >
//               Sign Up
//             </button>
//             <p style={{ textAlign: 'center', marginTop: '10px' }}>
//               Already have an account? <button type="button" onClick={toggleForm} style={{ background: 'none', color: '#007bff', border: 'none', cursor: 'pointer' }}>Sign In</button>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SlidingAuth;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   // State for form data
//   const [signUpData, setSignUpData] = useState({
//     username: '',  
//     email: '',
//     password: '',
//     address: '',
//     phone_number: '',  
//   });

//   const [signInData, setSignInData] = useState({
//     username: '',
//     password: '',
//   });

//   // State for validation errors
//   const [errors, setErrors] = useState({
//     signUp: {},
//     signIn: {},
//   });

//   const navigate = useNavigate();

//   // Toggle between Sign In and Sign Up forms
//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   // Handle input changes for Sign Up
//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle input changes for Sign In
//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Validate Sign Up Form
//   const validateSignUp = () => {
//     const { username, email, password, address, phone_number } = signUpData;
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (!address) newErrors.address = 'Address is required';
//     if (!phone_number || !/^\d+$/.test(phone_number)) newErrors.phone_number = 'Valid phone number is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate Sign In Form
//   const validateSignIn = () => {
//     const { username, password } = signInData;
//     const newErrors = {};
//     if (!username || !/\S+@\S+\.\S+/.test(username)) newErrors.username = 'Valid username is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission for Sign Up
//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignUp()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/users/', signUpData);
//         console.log('Sign Up Response:', response.data);
//         // Handle success (e.g., redirect to sign-in or show a success message)
//         toggleForm();  // Switch to Sign In form
//       } catch (error) {
//         console.error('Sign Up Error:', error.response.data);
//         // Handle error (e.g., show error messages)
//         setErrors((prevErrors) => ({ 
//           ...prevErrors, 
//           signUp: error.response.data
//         }));
//       }
//     }
//   };

//   // Handle form submission for Sign In
//   const handleSignInSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignIn()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/token/', signInData);
//         if (response.status === 200) {
          
//           const {access,refresh } = response.data; // Adjust if your API response structure is different
//           // console.log('Sign In Response:', response.data);
//           console.log('Token:', access,refresh );
//           // Store JWT token (if applicable)
//           localStorage.setItem('refresh', refresh);
//           localStorage.setItem('access', access);

//           const token = localStorage.getItem('access'); 
//           const userdetails = await axios.get('http://127.0.0.1:8000/api/users/', {
//             headers: {
//                 'Authorization': `Bearer ${token}` // Include token in the request header
//             }
//         }); 
//         console.log(userdetails)
        
        


            
//           navigate('/AdminPanel/Car-Form'); // Redirect to CarList component
//           // navigate('/Carslist'); // Redirect to CarList component
//         } else {
//           console.error('Unexpected response status:', response.status);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: 'Unexpected response from the server.' }
//           }));
//         }
//       } catch (error) {
//         if (error.response) {
//           console.error('Sign In Error:', error.response.data);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: error.response.data
//           }));
//         } else if (error.request) {
//           console.error('Sign In Error: No response received', error.request);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: 'No response received from the server.' }
//           }));
//         } else {
//           console.error('Sign In Error:', error.message);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: error.message }
//           }));
//         }
//       }
//     }
//   };



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SlidingAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // State for form data
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
  });

  const [signInData, setSignInData] = useState({
    username: '',  // Changed to username
    password: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    signUp: {},
    signIn: {},
  });

  const navigate = useNavigate();

  // Toggle between Sign In and Sign Up forms
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  // Handle input changes for Sign Up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle input changes for Sign In
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate Sign Up Form
  const validateSignUp = () => {
    const { username, email, password, address, phone_number } = signUpData;
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!address) newErrors.address = 'Address is required';
    if (!phone_number || !/^\d+$/.test(phone_number)) newErrors.phone_number = 'Valid phone number is required';
    setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  // Validate Sign In Form (now using username instead of email)
  const validateSignIn = () => {
    const { username, password } = signInData;
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';  // Validating username
    if (!password) newErrors.password = 'Password is required';
    setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission for Sign Up
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/users/', signUpData);
        console.log('Sign Up Response:', response.data);
        toggleForm();  // Switch to Sign In form
      } catch (error) {
        console.error('Sign Up Error:', error.response.data);
        setErrors((prevErrors) => ({ 
          ...prevErrors, 
          signUp: error.response.data
        }));
      }
    }
  };

  // Handle form submission for Sign In
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (validateSignIn()) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', signInData);
        if (response.status === 200) {
          const { access, refresh, user_id } = response.data;  // Adjust if your API response structure is different
          console.log('Token:', access, refresh, user_id);
          localStorage.setItem('refresh', refresh);
          localStorage.setItem('access', access);
          localStorage.setItem('user_id', user_id);

          const token = localStorage.getItem('access'); 
          const userdetails = await axios.get('http://127.0.0.1:8000/api/users/', {
            headers: {
                'Authorization': `Bearer ${token}` // Include token in the request header
            }
        }); 
        console.log(userdetails);

        navigate('/AdminPanel/Car-Form');  // Redirect to CarForm component
        } else {
          console.error('Unexpected response status:', response.status);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: 'Unexpected response from the server.' }
          }));
        }
      } catch (error) {
        if (error.response) {
          console.error('Sign In Error:', error.response.data);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: error.response.data
          }));
        } else if (error.request) {
          console.error('Sign In Error: No response received', error.request);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: 'No response received from the server.' }
          }));
        } else {
          console.error('Sign In Error:', error.message);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: error.message }
          }));
        }
      }
    }
  };
  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f6f5f7',
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
          position: 'relative',
          overflow: 'hidden',
          width: '768px',
          maxWidth: '100%',
          minHeight: '480px',
          transition: 'all 0.6s ease-in-out',
          display: 'flex',
        }}
        className={isSignIn ? '' : 'right-panel-active'}
      >
        {/* Sign Up Form */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            zIndex: isSignIn ? 1 : 2,
            opacity: isSignIn ? 0 : 1,
            pointerEvents: isSignIn ? 'none' : 'auto',
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
            background: '#fff',
            padding: '20px',
          }}
        >
          <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
            <input
              type="text"
              name="username"
              value={signUpData.username}
              onChange={handleSignUpChange}
              placeholder="Username"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.username && <p style={{ color: 'red' }}>{errors.signUp.username}</p>}
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              placeholder="Email"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              placeholder="Password"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}
            <input
              type="text"
              name="address"
              value={signUpData.address}
              onChange={handleSignUpChange}
              placeholder="Address"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.address && <p style={{ color: 'red' }}>{errors.signUp.address}</p>}
            <input
              type="tel"
              name="phone_number"
              value={signUpData.phone_number}
              onChange={handleSignUpChange}
              placeholder="Phone Number"
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            {errors.signUp.phone_number && <p style={{ color: 'red' }}>{errors.signUp.phone_number}</p>}
            <button
              type="submit"
              style={{
                borderRadius: '20px',
                border: '1px solid #ff4b2b',
                backgroundColor: '#ff4b2b',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '12px 45px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'transform 80ms ease-in',
                marginTop: '20px',
                border: 'none', // Remove border to avoid double border effect
              }}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            zIndex: 2,
            opacity: isSignIn ? 1 : 0,
            pointerEvents: isSignIn ? 'auto' : 'none',
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
            background: '#fff',
            padding: '20px',
          }}
        >
          <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight : 'bold', margin: 0 }}>Sign In</h1>
              <input
                type="text"
                name="username"
                value={signInData.username}
                onChange={handleSignInChange}
                placeholder="username"
                style={{ margin: '10px 0', padding: '10px', width: '80%' }}
              />
              {errors.signIn.email && <p style={{ color: 'red' }}>{errors.signIn.email}</p>}
              <input
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                placeholder="Password"
                style={{ margin: '10px 0', padding: '10px', width: '80%' }}
              />
              {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
              <button
                type="submit"
                style={{
                  borderRadius: '20px',
                  border: '1px solid #ff4b2b',
                  backgroundColor: '#ff4b2b',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '12px 45px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'transform 80ms ease-in',
                  marginTop: '20px',
                  border: 'none', // Remove border to avoid double border effect
                }}
              >
                Sign In
              </button>
            </form>
          </div>
  
          {/* Side Panels */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '50%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 100,
              transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.6s ease-in-out',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0 0',
                color: '#ffffff',
                position: 'relative',
                left: '-100%',
                height: '100%',
                width: '200%',
                transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
                transition: 'transform 0.6s ease-in-out',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '0 40px',
                  textAlign: 'center',
                  top: 0,
                  height: '100%',
                  width: '50%',
                  transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                <h1>Welcome Back!</h1>
                <p>To keep connected with us, please login with your personal info</p>
                <button
                  type="button"
                  onClick={toggleForm}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #ffffff',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '12px 45px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'transform 80ms ease-in',
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '0 40px',
                  textAlign: 'center',
                  top: 0,
                  height: '100%',
                  width: '50%',
                  right: 0,
                  transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                <h1>Hello, Friend!</h1>
                <p>Enter your details and start your journey with us</p>
                <button
                  type="button"
                  onClick={toggleForm}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #ffffff',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '12px 45px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'transform 80ms ease-in',
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SlidingAuth;
  
