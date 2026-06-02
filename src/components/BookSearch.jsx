import axios from "axios";
import {useEffect, useLayoutEffect, useState} from "react";
import Header from "./Header.jsx";
import shoppingCart from "./ShoppingCart.jsx";


const BookSearch = () => {

    const [search, setSearch] = useState("https://api.libris.kb.se/xsearch?query=forf:(Richard+Rorty)&format=json");
    const [books, setBooks] = useState([]);
    const [firstname, setFirstname] = useState("Klaus");
    const [lastname, setLastname] = useState("Rifbjerg");

    useEffect(() => {
        axios.get(search)
            .then(response => setBooks(response.data.xsearch.list))
            .catch(error => console.log(error))
    },[search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setSearch(`https://api.libris.kb.se/xsearch?query=forf:(${firstname}+${lastname})&format=json`)
    }


    return (
        <>
            <div>
                <h2>Book search</h2>
                <form className="p-3 bg-green-300" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" id="firstname" onChange={e => setFirstname(e.target.value)} value={firstname}/>
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" id="lastname" onChange={e => setLastname(e.target.value)} value={lastname}/>
                    <input className="bg-green-700 text-white p-2" type="submit" value="Search"/>
                </form>
                {books.map(book => <p key={book.publisher}>{book.title}</p>)}
            </div>
        </>

    );
};

export default BookSearch;