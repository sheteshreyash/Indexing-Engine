import React, { useEffect, useState } from "react";

type Alert = {
  type: string;
  message: string;
}

const Alert = ({ type, message }:Alert) => {

    const [show, setShow] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!show) {
      return null;
    }
  
  const alertClass =
    type === "success"
      ? "bg-green-100 text-green-800"
      : type === "warning"
      ? "bg-yellow-100 text-yellow-800"
      : type === "error"
      ? "bg-red-100 text-red-800"
      : "";

  return (
    <div className={`p-4 rounded-md ${alertClass}`}>
      <div className="flex">
        {type === "success" && (
          <svg
            className="w-5 h-5 mr-2 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {type === "warning" && (
          <svg
            className="w-5 h-5 mr-2 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v4m0 4h.01M12 17v.01"
            />
          </svg>
        )}
        {type === "error" && (
          <svg
            className="w-5 h-5 mr-2 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Alert;
