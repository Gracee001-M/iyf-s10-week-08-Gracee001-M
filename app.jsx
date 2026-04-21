// src/App.jsx
import React from "react";

function App() {
  const name = "Your Name"; // Change to your actual name
  const today = new Date();
  const currentDate = today.toDateString();

  // Get current hour for conditional message
  const hour = today.getHours();
  let timeMessage = "";
  if (hour < 12) {
    timeMessage = "Good morning!";
  } else if (hour < 18) {
    timeMessage = "Good afternoon!";
  } else {
    timeMessage = "Good evening!";
  }

  return (
    <div>
      <h1>Hello, I’m {name}!</h1>

      {/* Three paragraphs about yourself */}
      <p>I’m a student learning React and modern web development.</p>
      <p>I enjoy building projects that combine creativity with problem-solving.</p>
      <p>Outside coding, I love reading, exploring new ideas, and connecting with people.</p>

      {/* Display current date */}
      <p>Today’s date is: {currentDate}</p>

      {/* Conditional message based on time of day */}
      <p>{timeMessage}</p>
    </div>
  );
}

export default App;