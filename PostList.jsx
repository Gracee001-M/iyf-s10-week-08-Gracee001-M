function PostList({ posts, onLike, onDelete }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                    onDelete={() => onDelete(post.id)}
                />
            ))}
        </div>
    );
}
export default PostList;