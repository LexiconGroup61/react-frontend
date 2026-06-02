import axios from "axios";
import {useEffect, useLayoutEffect, useState} from "react";
import Header from "./Header.jsx";
import shoppingCart from "./ShoppingCart.jsx";


const BookSearch = () => {

    const [search, setSearch] = useState("https://api.libris.kb.se/xsearch?query=forf:(Richard+Rorty)&format=json");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(search)
            .then(response => setBooks(response.data.xsearch.list))
            .catch(error => console.log(error))
    },[search]);

    useLayoutEffect(() => {

    })


    return (
        <>
            <div>
                <h2>Book search</h2>
                {books.map(book => <p key={book.publisher}>{book.title}</p>)}
            </div>
        </>

    );
};

export default BookSearch;