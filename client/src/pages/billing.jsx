import React, { useState, useEffect } from 'react';
import AuthMiddleware from './authMiddleware';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import Layout from './components/layout';
const Billing = () => {
  const { user, loading } = AuthMiddleware();
  const [billingDetails, setBillingDetails] = useState([]);
  const fetchBillingDetails = async () => {
    try {
      // Make a GET request to fetch cart data from your server
      const userId = user?.uid;
      const response = await fetch(`http://localhost:4000/billing/get?userId=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      if (response.ok) {
        // If the response is successful, parse the JSON data
        const data = await response.json();
        console.log("billing details", data.billingDetails);
        setBillingDetails(data.billingDetails);
      } else {
        // Handle errors or empty cart data
      }
    } catch (error) {
      console.error('Error fetching billing details data:', error);
    }
  };

  // Call the fetchCartData function when the component mounts

  useEffect(() => {
    if (user) fetchBillingDetails();

  }, [user]);
  return (
    <Layout>
      <div className="min-h-screen">
        <div className=''>
          <button
            className="bg-hd my-10  text-white font-medium py-2 px-4 mt-10 rounded hover:bg-act">
            <Link to="/addbilling">
              add a new billing
            </Link>
          </button>
          {billingDetails.length ===0 && <h1>no billing added yet</h1>}
          {billingDetails?.map((bill) => (
            <div className="max-w-md mx-auto p-4 bg-white border my-3 border-gray-300 rounded-lg">
              <div className="text-sm text-subhd font-semibold mb-2">Bill To:</div>
              <h2 className="text-xl opacity-70 font-semibold mb-2">{bill.billingName}</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm  text-subhd font-semibold">Country:</p>
                  <p className="text-txt opacity-70 font-semibold">{bill.billingCountry}</p>
                </div>
                <div>
                  <p className="text-sm  text-subhd font-semibold">State:</p>
                  <p className="text-txt opacity-70 font-semibold">{bill.billingState}</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm  text-subhd font-semibold">Address:</p>
                <p className="text-txt opacity-70 font-semibold">{bill.billingAddress}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-sm m text-subhd font-semibold">City:</p>
                  <p className="text-txt opacity-70 font-semibold">{bill.billingCity}</p>
                </div>
                <div>
                  <p className="text-sm  text-subhd font-semibold">Postal Code:</p>
                  <p className="text-txt opacity-70 font-semibold">{bill.billingPostalCode}</p>
                </div>
                <BsTrash className='text-hd hover:cursor-pointer' onClick={{}} />
              </div>
            </div>

          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Billing;
