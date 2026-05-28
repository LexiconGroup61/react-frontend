
const BlogPost = ({date, author, children}) => {
    return (
        <div className="blog-post">
            <p className="blog-date">{date}</p>
            {children}
            <p>{author}</p>
        </div>
    );
};

export default BlogPost;