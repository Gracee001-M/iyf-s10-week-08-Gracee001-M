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