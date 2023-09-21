import React from 'react';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// Function to show a success toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React Toastify

// Function to show a success toast notification
export const showSuccessToast = (message) => {
  toast.success(
    <div className="flex items-center">
      <span className="text-hd">{message}</span>
    </div>,
  );
};

// Function to show an error toast notification
export const showErrorToast = (message) => {
  toast.error(
    <div className="flex items-center">
      <span className="text-red-700">{message}</span>
    </div>
  );
};

