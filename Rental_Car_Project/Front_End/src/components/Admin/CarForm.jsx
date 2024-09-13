// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/carform.css'; // Import the CSS file

// const CarForm = ({ refreshCars }) => {
//     const [formData, setFormData] = useState({
//         car_name: '',
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: 0,
//         price: 0.00,
//         img_url: '',
//         rating: 0.0,
//         brand: '',
//         is_available: true
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: newValue
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://127.0.0.1:8000/cars/cars/', formData)
//             .then(response => {
//                 alert('Car added successfully!');
//                 setFormData({
//                     car_name: '',
//                     description: '',
//                     seat_type: '',
//                     automatic: false,
//                     gps: false,
//                     speed: 0,
//                     price: 0.00,
//                     img_url: '',
//                     rating: 0.0,
//                     brand: '',
//                     is_available: true
//                 });
//                 if (refreshCars) {
//                     refreshCars(); // Refresh car listing data
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     };

//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Car Name:</label>
//                     <input
//                         type="text"
//                         name="car_name"
//                         value={formData.car_name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="form-group">
//                     <label>Seat Type:</label>
//                     <input
//                         type="text"
//                         name="seat_type"
//                         value={formData.seat_type}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Automatic:</label>
//                     <input
//                         type="checkbox"
//                         name="automatic"
//                         checked={formData.automatic}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>GPS:</label>
//                     <input
//                         type="checkbox"
//                         name="gps"
//                         checked={formData.gps}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Speed:</label>
//                     <input
//                         type="number"
//                         name="speed"
//                         value={formData.speed}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Price:</label>
//                     <input
//                         type="number"
//                         name="price"
//                         step="0.01"
//                         value={formData.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Image URL:</label>
//                     <input
//                         type="url"
//                         name="img_url"
//                         value={formData.img_url}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Rating:</label>
//                     <input
//                         type="number"
//                         name="rating"
//                         step="0.1"
//                         max="5"
//                         min="0"
//                         value={formData.rating}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Brand:</label>
//                     <input
//                         type="text"
//                         name="brand"
//                         value={formData.brand}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Available:</label>
//                     <input
//                         type="checkbox"
//                         name="is_available"
//                         checked={formData.is_available}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit">Add Car</button>
//             </form>
//         </div>
//     );
// };

// export default CarForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/carform.css';

// const CarForm = () => {
//     const [formData, setFormData] = useState({
//         car_name: '',
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: 0,
//         price: 0.00,
//         img_url: '',
//         rating: 0.0,
//         brand: '',
//         is_available: true
//     });

//     const [cars, setCars] = useState([]);
//     const [editingCar, setEditingCar] = useState(null);

