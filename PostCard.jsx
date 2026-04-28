function PostCard({ post, onLike, onDelete }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="post-meta">
                <span>By {post.author}</span>
                <span>{post.date}</span>
            </div>
            <button onClick={onLike}>❤️ {post.likes}</button>
            <button onClick={onDelete}>🗑 Delete</button>
        </article>
    );
}
export default PostCard;