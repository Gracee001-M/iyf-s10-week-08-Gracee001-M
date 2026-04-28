function Header() {
    return (
        <header className="header">
            <h1>CommunityHub</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
                <a href="#">About</a>
            </nav>
            <div className="user-menu">
                <button>Login</button>
            </div>
        </header>
    );
}
export default Header;