import React, { useState, useEffect } from "react";
import styles from "./Greet.module.css"; // Import the CSS module

const Greet = () => {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch("http://localhost:5000/greet");
        if (response.ok) {
          const data = await response.json();
          setGreetingMessage(data.message);
          setShowNotification(true);

          setTimeout(() => setShowNotification(false), 5000);
        } else {
          console.error("Failed to fetch greeting");
        }
      } catch (error) {
        console.error("Error fetching greeting:", error);
      }
    };

    fetchGreeting();

    const intervalId = setInterval(fetchGreeting, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDismiss = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <div className={`${styles.notification} ${!showNotification ? styles.hide : ""}`}>
          <span>{greetingMessage || "Loading greeting..."}</span>
          <button className={styles.dismissButton} onClick={handleDismiss}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Greet;
