
import BlogPost from "./BlogPost.jsx";
import {useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext.jsx";




const BlogPosts = () => {

    const {date, setDate} = useContext(ProductContext);

    return (
        <BlogPost date="2026-05-12" author="Lars">
            <h2 className="blog">A Nice Evening the {date}th of June</h2>
            <p>It was Monday and I was feeling great.</p>
            <button onClick={() => setDate(date + 1)}>Increase date</button>
        </BlogPost>
    );
};

export default BlogPosts;