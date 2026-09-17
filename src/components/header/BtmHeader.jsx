import React, { useEffect, useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
];

function BtmHeader() {

    const location = useLocation();

    const [categories, setCategories] = useState([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {

        setIsCategoryOpen(false);
        setIsNavOpen(false);

    }, [location]);

    useEffect(() => {

        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));

    }, []);

    return (

        <div className="btm_header">

            <div className="container">

                <div className="nav">

                    {/* Categories */}

                    <div className="category_nav">

                        <div
                            className="category_btn"
                            onClick={() =>
                                setIsCategoryOpen(!isCategoryOpen)
                            }
                        >

                            <IoMdMenu />

                            <p>Browse Category</p>

                            <IoMdArrowDropdown />

                        </div>

                        <div
                            className={`category_nav_list ${isCategoryOpen ? "active" : ""
                                }`}
                        >

                            {categories.map((category) => (

                                <Link
                                    key={category.slug}
                                    to={`category/${category.slug}`}
                                >
                                    {category.name}
                                </Link>

                            ))}

                        </div>

                    </div>


                    {/* Desktop Navigation */}

                    <div className="nav_links">

                        {NavLinks.map((item) => (

                            <li
                                key={item.link}
                                className={
                                    location.pathname === item.link
                                        ? "active"
                                        : ""
                                }
                            >

                                <Link to={item.link}>
                                    {item.title}
                                </Link>

                            </li>

                        ))}

                    </div>


                    {/* Mobile Navigation Button */}

                    <button
                        className="mobile_nav_btn"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >

                        <IoMdMenu />

                        <span>Menu</span>

                    </button>


                    {/* Mobile Navigation */}

                    <div
                        className={`mobile_nav_links ${isNavOpen ? "active" : ""
                            }`}
                    >

                        {NavLinks.map((item) => (

                            <Link
                                key={item.link}
                                to={item.link}
                                className={
                                    location.pathname === item.link
                                        ? "active"
                                        : ""
                                }
                            >
                                {item.title}
                            </Link>

                        ))}

                    </div>

                </div>


                {/* Login / Register */}

                <div className="sign_regs_icon">

                    <Link to="/">
                        <PiSignInBold />
                    </Link>

                    <Link to="/">
                        <FaUserPlus />
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default BtmHeader;