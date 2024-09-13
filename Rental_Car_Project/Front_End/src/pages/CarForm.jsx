import React, { useState } from 'react';
import '../styles/carform.css'; // Import the CSS file

const CarForm = ({ refreshCars }) => {
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

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('access'); // Retrieve token from localStorage

        if (!token) {
            alert('User is not authenticated. Please log in.');
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the headers
                'Content-Type': 'application/json' // Set content type to JSON
            },
            body: JSON.stringify(formData)
        };

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/cars/', requestOptions);
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized. Please log in again.');
                }
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            alert('Car added successfully!');
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
            if (refreshCars) {
                refreshCars(); // Refresh car listing data
            }
        } catch (error) {
            console.error('There was an error!', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Car Name:</label>
                    <input
                        type="text"
                        name="car_name"
                        value={formData.car_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Seat Type:</label>
                    <input
                        type="text"
                        name="seat_type"
                        value={formData.seat_type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Automatic:</label>
                    <input
                        type="checkbox"
                        name="automatic"
                        checked={formData.automatic}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>GPS:</label>
                    <input
                        type="checkbox"
                        name="gps"
                        checked={formData.gps}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Speed:</label>
                    <input
                        type="number"
                        name="speed"
                        value={formData.speed}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        step="0.01"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Image URL:</label>
                    <input
                        type="url"
                        name="img_url"
                        value={formData.img_url}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        step="0.1"
                        max="5"
                        min="0"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Available:</label>
                    <input
                        type="checkbox"
                        name="is_available"
                        checked={formData.is_available}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Adding Car...' : 'Add Car'}
                </button>

                {error && <p className="error-message">Error: {error}</p>}
            </form>
        </div>
    );
};

export default CarForm;
