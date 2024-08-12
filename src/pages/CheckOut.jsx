import { useSelector } from "react-redux";
import Container from "../components/Container";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';

const CheckOut = () => {
  const [user, setUser] = useState([]);
  const data = useSelector((state) => state.product.cartItem);
  const db = getDatabase();

  // Calculate total price and quantity
  const { totalprice, totalQuntity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalQuntity += item.qun;
      return acc;
    },
    { totalprice: 0, totalQuntity: 0 }
  );

  // Fetch user data from Firebase
  useEffect(() => {
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val() });
      });
      setUser(arr);
    });
  }, [db]);

  // Handle Stripe token
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    })
      .then(response => response.json())
      .then(data => {
        alert(`We are in business, ${data.email}`);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Payment failed. Please try again.');
      });
  };

  return (
    <Container>
      <div>
        <h2>Total Price: ${totalprice.toFixed(2)}</h2>
        <p>Total Quantity: {totalQuntity}</p>
        {user.map((item, index) => (
          <div key={index}>
            <h2>Name: {item.username}</h2>
            <p>Email: {item.email}</p>
          </div>
        ))}
        <StripeCheckout
          token={onToken}
          stripeKey="your_publishable_stripe_key_here"
          amount={totalprice * 100} // Amount in cents
          currency="USD"
        />
      </div>
    </Container>
  );
};

export default CheckOut;
