import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function SearchBox() {

    const [searchTerm, setSearchTerm] = useState("")

    const [suggestions, setSuggestions] = useState([])

    const navigate = useNavigate()

    const location =useLocation()


    const handleSbumit = (e) => {
        e.preventDefault();
        if (searchTerm.trimEnd()) {

            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSuggestions([])

    }


    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!searchTerm.trim()) {
                setSuggestions([])
                return;
            }

            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${searchTerm}`
                )
                const data = await res.json();
                setSuggestions(data.products.slice(0, 5) || [])
            } catch (error) {
                console.error("Search Error :", error);
                setSuggestions([])
            }
        }

        const debonuce = setTimeout(() => {
            fetchSuggestions()
        }, 300)

        return () => clearTimeout(debonuce)

    }, [searchTerm])

    
    useEffect(()=>{
        setSuggestions([]);
    }, [location])



    return (
        <div className="searchBox_Container">
            <form onSubmit={handleSbumit} className="search_box">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search for products"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoComplete="off"
                />
                <button type="submit"><FaSearch /></button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((item) => (
                        <Link to={`/products/${item.id}` } >
                            <li key={item.id} > <img src={item.images[0]} alt="" /> <span>{item.title}</span></li>
                        </Link>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default SearchBox