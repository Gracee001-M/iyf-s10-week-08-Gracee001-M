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

  function Card({ children, title }) {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

// Usage
<>
  // Usage
  <Card title="Welcome">
    <p>This is the card content!</p>
    <button>Click me</button>
  </Card><Card>
    <img src="photo.jpg" alt="Photo" />
  </Card></>

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// Usage
function App() {
    return (
        <Layout>
            <h1>Home Page</h1>
            <PostList />
        </Layout>
    );
}

function UserGreeting({ user }) {
    // Pattern 1: && operator
    return (
        <div>
            {user && <p>Welcome, {user.name}!</p>}
            {!user && <p>Please log in</p>}
        </div>
    );


    // Pattern 2: Ternary operator
    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );

    // Pattern 3: Early return
    if (!user) {
        return <p>Please log in</p>;
    }
    return <p>Welcome, {user.name}!</p>;
}

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;

import { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>The toggle is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    );
}

export default Toggle;

import { useState } from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <form>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
            />
        </form>
    );
}

export default UserForm;

function EventExamples() {
    // Inline handler
    const handleClick = () => {
        console.log('Button clicked!');
    };

    // Handler with event object
    const handleInput = (event) => {
        console.log('Input value:', event.target.value);
    };

    // Handler with custom parameter
    const handleItemClick = (itemId) => {
        console.log('Item clicked:', itemId);
    };

    return (
        <div>
            {/* Basic click */}
            <button onClick={handleClick}>Click Me</button>

            {/* With event */}
            <input onChange={handleInput} />

            {/* With parameter */}
            <button onClick={() => handleItemClick(123)}>Item 123</button>

            {/* Prevent default */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Form submitted');
                }}
            >
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;

import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    // Add item
    const addTodo = () => {
        if (!inputValue.trim()) return;

        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false }
        ]);
        setInputValue('');
    };

    // Toggle item
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    // Delete item
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

import { useState } from 'react';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", likes: 0 },
        { id: 2, title: "Second Post", likes: 0 }
    ]);

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };

    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <div>
            <Stats totalPosts={posts.length} totalLikes={totalLikes} />
            <PostList posts={posts} onLike={handleLike} />
        </div>
    );
}

function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="stats">
            <span>{totalPosts} posts</span>
            <span>{totalLikes} total likes</span>
        </div>
    );
}

function PostList({ posts, onLike }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

function PostCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>
                ❤️ {post.likes}
            </button>
        </div>
    );
}