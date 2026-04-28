function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Sidebar</h3>
            <ul>
                <li><a href="#">Latest Posts</a></li>
                <li><a href="#">Popular Topics</a></li>
                <li><a href="#">Community Guidelines</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;

function Sidebar() {
    return (
        <aside className="sidebar">
            <section>
                <h3>About</h3>
                <p>CommunityHub is a place to share ideas and connect.</p>
            </section>
            <section>
                <h3>Popular Posts</h3>
                <ul>
                    <li>Getting Started with React</li>
                    <li>JavaScript Best Practices</li>
                </ul>
            </section>
            <section>
                <h3>Tags</h3>
                <span>#react</span> <span>#javascript</span> <span>#frontend</span>
            </section>
        </aside>
    );
}
export default Sidebar;