//     useEffect(() => {
//         fetchCars();
//     }, []);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/cars/cars/');
//             setCars(response.data);
//             console.log('Fetched cars:', response.data); // Debugging line
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editingCar) {
//                 await axios.put(`http://127.0.0.1:8000/cars/cars/${editingCar.car_id}/`, formData);
//                 alert('Car updated successfully!');
//                 setEditingCar(null);
//             } else {
//                 await axios.post('http://127.0.0.1:8000/cars/cars/', formData);
//                 alert('Car added successfully!');
//             }
//             resetForm();
//             fetchCars();
//         } catch (error) {
//             console.error('Error submitting car data:', error);
//         }
//     };

//     const handleEdit = (car) => {
//         setEditingCar(car);
//         setFormData(car);
//     };

//     const handleDelete = async (car_id) => {
//         if (car_id === undefined) {
//             console.error('ID is undefined, cannot delete');
//             return;
//         }

//         console.log('Attempting to delete car with ID:', car_id); // Debugging line

//         if (window.confirm('Are you sure you want to delete this car?')) {
//             try {
//                 const response = await fetch(`http://127.0.0.1:8000/cars/cars/${car_id}/`, {
//                     method: 'DELETE',
//                 });

//                 if (response.ok) {
//                     alert('Car deleted successfully!');
//                     fetchCars(); // Refresh the list
//                 } else {
//                     alert('Failed to delete the car.');
//                 }
//             } catch (error) {
//                 console.error('Error deleting car:', error);
//                 alert('Error deleting car.');
//             }
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             car_name: '',
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: 0,
//             price: 0.00,
//             img_url: '',
//             rating: 0.0,
//             brand: '',
//             is_available: true
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {/* Form for Adding/Updating Car */}
//                 <div className="col-md-6">
//                     <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         {/* Form fields */}
//                         {Object.entries(formData).map(([key, value]) => {
//                             if (key === 'automatic' || key === 'gps' || key === 'is_available') {
//                                 return (
//                                     <div className="form-check" key={key}>
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             name={key}
//                                             checked={value}
//                                             onChange={handleChange}
//                                         />
//                                         <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <div className="form-group" key={key}>
//                                     <label htmlFor={key} className="form-label">
//                                         {key.replace('_', ' ').toUpperCase()}:
//                                     </label>
//                                     <input
//                                         type={typeof value === 'number' ? 'number' : 'text'}
//                                         className="form-control dark-border-input"
//                                         id={key}
//                                         name={key}
//                                         value={value}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             );
//                         })}
//                         <button type="submit" className="btn btn-primary mt-3">
//                             {editingCar ? 'Update Car' : 'Add Car'}
//                         </button>
//                         {editingCar && (
//                             <button
//                                 type="button"
//                                 className="btn btn-secondary mt-3 ml-2"
//                                 onClick={() => {
//                                     setEditingCar(null);
//                                     resetForm();
//                                 }}
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </form>
//                 </div>

//                 {/* Car Listings */}
//                 <div className="col-md-6">
//                     <h2>Car Listings</h2>
//                     <div className="row">
//                         {cars.map(car => (
//                             <div className="col-md-4 mb-3" key={car.car_id}>
//                                 <div className="card dark-card">
//                                     <img src={car.img_url} className="card-img-top" alt={car.car_name} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{car.car_name}</h5>
//                                         <p className="card-text">{car.description}</p>
//                                         <p className="card-text"><strong>Brand:</strong> {car.brand}</p>
//                                         <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
//                                         <p className="card-text"><strong>Speed:</strong> {car.speed} km/h</p>
//                                         <p className="card-text"><strong>Rating:</strong> {car.rating}</p>
//                                         <p className="card-text"><strong>Available:</strong> {car.is_available ? 'Yes' : 'No'}</p>
//                                         <p className="card-text"><strong>Features:</strong> {car.automatic ? 'Automatic' : 'Manual'}, {car.gps ? 'GPS' : 'No GPS'}</p>
//                                         <button
//                                             className="btn btn-warning mr-2"
//                                             onClick={() => handleEdit(car)}
//                                         >
//                                             Update
//                                         </button>
//                                         <button
//                                             className="btn btn-danger"
//                                             onClick={() => handleDelete(car.car_id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/carform.css'

const CarForm = () => {
    const [formData, setFormData] = useState({
        car_name: '',
        description: '',
        seat_type: '',
        automatic: false,
        gps: false,
        speed: 0,
        price: 0.00,
        img_url: '',
        rating: 0.0,
        brand: '',
        is_available: true
    });

    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/cars/');
            setCars(response.data);
            console.log('Fetched cars:', response.data); // Debugging line
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingCar) {
                await axios.put(`http://127.0.0.1:8000/api/cars/${editingCar.car_id}/`, formData);
                alert('Car updated successfully!');
                setEditingCar(null);
            } else {
                await axios.post('http://127.0.0.1:8000/api/cars/', formData);
                alert('Car added successfully!');
            }
            resetForm();
            fetchCars();
        } catch (error) {
            console.error('Error submitting car data:', error);
        }
    };

    const handleEdit = (car) => {
        setEditingCar(car);
        setFormData(car);
    };

    const handleDelete = async (car_id) => {
        if (car_id === undefined) {
            console.error('ID is undefined, cannot delete');
            return;
        }

        console.log('Attempting to delete car with ID:', car_id); // Debugging line

        if (window.confirm('Are you sure you want to delete this car?')) {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/cars/${car_id}/`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('Car deleted successfully!');
                    fetchCars(); // Refresh the list
                } else {
                    alert('Failed to delete the car.');
                }
            } catch (error) {
                console.error('Error deleting car:', error);
                alert('Error deleting car.');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            car_name: '',
            description: '',
            seat_type: '',
            automatic: false,
            gps: false,
            speed: 0,
            price: 0.00,
            img_url: '',
            rating: 0.0,
            brand: '',
            is_available: true
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Car Listings */}
                <div className="col-md-12 mb-5">
                    <h2>Car Listings</h2>
                    <div className="row">
                        {cars.map(car => (
                            <div className="col-md-4 mb-3" key={car.car_id}>
                                <div className="card dark-card">
                                    <img src={car.img_url} className="card-img-top" alt={car.car_name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{car.car_name}</h5>
                                        <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-dark mb-3"
                                                onClick={() => handleEdit(car)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn btn-darkblue "
                                                onClick={() => handleDelete(car.car_id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form for Adding/Updating Car */}
                <div className="col-md-12">
                    <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Form fields */}
                        {Object.entries(formData).map(([key, value]) => {
                            if (key === 'automatic' || key === 'gps' || key === 'is_available') {
                                return (
                                    <div className="form-check" key={key}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name={key}
                                            checked={value}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
                                    </div>
                                );
                            }
                            return (
                                <div className="form-group" key={key}>
                                    <label htmlFor={key} className="form-label">
                                        {key.replace('_', ' ').toUpperCase()}:
                                    </label>
                                    <input
                                        type={typeof value === 'number' ? 'number' : 'text'}
                                        className="form-control dark-border-input"
                                        id={key}
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            );
                        })}
                        <button type="submit" className="btn11 btn-primary mt-3">
                            {editingCar ? 'Update Car' : 'Add Car'}
                        </button>
                        {editingCar && (
                            <button
                                type="button"
                                className="btn11 btn-secondary mt-3 ml-2"
                                onClick={() => {
                                    setEditingCar(null);
                                    resetForm();
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CarForm;
