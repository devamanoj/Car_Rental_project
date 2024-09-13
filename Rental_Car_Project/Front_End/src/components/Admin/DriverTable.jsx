// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DriverTable = () => {
//     const [drivers, setDrivers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchDrivers = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/driver/drivers/');
//                 setDrivers(response.data); // Adjust if necessary based on actual data structure
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDrivers();
//     }, []);

//     if (loading) return <p style={styles.message}>Loading...</p>;
//     if (error) return <p style={styles.message}>Error: {error.message}</p>;

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.header}>Driver List</h1>
//             <table style={styles.table}>
//                 <thead>
//                     <tr style={styles.tableHeader}>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>License</th>
//                         <th>Vehicle Model</th>
//                         <th>Vehicle Year</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {drivers.length > 0 ? (
//                         drivers.map(driver => (
//                             <tr key={driver.id} style={styles.tableRow}>
//                                 <td>{driver.name}</td>
//                                 <td>{driver.email}</td>
//                                 <td>{driver.phone}</td>
//                                 <td>{driver.license}</td>
//                                 <td>{driver.vehicle_model}</td>
//                                 <td>{driver.vehicle_year}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6" style={styles.noData}>No drivers found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         width: '80%',
//         margin: '0 auto',
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     header: {
//         textAlign: 'center',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//     },
//     tableHeader: {
//         backgroundColor: '#007bff',
//         color: '#fff',
//         textAlign: 'left',
//     },
//     tableRow: {
//         borderBottom: '1px solid #ddd',
//     },
//     message: {
//         textAlign: 'center',
//         color: '#333',
//         fontSize: '18px',
//         marginTop: '20px',
//     },
//     noData: {
//         textAlign: 'center',
//         fontStyle: 'italic',
//     },
// };

// export default DriverTable;

import React, { useState, useEffect } from 'react';

const DriverTable = () => {
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    vehicle_model: '',
    vehicle_year: '',
  });
  const [editingDriver, setEditingDriver] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/driver/drivers/');
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddDriver = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Driver added successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          license: '',
          vehicle_model: '',
          vehicle_year: '',
        });
        fetchDrivers(); // Refresh the list
      } else {
        alert('Failed to add driver.');
      }
    } catch (error) {
      console.error('Error adding driver:', error);
      alert('Error adding driver.');
    }
  };

  const handleUpdateDriver = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${editingDriver.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Driver updated successfully!');
        setEditingDriver(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          license: '',
          vehicle_model: '',
          vehicle_year: '',
        });
        fetchDrivers(); // Refresh the list
      } else {
        alert('Failed to update driver.');
      }
    } catch (error) {
      console.error('Error updating driver:', error);
      alert('Error updating driver.');
    }
  };

  const handleDeleteDriver = async (id) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${id}/`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Driver deleted successfully!');
          fetchDrivers(); // Refresh the list
        } else {
          alert('Failed to delete the driver.');
        }
      } catch (error) {
        console.error('Error deleting driver:', error);
        alert('Error deleting driver.');
      }
    }
  };

  const handleEditClick = (driver) => {
    setEditingDriver(driver);
    setFormData({
      name: driver.name,
      email: driver.email,
      phone: driver.phone,
      license: driver.license,
      vehicle_model: driver.vehicle_model,
      vehicle_year: driver.vehicle_year,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Driver List</h2>

      {/* Driver Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>License</th>
            <th>Vehicle Model</th>
            <th>Vehicle Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.phone}</td>
              <td>{driver.license}</td>
              <td>{driver.vehicle_model}</td>
              <td>{driver.vehicle_year}</td>
              <td>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDeleteDriver(driver.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditClick(driver)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for Adding/Updating Driver */}
      <div className="mt-5">
        <h3>{editingDriver ? 'Update Driver' : 'Add Driver'}</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter driver's full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter driver's email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter driver's phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="license" className="form-label">Driver's License Number</label>
            <input
              type="text"
              className="form-control"
              id="license"
              name="license"
              value={formData.license}
              onChange={handleChange}
              placeholder="Enter driver's license number"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="vehicle_model" className="form-label">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              id="vehicle_model"
              name="vehicle_model"
              value={formData.vehicle_model}
              onChange={handleChange}
              placeholder="Enter vehicle model"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="vehicle_year" className="form-label">Vehicle Year</label>
            <input
              type="number"
              className="form-control"
              id="vehicle_year"
              name="vehicle_year"
              value={formData.vehicle_year}
              onChange={handleChange}
              placeholder="Enter vehicle year"
              required
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
          >
            {editingDriver ? 'Update Driver' : 'Add Driver'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverTable;
