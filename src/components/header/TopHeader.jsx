import React, { useContext } from "react"
import { Link } from "react-router-dom"
import logo from '../../img/logo.png'
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import './header.css'
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";




function TopHeader() {

    const { cartItems, favorites } = useContext(CartContext)


    return (

        <div className="top_header">
            <div className="container">
                <Link className="logo" to="/"><img src={logo} alt="" /> </Link>

                <SearchBox />
                <div className="header_icons">
                    <div className="icon">
                        <Link to="/favorites" >
                            <CiHeart />
                            <span className="count">{favorites.length}</span>
                        </Link>
                    </div>
                    <div className="icon">

                        <Link to="/cart" >

                            <BsCart4 />

                            <span className="count">{cartItems.length}</span>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TopHeader
