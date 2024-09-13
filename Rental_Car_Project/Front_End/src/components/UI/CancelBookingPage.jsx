import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Helmet from "../Helmet/Helmet";

// const CancelBookingPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [reason, setReason] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const cancellationData = {
//       booking: id,
//       cancellation_date: new Date().toISOString().split('T')[0],
//       reason: reason
//     };
//     const token = localStorage.getItem('access');
//     axios.post('http://127.0.0.1:8000/api/cancellations/', cancellationData,{
//       headers: {
//           'Authorization': `Bearer ${token}` // Include token in the request header
//       }
//   })
//       .then(response => {
//         console.log('Booking cancelled successfully:', response.data);
//         navigate('/'); // Redirect to home or another page after successful cancellation
//       })
//       .catch(error => {
//         console.error('There was an error canceling the booking!', error);
//         setError('There was an error canceling the booking!');
//       });
//   };

const CancelBookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cancellationData = {
      booking: id,
      cancellation_date: new Date().toISOString().split('T')[0],
      reason: reason
    };

    const token = localStorage.getItem('access');

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/cancellations/${id}`, cancellationData, {
        headers: {
          'Authorization': `Bearer ${token}` // Include token in the request header
        }
      });

      console.log('Booking cancelled successfully:', response.data);
      // navigate('/'); // Redirect to home or another page after successful cancellation
      window.alert('Cancelled')
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setError('There was an error canceling the booking!');
    }
  };

  return (
    <Helmet title="Cancel Booking">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2>Cancel Booking</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="reason">Reason for Cancellation</Label>
                  <Input
                    type="textarea"
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button color="danger" type="submit">Submit Cancellation</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CancelBookingPage;
