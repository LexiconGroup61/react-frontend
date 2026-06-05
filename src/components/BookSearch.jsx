import axios from "axios";
import {useEffect, useLayoutEffect, useState} from "react";
import Header from "./Header.jsx";
import shoppingCart from "./ShoppingCart.jsx";


const BookSearch = () => {

    const [search, setSearch] = useState("https://api.libris.kb.se/xsearch?query=forf:(Richard+Rorty)&format=json");
    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState({
        firstname: "Klaus",
        lastname: "Rifbjerg",
        location: {
            city: "Vienna",
            continent: "Europe"
        }
    });

    useEffect(() => {
        axios.get(search)
            .then(response => setBooks(response.data.xsearch.list))
            .catch(error => console.log(error))
    },[search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(`https://api.libris.kb.se/xsearch?query=forf:(${author.firstname}+${author.lastname})&format=json`)
    }


    return (
        <>
            <div>
                <h2>Book search</h2>
                <form className="p-3 bg-green-300" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" id="firstname" onChange={e => setAuthor({
                        ...author,
                        firstname: e.target.value
                    })} value={author.firstname}/>
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" id="lastname" onChange={e => setAuthor({
                        ...author,
                        lastname: e.target.value
                    })} value={author.lastname}/>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={e => setAuthor({
                        ...author,
                        location: {
                            ...author.location,
                            city: e.target.value
                        }
                    })} value={author.location.city}/>
                    <label htmlFor="continent">Continent:</label>
                    <input type="text" id="continent" onChange={e => setAuthor({
                        ...author,
                        location: {
                            ...author.location,
                            continent: e.target.value
                        }
                    })} value={author.location.continent}/>
                    <input className="bg-green-700 text-white p-2" type="submit" value="Change name"/>
                </form>
                {books.map(book => <p key={book.publisher}>{book.title}</p>)}
            </div>
        </>

    );
};

export default BookSearch;