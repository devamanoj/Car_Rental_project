// import React, { useEffect, useState } from 'react';

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/cars/bookings/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setBookings(result.data || []);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) return (
//     <div style={styles.container}>
//       <div style={styles.spinner}></div>
//       <p>Loading...</p>
//     </div>
//   );

//   if (error) return (
//     <div style={styles.container}>
//       <div style={styles.alert}>
//         <strong>Error:</strong> {error}
//       </div>
//     </div>
//   );

//   if (!Array.isArray(bookings)) return <p>No bookings available.</p>;

//   return (
//     <div style={styles.container}>
//       <h2>Bookings</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.tableHeader}>
//             <th style={styles.tableCell}>Booking ID</th>
//             <th style={styles.tableCell}>User</th>
//             <th style={styles.tableCell}>Car</th>
//             <th style={styles.tableCell}>Booking Date</th>
//             <th style={styles.tableCell}>Pickup Date</th>
//             <th style={styles.tableCell}>Return Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map(booking => (
//             <tr key={booking.booking_id} style={styles.tableRow}>
//               <td style={styles.tableCell}>{booking.booking_id}</td>
//               <td style={styles.tableCell}>{booking.user}</td>
//               <td style={styles.tableCell}>{booking.car}</td>
//               <td style={styles.tableCell}>{booking.booking_date}</td>
//               <td style={styles.tableCell}>{booking.pickup_date}</td>
//               <td style={styles.tableCell}>{booking.return_date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     margin: '20px auto',
//     maxWidth: '1200px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px'
//   },
//   tableHeader: {
//     backgroundColor: '#f4f4f4',
//     fontWeight: 'bold',
//     borderBottom: '2px solid #ddd'
//   },
//   tableCell: {
//     padding: '12px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd'
//   },
//   tableRow: {
//     backgroundColor: '#fff'
//   },
//   spinner: {
//     border: '8px solid #f3f3f3', /* Light grey */
//     borderTop: '8px solid #3498db', /* Blue */
//     borderRadius: '50%',
//     width: '50px',
//     height: '50px',
//     animation: 'spin 1s linear infinite',
//     margin: 'auto'
//   },
//   alert: {
//     padding: '10px',
//     backgroundColor: '#f8d7da',
//     color: '#721c24',
//     borderRadius: '5px',
//     border: '1px solid #f5c6cb',
//     marginBottom: '20px'
//   },
//   '@keyframes spin': {
//     from: { transform: 'rotate(0deg)' },
//     to: { transform: 'rotate(360deg)' }
//   }
// };

// export default BookingTable;


import React, { useEffect, useState } from 'react';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('access');

      try {
        const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in the request header
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setBookings(result); // Assume `result` contains an array of bookings directly
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`, // Authorization header for delete
          },
        });

        if (response.ok) {
          alert('Booking deleted successfully!');
          setBookings(bookings.filter((booking) => booking.booking_id !== id));
        } else {
          const errorData = await response.json();
          console.error('Failed to delete booking:', errorData);
          alert('Failed to delete the booking.');
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
        alert('Error deleting booking.');
      }
    }
  };

  if (loading)
    return (
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div style={styles.container}>
        <div style={styles.alert}>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );

  if (!Array.isArray(bookings) || bookings.length === 0)
    return <p>No bookings available.</p>;

  return (
    <div style={styles.container}>
      <h2>Bookings</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>Booking ID</th>
            <th style={styles.tableCell}>User</th>
            <th style={styles.tableCell}>Car</th>
            <th style={styles.tableCell}>Booking Date</th>
            <th style={styles.tableCell}>Pickup Date</th>
            <th style={styles.tableCell}>Return Date</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id} style={styles.tableRow}>
              <td style={styles.tableCell}>{booking.booking_id}</td>
              <td style={styles.tableCell}>{booking.user}</td>
              <td style={styles.tableCell}>{booking.car}</td>
              <td style={styles.tableCell}>{booking.booking_date}</td>
              <td style={styles.tableCell}>{booking.pickup_date}</td>
              <td style={styles.tableCell}>{booking.return_date}</td>
              <td style={styles.tableCell}>{booking.status}</td>
              <td style={styles.tableCell}>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDeleteBooking(booking.booking_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  },
  tableHeader: {
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd'
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  tableRow: {
    backgroundColor: '#fff'
  },
  spinner: {
    border: '8px solid #f3f3f3', /* Light grey */
    borderTop: '8px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    margin: 'auto'
  },
  alert: {
    padding: '10px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: '5px',
    border: '1px solid #f5c6cb',
    marginBottom: '20px'
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer'
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
};

export default BookingTable;
