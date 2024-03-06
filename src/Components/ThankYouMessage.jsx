import React, { useState } from "react";

const ThankYouMessage = ({ open, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        display: open ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "green", marginRight: "5px" }}>✔</span>
          <h2 style={{ margin: 0 }}>Thank You for Your Feedback!</h2>
        </div>
        <p>
          We appreciate you taking the time to share your feedback. We will use
          it to improve our product and services.
        </p>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleButtonClick}
        >
          {isSubmitting ? "Submitting..." : "Close"}
        </button>
      </div>
    </div>
  );
};

export default ThankYouMessage;
