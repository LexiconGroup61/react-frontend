import React from "react";

interface PostProps {
    date: string;
    author : string;
    children: React.ReactElement;
}

const BlogPost = ({date, author, children} : PostProps) => {
    return (
        <div className="blog-post">
            <p className="blog-date">{date}</p>
            {children}
            <p>{author}</p>
        </div>
    );
};

export default BlogPost;