function App() {
    const name = "Grace Macharia";
    const aboutMe = [
        "I am a web development student learning React.",
        "I enjoy building projects that combine creativity and logic.",
        "My goal is to become a full-stack developer."
    ];

    const currentDate = new Date().toLocaleDateString();

    const currentHour = new Date().getHours();
    const greeting =
        currentHour < 12
            ? "Good morning!"
            : currentHour < 18
            ? "Good afternoon!"
            : "Good evening!";

    return (
        <div>
            {/* Heading with your name */}
            <h1>Hello, {name}!</h1>

            {/* Three paragraphs about yourself */}
            {aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            {/* Display current date */}
            <p>Today's date is {currentDate}</p>

            {/* Conditional message based on time of day */}
            <p>{greeting}</p>
        </div>
    );
}

export default App;

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostCard from './components/PostCard';
import Button from './components/Button';

function App() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="app">
            <Header />
            <main>
                <h2>Welcome to CommunityHub</h2>
                <Sidebar />
                <PostCard />
                <Button label="Join Now" onClick={handleClick} />
            </main>
            <Footer />
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

// Child (destructuring)
function Greeting({ name }) {
    return <h2>Hello, {name}!</h2>;
}

// Alternative (props object)
function Greeting(props) {
    return <h2>Hello, {props.name}!</h2>;
}

function PostCard({ title, excerpt, author, date }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className="post-meta">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
        </article>
    );
}

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
        { id: 1, title: "First Post", excerpt: "...", author: "Alice", date: "Jan 15" },
        { id: 2, title: "Second Post", excerpt: "...", author: "Bob", date: "Jan 14" },
        { id: 3, title: "Third Post", excerpt: "...", author: "Charlie", date: "Jan 13" }
    ];

    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard
                    key={post.id}   // unique key is critical
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}

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

// Usage
<>
  // Usage
  <Button text="Submit" variant="primary" /><Button text="Cancel" variant="secondary" /><Button text="Delete" variant="danger" /><Button /> // Uses defaults</>  // Uses defaults