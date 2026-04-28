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
      <p>Today’s date is: {21/4/2026}</p>

      {/* Conditional message based on time of day */}
      <p>Day well spent so for await (const element of object) {
        
      }</p>
    </div>
  );
}

export default App;

// Parent
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

// Child
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// src/components/PostCard.jsx
function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span> | <span>{date}</span>
      </div>
    </article>
  );
}

export default PostCard;

// Usage
function PostList() {
  return (
    <div className="post-list">
      <PostCard
        title="Getting Started with React"
        excerpt="Learn the basics of React..."
        author="John Doe"
        date="Jan 15, 2026"
      />
      <PostCard
        title="JavaScript Best Practices"
        excerpt="Write cleaner code..."
        author="Jane Smith"
        date="Jan 10, 2026"
      />
    </div>
  );
}

function PostList() {
  const posts = [
    { id: 1, title: "First Post", excerpt: "Intro to React...", author: "Alice", date: "Jan 15" },
    { id: 2, title: "Second Post", excerpt: "Hooks explained...", author: "Bob", date: "Jan 14" },
    { id: 3, title: "Third Post", excerpt: "Props & State...", author: "Charlie", date: "Jan 13" }
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id} // unique key is important!
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

// src/components/Button.jsx
function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

